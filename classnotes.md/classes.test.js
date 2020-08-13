('ust strict');


const Dog = require('./classes.js');


describe('dog', ()=> {
  let rosie =new Dog;
  expect(rosie.name).toBe('rosie');
  expect(rosie instanceof Dog).toBeTruthy();
});
