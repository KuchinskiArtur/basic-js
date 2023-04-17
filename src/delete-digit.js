const { NotImplementedError } = require('../extensions/index.js');


function deleteDigit(n) {
  let array = n.toString().split('')
  let result = 0;

  for(let i = 0; i < array.length; i++) {
    let count = array.concat()
    count.splice(i, 1)
    if(result < +count.join('')) {
      result = +count.join('')
    }
  }
  return result
}

module.exports = {
  deleteDigit
};
