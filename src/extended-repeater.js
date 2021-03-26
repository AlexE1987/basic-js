const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {  

    const secondHalf = (options.addition === undefined) ? '' : (options.addition === null) ? 'null' : options.addition + '';
    const firstHalf = (str === null) ? 'null' : str + '';

    let secondHalfFinal = secondHalf;
    let firstHalfFinal = firstHalf;

    if(options.separator === undefined) {
      options.separator = '+'
    };
    if(options.additionSeparator === undefined) {
      options.additionSeparator = '|'
    };

    for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
        secondHalfFinal = secondHalfFinal + options.additionSeparator.toString() + secondHalf;           
    };

    for (let j = 0; j < options.repeatTimes - 1; j++) {
        firstHalfFinal = firstHalfFinal + secondHalfFinal + options.separator.toString() + firstHalf;
        
    };
    return firstHalfFinal + secondHalfFinal;
};
  