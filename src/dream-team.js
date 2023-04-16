const { NotImplementedError } = require('../extensions/index.js');


function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false
  }

  let result = members.filter((element) => typeof element === 'string').map(element => element.toUpperCase().trim().charAt(0)).sort().join('')
  return result
}

module.exports = {
  createDreamTeam
};
