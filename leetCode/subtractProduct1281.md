# Subtract the Product and Sum of Digits of an Integer
```Given an integer number n, return the difference between the product of its digits and the sum of its digits.```





# Simplification
```
THOUGHT PROCESS
 - Products means a * b = c ; mulitiplaction of two numbers
 - Sum means a + b = c ; addition of two numbers
 - Difference means a - b = c ; subtractions of two numbers
 - Product - Sum ;  a*b - a+b = difference
 
 1) Convert numbers to string, split, and map --> put integers in an array so we can count them.
 2) Run the new integer array through reduce and return the product
 3) Run the new integer array through reduce and return sum
 4) Return product - sum
 
 ```
 # CODE
```
THOUGHT PROCESS
 - Products means a * b = c ; mulitiplaction of two numbers
 - Sum means a + b = c ; addition of two numbers
 - Difference means a - b = c ; subtractions of two numbers
 - Product - Sum ;  a*b - a+b = difference
 
 1) Convert numbers to string, split, and map --> put integers in an array so we can count them.
 2) Run the new integer array through reduce and return the product
 3) Run the new integer array through reduce and return sum
 4) Return product - sum
 
 ```
 CODE
 ```
let subtractProductAndSum = (n) => {
 let num = (n).toString(10).split("").map(Number)
 let numProduct = num.reduce((a,b)=> a*b);
 let sumProduct = num.reduce((a,b)=> a+b);
 return numProduct - sumProduct
    
}
```
```
UGLY BUT FASTER LOL
let subtractProductAndSum=n=>{
let num=(n).toString(10).split("").map(Number),product=num.reduce((a,b)=>a*b),sum=num.reduce((a,b)=>a+b);return product-sum
    
}
```