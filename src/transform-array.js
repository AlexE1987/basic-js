const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(Array.isArray(arr) == false) throw new Error('Error');

  const newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
      if(arr[i] == '--discard-next') {
          newArr[i] = 'empti';
          newArr[i + 1] = 'empti';
          i = i + 1;
      } 
      else if (arr[i] == '--discard-prev') {
          newArr[i - 1] = 'empti';
      }
      else if (arr[i] == '--double-next') {
          newArr[i] = arr[i + 1];
      }
      else if (arr[i] == '--double-prev') {
          newArr[i] = newArr[i - 1];
      } 
      else {newArr[i] = arr[i]};             
  };
  
  return newArr.filter((e) => e != '--discard-next' && e != '--discard-prev' && 
                              e != '--double-next' && e != '--double-prev' && 
                              e != 'empti' && e != undefined)
};
