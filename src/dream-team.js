const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if(!Array.isArray(members)) return false;
    
    let filtredElements = members.filter((item) => typeof item === 'string');
    const capitals = filtredElements.map((e) => e.trim().toUpperCase().substr(0, 1));
    const capitalsSort = capitals.sort().join('');

    if(capitalsSort == '') {
        return false
    } else {
        return capitalsSort;
    };
};

