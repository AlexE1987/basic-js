const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let countCats = 0;

for (let i = 0 ; i < backyard.length; i++) {
  if (backyard[i].includes('^^')) {
    let findedCats = backyard[i].filter((item) => item == '^^').length;
    countCats += findedCats;
  }  
};
return countCats;
};
