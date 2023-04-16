const { NotImplementedError } = require('../extensions/index.js');


function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string' || !Number(sampleActivity) || sampleActivity < 1 || sampleActivity > 15) {
    return false
  } else {
    let variable = 0.693 / 5730
    return Math.ceil((Math.log(15 / Number(sampleActivity))) / variable)
  
  }
}

module.exports = {
  dateSample
};
