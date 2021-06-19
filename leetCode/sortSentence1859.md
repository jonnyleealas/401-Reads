# Sort Sentence 1859
A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

# Simplified
- Split string into individual words
- Create array binding
- Loop through string
- Create binding for last index of each word --> last index is the number
- We can now use our index binding as index position to add in our stringArray
 - stringArray[index binding] will equal our current word - the last index
- Return new array but convert into a string with join()
- Trim removes the un-needed spaces.


```let s =  "is2 sentence4 This1 a3"

let arrange = (sentence)=>{
let stringArray = []

let separate = sentence.split(" ");
  for(let i=0; i < separate.length; i++){
      let num = separate[i].charAt(separate[i].length-1)
      stringArray[num] = separate[i].slice(0,-1)
    }
return stringArray.join(' ').trim()
  }
```
// remove the last character in a string
// let st = string[0].slice(0,-1)

console.log(arrange(s))



// push index i, remove the last character, convert to a string
// string.push(separate[i].slice(0,-1).toString())


/**
 * gets the last character in a string
 * string[0].charAt(string[0].length-1)
 */



# leetCode discussion code

```var sortSentence = function(s) {
const sarr=s.split(' ');

var result=[];
for(let i of sarr){
        
        let last=i.charAt(i.length-1)
        result[last]=i.slice(0,i.length-1)
    }
return result.join(' ').trim()
};


console.log(sortSentence(s))
```