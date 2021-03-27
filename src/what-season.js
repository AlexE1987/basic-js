const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if(isNaN(date) && date instanceof Date) throw new Error();
    if(!date) return 'Unable to determine the time of year!';

    const mounth = date.getMonth();
    if(mounth == 11 || mounth <= 1) return 'winter';
    if(mounth == 2 || mounth <= 4) return 'spring';
    if(mounth == 5 || mounth <= 7) return 'summer';
    if(mounth == 8 || mounth <= 10) return 'autumn';
};
