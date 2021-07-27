# Multiple Pointers
- Used when looking for pairs.
- We keep track of the start and the end of the array of elements.
- Move towards start, end, or middle.
- Used for arrays, linked list, doubly or singly.
- Both pointers/ variables move towards the middle of the list.
- Pointers are variables that point to a specific locations in a list or array.
- Data needs to be sorted.

 # Code Sample
 ```
 let arr = [-5,-4,-3,-2,-1, 0, 1,2,3,4,5,6,7,8,9]
/*
create a functions called find sum
create a pointer for start
create a pointer for end array.length -1
loop through array 
create a var for the summation of start and end
while is start is less than end
if sum is zero we return start and end of the array
if sum is greater than zero we move right pointer down
if sum is less than zero we move pointer up
*/ 

let findSum = (a)=>{
let start = 0, end = a.length -1;

while(start < end){
    let sum = a[start]+a[end]
    if(sum == 0){
        return { num1: a[start], num2:a[end]}
    } else if (sum > 0){
        end--
    }else{
    start++
    }
  }
}

console.log(findSum(arr))
```

