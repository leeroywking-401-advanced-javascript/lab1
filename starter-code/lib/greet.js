'use strict';

const disAndDat = {
    salutation: 'Whats up',
    greetEm: (person, greeting = disAndDat.salutation) => {
        return `${greeting}, ${person}!!`;
    }
}

module.exports = disAndDat;