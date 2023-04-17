const { NotImplementedError } = require('../extensions/index.js');

function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let result = []
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === "--discard-next") {
      result.push(" ");
      i++;
    }
    else if(arr[i] === '--discard-prev') {
      result[result.length - 1] && result.pop();
    } 
    else if(arr[i] === '--double-next') {
      arr[i+1] && result.push(arr[i+1])
    }
    else if(arr[i] === '--double-prev') {
      if(result.length && result[result.length - 1] != " "){
        result.push(arr[i - 1]);
      }
    }
    else {
      result.push(arr[i])}
  }
  return result.filter((e) => e !== " ");

}
module.exports = {
  transform
};
