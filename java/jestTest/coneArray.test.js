('use strict');
const cloneArray = require('./cloneArray');


test('properly clones an array', ()=>{
  const array = [1,2,3,4,5];
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array)
});
