const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value);
    return this
  },

  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > this.chain.length || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.map((element) => `( ${element} )`).join('~~');
    this.chain = [];
    return result;
  },
};



module.exports = {
  chainMaker
};
