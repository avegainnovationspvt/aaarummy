/* -------------------------------------------------------------------------------------------------

Game.rooms: object that contains all game rooms
Game.lastRoom: name of object inside Game.rooms that contains last created room
Game.__shuffleVariable: quantity of shuffle iterations for Game.getShuffledDeck
Game.playerTokens: list of CSRF tokens assigned to sockets
Game.pendingRooms: array of room that had disconnected players before start
Game.roomsLimit: max quantity of rooms (default 200)
Game.scoreLimit: maximum Rummy score (default 102)
Game.io: socket.io instance(required in config file)
Game.disconnectTimeLimit: time limit in ms after which game deletes socket.id from room in lobby
  and awards penalty in game when started
timeoutTimeLimit: time limit in ms after which game awards penalty to player
Game.roomSize: maximum quantity of players in one room


Game.rooms[*room*]: game room object
                  .id: used to send messages via socket.io as a room identificator
                  .pendingStart: quantity of players that pressed "Start" in not full room
                  .started: marker for room that started game
                  .round: number of current round in a game
                  .lastWinner: id of last round winner
                  .currentPlayerIndex: number of current player in queue
                  .deck: current deck of a room
                  .discardPile: array of discarded cards
                  .jokerCard: card that was chosen to be joker for a round
                  .scoreLimit: maximum Rummy score for the room
                  .players: array of ID's of players(socket.id from socket.io is used for that)
                  .toss: array of all tossed cards to prevent tossing same card by players
                  .playersOrder: order of players at the beginning of round
                  .timePassed: time counter for tweaking timeLimit upon reconnect
                  .timePassedInterval: interval holder for incrementing timePassed


Game.rooms[*room*][*id*]: object for every player in a room
                        .tossedCard: card tossed by player
                        .hand: cards in player hand
                        .score: current player score
                        .nName: nick name of the player
                        .socket: players socket.io socket
                        .droppedFromRound: if set player is omitted during game round
                        .disconnected: marker for disconnected players
                        .disconnectTimeout: holder for 'disconnect' event interval
                        .timeoutTimeout: holder for players turn time limit interval

Methods:
  appendSocketListeners: calls for a CSRF token and appends listeners to socket
  assignCSRFToken: handles csrf token creation
  deleteCSRFToken: deletes csfr token if one found
  messageHandler: handles every 'message' event

  drawFromDeck: draw card from deck and send message about it to players
  drawFromDiscard: draw card from discard pile and send message about it to players
  discard: discard card and send message about it to players
  drop: drop from round and send message about it to players
  show: initiate show, check for a win condition  and send message about it to players
  penalty: appends penalty to a players score and returns it's value
  checkFirstLife: return true if provided array is pure card sequence
  checkSequence: return true if provided array is a card sequence
  checkSet: return true if provided array is a set
  checkForEndRoundCondition: check if it is time to call endRound
  increaseCurrentPlayerIndex: increases currentPlayerIndex and round counters for a room

  disconnectSocket: handles disconnect procedure upon 'disconnect' event
  handleGameSocket: main method that handles every socket connection
  beginGameForRoom: generates deck, tosses and seals room game for provided roomID
  endRoundForRoom:
  deleteGameRoom: deletes all data bound to provided roomID
  initializeRoom: generates new room object in Game.rooms
  appendPlayerToRoom: appends new player to room and starts game if requirement for a start was met
  deletePlayerFromRooms: deletes player from room and updates playersOrder if previously calculated
  updatePlayerIdUponReconnect: refreshes user connection data if player ID was found in some room
  getRoomForPlayerID: get players roomID based by player's previous ID
  getNewDeck: generates array that contains deck of cards(currently 54)
  getShuffledDeck: returns array with shuffled copy of provided deck
  getRandomCardFromDeck: returns string with value of random element from provided array
  tossCard: return value of card not used by other players, roomID reuquired
  getPlayersOrder: returns sorted array of players based on their toss card, roomID reuquired
  generateHands: pushes 13 cards shifted from room's deck in every player's hand, roomID required
  reToss: repeats toss procedure for provided roomID

------------------------------------------------------------------------------------------------- */

const crypto = require('crypto');

function getIoCookie(cookieString) {
  const cookies = cookieString.split('; ');
  let ioCookie = null;
  cookies.forEach((item) => {
    const arr = item.split('=');
    if (arr[0] === 'io') {
      ioCookie = arr[1];
    }
  });
  return ioCookie;
}

function jstr(obj) {
  let msg = null;
  try {
    msg = JSON.stringify(obj);
  } catch (e) {
    console.log(e);
    msg = JSON.stringify({
      type: 'error',
      data: 'jstr error.'
    });
  }
  return msg;
}

function deleteElementFromArray(itemToDelete, arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.filter((arrayItem) => {
    if (arrayItem === itemToDelete) {
      return false;
    }
    return true;
  });
}

function Game(config) {
  this.rooms = {};
  this.lastRoom = 0;
  this.__shuffleVariable = 500;
  this.playerTokens = {};
  this.pendingRooms = [];
  if (config && Object.prototype.hasOwnProperty.call(config, 'io')) {
    this.io = config.io;
  } else {
    throw new Error('Should set "io" in config');
  }
  if (config && Object.prototype.hasOwnProperty.call(config, 'roomsLimit')) {
    this.roomsLimit = config.roomsLimit;
  } else {
    this.roomsLimit = 200;
  }
  if (config && Object.prototype.hasOwnProperty.call(config, 'scoreLimit')) {
    this.scoreLimit = config.scoreLimit;
  } else {
    this.scoreLimit = 102;
  }
  if (config && Object.prototype.hasOwnProperty.call(config, 'disconnectTimeLimit')) {
    this.disconnectTimeLimit = config.disconnectTimeLimit;
  } else {
    this.disconnectTimeLimit = 60000;
  }
  if (config && Object.prototype.hasOwnProperty.call(config, 'timeoutTimeLimit')) {
    this.timeoutTimeLimit = config.timeoutTimeLimit;
  } else {
    this.timeoutTimeLimit = 30000;
  }
  if (config && Object.prototype.hasOwnProperty.call(config, 'roomSize')) {
    this.roomSize = config.roomSize;
  } else {
    this.roomSize = 6;
  }
}


Game.prototype.appendSocketListeners = function (socket) {
  // Assign token for every socket
  this.assignCSRFToken(socket);
  socket.join('allchat');
  socket.on('message', (msg) => {
    this.messageHandler(msg, socket);
  });
  socket.on('disconnect', () => {
    this.deleteCSRFToken(socket);
    socket.leave('allchat');
    this.disconnectSocket(socket);
  });
};

Game.prototype.assignCSRFToken = function (socket) {
  this.playerTokens[socket.id] = crypto.randomBytes(32).toString('base64');
  const message = {
    type: 'token',
    data: this.playerTokens[socket.id],
  };
  let oldID = null;
  if (socket.request.headers.cookie) {
    oldID = getIoCookie(socket.request.headers.cookie);
  }
  const roomID = this.getRoomForPlayerID(oldID);
  if (typeof roomID === 'string' && this.rooms[roomID].started) {
    message.nName = this.rooms[roomID][oldID].nName;
  }
  socket.send(jstr(message));
};

Game.prototype.deleteCSRFToken = function (socket) {
  if (Object.prototype.hasOwnProperty.call(this.playerTokens, socket.id)) {
    delete this.playerTokens[socket.id];
  }
};

Game.prototype.messageHandler = function (message, socket) {
  let msg = null;
  let msgOut = null;
  const roomID = this.getRoomForPlayerID(socket.id);
  try {
    msg = JSON.parse(message);
  } catch (e) {
    console.log(e);
    socket.send(jstr({
      type: 'error',
      data: 'JSON.parse error'
    }));
    return false;
  }
  if (msg.token !== this.playerTokens[socket.id]) {
    msgOut = {
      type: 'error',
      data: 'CSRF'
    };
    socket.send(jstr(msgOut));
    return false;
  }
  if (msg.type === 'chat') {
    msgOut = {
      type: 'chat',
      data: msg.data,
      id: socket.id
    };
    if (msg.color) {
      msgOut.color = msg.color;
    }
    if (roomID) {
      msgOut.nName = this.rooms[roomID][socket.id].nName;
      socket.to(roomID).send(jstr(msgOut));
    } else {
      if (msg.nName) {
        msgOut.nName = msg.nName;
      }
      socket.to('allchat').send(jstr(msgOut));
    }
  }
  if (msg.type === 'game') {
    switch (msg.data) {
      case 'connect':
        this.handleGameSocket(socket, msg.nName);
        break;
      case 'pending':
        if (this.playerPending(socket)) {
          socket.to(roomID).send(jstr({
            type: 'chat',
            data: 'pending for a start',
            nName: msg.nName,
            color: 'admin'
          }));
          socket.to(roomID).send(jstr({
            type: 'game',
            data: 'player-pending',
            id: socket.id
          }));
        } else {
          socket.send(jstr({
            type: 'error',
            data: 'You already pending'
          }));
        }
        break;
      case 'draw-from-deck':
        if (this.rooms[roomID].showingStage) {
          msgOut = {
            type: 'error',
            data: 'Can\'t draw in showing stage'
          };
          socket.send(jstr(msgOut));
        } else {
          this.drawCardFromDeck(socket);
        }
        break;
      case 'draw-from-discard':
        if (this.rooms[roomID].showingStage) {
          msgOut = {
            type: 'error',
            data: 'Can\'t draw in showing stage'
          };
          socket.send(jstr(msgOut));
        } else {
          this.drawCardFromDisscardPile(socket);
        }
        break;
      case 'discard':
        if (this.rooms[roomID].showingStage) {
          msgOut = {
            type: 'error',
            data: 'Can\'t discard in showing stage'
          };
          socket.send(jstr(msgOut));
        } else if (msg.card) {
          this.discard(msg.card, socket);
        } else {
          msgOut = {
            type: 'error',
            data: 'No card provided'
          };
          socket.send(jstr(msgOut));
        }
        break;
      case 'drop':
        if (this.rooms[roomID].showingStage) {
          msgOut = {
            type: 'error',
            data: 'Can\'t drop in showing stage'
          };
          socket.send(jstr(msgOut));
        } else {
          this.drop(socket);
        }
        break;
      case 'show-declare':
        if (this.rooms[roomID].showingStage) {
          msgOut = {
            type: 'error',
            data: 'Can\'t declare twice'
          };
          socket.send(jstr(msgOut));
        } else {
          this.declare(msg.card, socket);
        }
        break;
      case 'show':
        if (!this.show(msg.runs, socket)) {
          const penalty = this.penalty('show', socket.id);
          this.rooms[roomID][socket.id].score += penalty;
          msgOut = {
            type: 'game',
            data: 'wrong-show',
            id: socket.id,
            runs: msg.runs
          };
          if (penalty > 0) {
            msgOut.penalty = penalty;
          }
          this.io.to(roomID).send(jstr(msgOut));
          this.rooms[roomID][socket.id].droppedFromRound = true;
          this.rooms[roomID].showingStage = false;
          if (this.checkForEndRoundCondition(roomID)) {
            this.endRoundForRoom(roomID);
          } else {
            this.increaseCurrentPlayerIndex(roomID);
          }
        }
        break;
      default:
        msgOut = {
          type: 'error',
          data: 'Unrecognized game message'
        };
        socket.send(jstr(msgOut));
    }
  }
  return true;
};

Game.prototype.drawCardFromDeck = function (socket) {
  let msg = null;
  const roomID = this.checkCurrentPlayer(socket);
  if (typeof roomID !== 'string') {
    return false;
  }
  if (this.rooms[roomID][socket.id].hand.length > 13) {
    msg = {
      type: 'error',
      data: 'Can\'t draw twice'
    };
    socket.send(jstr(msg));
    return false;
  }
  const card = this.rooms[roomID].deck.shift();
  this.rooms[roomID][socket.id].hand.push(card);
  msg = {
    type: 'game',
    data: 'player-draw',
    id: socket.id
  };
  if (this.rooms[roomID].deck.length === 0) {
    const discarded = this.rooms[roomID].discardPile.shift();
    this.rooms[roomID].deck = this.getShuffledDeck(this.rooms[roomID].discardPile);
    this.rooms[roomID].discardPile = [discarded];
    this.io.to(roomID).send(jstr({
      type: 'game',
      data: 'shuffle',
      discardPile: this.rooms[roomID].discardPile
    }));
  }
  socket.to(roomID).send(jstr(msg));
  msg = {
    type: 'game',
    data: 'draw',
    card
  };
  socket.send(jstr(msg));
  return true;
};

Game.prototype.drawCardFromDisscardPile = function (socket) {
  let msg = null;
  const roomID = this.checkCurrentPlayer(socket);
  if (typeof roomID !== 'string') {
    return false;
  }
  if (this.rooms[roomID].discardPile.length === 0) {
    msg = {
      type: 'error',
      data: 'Discard pile is empty'
    };
    socket.send(jstr(msg));
    return false;
  }
  if (this.rooms[roomID][socket.id].hand.length > 13) {
    msg = {
      type: 'error',
      data: 'Can\'t draw twice'
    };
    socket.send(jstr(msg));
    return false;
  }
  const card = this.rooms[roomID].discardPile.shift();
  this.rooms[roomID][socket.id].hand.push(card);
  msg = {
    type: 'game',
    data: 'player-draw-pile',
    id: socket.id
  };
  socket.to(roomID).send(jstr(msg));
  msg = {
    type: 'game',
    data: 'draw-pile',
    card
  };
  socket.send(jstr(msg));
  return true;
};

Game.prototype.discard = function (card, socket) {
  let msg = null;
  const roomID = this.checkCurrentPlayer(socket);
  if (typeof roomID !== 'string') {
    return false;
  }
  if (this.rooms[roomID][socket.id].hand.length !== 14) {
    msg = {
      type: 'error',
      data: 'No enough cards in your hand'
    };
    socket.send(jstr(msg));
    return false;
  }
  if (this.rooms[roomID][socket.id].hand.indexOf(card) === -1) {
    msg = {
      type: 'error',
      data: 'No such card in your hand'
    };
    socket.send(jstr(msg));
    return false;
  }
  clearTimeout(this.rooms[roomID][socket.id].timeoutTimeout);
  this.rooms[roomID].discardPile.unshift(card);
  let deleted = false;
  const changedHand = [];
  this.rooms[roomID][socket.id].hand.forEach((cardInHand) => {
    if (!deleted) {
      if (cardInHand === card) {
        deleted = true;
      } else {
        changedHand.push(cardInHand);
      }
    } else {
      changedHand.push(cardInHand);
    }
  });
  this.rooms[roomID][socket.id].hand = changedHand;
  msg = {
    type: 'game',
    data: 'player-discard',
    card,
    id: socket.id
  };
  socket.to(roomID).send(jstr(msg));
  msg = {
    type: 'game',
    data: 'discard'
  };
  socket.send(jstr(msg));
  this.increaseCurrentPlayerIndex(roomID);
  return true;
};

Game.prototype.drop = function (socket) {
  let msg = null;
  const roomID = this.getRoomForPlayerID(socket.id);
  if (typeof roomID !== 'string') {
    socket.send(jstr({
      type: 'error',
      data: 'No such ID connected'
    }));
    return false;
  }
  const penalty = this.penalty('drop', socket.id);
  this.rooms[roomID][socket.id].score += penalty;
  msg = {
    type: 'game',
    data: 'player-drop',
    id: socket.id
  };
  if (penalty > 0) {
    msg.penalty = penalty;
  }
  socket.to(roomID).send(jstr(msg));
  msg = {
    type: 'game',
    data: 'drop'
  };
  if (penalty > 0) {
    msg.penalty = penalty;
  }
  socket.send(jstr(msg));
  this.rooms[roomID][socket.id].droppedFromRound = true;
  if (this.checkForEndRoundCondition(roomID)) {
    this.endRoundForRoom(roomID);
  }
  if (this.rooms[roomID] && socket.id === this.rooms[roomID].playersOrder[this.rooms[roomID].currentPlayerIndex]) {
    this.increaseCurrentPlayerIndex(roomID);
  }
  return true;
};

Game.prototype.declare = function (card, socket) {
  const roomID = this.checkCurrentPlayer(socket);
  if (typeof roomID !== 'string') {
    return false;
  }
  let cardIsInHand = false;
  this.rooms[roomID][socket.id].hand.forEach((cardInHand) => {
    if (cardInHand === card) {
      cardIsInHand = true;
    }
  });
  if (!cardIsInHand) {
    socket.send(jstr({
      type: 'error',
      data: 'No such card in your hand'
    }));
    return false;
  }
  this.io.to(roomID).send(jstr({
    type: 'game',
    data: 'player-declared',
    card,
    id: socket.id
  }));
  this.rooms[roomID].showingStage = true;
  this.rooms[roomID].declaredCard = card;
  clearInterval(this.rooms[roomID].timePassedInterval);
  clearTimeout(this.rooms[roomID][socket.id].timeoutTimeout);
  this.rooms[roomID].timePassed = 0;
  this.rooms[roomID][socket.id].timeoutTimeout = setTimeout(() => {
    clearInterval(this.rooms[roomID].timePassedInterval);
    this.rooms[roomID].timePassed = 0;
    const tmsg = {
      type: 'game',
      data: 'drop-timeout',
      id: socket.id
    };
    tmsg.penalty = this.penalty('show', socket.id);
    this.rooms[roomID][socket.id].score += tmsg.penalty;
    this.io.to(roomID).send(jstr(tmsg));
    this.rooms[roomID].showingStage = false;
    this.rooms[roomID].discardPile.unshift(this.rooms[roomID].declaredCard);
    this.rooms[roomID].declaredCard = null;
    if (this.rooms[roomID][socket.id]) {
      this.rooms[roomID][socket.id].droppedFromRound = true;
    }
    if (this.checkForEndRoundCondition(roomID)) {
      this.endRoundForRoom(roomID);
    } else {
      this.increaseCurrentPlayerIndex(roomID);
    }
  }, this.timeoutTimeLimit);
  this.rooms[roomID].timePassedInterval = setInterval(() => {
    if (this.rooms[roomID]) {
      this.rooms[roomID].timePassed += 1000;
    }
  }, 1000);
  return true;
};

Game.prototype.show = function (runs, socket) {
  let msg = null;
  if (!Array.isArray(runs)) {
    return false;
  }
  const roomID = this.checkCurrentPlayer(socket);
  if (typeof roomID !== 'string') {
    return false;
  }
  clearInterval(this.rooms[roomID].timePassedInterval);
  clearTimeout(this.rooms[roomID][socket.id].timeoutTimeout);
  let cardMissmatch = false;
  runs.forEach((set) => {
    set.forEach((card) => {
      if (this.rooms[roomID][socket.id].hand.indexOf(card) === -1) {
        cardMissmatch = true;
      }
    });
  });
  if (cardMissmatch) {
    msg = {
      type: 'error',
      data: 'Show. No such card in your hand'
    };
    socket.send(jstr(msg));
    return false;
  }
  let cardCount = 0;
  const runsCount = runs.length;
  if (runsCount < 3) {
    msg = {
      type: 'error',
      data: 'Not enought runs'
    };
    socket.send(jstr(msg));
    return false;
  }
  for (let i = 0; i < runsCount; i += 1) {
    cardCount += runs[i].length;
  }
  if (cardCount !== 13) {
    msg = {
      type: 'error',
      data: 'Not enough cards in runs'
    };
    socket.send(jstr(msg));
    return false;
  }
  if (runs[runsCount - 1].length === 1) {
    if (runs[runsCount - 1][0].indexOf('joker') === -1 && runs[runsCount - 1][0].indexOf(this.rooms[roomID].jokerCard.split('-')[1]) === -1) {
      msg = {
        type: 'error',
        data: 'Wrong show. One card in last run is not a joker'
      };
      socket.send(jstr(msg));
      return false;
    }
    let jokerQuantity = 0;
    runs.forEach((set) => {
      set.forEach((card) => {
        if (card.indexOf('joker') !== -1 || card.indexOf(this.rooms[roomID].jokerCard.split('-')[1]) !== -1) {
          jokerQuantity += 1;
        }
      });
    });
    if (jokerQuantity < 3) {
      msg = {
        type: 'error',
        data: 'Wrong show. Less than 3 jokers in show with extra joker'
      };
      socket.send(jstr(msg));
      return false;
    }
  }
  if (!this.checkFirstLife(runs[0])) {
    msg = {
      type: 'error',
      data: 'First Life is wrong'
    };
    socket.send(jstr(msg));
    return false;
  }
  if (!this.checkSequence(runs[1], roomID)) {
    msg = {
      type: 'error',
      data: 'Second Life is wrong'
    };
    socket.send(jstr(msg));
    return false;
  }
  let success = true;
  for (let i = 2; i < runs.length; i += 1) {
    if (runs[i].length === 1) {
      if (runs[i][0].indexOf('joker') === -1 && runs[i][0].indexOf(this.rooms[roomID].jokerCard.split('-')[1]) === -1) {
        success = false;
      }
    } else if (!this.checkSequence(runs[i], roomID) && !this.checkSet(runs[i], roomID)) {
      success = false;
    }
  }
  if (success) {
    this.io.to(roomID).send(jstr({
      type: 'game',
      data: 'show-result',
      id: socket.id,
      score: 0,
      runs
    }));
    this.endRoundForRoom(roomID, socket.id);
    return true;
  }
  msg = {
    type: 'error',
    data: 'Extra runs are wrong'
  };
  socket.send(jstr(msg));
  return false;
};

Game.prototype.checkFirstLife = function (sequence) {
  if (!Array.isArray(sequence)) {
    return false;
  }
  const cardOrder = {
    '2': 0,
    '3': 1,
    '4': 2,
    '5': 3,
    '6': 4,
    '7': 5,
    '8': 6,
    '9': 7,
    '10': 8,
    'jack': 9,
    'queen': 10,
    'king': 11,
    'ace': 12,
    'joker': 99
  };
  let isASequence = true;
  const cards = sequence.map(card => card.split('-'));
  const cardsQuantity = cards.length;
  if (cardsQuantity < 3 || cardsQuantity > 5) {
    isASequence = false;
  }
  for (let i = 1; i < cardsQuantity; i += 1) {
    if (cardOrder[cards[i - 1][1]] + 1 === cardOrder[cards[i][1]]) {
      if (cardOrder[cards[i - 1][0]] === cardOrder[cards[i][0]]) {
        continue;
      } else {
        isASequence = false;
        break;
      }
    } else {
      isASequence = false;
      break;
    }
  }
  return isASequence;
};

Game.prototype.checkSequence = function (sequence, roomID) {
  if (!Array.isArray(sequence)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(this.rooms, roomID)) {
    return false;
  }
  const cardOrder = {
    '2': 0,
    '3': 1,
    '4': 2,
    '5': 3,
    '6': 4,
    '7': 5,
    '8': 6,
    '9': 7,
    '10': 8,
    'jack': 9,
    'queen': 10,
    'king': 11,
    'ace': 12,
    'joker': 99
  };
  let isASequence = true;
  const cards = sequence.map(card => card.split('-'));
  let joker = this.rooms[roomID].jokerCard.split('-')[1];
  if (joker.indexOf('joker') !== -1) {
    joker = 'ace';
  }
  const cardsQuantity = cards.length;
  if (cardsQuantity < 3 || cardsQuantity > 5) {
    isASequence = false;
  }
  let jokerUsed = 0;
  if (cards[0][1] === 'joker' || cards[0][1] === joker) {
    jokerUsed += 1;
  }
  for (let i = 1; i < cardsQuantity; i += 1) {
    if (cardOrder[cards[i - 1][1]] + 1 === cardOrder[cards[i][1]]) {
      if (cardOrder[cards[i - 1][0]] === cardOrder[cards[i][0]]) {
        continue;
      }
    } else if (cards[i - 1][1] === 'joker' || cards[i - 1][1] === joker) {
      if (i === 1) {
        continue;
      } else if (i > 1 && (cards[i - 2][1] === 'joker' || cards[i - 2][1] === joker)) {
        if (i === 2 || cardOrder[cards[i - 3][1]] + 3 === cardOrder[cards[i][1]]) {
          continue;
        }
      } else if (cardOrder[cards[i - 2][1]] + 2 === cardOrder[cards[i][1]]) {
        continue;
      }
    }
    if (cards[i][1] === 'joker') {
      jokerUsed += 1;
    } else if (cards[i][1] === joker) {
      jokerUsed += 1;
    } else {
      isASequence = false;
      break;
    }
    if (jokerUsed > 2) {
      isASequence = false;
      break;
    }
  }
  return isASequence;
};

Game.prototype.checkSet = function (sets, roomID) {
  if (!Array.isArray(sets)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(this.rooms, roomID)) {
    return false;
  }
  let isASet = true;
  let cards = sets.map(card => card.split('-'));
  let joker = this.rooms[roomID].jokerCard.split('-')[1];
  if (joker.indexOf('joker') !== -1) {
    joker = 'ace';
  }
  let cardsQuantity = cards.length;
  if (cardsQuantity < 3 || cardsQuantity > 4) {
    isASet = false;
  }
  let jokerUsed = 0;
  cards.forEach((card) => {
    if (card[1] === 'joker' || card[1] === joker) {
      jokerUsed += 1;
    }
  });
  if (jokerUsed > 2) {
    isASet = false;
  }
  cards = cards.filter((card) => {
    if (card[1] === 'joker' || card[1] === joker) {
      return false;
    }
    return true;
  });
  cardsQuantity = cards.length;
  const suitsUsed = [];
  for (let i = 1; i < cardsQuantity; i += 1) {
    suitsUsed.push(cards[i - 1][0]);
    if (cards[i - 1][1] !== cards[i][1]) {
      isASet = false;
      break;
    } else if (suitsUsed.indexOf(cards[i][0]) !== -1) {
      isASet = false;
      break;
    }
  }
  return isASet;
};

Game.prototype.penalty = function (reason, playerID) {
  const roomID = this.getRoomForPlayerID(playerID);
  let penalty = 0;
  if (typeof roomID !== 'string') {
    console.log('penalty not found');
    return false;
  }
  let activePlayers = 0;
  this.rooms[roomID].players.forEach((player) => {
    if (!this.rooms[roomID][player].droppedFromRound) {
      activePlayers += 1;
    }
  });
  switch (reason) {
    case 'drop':
      if (this.rooms[roomID].round > 3 || this.rooms[roomID].players.length < 3 || activePlayers < 3) {
        penalty = 40;
      }
      break;
    case 'disconnect':
      penalty = 40;
      break;
    case 'timeout':
      penalty = 40;
      break;
    case 'show':
      penalty = 80;
      break;
    default:
  }
  return penalty;
};

Game.prototype.checkCurrentPlayer = function (socket) {
  let msg = null;
  const roomID = this.getRoomForPlayerID(socket.id);
  if (typeof roomID !== 'string') {
    msg = {
      type: 'error',
      data: 'No such ID connected'
    };
    socket.send(jstr(msg));
    return false;
  }
  if (this.rooms[roomID].currentPlayerIndex !== this.rooms[roomID].playersOrder.indexOf(socket.id)) {
    msg = {
      type: 'error',
      data: 'Not your turn mate'
    };
    socket.send(jstr(msg));
    return false;
  }
  return roomID;
};

Game.prototype.checkForEndRoundCondition = function (roomID) {
  if (!Object.prototype.hasOwnProperty.call(this.rooms, roomID)) {
    console.log('bad roomID inside checkForEndRoundCondition check');
    return false;
  }
  let counter = 0;
  let ID = null;
  this.rooms[roomID].players.forEach((playerID) => {
    if (this.rooms[roomID][playerID].droppedFromRound) {
      counter += 1;
    } else {
      ID = playerID;
    }
  });
  if (counter === this.rooms[roomID].players.length - 1) {
    this.rooms[roomID].lastWinner = ID;
    return true;
  }
  return false;
};

Game.prototype.increaseCurrentPlayerIndex = function (roomID) {
  if (!Object.prototype.hasOwnProperty.call(this.rooms, roomID)) {
    console.log('bad roomID inside increaseCurrentPlayerIndex check');
    return false;
  }
  clearInterval(this.rooms[roomID].timePassedInterval);
  this.rooms[roomID].timePassed = 0;
  clearTimeout(this.rooms[roomID][this.rooms[roomID].playersOrder[this.rooms[roomID].currentPlayerIndex]].timeoutTimeout);
  let currentPlayerIndex = (this.rooms[roomID].currentPlayerIndex + 1) % this.rooms[roomID].playersOrder.length;
  if (currentPlayerIndex === 0) {
    this.rooms[roomID].round += 1;
  }
  let currentPlayerID = this.rooms[roomID].playersOrder[currentPlayerIndex];
  while (this.rooms[roomID][currentPlayerID].droppedFromRound) {
    currentPlayerIndex = (currentPlayerIndex + 1) % this.rooms[roomID].playersOrder.length;
    if (currentPlayerIndex === 0) {
      this.rooms[roomID].round += 1;
    }
    currentPlayerID = this.rooms[roomID].playersOrder[currentPlayerIndex];
  }
  this.rooms[roomID].currentPlayerIndex = currentPlayerIndex;
  const playerID = this.rooms[roomID].playersOrder[this.rooms[roomID].currentPlayerIndex];
  this.setTimeoutTimeout(playerID);
  return true;
};

Game.prototype.disconnectSocket = function (socket) {
  const roomID = this.getRoomForPlayerID(socket.id);
  if (roomID) {
    socket.leave(roomID);
    socket.to(roomID).send(jstr({
      type: 'chat',
      data: 'disconnected',
      nName: this.rooms[roomID][socket.id].nName,
      color: 'admin'
    }));
    socket.to(roomID).send(jstr({
      type: 'game',
      data: 'player-disconnect',
      id: socket.id
    }));
    this.rooms[roomID][socket.id].socket = null;
    this.rooms[roomID][socket.id].disconnected = true;
    if (!this.rooms[roomID].started) {
      this.rooms[roomID][socket.id].disconnectTimeout = this.disconnectFromLobby(roomID, socket);
    }
  }
};

Game.prototype.disconnectFromLobby = function (roomID, socket) {
  return setTimeout(() => {
    this.io.to(roomID).send(jstr({
      type: 'chat',
      data: 'left',
      nName: this.rooms[roomID][socket.id].nName,
      color: 'admin'
    }));
    this.io.to(roomID).send(jstr({
      type: 'game',
      data: 'player-left',
      id: socket.id,
      players: this.rooms[roomID].players
    }));
    this.deletePlayerFromRooms(socket.id);
    if (this.rooms[roomID].pendingStart === this.rooms[roomID].players.length) {
      this.beginGameForRoom(roomID);
    } else {
      this.pendingRooms.push(roomID);
    }
  }, this.disconnectTimeLimit);
};

Game.prototype.disconnectFromGame = function (roomID, socket) {
  return setTimeout(() => {
    const msg = {
      type: 'game',
      data: 'drop-disconnect',
      id: socket.id
    };
    const penalty = this.penalty('disconnect', socket.id);
    this.rooms[roomID][socket.id].score += penalty;
    if (penalty > 0) {
      msg.penalty = penalty;
    }
    socket.to(roomID).send(jstr(msg));
    if (socket.id === this.rooms[roomID].playersOrder[this.rooms[roomID].currentPlayerIndex]) {
      this.increaseCurrentPlayerIndex(roomID);
    }
    this.rooms[roomID][socket.id].droppedFromRound = true;
    if (this.checkForEndRoundCondition(roomID)) {
      this.endRoundForRoom(roomID);
    }
  }, this.disconnectTimeLimit);
};

Game.prototype.setTimeoutTimeout = function (playerID) {
  const roomID = this.getRoomForPlayerID(playerID);
  if (typeof roomID !== 'string') {
    console.log('Time out failed because of no room');
    return false;
  }
  clearInterval(this.rooms[roomID].timePassedInterval);
  this.rooms[roomID][playerID].timeoutTimeout = setTimeout(() => {
    clearInterval(this.rooms[roomID].timePassedInterval);
    this.rooms[roomID].timePassed = 0;
    const tmsg = {
      type: 'game',
      data: 'drop-timeout',
      id: playerID
    };
    const penalty = this.penalty('timeout', playerID);
    this.rooms[roomID][playerID].score += penalty;
    if (penalty > 0) {
      tmsg.penalty = penalty;
    }
    this.io.to(roomID).send(jstr(tmsg));
    if (this.rooms[roomID][playerID]) {
      this.rooms[roomID][playerID].droppedFromRound = true;
    }
    if (this.checkForEndRoundCondition(roomID)) {
      this.endRoundForRoom(roomID);
    } else {
      this.increaseCurrentPlayerIndex(roomID);
    }
  }, this.timeoutTimeLimit - this.rooms[roomID].timePassed);
  this.rooms[roomID].timePassedInterval = setInterval(() => {
    if (this.rooms[roomID]) {
      this.rooms[roomID].timePassed += 1000;
    }
  }, 1000);
  return true;
};

Game.prototype.handleGameSocket = function (socket, nName) {
  let reconnectID = null;
  let roomID = null;
  let success = false;
  if (socket.request.headers.cookie) {
    if (socket.request.headers.cookie) {
      reconnectID = getIoCookie(socket.request.headers.cookie);
    }
    roomID = this.getRoomForPlayerID(reconnectID);
  }
  if (typeof this.getRoomForPlayerID(socket.id) === 'string') {
    console.log('already connected');
    return false;
  } else if (reconnectID && roomID) {
    success = this.updatePlayerIdUponReconnect(reconnectID, roomID, socket, nName);
  } else if (this.pendingRooms.length !== 0) {
    success = this.appendPlayerToRoom(socket);
  } else if (Object.keys(this.rooms).length === 0 || (Object.prototype.hasOwnProperty.call(this.rooms, this.lastRoom) && this.rooms[this.lastRoom].started)) {
    success = this.initializeRoom(socket);
  } else {
    success = this.appendPlayerToRoom(socket);
  }
  if (success) {
    socket.leave('allchat');
    roomID = this.getRoomForPlayerID(socket.id);
    if (this.rooms[roomID].started) {
      if (nName) {
        this.rooms[roomID][socket.id].nName = nName;
      }
      this.rooms[roomID].playersOrder = this.getPlayersOrder(roomID);
      socket.to(roomID).send(jstr({
        type: 'chat',
        data: 'reconnected',
        nName: this.rooms[roomID][socket.id].nName,
        color: 'admin'
      }));
      socket.to(roomID).send(jstr({
        type: 'game',
        data: 'player-reconnect',
        oldID: reconnectID,
        id: socket.id,
        nName: this.rooms[roomID][socket.id].nName,
        players: this.rooms[roomID].players,
        playersOrder: this.rooms[roomID].playersOrder
      }));
      const msg = {
        type: 'game',
        data: 'reconnect',
        hand: this.rooms[roomID][socket.id].hand,
        toss: this.rooms[roomID][socket.id].tossedCard,
        joker: this.rooms[roomID].jokerCard,
        players: this.rooms[roomID].players,
        playersOrder: this.rooms[roomID].playersOrder,
        currentPlayerIndex: this.rooms[roomID].currentPlayerIndex,
        id: socket.id,
        dropped: this.rooms[roomID][socket.id].droppedFromRound,
        scores: this.getPlayerScores(roomID),
        timer: this.timeoutTimeLimit - this.rooms[roomID].timePassed - 1000
      };
      const names = [];
      this.rooms[roomID].players.forEach((playerID) => {
        names.push(this.rooms[roomID][playerID].nName);
      });
      msg.nNames = names;
      if (this.rooms[roomID].discardPile.length > 0) {
        msg.discardPile = this.rooms[roomID].discardPile;
      }
      const playerIDinQueue = this.rooms[roomID].playersOrder.indexOf(socket.id);
      if (playerIDinQueue === this.rooms[roomID].currentPlayerIndex) {
        msg.turn = true;
        if (this.rooms[roomID].currentPlayerIndex === playerIDinQueue && !this.rooms[roomID].showingStage) {
          this.setTimeoutTimeout(socket.id);
        }
      }
      const droppedPlayers = [];
      this.rooms[roomID].players.forEach((playerID) => {
        if (this.rooms[roomID][playerID].droppedFromRound) {
          droppedPlayers.push(playerID);
        }
      });
      msg.droppedPlayers = droppedPlayers;
      msg.showingStage = this.rooms[roomID].showingStage;
      socket.send(jstr(msg));
    } else {
      if (nName) {
        this.rooms[roomID][socket.id].nName = nName;
      }
      socket.to(roomID).send(jstr({
        type: 'chat',
        data: 'connected',
        nName: this.rooms[roomID][socket.id].nName,
        color: 'admin'
      }));
      socket.to(roomID).send(jstr({
        type: 'game',
        data: 'player-connect',
        oldID: reconnectID,
        id: socket.id,
        nName: this.rooms[roomID][socket.id].nName,
        players: this.rooms[roomID].players
      }));
      const msg = {
        type: 'game',
        data: 'connect',
        id: socket.id,
        players: this.rooms[roomID].players
      };
      const names = [];
      this.rooms[roomID].players.forEach((playerID) => {
        names.push(this.rooms[roomID][playerID].nName);
      });
      msg.nNames = names;
      socket.send(jstr(msg));

      let disconnectedPlayers = false;
      this.rooms[roomID].players.forEach((playerID) => {
        if (this.rooms[roomID][playerID].disconnected) {
          socket.send(jstr({
            type: 'game',
            data: 'player-disconnect',
            id: playerID
          }));
          disconnectedPlayers = true;
        }
      });
      if (this.rooms[roomID].players.length === this.roomSize && !disconnectedPlayers) {
        this.beginGameForRoom(roomID);
      }
    }
  } else {
    socket.send(jstr({
      type: 'error',
      data: 'Appending player to game issue'
    }));
  }
  return true;
};

Game.prototype.playerPending = function (socket) {
  const roomID = this.getRoomForPlayerID(socket.id);
  if (typeof roomID !== 'string') {
    return false;
  }
  if (this.rooms[roomID][socket.id].pending) {
    return false;
  }
  this.rooms[roomID][socket.id].pending = true;
  this.rooms[roomID].pendingStart += 1;
  if (this.rooms[roomID].players.length > 1 && this.rooms[roomID].pendingStart === this.rooms[roomID].players.length) {
    this.beginGameForRoom(roomID);
  }
  return true;
};

Game.prototype.beginGameForRoom = function (roomID) {
  if (!Object.prototype.hasOwnProperty.call(this.rooms, roomID)) {
    return false;
  }
  if (this.rooms[roomID].lastWinner) {
    this.rooms[roomID].currentPlayerIndex = this.rooms[roomID].playersOrder.indexOf(this.rooms[roomID].lastWinner);
  }
  this.rooms[roomID].declaredCard = null;
  this.rooms[roomID].declaredRuns = {};
  this.rooms[roomID].discardPile = [];
  this.rooms[roomID].deck = this.getShuffledDeck(this.getNewDeck().concat(this.getNewDeck()));
  this.generateHands(roomID);
  this.rooms[roomID].jokerCard = this.rooms[roomID].deck.shift();
  this.rooms[roomID].started = true;
  this.rooms[roomID].round = 1;
  if (this.rooms[roomID].toss.length === 0) {
    this.rooms[roomID].players.forEach((playerID) => {
      const tossedCard = this.tossCard(roomID);
      this.rooms[roomID][playerID].tossedCard = tossedCard;
      this.rooms[roomID].toss.push(tossedCard);
    });
    this.rooms[roomID].playersOrder = this.getPlayersOrder(roomID);
    this.rooms[roomID].players.forEach((playerID) => {
      this.io.to(playerID).send(jstr({
        type: 'game',
        data: 'toss',
        toss: this.rooms[roomID].toss,
        tossed: this.rooms[roomID][playerID].tossedCard,
        players: this.rooms[roomID].players
      }));
    });
    setTimeout(() => {
      this.rooms[roomID].players.forEach((playerID) => {
        this.rooms[roomID][playerID].droppedFromRound = false;
        const msg = {
          type: 'game',
          data: 'start',
          hand: this.rooms[roomID][playerID].hand,
          toss: this.rooms[roomID][playerID].tossedCard,
          joker: this.rooms[roomID].jokerCard,
          playersOrder: this.rooms[roomID].playersOrder,
          currentPlayerIndex: this.rooms[roomID].currentPlayerIndex
        };
        if (playerID === this.rooms[roomID].playersOrder[this.rooms[roomID].currentPlayerIndex]) {
          msg.turn = true;
          this.setTimeoutTimeout(playerID);
        }
        this.io.to(playerID).send(jstr(msg));
        if (this.rooms[roomID][playerID].disconnected) {
          this.io.to(roomID).send(jstr({
            type: 'game',
            data: 'player-disconnect',
            id: playerID
          }));
          clearTimeout(this.rooms[roomID][playerID].disconnectTimeout);
        }
      });
    }, 5000);
  } else {
    this.rooms[roomID].players.forEach((playerID) => {
      this.rooms[roomID][playerID].droppedFromRound = false;
      const msg = {
        type: 'game',
        data: 'start',
        hand: this.rooms[roomID][playerID].hand,
        toss: this.rooms[roomID][playerID].tossedCard,
        joker: this.rooms[roomID].jokerCard,
        playersOrder: this.rooms[roomID].playersOrder,
        currentPlayerIndex: this.rooms[roomID].currentPlayerIndex
      };
      if (playerID === this.rooms[roomID].playersOrder[this.rooms[roomID].currentPlayerIndex]) {
        msg.turn = true;
        this.setTimeoutTimeout(playerID);
      }
      this.io.to(playerID).send(jstr(msg));
      if (this.rooms[roomID][playerID].disconnected) {
        this.io.to(roomID).send(jstr({
          type: 'game',
          data: 'player-disconnect',
          id: playerID
        }));
        clearTimeout(this.rooms[roomID][playerID].disconnectTimeout);
      }
    });
  }
  this.rooms[roomID].showingStage = false;
  return true;
};

Game.prototype.endRoundForRoom = function (roomID, winnerID) {
  if (!Object.prototype.hasOwnProperty.call(this.rooms, roomID)) {
    return false;
  }
  this.rooms[roomID].timePassed = 0;
  clearInterval(this.rooms[roomID].timePassedInterval);
  this.rooms[roomID].players.forEach((playerID) => {
    clearTimeout(this.rooms[roomID][playerID].timeoutTimeout);
  });
  if (winnerID) {
    const scores = {};
    const losers = [];
    const promises = [];
    const points = {
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      '10': 10,
      'jack': 10,
      'queen': 10,
      'king': 10,
      'ace': 10,
      'joker': 0
    };
    if (this.rooms[roomID][winnerID].socket) {
      this.rooms[roomID][winnerID].socket.send(jstr({
        type: 'game',
        data: 'show-success',
        id: winnerID
      }));
    }
    this.rooms[roomID].players.forEach((playerID) => {
      if (this.rooms[roomID][playerID].droppedFromRound && this.rooms[roomID][playerID].socket) {
        this.rooms[roomID][playerID].socket.send(jstr({
          type: 'game',
          data: 'show-success',
          id: playerID
        }));
      }
    });
    this.rooms[roomID].players.forEach((playerID) => {
      const socket = this.rooms[roomID][playerID].socket;
      if (playerID !== winnerID && !this.rooms[roomID][playerID].droppedFromRound) {
        promises.push(new Promise((res) => {
          if (socket) {
            socket.send(jstr({
              type: 'game',
              data: 'calculate-scores',
              id: winnerID
            }), (returnMessage) => {
              clearTimeout(this.rooms[roomID][playerID].showTimeout);
              const data = JSON.parse(returnMessage);
              let scoreArray = [];
              data.runs.forEach((run) => {
                if (!this.checkSequence(run, roomID) && !this.checkSet(run, roomID)) {
                  scoreArray = scoreArray.concat(run);
                }
              });
              let calculatedScore = 0;
              scoreArray.forEach((card) => {
                Object.keys(points).forEach((cardInPointsObject) => {
                  if (card.indexOf(cardInPointsObject) !== -1) {
                    calculatedScore += points[cardInPointsObject];
                  }
                });
              });
              this.io.to(roomID).send(jstr({
                type: 'game',
                data: 'show-result',
                id: playerID,
                runs: data.runs,
                score: calculatedScore
              }));
              res([playerID, calculatedScore]);
            });
            this.rooms[roomID][playerID].showTimeout = setTimeout(() => {
              let uPlayerID = playerID;
              while (Object.prototype.hasOwnProperty.call(this.rooms[roomID].poolOfReconnectedIDs, uPlayerID)) {
                uPlayerID = this.rooms[roomID].poolOfReconnectedIDs[uPlayerID];
              }
              const penalty = this.penalty('show', uPlayerID);
              this.io.to(roomID).send(jstr({
                type: 'game',
                data: 'show-result',
                id: uPlayerID,
                runs: [],
                score: penalty
              }));
              res([uPlayerID, penalty]);
            }, 60000);
          } else {
            console.log('penalty in winner calc');
            const penalty = this.penalty('show', playerID);
            this.io.to(roomID).send(jstr({
              type: 'game',
              data: 'show-result',
              id: playerID,
              runs: [],
              score: penalty
            }));
            res([playerID, penalty]);
          }
        }));
      }
    });
    Promise.all(promises).then((playerScores) => {
      playerScores.forEach((score) => {
        let playerID = score[0];
        while (Object.prototype.hasOwnProperty.call(this.rooms[roomID].poolOfReconnectedIDs, playerID)) {
          playerID = this.rooms[roomID].poolOfReconnectedIDs[playerID];
        }
        this.rooms[roomID][playerID].score += score[1];
      });
      this.rooms[roomID].players.forEach((playerID) => {
        scores[playerID] = this.rooms[roomID][playerID].score;
        if (this.rooms[roomID][playerID].score >= this.scoreLimit) {
          losers.push(playerID);
          if (this.rooms[roomID][playerID] && this.rooms[roomID][playerID].socket) {
            this.rooms[roomID][playerID].socket.leave(roomID);
            this.rooms[roomID][playerID].socket.join('allchat');
            this.rooms[roomID][playerID].socket.send(jstr({
              type: 'game',
              data: 'you-lost',
              score: scores[playerID]
            }));
          }
          this.deletePlayerFromRooms(playerID);
        }
      });
      const msg = {
        type: 'game',
        data: 'round-end-data',
        scores,
        losers
      };
      this.io.to(roomID).send(jstr(msg));
      this.rooms[roomID].lastWinner = winnerID;
      if (this.rooms[roomID].players.length === 1) {
        if (this.rooms[roomID][this.rooms[roomID].players[0]].socket) {
          this.rooms[roomID][this.rooms[roomID].players[0]].socket.send(jstr({
            type: 'game',
            data: 'you-won'
          }));
        }
        this.deleteGameRoom(roomID);
      } else {
        setTimeout(() => {
          this.beginGameForRoom(roomID);
        }, 10000);
      }
    }).catch((reason) => {
      console.log(`endRoundRejected with ${reason}`);
      this.endRoundForRoom(roomID, winnerID);
    });
  } else {
    const scores = {};
    const losers = [];
    this.rooms[roomID].players.forEach((playerID) => {
      scores[playerID] = this.rooms[roomID][playerID].score;
      if (this.rooms[roomID][playerID].score >= this.scoreLimit) {
        losers.push(playerID);
        if (this.rooms[roomID][playerID] && this.rooms[roomID][playerID].socket) {
          this.rooms[roomID][playerID].socket.leave(roomID);
          this.rooms[roomID][playerID].socket.join('allchat');
          this.rooms[roomID][playerID].socket.send(jstr({
            type: 'game',
            data: 'you-lost',
            score: scores[playerID]
          }));
        }
        this.deletePlayerFromRooms(playerID);
      }
    });
    const msg = {
      type: 'game',
      data: 'round-end-data',
      scores,
      losers
    };
    this.io.to(roomID).send(jstr(msg));
    if (this.rooms[roomID].players.length === 1) {
      if (this.rooms[roomID][this.rooms[roomID].players[0]].socket) {
        this.rooms[roomID][this.rooms[roomID].players[0]].socket.send(jstr({
          type: 'game',
          data: 'you-won'
        }));
      }
      this.deleteGameRoom(roomID);
    } else {
      return this.beginGameForRoom(roomID);
    }
  }
  return true;
};

Game.prototype.deleteGameRoom = function (roomID) {
  if (!Object.prototype.hasOwnProperty.call(this.rooms, roomID)) {
    return false;
  }
  this.rooms[roomID].players.forEach((playerID) => {
    if (this.rooms[roomID][playerID].socket) {
      this.rooms[roomID][playerID].socket.leave(roomID);
      this.rooms[roomID][playerID].socket.join('allchat');
    }
  });
  delete this.rooms[roomID];
  return true;
};

Game.prototype.initializeRoom = function (socket) {
  const playerID = socket.id;
  if (Object.keys(this.rooms).length === this.roomsLimit) {
    return false;
  }
  if (Object.keys(this.rooms).length > 0) {
    let roomNumber = ((this.lastRoom + 1) % this.roomsLimit);
    let counter = 0;
    try {
      while (Object.prototype.hasOwnProperty.call(this.rooms, roomNumber)) {
        roomNumber = ((roomNumber + 1) % this.roomsLimit);
        counter += 1;
        if (counter > 2000) {
          throw new Error('initializeRoom got looped up');
        }
      }
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
      return false;
    }
    this.lastRoom = roomNumber;
  } else {
    this.lastRoom = 0;
  }
  const roomID = this.lastRoom.toString();
  socket.join(roomID);
  this.rooms[roomID] = {};
  this.rooms[roomID].id = roomID;
  this.rooms[roomID].pendingStart = 0;
  this.rooms[roomID].lastWinner = false;
  this.rooms[roomID].currentPlayerIndex = 0;
  this.rooms[roomID].round = 1;
  this.rooms[roomID].started = false;
  this.rooms[roomID].scoreLimit = this.scoreLimit;
  this.rooms[roomID].deck = [];
  this.rooms[roomID].discardPile = [];
  this.rooms[roomID].jokerCard = null;
  this.rooms[roomID].toss = [];
  this.rooms[roomID].playersOrder = [];
  this.rooms[roomID].players = [];
  this.rooms[roomID].timePassed = 0;
  this.rooms[roomID].showingStage = false;
  this.rooms[roomID].declaredCard = null;
  this.rooms[roomID].declaredRuns = {};
  this.rooms[roomID].poolOfReconnectedIDs = {};
  // Initialize first player
  this.rooms[roomID].players.push(playerID);
  this.rooms[roomID][playerID] = {};
  this.rooms[roomID][playerID].hand = [];
  this.rooms[roomID][playerID].score = 0;
  this.rooms[roomID][playerID].tossedCard = null;
  this.rooms[roomID][playerID].nName = 'John Doe';
  this.rooms[roomID][playerID].socket = socket;
  this.rooms[roomID][playerID].pending = false;
  this.rooms[roomID][playerID].droppedFromRound = false;
  this.rooms[roomID][playerID].disconnected = false;
  this.rooms[roomID][playerID].disconnectTimeout = false;
  this.rooms[roomID][playerID].timeoutTimeout = false;
  this.rooms[roomID][playerID].showTimeout = false;
  return true;
};

Game.prototype.appendPlayerToRoom = function (socket) {
  const playerID = socket.id;
  let roomID = null;
  if (this.pendingRooms.length !== 0) {
    roomID = this.pendingRooms.shift();
  } else {
    roomID = this.lastRoom.toString();
  }
  if (!Object.prototype.hasOwnProperty.call(this.rooms, roomID) || this.rooms[roomID].players.length === this.roomSize || this.rooms[roomID].started) {
    return this.initializeRoom(socket);
  }
  socket.join(roomID);
  this.rooms[roomID].players.push(playerID);
  this.rooms[roomID][playerID] = {};
  this.rooms[roomID][playerID].hand = [];
  this.rooms[roomID][playerID].score = 0;
  this.rooms[roomID][playerID].tossedCard = null;
  this.rooms[roomID][playerID].nName = 'John Doe';
  this.rooms[roomID][playerID].socket = socket;
  this.rooms[roomID][playerID].pending = false;
  this.rooms[roomID][playerID].droppedFromRound = false;
  this.rooms[roomID][playerID].disconnected = false;
  this.rooms[roomID][playerID].disconnectTimeout = false;
  this.rooms[roomID][playerID].timeoutTimeout = false;
  this.rooms[roomID][playerID].showTimeout = false;
  return true;
};

Game.prototype.deletePlayerFromRooms = function (playerID) {
  const roomID = this.getRoomForPlayerID(playerID);
  if (typeof roomID !== 'string') {
    return false;
  }
  this.rooms[roomID].players = deleteElementFromArray(playerID, this.rooms[roomID].players);
  if (this.rooms[roomID].playersOrder.length !== 0) {
    this.rooms[roomID].playersOrder = deleteElementFromArray(playerID, this.rooms[roomID].playersOrder);
  }
  if (Object.prototype.hasOwnProperty.call(this.rooms[roomID], playerID)) {
    delete this.rooms[roomID][playerID];
  }
  return true;
};

Game.prototype.updatePlayerIdUponReconnect = function (oldID, roomID, socket, nName) {
  if (!Object.prototype.hasOwnProperty.call(this.rooms, roomID)) {
    return false;
  }
  if (this.rooms[roomID].players.indexOf(oldID) === -1) {
    return this.handleGameSocket(socket, nName);
  }
  this.rooms[roomID][socket.id] = this.rooms[roomID][oldID];
  clearTimeout(this.rooms[roomID][socket.id].disconnectTimeout);
  clearTimeout(this.rooms[roomID][socket.id].timeoutTimeout);
  this.rooms[roomID][socket.id].disconnectTimeout = false;
  this.rooms[roomID].players.push(socket.id);
  this.rooms[roomID][socket.id].socket = socket;
  this.rooms[roomID][socket.id].disconnected = false;
  socket.join(roomID);
  if (this.rooms[roomID].playersOrder.length !== 0) {
    this.rooms[roomID].playersOrder = this.getPlayersOrder(roomID);
  }
  this.deletePlayerFromRooms(oldID);
  this.rooms[roomID].poolOfReconnectedIDs[oldID] = socket.id;
  return true;
};

Game.prototype.getRoomForPlayerID = function (playerID) {
  let room = false;
  Object.keys(this.rooms).forEach((roomID) => {
    if (this.rooms[roomID].players.indexOf(playerID) !== -1) {
      room = roomID;
    }
  });
  return room;
};

Game.prototype.getNewDeck = function () {
  const suits = ['S', 'H', 'D', 'C'];
  const delimiter = '-';
  const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
  const deck = [];
  cards.forEach((card) => {
    suits.forEach((suit) => {
      deck.push(suit + delimiter + card);
    });
  });
  deck.push('RED-joker');
  deck.push('BLACK-joker');
  return deck;
};

// Returns new array that was shuffled
Game.prototype.getShuffledDeck = function (deckToChange) {
  if (!Array.isArray(deckToChange)) {
    return false;
  }
  const deck = deckToChange.slice();
  let prevCard = deck[0];
  let currentCard = null;
  for (let i = 0; i < this.__shuffleVariable; i += 1) {
    const rand = Math.ceil(Math.random() * (deck.length - 1));
    currentCard = deck[rand];
    deck[rand] = prevCard;
    prevCard = currentCard;
  }
  deck[0] = prevCard;
  return deck;
};

Game.prototype.getRandomCardFromDeck = function (deck) {
  if (!Array.isArray(deck) || deck.length < 1) {
    return false;
  }
  return deck[Math.floor(Math.random() * deck.length)];
};

// Return a card for toss that wasn't used by any other player
Game.prototype.tossCard = function (roomID) {
  if (!Object.prototype.hasOwnProperty.call(this.rooms, roomID)) {
    return false;
  }
  let tossedCard = this.getRandomCardFromDeck(this.rooms[roomID].deck);
  while (this.rooms[roomID].toss.indexOf(tossedCard) !== -1) {
    tossedCard = this.getRandomCardFromDeck(this.rooms[roomID].deck);
  }
  return tossedCard;
};

Game.prototype.getPlayerScores = function (roomID) {
  if (!Object.prototype.hasOwnProperty.call(this.rooms, roomID)) {
    return false;
  }
  const scores = {};
  this.rooms[roomID].players.forEach((playerID) => {
    scores[playerID] = this.rooms[roomID][playerID].score;
  });
  return scores;
};

// Return array with queue of player ID's in which they will be playing
Game.prototype.getPlayersOrder = function (roomID) {
  if (!Object.prototype.hasOwnProperty.call(this.rooms, roomID)) {
    return false;
  }
  const cardOrder = {
    '2': 0,
    '3': 1,
    '4': 2,
    '5': 3,
    '6': 4,
    '7': 5,
    '8': 6,
    '9': 7,
    '10': 8,
    'jack': 9,
    'queen': 10,
    'king': 11,
    'ace': 12,
    'joker': 13
  };
  const suitOrder = {
    'C': 0,
    'D': 1,
    'H': 2,
    'S': 3,
    'BLACK': 4,
    'RED': 5
  };
  const playersOrder = this.rooms[roomID].players.slice().sort((a, b) => {
    const firstCard = this.rooms[roomID][a].tossedCard.split('-');
    const secondCard = this.rooms[roomID][b].tossedCard.split('-');
    if (cardOrder[firstCard[1]] > cardOrder[secondCard[1]]) {
      return -1;
    } else if (cardOrder[firstCard[1]] === cardOrder[secondCard[1]]) {
      if (suitOrder[firstCard[0]] > suitOrder[secondCard[0]]) {
        return -1;
      }
      return 1;
    }
    return 1;
  });
  return playersOrder;
};

// Generates new toss cards and sets new order in rooms[*room*].playersOrder
// TODO: check if this even needed
Game.prototype.reToss = function (roomID) {
  if (!Object.prototype.hasOwnProperty.call(this.rooms, roomID)) {
    return false;
  }
  this.rooms[roomID].toss = [];
  this.rooms[roomID].players.forEach((playerID) => {
    const tossedCard = this.tossCard(roomID);
    this.rooms[roomID][playerID].tossedCard = tossedCard;
    this.rooms[roomID].toss.push(tossedCard);
  });
  this.rooms[roomID].playersOrder = this.getPlayersOrder(roomID);
  return true;
};

Game.prototype.generateHands = function (roomID) {
  if (!Object.prototype.hasOwnProperty.call(this.rooms, roomID)) {
    return false;
  }
  this.rooms[roomID].players.forEach((playerID) => {
    this.rooms[roomID][playerID].hand = [];
    for (let i = 0; i < 13; i += 1) {
      this.rooms[roomID][playerID].hand.push(this.rooms[roomID].deck.shift());
    }
  });
  return true;
};

module.exports = function (config) {
  return new Game(config);
};
