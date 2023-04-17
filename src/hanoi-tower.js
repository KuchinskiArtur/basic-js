const { NotImplementedError } = require('../extensions/index.js');

function calculateHanoi(diskNumber, turnsSpeed) {
  let turns = 2 ** diskNumber - 1
  let seconds = Math.floor(turns / turnsSpeed * 3600)
  return {
    turns: turns, 
    seconds: seconds
  }
}


module.exports = {
  calculateHanoi
};
