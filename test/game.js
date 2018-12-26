const assert = require('assert');
const sinon = require('sinon');
const crypto = require('crypto');
const game = require('../game.js');

function Socket(playerID) {
  this.id = playerID;
  this.request = {
    headers: {}
  }
}
Socket.prototype.on = function () {
  return this;
};
Socket.prototype.join = function () {
  return this;
};
Socket.prototype.leave = function () {
  return this;
};
Socket.prototype.send = function () {
  return this;
};
Socket.prototype.to = function () {
  return this;
};
Socket.prototype.broadcast = function () {
  return this;
};
function IO() {
}
IO.prototype.send = function () {
  return this;
};
IO.prototype.to = function () {
  return this;
};

describe('Game methods', function () {
  describe('#assignCSRFToken', function () {
    let gameExemplar = game({io: new IO()});
    let playerID = 'playerID';
    let socket = new Socket(playerID);
    gameExemplar.assignCSRFToken(socket);
    it('should create ${playerID} token in .playerTokens', function () {
      assert(Object.prototype.hasOwnProperty.call(gameExemplar.playerTokens, playerID));
    });
  });
  describe('#deleteCSRFToken', function () {
    let gameExemplar = game({io: new IO()});
    let playerID = 'playerID';
    let socket = new Socket(playerID);
    gameExemplar.assignCSRFToken(socket);
    it('should delete ${playerID} token from .playerTokens', function () {
      assert(Object.prototype.hasOwnProperty.call(gameExemplar.playerTokens, playerID));
      gameExemplar.deleteCSRFToken(socket);
      assert(!Object.prototype.hasOwnProperty.call(gameExemplar.playerTokens, playerID));
    });
  });
  describe('#handleGameSocket()', function () {
    let gameExemplar = null;
    let socket = null;
    beforeEach(function () {
      gameExemplar = game({io: new IO()});
      socket = new Socket('socketID');
      sinon.spy(gameExemplar, 'updatePlayerIdUponReconnect');
      sinon.spy(gameExemplar, 'initializeRoom');
      sinon.spy(gameExemplar, 'appendPlayerToRoom');
      sinon.spy(gameExemplar, 'getRoomForPlayerID');
      sinon.spy(gameExemplar, 'beginGameForRoom');
    });
    it('should crete new room with ID of "0" and append player to it', function () {
      gameExemplar.handleGameSocket(socket);
      assert(Object.prototype.hasOwnProperty.call(gameExemplar.rooms, gameExemplar.lastRoom));
      assert(Object.prototype.hasOwnProperty.call(gameExemplar.rooms[gameExemplar.lastRoom], socket.id));
      assert(gameExemplar.initializeRoom.calledOnce);
    });
    it('should append player to existing room', function () {
      gameExemplar.handleGameSocket(socket);
      assert(Object.prototype.hasOwnProperty.call(gameExemplar.rooms[gameExemplar.lastRoom], socket.id));
      socket = new Socket('socketID2');
      gameExemplar.handleGameSocket(socket);
      assert(Object.prototype.hasOwnProperty.call(gameExemplar.rooms[gameExemplar.lastRoom], socket.id));
      assert(gameExemplar.initializeRoom.calledOnce);
      assert(gameExemplar.appendPlayerToRoom.calledOnce);
    });
    it('should replace old players ID with new one if "io" token found', function () {
      const oldID = socket.id;
      gameExemplar.handleGameSocket(socket);
      socket = new Socket('socketID2');
      socket.request.headers.cookie = `io=${oldID}`;
      gameExemplar.handleGameSocket(socket);
      assert(!Object.prototype.hasOwnProperty.call(gameExemplar.rooms[gameExemplar.lastRoom], oldID));
      assert(Object.prototype.hasOwnProperty.call(gameExemplar.rooms[gameExemplar.lastRoom], socket.id));
      assert(gameExemplar.initializeRoom.calledOnce);
      assert(gameExemplar.updatePlayerIdUponReconnect.calledOnce);
    });
    it('should create and initialize new room for more than 6 players, and generate data for old one', function () {
      for (let i = 0; i < (gameExemplar.roomSize + 1); i += 1) {
        socket = new Socket('newSocketID' + i);
        gameExemplar.handleGameSocket(socket);
      }
      assert(Object.prototype.hasOwnProperty.call(gameExemplar.rooms, '0'));
      assert(Object.prototype.hasOwnProperty.call(gameExemplar.rooms, '1'));
      assert.strictEqual(gameExemplar.rooms['0'].players.length, gameExemplar.roomSize);
      assert.strictEqual(gameExemplar.rooms['0'].playersOrder.length, gameExemplar.roomSize);
      let i = 0;
      for (; i < gameExemplar.roomSize; i += 1) {
        const playerID = 'newSocketID' + i;
        assert(Object.prototype.hasOwnProperty.call(gameExemplar.rooms['0'], playerID));
      }
      assert.strictEqual(gameExemplar.rooms['1'].players.length, 1);
      assert(Object.prototype.hasOwnProperty.call(gameExemplar.rooms['1'], 'newSocketID' + i));
      assert.strictEqual(gameExemplar.initializeRoom.callCount, 2);
      assert.strictEqual(gameExemplar.appendPlayerToRoom.callCount, gameExemplar.roomSize - 1);
      assert(gameExemplar.beginGameForRoom.calledOnce);
    });
  });
  describe('#getNewDeck()', function () {
    const gameExemplar = game({io: new IO()});
    let deck = gameExemplar.getNewDeck();
    it('should return array of 54 cards with no repeats', function () {
      let length = deck.length;
      assert.strictEqual(deck.length, 54);
      deck.forEach((card1, i) => {
        deck.forEach((card2, j) => {
          if (i !== j) {
            assert.notStrictEqual(card1, card2);
          }
        });
      });
    });
  });
  describe('#getShuffledDeck()', function () {
    const gameExemplar = game({io: new IO()});
    const deckToChange = gameExemplar.getNewDeck();
    const shuffledDeck = gameExemplar.getShuffledDeck(deckToChange);
    it('should have same cards as before', function () {
      deckToChange.forEach((card) => {
        assert.notStrictEqual(shuffledDeck.indexOf(card), -1);
      });
    });
  });
  describe('#penalty()', function () {
    const gameExemplar = game({io: new IO()});
    const dropPenalty = 40;
    const disconnectPenalty = 40;
    const playerID = 'testID';
    gameExemplar.handleGameSocket(new Socket(playerID));
    it ('should return value of penalty', function () {
      assert.strictEqual(gameExemplar.penalty('disconnect', playerID), disconnectPenalty);
      gameExemplar.rooms['0'].round = 4;
      assert.strictEqual(gameExemplar.penalty('drop', playerID), dropPenalty);
    });
  });
  describe('#getRandomCardFromDeck()', function () {
    const gameExemplar = game({io: new IO()});
    const deck = gameExemplar.getNewDeck();
    it('should return false for empty array', function () {
      assert(!gameExemplar.getRandomCardFromDeck([]));
    });
    it('should return false for anything other than array', function () {
      assert(!gameExemplar.getRandomCardFromDeck('string'));
      assert(!gameExemplar.getRandomCardFromDeck({}));
      assert(!gameExemplar.getRandomCardFromDeck(10));
    });
    it('should return card from deck', function () {
      let card = gameExemplar.getRandomCardFromDeck(deck);
      assert.strictEqual(typeof card, 'string');
    });
  });
  describe('#getRoomForPlayerID()', function () {
    const gameExemplar = game({io: new IO()});
    const roomID = '0';
    let socket = new Socket('testID1');
    gameExemplar.handleGameSocket(socket);
    it('should return false if player not found', function () {
      assert(!gameExemplar.getRoomForPlayerID('falseID'));
    });
    it('should return roomID for found playerID', function () {
      assert.strictEqual(gameExemplar.getRoomForPlayerID(socket.id), roomID);
    });
  });
  describe('#initializeRoom()', function () {
    let gameExemplar = null;
    let socket = null;
    const gameLimitCap = 50;
    beforeEach(function () {
      gameExemplar = game({io: new IO()});
      gameExemplar.roomsLimit = gameLimitCap;
      socket = new Socket('testID');
    });
    it('should return false if rooms quantity is at it\'s limit', function () {
      for (let i = 0; i < gameLimitCap; i += 1) {
        gameExemplar.initializeRoom(socket);
      }
      assert(!gameExemplar.initializeRoom(socket));
    });
    it('should create and populate rooms incrementaly after every call', function () {
      for (let i = 0; i < 5; i += 1) {
        socket = new Socket('testID' + i);
        assert(gameExemplar.initializeRoom(socket));
      }
      let id = 'testID';
      for(let i = 0; i < 5; i += 1) {
        assert(Object.prototype.hasOwnProperty.call(gameExemplar.rooms, i.toString()));
        assert(Object.prototype.hasOwnProperty.call(gameExemplar.rooms[i.toString()], id + i));
        assert.strictEqual(gameExemplar.rooms[i.toString()].id, i.toString());

        assert(Array.isArray(gameExemplar.rooms[i.toString()].deck));
        assert(Array.isArray(gameExemplar.rooms[i.toString()].discardPile));
        assert(Array.isArray(gameExemplar.rooms[i.toString()].toss));
        assert(Array.isArray(gameExemplar.rooms[i.toString()].playersOrder));
        assert(Array.isArray(gameExemplar.rooms[i.toString()].players));
        assert.strictEqual(gameExemplar.rooms[i.toString()].players.length, 1);

        assert.strictEqual(typeof gameExemplar.rooms[i.toString()].started, 'boolean');
        assert.strictEqual(typeof gameExemplar.rooms[i.toString()].pendingStart, 'number');
        assert.strictEqual(typeof gameExemplar.rooms[i.toString()].scoreLimit, 'number');
        assert.strictEqual(typeof gameExemplar.rooms[i.toString()].jokerCard, 'object');


        assert(Array.isArray(gameExemplar.rooms[i.toString()][id + i].hand));

        assert.strictEqual(typeof gameExemplar.rooms[i.toString()][id + i].score, 'number');
        assert.strictEqual(typeof gameExemplar.rooms[i.toString()][id + i].socket, 'object');
        assert.strictEqual(typeof gameExemplar.rooms[i.toString()][id + i].tossedCard, 'object');
        assert.strictEqual(typeof gameExemplar.rooms[i.toString()][id + i].nName, 'string');
        assert.strictEqual(typeof gameExemplar.rooms[i.toString()][id + i].disconnected, 'boolean');
        assert.strictEqual(typeof gameExemplar.rooms[i.toString()][id + i].disconnectTimeout, 'boolean');
      }
      assert.strictEqual(Object.keys(gameExemplar.rooms).length, 5);
      assert.strictEqual(gameExemplar.lastRoom, 4);
    });
  });
  describe('#appendPlayerToRoom()', function () {
    let gameExemplar = game({io: new IO()});
    let playerID = 'playerID';
    sinon.spy(gameExemplar, 'initializeRoom');
    it('should append player to existing room', function () {
    gameExemplar.initializeRoom(new Socket(playerID + '0'));
    assert(gameExemplar.initializeRoom.calledOnce);
    for (let i = 1; i < (gameExemplar.roomSize + 1); i += 1) {
      let socket = new Socket(playerID + i);
      gameExemplar.appendPlayerToRoom(socket);
    }
    assert(Object.prototype.hasOwnProperty.call(gameExemplar.rooms, '0'));
    assert(Object.prototype.hasOwnProperty.call(gameExemplar.rooms, '1'));
    let i = 0;
    for (; i < gameExemplar.roomSize; i += 1) {
      assert(Object.prototype.hasOwnProperty.call(gameExemplar.rooms['0'], playerID + i));
    }
    assert(Object.prototype.hasOwnProperty.call(gameExemplar.rooms['1'], playerID + i));
    });
  });
  describe('#deletePlayerFromRooms()', function () {
    let gameExemplar = game({io: new IO()});
    let socket = new Socket('testID1');
    let roomID = '0';
    gameExemplar.handleGameSocket(socket);
    socket = new Socket('testID2');
    gameExemplar.handleGameSocket(socket);
    it('should return false when there is no player with provided ID in any room', function () {
      assert(!gameExemplar.deletePlayerFromRooms('wrondPlayerID'));
    });
    it('should delete player from room and return true upon success', function () {
      assert(Object.prototype.hasOwnProperty.call(gameExemplar.rooms[roomID], socket.id));
      assert.notStrictEqual(gameExemplar.rooms[roomID].players.indexOf(socket.id), -1);
      if (gameExemplar.rooms[roomID].playersOrder.length !== 0) {
        assert.notStrictEqual(gameExemplar.rooms[roomID].playersOrder.indexOf(socket.id), -1);
      }

      assert(gameExemplar.deletePlayerFromRooms(socket.id));

      assert(!Object.prototype.hasOwnProperty.call(gameExemplar.rooms[roomID], socket.id));
      assert.strictEqual(gameExemplar.rooms[roomID].players.indexOf(socket.id), -1);
      if (gameExemplar.rooms[roomID].playersOrder.length !== 0) {
        assert.strictEqual(gameExemplar.rooms[roomID].playersOrder.indexOf(socket.id), -1);
      }
    });
  });
  describe('#playerPending()', function () {
    const roomID = '0';
    const gameExemplar = game({io: new IO()});
    gameExemplar.roomSize = 6;
    sinon.spy(gameExemplar, 'beginGameForRoom');
    const socket1 = new Socket('testID1');
    gameExemplar.handleGameSocket(socket1);
    const socket2 = new Socket('testID2');
    gameExemplar.handleGameSocket(socket2);
    it('should not start if there is not enough players pending', function () {
      gameExemplar.playerPending(socket1);
      assert(!gameExemplar.beginGameForRoom.calledOnce);
    });
    it('should start if there is enough players pending', function () {
      gameExemplar.playerPending(socket2);
      assert(gameExemplar.beginGameForRoom.calledOnce);
    });
  });
  describe('#beginGameForRoom()', function () {
    let socket = new Socket('testID1');
    const roomID = '0';
    const gameExemplar = game({io: new IO()});
    const fullDeckSize = 108;
    gameExemplar.roomSize = 6;
    sinon.spy(gameExemplar, 'getNewDeck');
    sinon.spy(gameExemplar, 'getShuffledDeck');
    sinon.spy(gameExemplar, 'tossCard');
    sinon.spy(gameExemplar, 'getPlayersOrder');
    sinon.spy(gameExemplar, 'generateHands');
    gameExemplar.handleGameSocket(socket);
    socket = new Socket('testID2');
    gameExemplar.handleGameSocket(socket);
    it('should return false when there is no room with provided roomID', function () {
      assert(!(gameExemplar.beginGameForRoom('wrongID')));
    });
    it('should return true upon success', function () {
      assert(gameExemplar.beginGameForRoom(roomID));
    });
    it('should create array cards for room with specified roomID', function () {
      assert(gameExemplar.getNewDeck.called);
      assert(gameExemplar.getShuffledDeck.calledOnce);
      assert(Array.isArray(gameExemplar.rooms[roomID].deck));
      assert.strictEqual(gameExemplar.rooms[roomID].deck.length, fullDeckSize - (1 + (gameExemplar.rooms[roomID].players.length * 13)));
    });
    it('should toss for every player, creating array of tossed cards and tossedCard for every player', function () {
      assert.strictEqual(gameExemplar.tossCard.callCount, gameExemplar.rooms[roomID].players.length);
      assert(Array.isArray(gameExemplar.rooms[roomID].toss));
      assert.strictEqual(gameExemplar.rooms[roomID].toss.length, gameExemplar.rooms[roomID].players.length);
      gameExemplar.rooms['0'].players.forEach((playerID) => {
        assert.notStrictEqual(gameExemplar.rooms[roomID].toss.indexOf(gameExemplar.rooms[roomID][playerID].tossedCard), -1);
      });
    });
    // Current joker test implementation works only in current configuration of two decks per game
    it('should shift joker card from deck', function () {
      const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace', 'joker'];
      let cardCopy = 0;
      cards.forEach((card) => {
        if (gameExemplar.rooms[roomID].jokerCard.indexOf(card) !== -1) {
          cardCopy += 1;
        }
      });
      assert.strictEqual(cardCopy, 1);
    });
    it('should set dropped false for every player', function () {
      gameExemplar.rooms[roomID].players.forEach((playerID) => {
        assert.strictEqual(gameExemplar.rooms[roomID][playerID].droppedFromRound, false);
      });
    });
    it('should reset round counter', function () {
      assert.strictEqual(gameExemplar.rooms[roomID].round, 1);
    });
    it('should generate players order as array', function () {
      assert(gameExemplar.getPlayersOrder.calledOnce);
      assert(Array.isArray(gameExemplar.rooms[roomID].playersOrder));
    });
    it('should generate array of 13 cards for every player', function () {
      assert(gameExemplar.generateHands.calledOnce);
      gameExemplar.rooms[roomID].players.forEach((playerID) => {
        assert.strictEqual(gameExemplar.rooms[roomID][playerID].hand.length, 13);
      });
    });
    it('should set "started" flag to true', function () {
      assert.strictEqual(gameExemplar.rooms[roomID].started, true);
    });
    it('shouldn\'t retoss during started game', function () {
      gameExemplar.beginGameForRoom(roomID);
      assert.strictEqual(gameExemplar.tossCard.callCount, gameExemplar.rooms[roomID].players.length);
    });
  });
  describe('#updatePlayerIdUponReconnect()', function () {
    const gameExemplar = game({io: new IO()});
    const roomID = '0';
    it('should return false when there is no room with provided roomID', function () {
      assert(!gameExemplar.updatePlayerIdUponReconnect('testID0', 'wrongRoomID', new Socket('testID1')));
    });
    it('should return true and replace old ID of user with a new one', function () {
      const oldID = 'oldID';
      const newID = 'newID';
      let socket = new Socket(oldID);
      gameExemplar.handleGameSocket(socket);

      assert(Object.prototype.hasOwnProperty.call(gameExemplar.rooms, roomID));
      assert(Object.prototype.hasOwnProperty.call(gameExemplar.rooms[roomID], oldID));
      assert.notStrictEqual(gameExemplar.rooms[roomID].players.indexOf(oldID), -1);

      gameExemplar.rooms[roomID][oldID].disconnected = true;
      gameExemplar.rooms[roomID][oldID].disconnectTimeout = setInterval(function () {
        console.log('Disconn interval executed.');
      }, 1000);
      gameExemplar.rooms[roomID][oldID].socket = null;
      socket = new Socket(newID);
      assert(gameExemplar.updatePlayerIdUponReconnect(oldID, roomID, socket));

      assert(!gameExemplar.rooms[roomID][socket.id].disconnected);
      assert(!gameExemplar.rooms[roomID][socket.id].disconnectTimeout);
      assert.strictEqual(typeof gameExemplar.rooms[roomID][socket.id].socket, 'object');
      assert(Object.prototype.hasOwnProperty.call(gameExemplar.rooms[roomID], socket.id));
      assert(!Object.prototype.hasOwnProperty.call(gameExemplar.rooms[roomID], oldID));

      assert.notStrictEqual(gameExemplar.rooms[roomID].players.indexOf(socket.id), -1);
      assert.strictEqual(gameExemplar.rooms[roomID].players.indexOf(oldID), -1);
    });
  });
  describe('#getPlayersOrder()', function () {
    let socket = null;
    const roomID = '0';
    const gameExemplar = game({io: new IO()});
    for (let i = 1; i < 5; i += 1) {
      socket = new Socket('testID' + i);
      gameExemplar.handleGameSocket(socket);
    }
    // TODO: Copies what #beginGameForRoom() does, could probably do some refactoring
    gameExemplar.rooms[roomID].deck = gameExemplar.getShuffledDeck(gameExemplar.getNewDeck().concat(gameExemplar.getNewDeck()));
    gameExemplar.rooms[roomID].toss = [];
    gameExemplar.rooms[roomID].players.forEach((playerID) => {
      const tossedCard = gameExemplar.tossCard(roomID);
      gameExemplar.rooms[roomID][playerID].tossedCard = tossedCard;
      gameExemplar.rooms[roomID].toss.push(tossedCard);
    });
    gameExemplar.rooms[roomID].jokerCard = gameExemplar.rooms[roomID].deck.shift();
    gameExemplar.generateHands(roomID);
    gameExemplar.rooms[roomID].started = true;
    gameExemplar.rooms[roomID].playersOrder = gameExemplar.getPlayersOrder(roomID);
    it('should return false when there is no room with provided roomID', function () {
      assert(!gameExemplar.getPlayersOrder('fake'));
    });
    it('should not lose any player ID\'s', function () {
      assert.strictEqual(gameExemplar.rooms[roomID].players.length, gameExemplar.rooms[roomID].playersOrder.length);
      gameExemplar.rooms[roomID].playersOrder.forEach((playerOrderID) => {
        assert.notStrictEqual(gameExemplar.rooms[roomID].players.indexOf(playerOrderID), -1);
      });
      gameExemplar.rooms[roomID].players.forEach((playerID) => {
        assert.notStrictEqual(gameExemplar.rooms[roomID].playersOrder.indexOf(playerID), -1);
      });
    });
  });
  describe('#generateHands()', function () {
    let socket = new Socket('testID1');
    const roomID = '0';
    const gameExemplar = game({io: new IO()});
    gameExemplar.handleGameSocket(socket);
    socket = new Socket('testID2');
    gameExemplar.handleGameSocket(socket);
    gameExemplar.rooms[roomID].deck = gameExemplar.getShuffledDeck(gameExemplar.getNewDeck().concat(gameExemplar.getNewDeck()));
    it('should return false when there is no room with provided roomID', function () {
      assert(!gameExemplar.generateHands('fake'));
    });
    it('should return true upon success', function () {
      assert(gameExemplar.generateHands(roomID));
    });
    it('should not lose any cards during pushing cards to hands', function () {
      gameExemplar.rooms[roomID].players.forEach((playerID) => {
        assert.strictEqual(gameExemplar.rooms[roomID][playerID].hand.length, 13);
      });
    });
  });
  describe('#checkFirstLife()', function () {
    const gameExemplar = game({io: new IO()});
    gameExemplar.handleGameSocket(new Socket('testID1'));
    gameExemplar.handleGameSocket(new Socket('testID2'));
    gameExemplar.beginGameForRoom('0');
    const sequence1 = ['S-4', 'S-5', 'S-6', 'S-7'];
    const sequence2 = ['S-jack', 'S-queen', 'S-king', 'S-ace'];
    const sequence3 = ['S-jack', 'S-queen', 'S-king', 'S-ace'];
    const sequence4 = ['H-4', 'H-5', 'H-6'];
    const notSequence1 = ['S-ace', 'S-jack', 'S-queen', 'S-king'];
    const notSequence2 = ['S-jack', 'S-queen'];
    const notSequence3 = ['S-9', 'S-10', 'S-jack', 'S-queen', 'S-king', 'S-ace'];
    it('should return true for a pure sequence', function () {
      assert(gameExemplar.checkFirstLife(sequence1, '0'));
      assert(gameExemplar.checkFirstLife(sequence2, '0'));
      assert(gameExemplar.checkFirstLife(sequence3, '0'));
      assert(gameExemplar.checkFirstLife(sequence4, '0'));
    });
    it('should return false for a not pure sequence', function () {
      assert(!gameExemplar.checkFirstLife(notSequence1, '0'));
      assert(!gameExemplar.checkFirstLife(notSequence2, '0'));
      assert(!gameExemplar.checkFirstLife(notSequence3, '0'));
    });
  });
  describe('#checkSequence()', function () {
    const gameExemplar = game({io: new IO()});
    const joker = 'H-ace';
    const joker2 = 'D-ace';
    gameExemplar.handleGameSocket(new Socket('testID1'));
    gameExemplar.handleGameSocket(new Socket('testID2'));
    gameExemplar.beginGameForRoom('0');
    gameExemplar.rooms['0'].jokerCard = 'S-ace';
    const sequence1 = ['S-4', 'S-5', 'S-6', 'S-7'];
    const sequence2 = ['S-jack', 'S-queen', 'S-king', 'S-ace'];
    const sequence3 = ['RED-joker', 'S-queen', 'S-king', 'S-ace'];
    const sequence4 = ['S-jack', 'S-queen', joker, 'S-ace'];
    const sequence5 = ['S-10', 'D-ace', 'S-ace', 'S-king'];
    const sequence6 = ['D-ace', 'S-ace', 'S-queen', 'S-king'];
    const sequence7 = ['H-2', 'RED-joker', 'H-4', 'H-ace'];
    const notSequence1 = ['S-4', 'S-5', 'S-6', 'S-jack'];
    const notSequence2 = ['S-jack', 'S-queen', 'S-king', 'D-6'];
    const notSequence3 = ['S-jack', 'RED-joker', 'S-ace', 'BLACK-joker'];
    const notSequence4 = ['S-9', 'D-ace', 'S-ace', 'S-king'];
    const notSequence5 = ['H-ace', 'D-ace', 'S-ace', 'S-king'];
    it('should return true for a sequence', function () {
      assert(gameExemplar.checkSequence(sequence1, '0'));
      assert(gameExemplar.checkSequence(sequence2, '0'));
      assert(gameExemplar.checkSequence(sequence3, '0'));
      assert(gameExemplar.checkSequence(sequence4, '0'));
      assert(gameExemplar.checkSequence(sequence5, '0'));
      assert(gameExemplar.checkSequence(sequence6, '0'));
      assert(gameExemplar.checkSequence(sequence7, '0'));
    });
    it('should return false for a not sequence', function () {
      assert(!gameExemplar.checkSequence(notSequence1, '0'));
      assert(!gameExemplar.checkSequence(notSequence2, '0'));
      assert(!gameExemplar.checkSequence(notSequence3, '0'));
      assert(!gameExemplar.checkSequence(notSequence4, '0'));
      assert(!gameExemplar.checkSequence(notSequence5, '0'));
    });
  });
  describe('#checkSet()', function () {
    const gameExemplar = game({io: new IO()});
    const joker = 'H-ace';
    const joker2 = 'D-ace';
    gameExemplar.handleGameSocket(new Socket('testID1'));
    gameExemplar.handleGameSocket(new Socket('testID2'));
    gameExemplar.beginGameForRoom('0');
    gameExemplar.rooms['0'].jokerCard = 'S-ace';
    const set1 = ['H-4', 'D-4', 'C-4'];
    const set2 = ['S-4', 'H-4', 'D-4', 'C-4'];
    const set3 = ['H-4', 'RED-joker', 'C-4'];
    const set4 = ['H-4', joker, 'C-4'];
    const set5 = ['S-4', 'H-4', 'D-4', joker];
    const set6 = ['S-4', 'H-4', 'D-4', 'BLACK-joker'];
    const set7 = ['S-4', 'H-4', joker, 'BLACK-joker'];
    const set8 = ['H-2', 'RED-joker', 'H-4', 'H-ace'];
    const notASet1 = ['S-4', 'D-4'];
    const notASet2 = ['S-4', 'D-4', 'S-4'];
    const notASet3 = ['H-5', 'S-5', 'S-5', 'C-5'];
    const notASet4 = ['S-4', 'D-4', 'C-4', 'H-4', joker];
    const notASet5 = ['S-4', 'H-5', 'D-6', 'C-2'];
    const notASet6 = ['S-4', joker2, joker, 'RED-joker'];
    const notASet7 = ['H-2', 'RED-joker', 'H-4', 'H-ace'];
    it('should return false for not a set', function () {
      assert(!gameExemplar.checkSet(notASet1, '0'));
      assert(!gameExemplar.checkSet(notASet2, '0'));
      assert(!gameExemplar.checkSet(notASet3, '0'));
      assert(!gameExemplar.checkSet(notASet4, '0'));
      assert(!gameExemplar.checkSet(notASet5, '0'));
      assert(!gameExemplar.checkSet(notASet6, '0'));
      assert(!gameExemplar.checkSet(notASet7, '0'));
    });
    it('should return true for a set', function () {
      assert(gameExemplar.checkSet(set1, '0'));
      assert(gameExemplar.checkSet(set2, '0'));
      assert(gameExemplar.checkSet(set3, '0'));
      assert(gameExemplar.checkSet(set4, '0'));
      assert(gameExemplar.checkSet(set5, '0'));
      assert(gameExemplar.checkSet(set6, '0'));
      assert(gameExemplar.checkSet(set7, '0'));
    });
  });
});
