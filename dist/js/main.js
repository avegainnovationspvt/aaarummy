'use strict';

var Game = function () {
  this.connected = false;
  this.started = false;
  this.token = null;
  this.nName = 'John Doe';
  this.pending = false;
  this.id = null;
  this.joker = null;
  this.selectedCard = null;
  this.selectedCards = [];
  this.draggedElement = null;
  this.playerIconElement = null;
  this.dropped = false;
  this.nextPlayerUIIndex = 0;
  this.playerUIIDs = ['west', 'north-west', 'north', 'north-east', 'east'];
  this.pendingUIIDs = [];
  this.players = {};
  this.playersIDs = [];
  this.playersOrder = [];
  this.currentPlayerIndex = 0;
  this.hand = [];
  this.scores = {};
  this.discardPile = [];
  this.timeLeft = 60000;
  this.timeoutTimer = null;
  this.cardDragTime = 0;
  this.cardDragInterval = null;
  this.cardDragExpanderUsed = false;
  this.callback = null;
  this.showingStage = false;
  this.playerShowed = false;
};

var game = new Game();

var io = io();

function isIE() {
  var ua = navigator.userAgent.toLowerCase();
  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }
  return false;
}

function toggleClass(element, classToToggle) {
  if (!element) {
    return false;
  }
  var classes = element.className.split(' ');
  if (classes.indexOf(classToToggle) === -1) {
    classes.push(classToToggle);
  } else {
    classes = classes.filter(function (item) {
      if (item === classToToggle) {
        return false;
      }
      return true;
    });
  }
  element.className = classes.join(' ');
}

function addClass(element, classToAdd) {
  if (!element) {
    return false;
  }
  if (element.className.indexOf(classToAdd) !== -1) {
    return true;
  }
  var classes = element.className.split(' ');
  classes.push(classToAdd);
  element.className = classes.join(' ');
}

function removeClass(element, classToRemove) {
  if (!element) {
    return false;
  }
  if (element.className.indexOf(classToRemove) === -1) {
    return true;
  }
  var classes = element.className.split(' ');
  if (classes.indexOf(classToRemove) !== -1) {
    classes = classes.filter(function (item) {
      if (item === classToRemove) {
        return false;
      }
      return true;
    });
  }
  element.className = classes.join(' ');
}

function hideElement(element) {
  var hidden = 'visibility-none';
  var display = 'display-none';
  addClass(element, hidden);
  setTimeout(function () {
    addClass(element, display);
  }, 500);
}

function revealElement(element) {
  var hidden = 'visibility-none';
  var display = 'display-none';
  removeClass(element, display);
  removeClass(element, hidden);
}

function toggleSlideBottom(element) {
  var classes = element.className.split(' ');
  var hidden = 'visibility-none';
  var slided = 'slide-out-bottom';
  var display = 'display-none';
  if (classes.indexOf(slided) !== -1) {
    removeClass(element, display);
    removeClass(element, hidden);
    removeClass(element, slided);
  } else {
    addClass(element, slided);
    addClass(element, hidden);
  }
}

function toggleSlideUp(element) {
  var classes = element.className.split(' ');
  var hidden = 'visibility-none';
  var slided = 'slide-out-up';
  var display = 'display-none';
  if (classes.indexOf(slided) !== -1) {
    removeClass(element, display);
    removeClass(element, hidden);
    removeClass(element, slided);
  } else {
    addClass(element, slided);
    addClass(element, hidden);
  }
}

function appendChatMessage(msg) {
  var p = document.createElement('p');
  var container = document.querySelector('.chat-textarea');
  if (msg.nName) {
    p.textContent = msg.nName + ': ' + msg.data;
  } else {
    p.textContent = msg.data;
  }
  if (msg.color) {
    switch (msg.color) {
      case 'admin':
        p.style.color = 'red';
        break;
      default:
    }
  }
  container.appendChild(p);
  container.scrollTop = container.scrollHeight;
}

function sendChatMessage(socket, message) {
  var msg = {
    type: 'chat',
    data: message,
    nName: game.nName,
    token: game.token
  };
  socket.send(JSON.stringify(msg));
  msg.nName = 'Me';
  appendChatMessage(msg);
}

function getClassNameForCard(card) {
  var arr = card.split('-');
  var className = 'card-front card--' + arr[0].toLowerCase() + '-' + arr[1];
  return className;
}

function getCardFromClassName(cardBox) {
  var className = cardBox.children[1].className.split(' ')[1].split('-');
  return className[2].toUpperCase() + '-' + className[3];
}

function singleClicker(event) {
  if (game.selectedCard) {
    var index = -1;
    for (var i = 0, length = game.selectedCards.length; i < length; i += 1) {
      if (game.selectedCards[i].isSameNode(this)) {
        index = i;
      }
    }
    if (index !== -1) {
      game.selectedCards.splice(index, 1);
      removeClass(this, 'card-box--selected');
      if (game.selectedCard.isSameNode(this)) {
        if (game.selectedCards.length !== 0) {
          game.selectedCard = game.selectedCards[game.selectedCards.length - 1];
        } else {
          game.selectedCard = null;
        }
      }
    } else {
      game.selectedCard = this;
      game.selectedCards.push(this);
      addClass(this, 'card-box--selected');
    }
  } else {
    game.selectedCard = this;
    game.selectedCards.push(this);
    addClass(this, 'card-box--selected');
  }
  if (game.selectedCards.length === 0) {
    document.querySelector('.game-buttons-sort').textContent = 'sort';
  } else {
    document.querySelector('.game-buttons-sort').textContent = 'group';
  }
  var showButton = document.querySelector('.game-buttons-show');
  var discardButton = document.querySelector('.game-buttons-discard');
  if (io.id === game.playersOrder[game.currentPlayerIndex] && game.hand.length === 14 && game.selectedCard) {
    if (!game.showingStage) {
      removeClass(showButton, 'game-buttons--disabled');
      removeClass(discardButton, 'game-buttons--disabled');
    }
  } else if (!game.showingStage) {
    addClass(showButton, 'game-buttons--disabled');
    addClass(discardButton, 'game-buttons--disabled');
  }
}

function removeSigleClickers() {
  var cardBoxes = document.querySelectorAll('.card-box');
  var length = cardBoxes.length;
  for (var i = 0; i < length; i += 1) {
    cardBoxes[i].removeEventListener('click', singleClicker);
  }
}

function appendCardWithLabelForToss(card, name, element) {
  var cardBox = document.createElement('div');
  cardBox.className = 'card-box';
  var cardLabel = document.createElement('div');
  cardLabel.className = 'card-label';
  cardLabel.textContent = name + ':';
  cardBox.appendChild(cardLabel);
  var cardBack = document.createElement('div');
  cardBack.className = 'card-back';
  cardBox.appendChild(cardBack);
  var cardFront = document.createElement('div');
  cardFront.className = getClassNameForCard(card);
  cardBox.appendChild(cardFront);
  element.appendChild(cardBox);
}

function appendCard(card, element) {
  var cardBox = document.createElement('div');
  cardBox.className = 'card-box';
  var cardBack = document.createElement('div');
  cardBack.className = 'card-back';
  cardBox.appendChild(cardBack);
  var cardFront = document.createElement('div');
  cardFront.className = getClassNameForCard(card);
  cardBox.draggable = true;
  cardBox.ondragstart = function (event) {
    var target = event.target || event.srcElement;
    if (event.dataTransfer) {
      event.dataTransfer.setData('text', '');
    }
    game.draggedElement = target;
  };
  cardBox.ondragend = function (event) {
    game.draggedElement = null;
  };
  cardBox.addEventListener('click', singleClicker);
  cardBox.appendChild(cardFront);
  element.appendChild(cardBox);
}

function appendPostShowBlock(playerID, runs, score, element) {
  var playerContainer = document.createElement('div');
  playerContainer.className = 'popup-show-container-player';
  var nameContainer = document.createElement('div');
  if (playerID === io.id) {
    nameContainer.textContent = game.nName + ':';
  } else {
    if (game.playersIDs.indexOf(playerID) !== -1) {
      nameContainer.textContent = game.players[playerID].nName + ':';
    }
    nameContainer.textContent = 'John Doe:';
  }
  nameContainer.className = 'popup-show-container-player-label';
  playerContainer.appendChild(nameContainer);
  var scoreContainer = document.createElement('div');
  scoreContainer.textContent = ' +' + score + '. Score: ' + game.scores[playerID];
  scoreContainer.className = 'popup-show-container-player-score';
  playerContainer.appendChild(scoreContainer);
  if (runs.length !== 0) {
    runs.forEach(function (run) {
      var setContainer = document.createElement('div');
      setContainer.className = 'popup-show-container-player-set';
      run.forEach(function (card) {
        appendCard(card, setContainer);
        setContainer.lastChild.draggable = false;
        setContainer.lastChild.removeEventListener('click', singleClicker);
      });
      playerContainer.appendChild(setContainer);
    });
  } else {
    var setContainer = document.createElement('div');
    setContainer.className = 'popup-show-container-player-set';
    playerContainer.appendChild(setContainer);
  }
  element.appendChild(playerContainer);
}

function setNewWidthForGroupContainer(groupContainer, length) {
  var width = 0;
  if (length > 8) {
    width = 60 * length;
  } else if (length > 4) {
    width = 70 * length;
  } else {
    width = 80 * length;
  }
  groupContainer.style.width = width + 'px';
}

function getCardsFromLocalStorage() {
  return JSON.parse(window.localStorage.getItem('runs'));
}

function updateCardsInLocalStorage() {
  var runs = [];
  var groups = document.querySelectorAll('.card-container-group');
  for (var i = 0, groupQuantity = groups.length; i < groupQuantity; i += 1) {
    runs[i] = [];
    for (var j = 0, cardsQuantity = groups[i].children.length; j < cardsQuantity; j += 1) {
      runs[i].push(getCardFromClassName(groups[i].children[j]));
    }
  }
  window.localStorage.setItem('runs', JSON.stringify(runs));
}

function appendGroup(run, element, fullNodesIndicator) {
  if (!Array.isArray(run)) {
    return false;
  }
  var groupContainer = document.createElement('div');
  groupContainer.className = 'card-container-group';
  setNewWidthForGroupContainer(groupContainer, run.length);
  if (fullNodesIndicator) {
    run.forEach(function (cardBox) {
      groupContainer.appendChild(cardBox);
    });
  } else {
    run.forEach(function (card) {
      appendCard(card, groupContainer);
    });
  }
  groupContainer.addEventListener('dragover', function (event) {
    const grid = new Muuri(".card-container-group", {
    dragEnabled: false,
    showDuration: 0
    });
  });
  groupContainer.addEventListener('drop', function(event) {
    const grid = new Muuri(".card-container-group", {
      dragEnabled: false,
      showDuration: 0
      // dragAxis: 'y'
    });
    if (game.draggedElement) {

      if (game.selectedCard) {
        var groupLength = game.selectedCard.parentNode.parentNode.children.length;
        for (var i = 0; i < groupLength; i += 1) {
          var length = game.selectedCard.parentNode.parentNode.children[i].children.length;
          for (var j = 0; j < length; j += 1) {
            removeClass(game.selectedCard.parentNode.parentNode.children[i].children[j], 'card-box--selected');
          }
        }
      }
      game.selectedCards = [];
      game.selectedCard = null;
      addClass(document.querySelector('.game-buttons-discard'), 'game-buttons--disabled');
      if (!game.showingStage) {
        addClass(document.querySelector('.game-buttons-show'), 'game-buttons--disabled');
      }
      document.querySelector('.game-buttons-sort').textContent = 'sort';

      var target = event.target || event.srcElement;
      var counter = 0;
      if (target.className.indexOf('card-container') !== -1) {
        if (target.className.indexOf('card-container-group') !== -1) {
          target = target.lastChild;
        } else {
          target = target.lastChild.lastChild;
        }
      } else {
        while (counter < 3 && target.className.indexOf('card-box') === -1) {
          target = target.parentNode;
        }
      }
      var cardQuantityOffset = 0;
      if (!target.parentNode.isSameNode(game.draggedElement.parentNode)) {
        cardQuantityOffset = 1;
      }
      setNewWidthForGroupContainer(target.parentNode, target.parentNode.children.length + cardQuantityOffset);
      setNewWidthForGroupContainer(game.draggedElement.parentNode, game.draggedElement.parentNode.children.length - cardQuantityOffset);

      if (game.draggedElement.parentNode.children.length === 1 && !game.draggedElement.parentNode.isSameNode(target.parentNode)) {
        game.draggedElement.parentNode.parentNode.removeChild(game.draggedElement.parentNode);
      }

      var rect = target.getBoundingClientRect();
      var offsetX = event.clientX - rect.left;
      /* var offsetY = event.clientY - rect.top;
      var elementWidth = rect.right - rect.left;
      var elementHeight = rect.bottom - rect.top; */
      if (offsetX < 50) {
        target.parentNode.insertBefore(game.draggedElement, target);
      } else if (target.nextSibling) {
        target.parentNode.insertBefore(game.draggedElement, target.nextSibling);
      } else {
        target.parentNode.appendChild(game.draggedElement);
      }
      updateCardsInLocalStorage();
    }
  });
  element.appendChild(groupContainer);
}

function generateHand(runs) {
  if (!Array.isArray(runs)) {
    return false;
  }
  var cardContainer = document.querySelector('.card-container');
  cardContainer.innerHTML = '';
  runs.forEach(function (run) {
    if (run.length !== 0) {
      appendGroup(run, cardContainer);
    }
  });
}

function initializePiles() {
  var container = document.querySelector('.deck-container');
  var joker = document.createElement('div');
  joker.className = getClassNameForCard(game.joker) + ' joker';
  container.children[0].appendChild(joker);
  var cardBack = document.createElement('div');
  cardBack.className = 'card-back';
  container.children[0].appendChild(cardBack);
  cardBack = document.createElement('div');
  cardBack.className = 'card-back';
  container.children[0].appendChild(cardBack);
  if (game.discardPile.length > 0) {
    for (var i = 0, length = game.discardPile.length; i < length; i += 1) {
      var card = game.discardPile.pop();
      appendCard(card, container.children[1]);
    }
  }
}

function popError(error) {
  var popUpElement = document.querySelector('.success-pop-up');
  var errorElement = document.querySelector('.error-pop-up');
  if (errorElement.className.indexOf('visibility-none') !== -1 && popUpElement.className.indexOf('visibility-none') !== -1) {
    errorElement.innerHTML = '';
    var p = document.createElement('p');
    p.textContent = error;
    errorElement.appendChild(p);
    toggleSlideUp(errorElement);
    setTimeout(function () {
      toggleSlideUp(errorElement);
    }, 3000);
  } else {
    setTimeout(function () {
      popError(error);
    }, 1000);
  }
}

function popMessage(message) {
  var popUpElement = document.querySelector('.success-pop-up');
  var errorElement = document.querySelector('.error-pop-up');
  if (errorElement.className.indexOf('visibility-none') !== -1 && popUpElement.className.indexOf('visibility-none') !== -1) {
    popUpElement.innerHTML = '';
    var p = document.createElement('p');
    p.textContent = message;
    popUpElement.appendChild(p);
    toggleSlideUp(popUpElement);
    setTimeout(function () {
      toggleSlideUp(popUpElement);
    }, 3000);
  } else {
    setTimeout(function () {
      popMessage(message);
    }, 1000);
  }
}

function updatePlayerUI(playerID) {
  var UIContainer = document.getElementById(game.players[playerID].UIID);
  removeClass(UIContainer, 'player-container--disconnected');
  if (game.scores[playerID]) {
    UIContainer.children[0].children[1].textContent = 'score: ' + game.scores[playerID];
  }
  UIContainer.children[0].children[2].textContent = game.players[playerID].nName;
}

function playerUIDelete(playerID) {
  var UIContainer = document.getElementById(game.players[playerID].UIID);
  UIContainer.innerHTML = '';
  UIContainer.className = 'player-container';
  if (game.pendingUIIDs.indexOf() === -1) {
    game.pendingUIIDs.push(game.players[playerID].UIID);
  }
}

function playerUIDisconnect(playerID) {
  addClass(document.getElementById(game.players[playerID].UIID), 'player-container--disconnected');
}

function appendPlayerUI(ID, playerID) {
  var UIContainer = document.getElementById(ID);
  var playerContainer = document.createElement('div');
  playerContainer.className = 'player-container-icon';
  var playerTimer = document.createElement('div');
  playerTimer.className = 'player-container-icon-timer';
  playerContainer.appendChild(playerTimer);
  var playerScore = document.createElement('div');
  playerScore.className = 'player-container-icon-score';
  playerScore.textContent = 'score: 0';
  playerContainer.appendChild(playerScore);
  var playerName = document.createElement('div');
  playerName.className = 'player-container-icon-name';
  playerName.textContent = game.players[playerID].nName;
  playerContainer.appendChild(playerName);
  playerContainer.draggable = true;
  playerContainer.ondragstart = function (event) {
    var target = event.target || event.srcElement;
    event.dataTransfer.setData('text', '');
    game.playerIconElement = target;
  };
  UIContainer.className += ' player-container--connected';
  UIContainer.appendChild(playerContainer);
  if (game.players[playerID].disconnected) {
    playerUIDisconnect(playerID);
  }
}

function generatePlayerUI(playerID, oldID) {
  if (oldID && game.players[oldID]) {
    updatePlayerUI(playerID);
  } else {
    var id = game.playerUIIDs[game.nextPlayerUIIndex];
    if (game.pendingUIIDs.length !== 0) {
      id = game.pendingUIIDs.shift();
    }
    game.players[playerID].UIID = id;
    appendPlayerUI(id, playerID);
    game.nextPlayerUIIndex += 1;
    if (game.started) {
      document.getElementById(game.players[playerID].UIID).children[0].children[1].textContent = 'score: ' + game.scores[playerID];
    }
  }
  if (game.nextPlayerUIIndex > 5) {
    popError('TOO MUCH UIIDs');
  }
}

function gameEndCleanUp() {
  if (game.playersOrder[game.currentPlayerIndex] === io.id) {
    var timerContainer = document.querySelector('.global-timer');
    toggleSlideUp(timerContainer);
    removeClass(timerContainer, 'global-timer--yellow');
    removeClass(timerContainer, 'global-timer--red');
    timerContainer.textContent = '0:00';
  }
  toggleSlideUp(document.querySelector('.global-scores'));
  toggleSlideBottom(document.querySelector('.game-buttons'));
  hideElement(document.querySelector('.card-container'));
  revealElement(document.querySelector('.connect'));
  game.playersIDs.forEach(function (playerID) {
    if (io.id !== playerID) {
      playerUIDelete(playerID);
    }
  });
  clearInterval(game.timeoutTimer);
  game.connected = false;
  game.started = false;
  game.pending = false;
  game.joker = null;
  game.selectedCard = null;
  game.selectedCards = [];
  game.draggedElement = null;
  game.playerIconElement = null;
  game.dropped = false;
  game.nextPlayerUIIndex = 0;
  game.pendingUIIDs = [];
  game.players = {};
  game.playersIDs = [];
  game.playersOrder = [];
  game.currentPlayerIndex = 0;
  game.hand = [];
  game.scores = {};
  game.discardPile = [];
  game.timeLeft = 60000;
  game.showingStage = false;
  document.querySelector('.global-scores').textContent = 'Score: 0';
  var container = document.querySelector('.deck-container');
  container.children[0].innerHTML = '';
  container.children[1].innerHTML = '';
  document.querySelector('.show-declared').innerHTML = '';
  setTimeout(function () {
    hideElement(document.querySelector('.popup-show-container'));
  }, 2000);
}

function setTimeoutTimer() {
  clearInterval(game.timeoutTimer);
  removeClass(document.querySelector('.global-timer'), 'global-timer--yellow');
  removeClass(document.querySelector('.global-timer'), 'global-timer--red');
  if (document.querySelector('.global-timer').className.indexOf('visibility-none') === -1) {
    toggleSlideUp(document.querySelector('.global-timer'));
  }
  var timerContainer = null;
  if (game.playersOrder[game.currentPlayerIndex] !== io.id) {
    timerContainer = document.getElementById(game.players[game.playersOrder[game.currentPlayerIndex]].UIID).children[0].children[0];
  } else {
    timerContainer = document.querySelector('.global-timer');
    toggleSlideUp(timerContainer);
  }
  var minutes = Math.floor(game.timeLeft / 60000);
  var seconds = (game.timeLeft - (minutes * 60000)) / 1000;
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  var message = minutes + ':' + seconds;
  timerContainer.textContent = message;
  game.timeoutTimer = setInterval(function () {
    game.timeLeft -= 1000;
    var minutes = Math.floor(game.timeLeft / 60000);
    var seconds = (game.timeLeft - (minutes * 60000)) / 1000;
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    var message = minutes + ':' + seconds;
    timerContainer.textContent = message;
    if (game.playersOrder[game.currentPlayerIndex] === io.id && game.timeLeft === 30000) {
      addClass(timerContainer, 'global-timer--yellow');
    }
    if (game.playersOrder[game.currentPlayerIndex] === io.id && game.timeLeft === 10000) {
      removeClass(timerContainer, 'global-timer--yellow');
      addClass(timerContainer, 'global-timer--red');
    }
    if (game.timeLeft === 0) {
      clearInterval(game.timeoutTimer);
      timerContainer.textContent = '0:00';
    }
  }, 1000);
}

function increaseCurrentIndex() {
  var UIContainer;
  if (game.playersOrder[game.currentPlayerIndex] !== io.id) {
    UIContainer = document.getElementById(game.players[game.playersOrder[game.currentPlayerIndex]].UIID);
    removeClass(UIContainer, 'player-container--move');
  }
  game.currentPlayerIndex = (game.currentPlayerIndex + 1) % game.playersOrder.length;
  // Iterates over dropped players
  while (game.playersOrder[game.currentPlayerIndex] !== io.id && game.players[game.playersOrder[game.currentPlayerIndex]].dropped) {
    game.currentPlayerIndex = (game.currentPlayerIndex + 1) % game.playersOrder.length;
  }
  // Iterates over you if dropped
  if (game.playersOrder[game.currentPlayerIndex] === io.id && game.dropped) {
    increaseCurrentIndex();
  }
  if (game.playersOrder[game.currentPlayerIndex] !== io.id) {
    UIContainer = document.getElementById(game.players[game.playersOrder[game.currentPlayerIndex]].UIID);
    addClass(UIContainer, 'player-container--move');
  }
  game.timeLeft = 60000;
  setTimeoutTimer();
}

function discardDragged() {
  var elements = document.querySelector('.card-container');
  var groupsLength = elements.children.length;
  var length = 0;
  for (var i = 0; i < groupsLength; i += 1) {
    length += elements.children[i].children.length;
  }
  if (length !== 14) {
    popError('Not enough cards in your hand');
    return false;
  }
  for (var i = 0; i < groupsLength; i += 1) {
    for (var j = 0; j < elements.children[i].children.length; j += 1) {
      removeClass(elements.children[i].children[j], 'card-box--selected');
    }
  }
  game.selectedCard = game.draggedElement;
  var msg = {
    type: 'game',
    data: 'discard',
    nName: game.nName,
    token: game.token
  };
  msg.card = getCardFromClassName(game.selectedCard);
  io.send(JSON.stringify(msg));
  game.draggedElement = null;
}

function initiateShow() {
  var elements = document.querySelector('.card-container');
  var groupsLength = elements.children.length;
  var length = 0;
  for (var i = 0; i < groupsLength; i += 1) {
    length += elements.children[i].children.length;
  }
  if (length !== 14) {
    popError('Not enough cards in your hand');
    return false;
  }
  for (var i = 0; i < groupsLength; i += 1) {
    for (var j = 0; j < elements.children[i].children.length; j += 1) {
      removeClass(elements.children[i].children[j], 'card-box--selected');
    }
  }
  game.selectedCard = game.draggedElement;
  var msg = {
    type: 'game',
    data: 'show-declare',
    nName: game.nName,
    token: game.token
  };
  msg.card = getCardFromClassName(game.selectedCard);
  io.send(JSON.stringify(msg));
  game.draggedElement = null;
}

function sortRun(run) {
  if (!Array.isArray(run)) {
    return run;
  }
  var cardOrder = {
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
  var sortedRun = [];
  var jokers = [];
  var gameJoker = game.joker.split('-')[1];
  if (gameJoker === 'joker') {
    gameJoker = 'ace';
  }

  sortedRun = run.sort(function (a, b) {
    var firstCard = a.split('-');
    var secondCard = b.split('-');
    if (cardOrder[firstCard[1]] < cardOrder[secondCard[1]]) {
      return -1;
    }
    return 1;
  });

  sortedRun = sortedRun.filter(function (card, index) {
    if (card.indexOf(gameJoker) === -1 && card.indexOf('joker') === -1) {
      return true;
    } else if (card.indexOf(gameJoker) !== -1 && index === 0) {
      if (sortedRun.length > index + 1 && sortedRun[index + 1].indexOf(gameJoker) === -1 && sortedRun[index + 1].indexOf('joker') === -1 && card.split('-')[0] === sortedRun[index + 1].split('-')[0] && cardOrder[card.split('-')[1]] === (cardOrder[sortedRun[index + 1].split('-')[1]] - 1)) {
        return true;
      } else if (sortedRun.length > index + 2 && sortedRun[index + 2].indexOf(gameJoker) === -1 && sortedRun[index + 2].indexOf('joker') === -1 && card.split('-')[0] === sortedRun[index + 2].split('-')[0] && cardOrder[card.split('-')[1]] === (cardOrder[sortedRun[index + 2].split('-')[1]] - 2)) {
        return true;
      } else if (sortedRun.length > index + 3 && sortedRun[index + 3].indexOf(gameJoker) === -1 && sortedRun[index + 3].indexOf('joker') === -1 && card.split('-')[0] === sortedRun[index + 3].split('-')[0] && cardOrder[card.split('-')[1]] === (cardOrder[sortedRun[index + 3].split('-')[1]] - 3)) {
        return true;
      }
      jokers.push(card);
      return false;
    } else if (card.indexOf(gameJoker) !== -1) {
      if (sortedRun.length > index + 1 && sortedRun[index + 1].indexOf(gameJoker) === -1 && sortedRun[index + 1].indexOf('joker') === -1 && card.split('-')[0] === sortedRun[index + 1].split('-')[0] && cardOrder[card.split('-')[1]] === (cardOrder[sortedRun[index + 1].split('-')[1]] - 1)) {
        return true;
      } else if (sortedRun.length > index + 2 && sortedRun[index + 2].indexOf(gameJoker) === -1 && sortedRun[index + 2].indexOf('joker') === -1 && card.split('-')[0] === sortedRun[index + 2].split('-')[0] && cardOrder[card.split('-')[1]] === (cardOrder[sortedRun[index + 2].split('-')[1]] - 2)) {
        return true;
      }
      jokers.push(card);
      return false;
    }
    jokers.push(card);
    return false;
  });

  for (var i = 1; i < sortedRun.length; i += 1) {
    if (sortedRun[i - 1].indexOf('joker') === -1 && sortedRun[i - 1].split('-')[0] === sortedRun[i].split('-')[0]) {
      if (cardOrder[sortedRun[i - 1].split('-')[1]] + 1 !== cardOrder[sortedRun[i].split('-')[1]]) {
        if (jokers.length !== 0) {
          sortedRun.splice(i, 0, jokers.pop());
        }
      }
    } else if (i > 1 && sortedRun[i - 2].indexOf('joker') === -1 && sortedRun[i - 2].split('-')[0] === sortedRun[i].split('-')[0]) {
      if (cardOrder[sortedRun[i - 2].split('-')[1]] + 2 !== cardOrder[sortedRun[i].split('-')[1]]) {
        if (jokers.length !== 0) {
          sortedRun.splice(i, 0, jokers.pop());
        }
      }
    } else if (i > 2 && sortedRun[i - 3].indexOf('joker') === -1 && sortedRun[i - 3].split('-')[0] === sortedRun[i].split('-')[0]) {
      if (cardOrder[sortedRun[i - 3].split('-')[1]] + 3 !== cardOrder[sortedRun[i].split('-')[1]]) {
        if (jokers.length !== 0) {
          sortedRun.splice(i, 0, jokers.pop());
        }
      }
    }
  }

  return sortedRun.concat(jokers);
}

// Server accepts only sorted runs in a proper order.
// getRunsForShow() sorts properly formed runs as it should, but there is some unexpected behaviour when it comes to sorting runs that is formed badly.
// But since not properly formed runs will be rejected anyway function probably shouldn't be changed.
function getRunsForShow() {
  var cardOrder = {
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
  var runs = [];
  var groups = document.querySelectorAll('.card-container-group');
  for (var i = 0, groupQuantity = groups.length; i < groupQuantity; i += 1) {
    runs[i] = [];
    for (var j = 0, cardsQuantity = groups[i].children.length; j < cardsQuantity; j += 1) {
      runs[i].push(getCardFromClassName(groups[i].children[j]));
    }
  }
  runs.forEach(function (run, index) {
    runs[index] = sortRun(run);
  });

  var index = null;
  var runToReposition;
  runs.forEach(function (run, i) {
    var suitUsed = '';
    var pure = true;
    run.forEach(function (card, j) {
      if (j === 0) {
        if (card.indexOf('joker') !== -1) {
          pure = false;
        }
        suitUsed = card.split('-')[0];
      } else if (card.indexOf(suitUsed) !== 0 || card.indexOf('joker') !== -1) {
        pure = false;
      } else if ((runs[i].length > j + 1) && cardOrder[card.split('-')[1]] !== (cardOrder[runs[i][j + 1].split('-')[1]] + 1)) {
        pure = false;
      }
    });
    if (pure) {
      index = i;
    }
  });
  if (index !== null) {
    runToReposition = runs[index];
    runs[index] = runs[0];
    runs[0] = runToReposition;
  }

  index = null;
  var gameJoker = game.joker.split('-')[1];
  if (gameJoker === 'joker') {
    gameJoker = 'ace';
  }
  for (var i = 1; i < runs.length; i += 1) {
    var testRun = runs[i].filter(function (card) {
      if (card.indexOf(gameJoker) === -1 && card.indexOf('joker') === -1) {
        return true;
      }
      return false;
    });
    var suitUsed = '';
    var probablySequence = true;
    testRun.forEach(function (card, j) {
      if (j === 0) {
        suitUsed = card.split('-')[0];
      } else if (card.indexOf(suitUsed) !== 0) {
        probablySequence = false;
      }
    });
    if (probablySequence) {
      index = i;
    }
  }
  if (index !== null) {
    runToReposition = runs[index];
    runs[index] = runs[1];
    runs[1] = runToReposition;
  }
  return runs;
}

io.on('connect_timeout', function (err) {
  console.log('Timeout');
});
io.on('disconnect', function (err) {
  game.connected = false;
  var conMsg = {
    type: 'chat',
    data: 'Connection with server lost',
    color: 'admin'
  };
  appendChatMessage(conMsg);
  popError('Connection with server lost');
  console.log('Disconnect');
  clearInterval(game.timeoutTimer);
});
io.on('reconnect', function (attempt) {
  console.log('Reconnecting');
  // Just reloads page upon reconnect, should probably change
  window.location.reload();
});
io.on('message', function (message, callback) {
  var hand, pile, cardContainer, UIContainer, card, element, deleted, changedHand, declared;
  var msg = JSON.parse(message);
  if (msg.type === 'token') {
    game.token = msg.data;
    if (msg.nName) {
      game.nName = msg.nName;
      document.querySelector('.connect-current-name').textContent = 'Current name: ' + game.nName;
      io.send(JSON.stringify({
        type: 'game',
        data: 'connect',
        nName: game.nName,
        token: game.token
      }));
    }
  } else if (msg.type === 'error') {
    popError(msg.data);
  } else if (msg.type === 'chat') {
    appendChatMessage(msg);
  } else if (msg.type === 'game') {
    if (msg.data === 'connect') {
      appendChatMessage({
        type: 'chat',
        data: 'You are connected',
        color: 'admin'
      });
      game.connected = true;
      game.playersIDs = msg.players;
      game.playersIDs.forEach(function (playerID, index) {
        if (playerID !== io.id) {
          game.players[playerID] = {};
          game.players[playerID].nName = msg.nNames[index];
          game.players[playerID].dropped = false;

          generatePlayerUI(playerID);
        }
      });
      hideElement(document.querySelector('.connect'));
      toggleSlideBottom(document.querySelector('.pending-button'));
    } else if (msg.data === 'reconnect') {
      appendChatMessage({
        type: 'chat',
        data: 'You are connected',
        color: 'admin'
      });
      hideElement(document.querySelector('.connect'));
      toggleSlideBottom(document.querySelector('.game-buttons'));
      revealElement(document.querySelector('.card-container'));
      if (msg.dropped) {
        addClass(document.querySelector('.game-buttons-drop'), 'game-buttons--disabled');
      }
      game.connected = true;
      game.started = true;
      game.hand = msg.hand;
      game.joker = msg.joker;
      game.playersIDs = msg.players;
      game.playersOrder = msg.playersOrder;
      game.currentPlayerIndex = msg.currentPlayerIndex;
      game.dropped = msg.dropped;
      game.scores = msg.scores;
      game.timeLeft = msg.timer;
      game.playersIDs.forEach(function (playerID, index) {
        if (playerID !== io.id) {
          game.players[playerID] = {};
          game.players[playerID].nName = msg.nNames[index];
          game.players[playerID].dropped = false;

          generatePlayerUI(playerID);
        }
      });
      if (msg.discardPile) {
        game.discardPile = msg.discardPile;
      }
      msg.droppedPlayers.forEach(function (playerID) {
        if (io.id !== playerID) {
          game.players[playerID].dropped = true;
          UIContainer = document.getElementById(game.players[playerID].UIID);
          addClass(UIContainer, 'player-container--dropped');
        }
      });
      var runs = getCardsFromLocalStorage();
      var cardMatch = true;
      for (var i = 0, runsQ = runs.length; i < runsQ; i += 1) {
        for (var j = 0, cardsQ = runs[i].length; j < cardsQ; j += 1) {
          if (!cardMatch) {
            break;
          }
          if (game.hand.indexOf(runs[i][j]) === -1) {
            cardMatch = false;
            break;
          }
        }
      }
      if (runs && cardMatch) {
        generateHand(runs);
      } else {
        generateHand([game.hand]);
      }
      initializePiles();
      document.querySelector('.global-scores').textContent = 'Score: ' + game.scores[msg.id];
      toggleSlideUp(document.querySelector('.global-scores'));
      if (game.playersOrder[game.currentPlayerIndex] !== io.id) {
        UIContainer = document.getElementById(game.players[game.playersOrder[game.currentPlayerIndex]].UIID);
        addClass(UIContainer, 'player-container--move');
      }
      if (msg.showingStage) {
        game.playersIDs.forEach(function (playerID) {
          if (playerID !== io.id) {
            removeClass(document.getElementById(game.players[playerID].UIID), 'player-container--move');
          }
        });
        game.showingStage = msg.showingStage;
        game.dropped = true;
        addClass(document.querySelector('.game-buttons.drop'), 'game-buttons--disabled');
        revealElement(document.querySelector('.popup-show-container'));
        document.querySelector('.card-container').innerHTML = '';
        popMessage('Game in showing stage. Wait for results.');
      } else {
        setTimeoutTimer();
      }
    } else if (msg.data === 'player-pending') {

    } else if (msg.data === 'player-connect') {
      game.playersIDs = msg.players;
      if (game.players[msg.oldID]) {
        game.players[msg.id] = game.players[msg.oldID];
      } else {
        game.players[msg.id] = {};
      }
      game.players[msg.id].nName = msg.nName;
      game.players[msg.id].disconnected = false;

      generatePlayerUI(msg.id, msg.oldID);

      if (game.players[msg.oldID]) {
        delete game.players[msg.oldID];
      }
    } else if (msg.data === 'player-reconnect') {
      game.playersIDs = msg.players;
      if (game.players[msg.oldID]) {
        game.players[msg.id] = game.players[msg.oldID];
      } else {
        game.players[msg.id] = {};
      }
      game.players[msg.id].nName = msg.nName;
      game.playersOrder = msg.playersOrder;
      game.players[msg.id].disconnected = false;

      generatePlayerUI(msg.id, msg.oldID);

      if (game.players[msg.oldID]) {
        delete game.players[msg.oldID];
      }
    } else if (msg.data === 'player-disconnect') {
      game.players[msg.id].disconnected = true;
      playerUIDisconnect(msg.id);
    } else if (msg.data === 'player-left') {
      playerUIDelete(msg.id);
      game.pendingUIIDs.push(game.players[msg.id].UIID);
      delete game.players[msg.id];
      game.playersIDs = msg.players;
    } else if (msg.data === 'toss') {
      if (document.querySelector('.pending-button').className.indexOf('visibility-none') === -1) {
        toggleSlideBottom(document.querySelector('.pending-button'));
        removeClass(document.querySelector('.pending-button'), 'pending-button--disabled');
      }
      game.playersIDs = msg.players;
      appendCardWithLabelForToss(msg.tossed, 'Your toss', document.querySelector('.toss-your-card'));
      game.playersIDs.forEach(function (playerID, index) {
        if (playerID !== io.id) {
          appendCardWithLabelForToss(msg.toss[index], game.players[playerID].nName, document.querySelector('.toss-other-cards'));
        }
      });
      revealElement(document.querySelector('.toss'));
      setTimeout(function () {
        hideElement(document.querySelector('.toss'));
      }, 5000);
      setTimeout(function () {
        document.querySelector('.toss-your-card').innerHTML = '';
        document.querySelector('.toss-other-cards').innerHTML = '';
      }, 6000);
    } else if (msg.data === 'start') {
      // Refresh all buttons
      removeClass(document.querySelector('.game-buttons-drop'), 'game-buttons--disabled');
      addClass(document.querySelector('.game-buttons-show'), 'game-buttons--disabled');
      addClass(document.querySelector('.game-buttons-discard'), 'game-buttons--disabled');

      hideElement(document.querySelector('.popup-show-container'));
      setTimeout(function () {
        document.querySelector('.popup-show-container').innerHTML = '';
      }, 500);

      var container = document.querySelector('.deck-container');
      container.children[0].innerHTML = '';
      container.children[1].innerHTML = '';
      document.querySelector('.show-declared').innerHTML = '';
      document.querySelector('.game-buttons-show').textContent = 'declare';

      cardContainer = document.querySelector('.card-container');
      removeSigleClickers();
      cardContainer.innerHTML = '';
      game.dropped = false;
      game.discardPile = [];
      game.showingStage = false;
      game.playerShowed = false;
      if (!game.started) {
        toggleSlideBottom(document.querySelector('.game-buttons'));
        toggleSlideUp(document.querySelector('.global-scores'));
        revealElement(document.querySelector('.card-container'));
      }
      game.hand = msg.hand;
      game.joker = msg.joker;
      game.playersOrder = msg.playersOrder;
      game.currentPlayerIndex = msg.currentPlayerIndex;
      if (game.playersOrder[game.currentPlayerIndex] !== io.id) {
        addClass(document.getElementById(game.players[game.playersOrder[game.currentPlayerIndex]].UIID), 'player-container--move');
      }
      generateHand([game.hand]);
      game.playersIDs.forEach(function (playerID) {
        if (playerID !== io.id) {
          game.players[playerID].dropped = false;
          removeClass(document.getElementById(game.players[playerID].UIID), 'player-container--dropped');
        }
      });
      initializePiles();
      game.started = true;
      game.timeLeft = 60000;
      setTimeoutTimer();
    } else if (msg.data === 'draw') {
      game.hand.push(msg.card);
      hand = document.querySelector('.card-container');
      appendCard(msg.card, hand.lastChild);
      setNewWidthForGroupContainer(hand.lastChild, hand.lastChild.children.length);
      updateCardsInLocalStorage();
      if (game.selectedCard) {
        removeClass(document.querySelector('.game-buttons-show'), 'game-buttons--disabled');
        removeClass(document.querySelector('.game-buttons-discard'), 'game-buttons--disabled');
      }
    } else if (msg.data === 'draw-pile') {
      game.hand.push(msg.card);
      game.discardPile.shift();
      pile = document.querySelector('.deck-container .pile');
      pile.removeChild(pile.lastChild);
      hand = document.querySelector('.card-container');
      appendCard(msg.card, hand.lastChild);
      setNewWidthForGroupContainer(hand.lastChild, hand.lastChild.children.length);
      updateCardsInLocalStorage();
      if (game.selectedCard) {
        removeClass(document.querySelector('.game-buttons-show'), 'game-buttons--disabled');
        removeClass(document.querySelector('.game-buttons-discard'), 'game-buttons--disabled');
      }
    } else if (msg.data === 'shuffle') {
      pile = document.querySelector('.deck-container .pile');
      pile.innerHTML = '';
      setTimeout(function () {
        appendCard(msg.discardPile[0], pile);
      }, 500);
    } else if (msg.data === 'discard') {
      var discardButton = document.querySelector('.game-buttons-discard');
      addClass(discardButton, 'game-buttons--disabled');
      addClass(document.querySelector('.game-buttons-show'), 'game-buttons--disabled');
      if (game.selectedCard) {
        var groupLength = game.selectedCard.parentNode.parentNode.children.length;
        for (var i = 0; i < groupLength; i += 1) {
          var length = game.selectedCard.parentNode.parentNode.children[i].children.length;
          for (var j = 0; j < length; j += 1) {
            removeClass(game.selectedCard.parentNode.parentNode.children[i].children[j], 'card-box--selected');
          }
        }
      }

      pile = document.querySelector('.deck-container .pile');
      card = getCardFromClassName(game.selectedCard);
      game.discardPile.unshift(card);
      removeClass(game.selectedCard, 'card-box--selected');

      if (game.selectedCard.parentNode.children.length === 1) {
        game.selectedCard.parentNode.parentNode.removeChild(game.selectedCard.parentNode);
      } else {
        setNewWidthForGroupContainer(game.selectedCard.parentNode, game.selectedCard.parentNode.children.length - 1);
      }
      game.selectedCard.draggable = false;
      game.selectedCard.removeEventListener('click', singleClicker);
      pile.appendChild(game.selectedCard);

      // Using forEach instead of filter because there is card copies in double deck
      deleted = false;
      changedHand = [];
      game.hand.forEach(function (cardInHand) {
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
      game.hand = changedHand;
      game.selectedCards = [];
      game.selectedCard = null;
      document.querySelector('.game-buttons-sort').textContent = 'sort';
      document.querySelector('.game-buttons-show').textContent = 'declare';
      increaseCurrentIndex();
      updateCardsInLocalStorage();
    } else if (msg.data === 'drop') {
      var dropSuccessMessage = 'Dropped successfully';
      if (msg.penalty) {
        dropSuccessMessage += '. Penalty: ' + msg.penalty;
        if (!game.scores[msg.id]) {
          game.scores[msg.id] = 0;
        }
        game.scores[msg.id] += msg.penalty;
      }
      popMessage(dropSuccessMessage);
      game.dropped = true;
      addClass(document.querySelector('.game-buttons-drop'), 'game-buttons--disabled');
      addClass(document.querySelector('.game-buttons-discard'), 'game-buttons--disabled');
      addClass(document.querySelector('.game-buttons-show'), 'game-buttons--disabled');
      document.querySelector('.card-container').innerHTML = '';
      if (io.id === game.playersOrder[game.currentPlayerIndex]) {
        increaseCurrentIndex();
      }
    } else if (msg.data === 'drop-timeout') {
      var dropTimeoutMessage = '';
      if (!game.scores[msg.id]) {
        game.scores[msg.id] = 0;
      }
      game.scores[msg.id] += msg.penalty;
      if (msg.id === io.id) {
        game.dropped = true;
        dropTimeoutMessage += 'You timed out.';
        document.querySelector('.global-scores').textContent = 'Score: ' + game.scores[msg.id];
        addClass(document.querySelector('.game-buttons-drop'), 'game-buttons--disabled');
        addClass(document.querySelector('.game-buttons-discard'), 'game-buttons--disabled');
        addClass(document.querySelector('.game-buttons-show'), 'game-buttons--disabled');
        document.querySelector('.card-container').innerHTML = '';
      } else {
        game.players[msg.id].dropped = true;
        document.getElementById(game.players[msg.id].UIID).children[0].children[1].textContent = 'score: ' + game.scores[msg.id];
        dropTimeoutMessage += game.players[msg.id].nName + ' timed out.';
        UIContainer = document.getElementById(game.players[msg.id].UIID);
        addClass(UIContainer, 'player-container--dropped');
        removeClass(document.querySelector('.game-buttons-drop'), 'game-buttons--disabled');
      }
      dropTimeoutMessage += ' Penalty: ' + msg.penalty;
      if (msg.id === io.id) {
        popError(dropTimeoutMessage);
      } else {
        popMessage(dropTimeoutMessage);
      }
      if (document.querySelector('.show-declared').lastChild) {
        declared = document.querySelector('.show-declared');
        card = getCardFromClassName(declared.lastChild);
        game.discardPile.unshift(card);
        document.querySelector('.deck-container .pile').appendChild(declared.lastChild);
      }
      increaseCurrentIndex();
    } else if (msg.data === 'player-draw') {

    } else if (msg.data === 'player-draw-pile') {
      pile = document.querySelector('.deck-container .pile');
      game.discardPile.shift();
      pile.removeChild(pile.lastChild);
    } else if (msg.data === 'player-discard') {
      pile = document.querySelector('.deck-container .pile');
      game.discardPile.unshift(msg.card);
      appendCard(msg.card, pile);
      pile.lastChild.draggable = false;
      pile.lastChild.removeEventListener('click', singleClicker);
      increaseCurrentIndex();
    } else if (msg.data === 'player-drop') {
      if (msg.penalty) {
        if (!game.scores[msg.id]) {
          game.scores[msg.id] = 0;
        }
        game.scores[msg.id] += msg.penalty;
        document.getElementById(game.players[msg.id].UIID).children[0].children[1].textContent = 'score: ' + game.scores[msg.id];
      }
      game.players[msg.id].dropped = true;
      UIContainer = document.getElementById(game.players[msg.id].UIID);
      addClass(UIContainer, 'player-container--dropped');
      if (msg.id === game.playersOrder[game.currentPlayerIndex]) {
        increaseCurrentIndex();
      }
    } else if (msg.data === 'player-declared') {
      addClass(document.querySelector('.game-buttons-discard'), 'game-buttons--disabled');
      addClass(document.querySelector('.game-buttons-show'), 'game-buttons--disabled');
      addClass(document.querySelector('.game-buttons-drop'), 'game-buttons--disabled');
      if (msg.id === io.id) {
        popMessage('Form and send your runs');
        removeClass(document.querySelector('.game-buttons-show'), 'game-buttons--disabled');
        game.showingStage = true;
        if (game.selectedCard) {
          groupLength = game.selectedCard.parentNode.parentNode.children.length;
          for (var i = 0; i < groupLength; i += 1) {
            var cardLengthInLastGroup = game.selectedCard.parentNode.parentNode.children[i].children.length;
            for (var j = 0; j < cardLengthInLastGroup; j += 1) {
              removeClass(game.selectedCard.parentNode.parentNode.children[i].children[j], 'card-box--selected');
            }
          }
        }

        if (game.selectedCard.parentNode.children.length === 1) {
          game.selectedCard.parentNode.parentNode.removeChild(game.selectedCard.parentNode);
          game.selectedCard.draggable = false;
          game.selectedCard.removeEventListener('click', singleClicker);
          document.querySelector('.show-declared').appendChild(game.selectedCard);
        } else {
          setNewWidthForGroupContainer(game.selectedCard.parentNode, game.selectedCard.parentNode.children.length - 1);
          game.selectedCard.draggable = false;
          game.selectedCard.removeEventListener('click', singleClicker);
          document.querySelector('.show-declared').appendChild(game.selectedCard);
        }

        // Using forEach instead of filter because there is card copies in double deck
        deleted = false;
        changedHand = [];
        game.hand.forEach(function (cardInHand) {
          if (!deleted) {
            if (cardInHand === msg.card) {
              deleted = true;
            } else {
              changedHand.push(cardInHand);
            }
          } else {
            changedHand.push(cardInHand);
          }
        });
        game.hand = changedHand;
        game.selectedCards = [];
        game.selectedCard = null;
        document.querySelector('.game-buttons-sort').textContent = 'sort';
        document.querySelector('.game-buttons-show').textContent = 'show';
        updateCardsInLocalStorage();
      } else {
        popMessage('Player declared show');
        appendCard(msg.card, document.querySelector('.show-declared'));
        document.querySelector('.show-declared').lastChild.draggable = false;
        document.querySelector('.show-declared').lastChild.removeEventListener('click', singleClicker);
      }
      game.timeLeft = 60000;
      setTimeoutTimer();
    } else if (msg.data === 'wrong-show') {
      var wrongShowMessage = '';
      if (!game.scores[msg.id]) {
        game.scores[msg.id] = 0;
      }
      game.scores[msg.id] += msg.penalty;
      if (msg.id === io.id) {
        game.dropped = true;
        wrongShowMessage += 'Wrong show.';
        wrongShowMessage += ' Penalty: ' + msg.penalty;
        document.querySelector('.global-scores').textContent = 'Score: ' + game.scores[msg.id];
        addClass(document.querySelector('.game-buttons-show'), 'game-buttons--disabled');
        addClass(document.querySelector('.game-buttons-discard'), 'game-buttons--disabled');
        document.querySelector('.card-container').innerHTML = '';
        popError(wrongShowMessage);
      } else {
        removeClass(document.querySelector('.game-buttons-drop'), 'game-buttons--disabled');
        game.players[msg.id].dropped = true;
        document.getElementById(game.players[msg.id].UIID).children[0].children[1].textContent = 'score: ' + game.scores[msg.id];
        wrongShowMessage += game.players[msg.id].nName + ': wrong show.';
        wrongShowMessage += ' Penalty: ' + msg.penalty;
        UIContainer = document.getElementById(game.players[msg.id].UIID);
        addClass(UIContainer, 'player-container--dropped');
        popMessage(wrongShowMessage);
        var wrongContainer = document.querySelector('.popup-show-container');
        wrongContainer.innerHTML = '';
        appendPostShowBlock(msg.id, msg.runs, '80', wrongContainer);
        wrongContainer.scrollTop = 0;
        revealElement(wrongContainer);
        setTimeout(function () {
          hideElement(wrongContainer);
          setTimeout(function () {
            wrongContainer.innerHTML = '';
          }, 500);
        }, 5000);
      }
      if (document.querySelector('.show-declared').lastChild) {
        declared = document.querySelector('.show-declared');
        card = getCardFromClassName(declared.lastChild);
        game.discardPile.unshift(card);
        document.querySelector('.deck-container .pile').appendChild(declared.lastChild);
      }
      game.showingStage = false;
      increaseCurrentIndex();
    } else if (msg.data === 'show-success') {
      game.playersIDs.forEach(function (playerID) {
        if (playerID !== io.id) {
          removeClass(document.getElementById(game.players[playerID].UIID), 'player-container--move');
        }
      });
      game.showingStage = true;
      revealElement(document.querySelector('.popup-show-container'));
      document.querySelector('.card-container').innerHTML = '';
      popMessage('Show is confirmed. Waiting for players submissions.');
      if (msg.id === io.id) {
        game.playerShowed = true;
        addClass(document.querySelector('.game-buttons-show'), 'game-buttons--disabled');
        clearInterval(game.timeoutTimer);
        game.timeLeft = 60000;
        setTimeoutTimer();
      }
    } else if (msg.data === 'calculate-scores') {
      game.playersIDs.forEach(function (playerID) {
        if (playerID !== io.id) {
          removeClass(document.getElementById(game.players[playerID].UIID), 'player-container--move');
        }
      });
      game.callback = callback;
      game.showingStage = true;
      addClass(document.querySelector('.game-buttons-drop'), 'game-buttons--disabled');
      addClass(document.querySelector('.game-buttons-discard'), 'game-buttons--disabled');
      removeClass(document.querySelector('.game-buttons-show'), 'game-buttons--disabled');
      document.querySelector('.game-buttons-show').textContent = 'send';

      // Set current player index to players own index to launch 'global' timer
      game.currentPlayerIndex = game.playersOrder.indexOf(io.id);
      clearInterval(game.timeoutTimer);
      game.timeLeft = 60000;
      setTimeoutTimer();
      popMessage(game.players[msg.id].nName + ' showed. Send your runs.');
    } else if (msg.data === 'show-result') {
      if (msg.id === io.id) {
        clearInterval(game.timeoutTimer);
        game.timeLeft = 60000;
        document.querySelector('.global-timer').textContent = '0:00';
        game.playerShowed = true;
        addClass(document.querySelector('.game-buttons-show'), 'game-buttons--disabled');
        revealElement(document.querySelector('.popup-show-container'));
      }
      if (!game.scores[msg.id]) {
        game.scores[msg.id] = 0;
      }
      game.scores[msg.id] += msg.score;
      var psContainer = document.querySelector('.popup-show-container');
      if (msg.id === io.id) {
        appendPostShowBlock(io.id, msg.runs, msg.score, psContainer);
      } else {
        appendPostShowBlock(msg.id, msg.runs, msg.score, psContainer);
      }
    } else if (msg.data === 'round-end-data') {
      game.scores = msg.scores;
      msg.losers.forEach(function (playerID) {
        if (io.id !== playerID) {
          playerUIDelete(playerID);
          delete game.players[playerID];
        }
        game.playersIDs = game.playersIDs.filter(function (player) {
          if (player === playerID) {
            return false;
          }
          return true;
        });
      });
      game.playersIDs.forEach(function (playerID) {
        if (playerID !== io.id) {
          document.getElementById(game.players[playerID].UIID).children[0].children[1].textContent = 'score: ' + msg.scores[playerID];
          removeClass(document.getElementById(game.players[playerID].UIID), 'player-container--move');
        } else {
          document.querySelector('.global-scores').textContent = 'Score: ' + game.scores[playerID];
        }
      });

      // TODO: recheck after show is done
      game.selectedCard = null;
      game.selectedCards = [];
      game.draggedElement = null;
    } else if (msg.data === 'you-won') {
      popMessage('You won!');
      appendChatMessage({
        type: 'chat',
        data: 'You won!',
        color: 'admin'
      });
      gameEndCleanUp();
    } else if (msg.data === 'you-lost') {
      popMessage('You lost. Score: ' + msg.score);
      appendChatMessage({
        type: 'chat',
        data: 'You lost. Score: ' + msg.score,
        color: 'admin'
      });
      gameEndCleanUp();
    }
  }
});

document.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    var chatMessage = document.querySelector('.chat-input-area--vanila input[type="text"]').value;
    if (chatMessage) {
      if (chatMessage === 'pending') {
        io.send(JSON.stringify({
          type: 'game',
          data: 'pending',
          nName: game.nName,
          token: game.token
        }));
        document.querySelector('.chat-input-area input[type="text"]').value = '';
        return false;
      }
      sendChatMessage(io, chatMessage);
      document.querySelector('.chat-input-area--vanila input[type="text"]').value = '';
    }
  }
});


// Chat click event listeners
document.querySelector('.chat-label').addEventListener('click', function (event) {
  var element = document.querySelector('.chat');
  var classToToggle = 'chat--rolled-out';
  toggleClass(element, classToToggle);
});

document.querySelector('.chat-input-area button').addEventListener('click', function (event) {
  var chatMessage = document.querySelector('.chat-input-area input[type="text"]').value;
  if (chatMessage) {
    sendChatMessage(io, chatMessage);
    document.querySelector('.chat-input-area input[type="text"]').value = '';
  }
});

// Initial 'connect' window click listeners
document.querySelector('.connect-nickname button').addEventListener('click', function (event) {
  var name = document.querySelector('.connect-nickname input[type="text"]').value;
  var element = document.querySelector('.connect-nickname');
  removeClass(element, 'connect-nickname--red');
  if (name && /[\w]+/.test(name)) {
    game.nName = name;
    document.querySelector('.connect-nickname input[type="text"]').value = '';
    document.querySelector('.connect-current-name').textContent = 'Current name: ' + game.nName;
  } else {
    toggleClass(element, 'connect-nickname--red');
  }
});

// Game buttons click listeners
document.querySelector('.connect-begin-button').addEventListener('click', function (event) {
  if (!game.connected) {
    io.send(JSON.stringify({
      type: 'game',
      data: 'connect',
      nName: game.nName,
      token: game.token
    }));
  }
});

document.querySelector('.pending-button').addEventListener('click', function (event) {
  var classes = this.className.split(' ');
  if (classes.indexOf('pending-button--disabled') === -1) {
    addClass(this, 'pending-button--disabled');
    var msg = {
      type: 'chat',
      data: 'Pending for a start',
      color: 'admin'
    };
    appendChatMessage(msg);
  }
  if (!game.pending) {
    game.pending = true;
    io.send(JSON.stringify({
      type: 'game',
      data: 'pending',
      nName: game.nName,
      token: game.token
    }));
  } else {
    popError('Already pending');
  }
});

document.querySelector('.game-buttons-drop').addEventListener('click', function (event) {
  if (game.started && !game.dropped) {
    io.send(JSON.stringify({
      type: 'game',
      data: 'drop',
      nName: game.nName,
      token: game.token
    }));
  } else if (game.dropped) {
    popError('Already dropped');
  }
});

document.querySelector('.game-buttons-sort').addEventListener('click', function (event) {
  if (game.started && !game.dropped) {
    if (game.selectedCards.length === 0) {
      var cardOrder = {
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
      var suitOrder = {
        'C': 0,
        'D': 1,
        'H': 2,
        'S': 3,
        'BLACK': 4,
        'RED': 5
      };
      var hearts = [];
      var diamonds = [];
      var clubs = [];
      var spades = [];
      var jokers = [];
      var sortedHand = game.hand.sort(function (a, b) {
        var firstCard = a.split('-');
        var secondCard = b.split('-');
        if (suitOrder[firstCard[0]] > suitOrder[secondCard[0]]) {
          return -1;
        } else if (suitOrder[firstCard[0]] === suitOrder[secondCard[0]]) {
          if (cardOrder[firstCard[1]] < cardOrder[secondCard[1]]) {
            return -1;
          }
          return 1;
        }
        return 1;
      });
      sortedHand.forEach(function (card) {
        if (card.indexOf('C-') !== -1) {
          clubs.push(card);
        } else if (card.indexOf('D-') !== -1) {
          diamonds.push(card);
        } else if (card.indexOf('H-') !== -1) {
          hearts.push(card);
        } else if (card.indexOf('joker') !== -1) {
          jokers.push(card);
        } else {
          spades.push(card);
        }
      });
      generateHand([clubs, diamonds, hearts, spades, jokers]);
    } else {
      game.selectedCards.forEach(function (element) {
        addClass(element, 'card-box--subtle-animation');
      });
      appendGroup(game.selectedCards, document.querySelector('.card-container'), true);
      var groups = document.querySelectorAll('.card-container-group');
      for (var i = 0, length = groups.length; i < length; i += 1) {
        if (groups[i].children.length) {
          setNewWidthForGroupContainer(groups[i], groups[i].children.length);
        } else {
          groups[i].parentNode.removeChild(groups[i]);
        }
      }
    }
  }
  var cardContainer = document.querySelector('.card-container');
  var groupLength = cardContainer.children.length;
  for (var i = 0; i < groupLength; i += 1) {
    var cardsQuantity = cardContainer.children[i].children.length;
    for (var j = 0; j < cardsQuantity; j += 1) {
      removeClass(cardContainer.children[i].children[j], 'card-box--selected');
    }
  }
  game.selectedCard = null;
  game.selectedCards = [];
  this.textContent = 'sort';
  updateCardsInLocalStorage();
});

document.querySelector('.game-buttons-discard').addEventListener('click', function (event) {
  if (game.playersOrder[game.currentPlayerIndex] === io.id && game.started && game.selectedCard) {
    var msg = {
      type: 'game',
      data: 'discard',
      nName: game.nName,
      token: game.token
    };
    msg.card = getCardFromClassName(game.selectedCard);
    io.send(JSON.stringify(msg));
  } else {
    if (game.playersOrder[game.currentPlayerIndex] === io.id) {
      popError('Select a card');
    } else {
      popError('Wait for your turn');
    }
  }
});

document.querySelector('.game-buttons-show').addEventListener('click', function (event) {
  if (game.playersOrder[game.currentPlayerIndex] === io.id && game.started && !game.playerShowed) {
    if (!game.showingStage && game.selectedCard) {
      var elements = document.querySelector('.card-container');
      var groupsLength = elements.children.length;
      var length = 0;
      for (var i = 0; i < groupsLength; i += 1) {
        length += elements.children[i].children.length;
      }
      if (length !== 14) {
        popError('Not enough cards in your hand');
        return false;
      }
      var msg = {
        type: 'game',
        data: 'show-declare',
        nName: game.nName,
        token: game.token
      };
      msg.card = getCardFromClassName(game.selectedCard);
      io.send(JSON.stringify(msg));
    } else if (game.showingStage) {
      if (game.callback) {
        game.callback(JSON.stringify({
          runs: getRunsForShow(),
          token: game.token
        }));
        game.callback = null;
        revealElement(document.querySelector('.popup-show-container'));
      } else {
        io.send(JSON.stringify({
          type: 'game',
          data: 'show',
          runs: getRunsForShow(),
          token: game.token
        }));
      }
    } else if (!game.selectedCard) {
      popError('Select a card');
    }
  } else {
    popError('Wait for your turn');
  }
});

// Deck and discard pile click listeners
document.querySelector('.deck-container .deck').addEventListener('click', function (event) {
  if (game.started && game.playersOrder[game.currentPlayerIndex] === io.id) {
    io.send(JSON.stringify({
      type: 'game',
      data: 'draw-from-deck',
      token: game.token
    }));
  } else if (!game.started) {
    popError('No cards to draw yet');
  } else if (game.playersOrder[game.currentPlayerIndex] !== io.id) {
    popError('Wait for your turn');
  }
});

document.querySelector('.deck-container .pile').addEventListener('click', function (event) {
  if (game.started && game.playersOrder[game.currentPlayerIndex] === io.id) {
    io.send(JSON.stringify({
      type: 'game',
      data: 'draw-from-discard',
      token: game.token
    }));
  } else if (!game.started) {
    popError('No cards to draw yet');
  } else if (game.playersOrder[game.currentPlayerIndex] !== io.id) {
    popError('Wait for your turn');
  }
});

// Global drag and drop listeners
document.querySelector('.deck-container .pile').addEventListener('dragover', function (event) {
  event.preventDefault();
});
document.querySelector('.deck-container .pile').addEventListener('drop', function (event) {
  event.preventDefault();
  if (game.draggedElement && game.started) {
    discardDragged();
  } else if (!game.started) {
    popError('Game not started yet');
  }
});

document.querySelector('.show-declared').addEventListener('dragover', function (event) {
  event.preventDefault();
});
document.querySelector('.show-declared').addEventListener('drop', function (event) {
  event.preventDefault();
  if (game.draggedElement && game.started) {
    initiateShow();
  } else if (!game.started) {
    popError('Game not started yet');
  }
});

document.querySelector('.card-container').addEventListener('dragover', function (event) {
  event.preventDefault();
});
document.querySelector('.card-container').addEventListener('drop', function (event) {
  event.preventDefault();
  event.stopPropagation();
  if (game.draggedElement) {
    var target = event.target || event.srcElement;
    addClass(game.draggedElement, 'card-box--subtle-animation');
    removeClass(game.draggedElement, 'card-box--selected');
    if (game.selectedCard) {
      var groupLength = game.selectedCard.parentNode.parentNode.children.length;
      for (var i = 0; i < groupLength; i += 1) {
        var length = game.selectedCard.parentNode.parentNode.children[i].children.length;
        for (var j = 0; j < length; j += 1) {
          removeClass(game.selectedCard.parentNode.parentNode.children[i].children[j], 'card-box--selected');
        }
      }
    }
    game.selectedCards = [];
    game.selectedCard = null;
    addClass(document.querySelector('.game-buttons-discard'), 'game-buttons--disabled');
    if (!game.showingStage) {
      addClass(document.querySelector('.game-buttons-show'), 'game-buttons--disabled');
    }
    if (game.draggedElement.parentNode.children.length === 1) {
      game.draggedElement.parentNode.parentNode.removeChild(game.draggedElement.parentNode);
    } else {
      setNewWidthForGroupContainer(game.draggedElement.parentNode, game.draggedElement.parentNode.children.length - 1);
    }
    target.lastChild.appendChild(game.draggedElement);
    setNewWidthForGroupContainer(target.lastChild, target.lastChild.children.length);
    document.querySelector('.game-buttons-sort').textContent = 'sort';
    updateCardsInLocalStorage();
  }
});

var playerContainers = document.querySelectorAll('.player-container');
for (var i = 0, length = playerContainers.length; i < length; i += 1) {
  playerContainers[i].addEventListener('drop', function (event) {
    event.preventDefault();
    var target = event.target || event.srcElement;
    if (game.playerIconElement && target.children.length === 0) {
      var className = target.className;
      var oldID = game.playerIconElement.parentNode.id;
      var newID = target.id;
      target.className = game.playerIconElement.parentNode.className;
      game.playerIconElement.parentNode.className = className;
      var index = game.pendingUIIDs.indexOf(newID);
      if (index === -1) {
        game.pendingUIIDs.push(oldID);
      } else {
        game.pendingUIIDs[index] = oldID;
      }
      Object.keys(game.players).forEach(function (playerID) {
        if (game.players[playerID].UIID === oldID) {
          game.players[playerID].UIID = newID;
        }
      });
      target.appendChild(game.playerIconElement);
      game.playerIconElement = null;
    }
  });
  playerContainers[i].addEventListener('dragover', function (event) {
    event.preventDefault();
  });
}

document.addEventListener('DOMContentLoaded', function (event) {
  if (isIE() && isIE() < 11) {
    alert('Game might not work properly in your browser. To fully experience game download latest chrome or firefox.');
  }
  if (!navigator.cookieEnabled) {
    alert('Your cookies are disabled. To be able to reconnect to games you\'ll need to enable them.');
  }
  document.querySelector('.connect-current-name').textContent = 'Current name: ' + game.nName;
  if (!window.localStorage) {
    console.log('No local storage. Card groups can\'t be stored.');
  }
});
