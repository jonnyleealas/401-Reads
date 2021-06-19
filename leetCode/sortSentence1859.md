let s =  "is2 sentence4 This1 a3"
// console.log(/\d/.test(s))

// let arrange = (sentence)=>{
// let string = ''
// // let string2 = []
// let serperate = sentence.split(" ");
//   for(let i=0; i < serperate.length; i++){
//     let temp = serperate[i]
//     console.log(temp)
//     if(serperate[i].charAt(serperate[i].length-1)>serperate[i+1].charAt(serperate[i+1].length-1)){
//       serperate[i] = serperate[i+1]
//       serperate[i+1] = temp
      
//     }
//     string += serperate[i].slice(0,-1).toString()
//     }
// return string
//   }
// remove the last character in a string
// let st = string[0].slice(0,-1)

// console.log(arrange(s))



// pushe index i, remove the last character, convert to a string
// string.push(serperate[i].slice(0,-1).toString())


/**
 * gets the last character in a string
 * string[0].charAt(string[0].length-1)
 */




var sortSentence = function(s) {
const sarr=s.split(' ');

var result=[];
for(let i of sarr)
    {
        // console.log('bitch', i)
        let last=i.charAt(i.length-1)
        console.log("last:",last)
        result[last]=i.slice(0,i.length-1)
        console.log(result[last])
    }

return result.join(' ').trim()
};


console.log(sortSentence(s))