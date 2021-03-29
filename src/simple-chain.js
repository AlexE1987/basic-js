const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArray: [],
  getLength() { // возвращает текущую длину цепи в виде числа;
    return this.chainArray.length
  },
  addLink(value) { // добавляет звено, содержащее строковое представление value к цепочке
    const chain = `( ${value} )`;
    this.chainArray.push(chain);
    return this;
  },
  removeLink(position) { //удаляет звено цепи, находящееся в заданном положении;
    if(position < 1 || position > this.chainArray.length || Number.isInteger(position) == false) {
      this.chainArray = []; throw new Error('Error');
    }
    this.chainArray.splice(position - 1, 1);    
    return this;
  },
  reverseChain() { // разворачивает цепь задом наперед;
    this.chainArray.reverse();
    return this;
  },
  finishChain() { // завершает цепь и возвращает ее.
    const finish = this.chainArray.join('~~');
    this.chainArray = [];
    return finish;
  }
};

module.exports = chainMaker;
