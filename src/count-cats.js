const { NotImplementedError } = require('../extensions/index.js');


function countCats(matrix) {
  return matrix.flat().filter((el) => el === '^^').length
}

module.exports = {
  countCats
};
