('use strict');
const subtract = require('./subtract');

test('properly subtracts two number',()=>{
  expect(subtract(2,2)).toBe(0);
});
