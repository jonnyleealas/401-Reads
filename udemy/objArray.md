# Objects Big O
- Objects are not ordered
- Searching O(n) --> Linear
- Insertion, Removal, Access --> O(1) --> Constant --> Fastest

# Arrays
- Ordered
- Search is O(n) --> Linear
- Access is O(1) when we have the index of the element we need to access
- Adding and removing depends on where we are inserting or removing.
    - Adding to the end is Constant time because we don't need to move anything.
    - Insert/removing at the beginning is a bit tricker because every element will need to be re-indexed to insert an element at the beginning.
        - Probably O(n)


# Objects: Adding key values using a loop 
- Create an empty object
- Create a string so we can add every char that is not in the object.
- Loop through string
- create a variable to keep track of current letter in the string.
- We check whether the letter is in the object. If it is we add 1 to keep count of how many letters are already in the object.
- If the if value of that specific key is not greater than 0 that means that the letter is not in the object.
- Next line of code will go to the object and add the key of the letter according to the letter that the loop is currently on. We also give it the value of 1 to keep count.
```
let obj = {}
let string = "jo000000nny"



for(let i=0; i < string.length; i++){
  let char = string[i]
  if(obj[char] > 0){
    obj[char]++
  } else { 
    obj[char] = 1
    }
}
console.log(obj)

```