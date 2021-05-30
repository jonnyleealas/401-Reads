// let drawRec = (option)=>{
//   let width = option.width;
//   let height = option.height;
// }
// drawRec({width:26,height: 26})
// console.log(drawRec)

// let okIterator = "OKDOKIE"[Symbol.iterator]()

// console.log(okIterator.next())
// console.log(okIterator.next())
// console.log(okIterator.next())
// console.log(okIterator.next())
// console.log(okIterator.next())
// console.log(okIterator.next())
// console.log(okIterator.next())


# These are examples of how bracket notation can evaluate poperties similare to dot notation.
let word = Symbol("word")

// console.log(word == Symbol("word"))

const toStringSymbol = Symbol("toString")
Array.prototype[toStringSymbol] = function(){
  return `${this.length} cm of blue yarn`;
};

console.log([1,2,3,4,5,6,7,8,9][toStringSymbol]())

let stringObject = {
  [toStringSymbol](){return "a jute rope";}
}

console.log(stringObject[toStringSymbol]())


let MY_KEY = Symbol()
let MY_KEY2 = Symbol()
let obj = {}

obj[MY_KEY] = 123
obj[MY_KEY2] = 321 

console.log(obj[MY_KEY2])