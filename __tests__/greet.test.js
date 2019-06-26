const greeting = require('../lib/greet.js');
const faker = require('faker');

describe('Greet Test', () => {

  it('greets a random person appropriately', () => {
    let name = faker.random.word();
    expect(greeting.greetEm(name)).toEqual(`What's up, ${name}!!`);
  });

  it('greets a random person the way they want', () => {
    let name = faker.name.firstName();
    let salutation = faker.lorem.words();
    expect(greeting.greetEm(name, salutation)).toEqual(`${salutation}, ${name}!!`);
  });

  it('returns null when you don\'t pass a string', () => {
    let notName = 4;
    expect(greeting.greetEm(notName)).toEqual(null);
  });

  it('hello worlds', () => {
    let name = 'world';
    let salutation = 'Hello';
    expect(greeting.greetEm(name, salutation)).toEqual(`${salutation}, ${name}!!`);
  });
});