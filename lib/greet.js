'use strict';

const disAndDat = {
  salutation: 'What\'s up',
  greetEm: (person, greeting = disAndDat.salutation) => {
    if (strChk(person)) {
      return `${greeting}, ${person}!!`;
    }
    else { return null ;}
  },
};

function strChk(str) {
  if (typeof str != 'string') { return false ;}
  else { return true; }
}

module.exports = disAndDat;