/* -----------------------------------------------------------------------------------------

roomsLimit: rooms quantity limit
scoreLimit: in game score limit
disconnectTimeLimit: time limit in ms after which game deletes socket.id from room in lobby
timeoutTimeLimit: time limit in ms after which game awards penalty to player
          current fron-end value for timer is 60000
          it probably wouldnt break anythins if changed but still..
roomSize: maximum quantity of players in one room
          with current fron-end should be default of 6

------------------------------------------------------------------------------------------ */

module.exports = {
  timeoutTimeLimit: 60000
};
