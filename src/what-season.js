const { NotImplementedError } = require('../extensions/index.js');


function getSeason(date) {
  if(!date) { return 'Unable to determine the time of year!'}
  if (Object.getOwnPropertyNames(date).length > 0 || !date.getTime) throw new Error('Invalid date!');

  let month = date.getMonth()

    if(month === 2 || month === 3 || month === 4) {
    return 'spring'
  } else if(month === 5 || month === 6 || month === 7) {
    return 'summer'
  } else if(month === 8 || month === 9 || month === 10) {
    return 'autumn'
  } else {
    return 'winter'
  }
}

module.exports = {
  getSeason
};
