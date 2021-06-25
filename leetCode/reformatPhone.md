# Reformat Phone Number
You are given a phone number as a string number. number consists of digits, spaces ' ', and/or dashes '-'.

You would like to reformat the phone number in a certain manner. Firstly, remove all spaces and dashes. Then, group the digits from left to right into blocks of length 3 until there are 4 or fewer digits. The final digits are then grouped as follows:

2 digits: A single block of length 2.
3 digits: A single block of length 3.
4 digits: Two blocks of length 2 each.
The blocks are then joined by dashes. Notice that the reformatting process should never produce any blocks of length 1 and produce at most two blocks of length 2.

Return the phone number after formatting.

 # Simplified
 - Remove spaces and dashes
 - Binding for new array
 - Divide numbers by 3
 - Push into new array
 - Divide numbers by 2
 - Push into new array
 - Return new array and add "-"

 # Code 
 - Remove spaces and dashes using regex
 - Binding for a new array 
 - Divide by 3 and push each 3 values into array. We also update the rest of the string.
 - substring(0,3)--> takes first 3 values of string and adds them to an array.
 - number.substring(3) --> the new string starts at position 3.
 - Next we divide string by 2 if there are only 4 things
 - number.substring(0,2) --> takes first two values of the string and adds them to array.
 - number.substring(3) --> updates remainder of string starting at index 2
 - Next we push the remainder of the string we just updated.
 - Else we push the rest of the number into the array. This takes care of strings.lengths that are < less than or = 2.
 - result.join("-") --> returns our array and add "-" at each index.
 ```
 let reformatNumber = number =>{
     number = number.replace(/[-\s]g,"");

     let result = []

     while(number.length > 4){
         result.push(number.substring(0,3))
         number = number.substring(3)
     }

     if( number.length == 4){
         result.push(number.substring(0,2))
         number = number.substring(2)
         result.push(number)
     } else{
         result.push(number)
     }
     return result.join("-")
 }
 ```