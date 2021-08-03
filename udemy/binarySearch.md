# Binary Search
- Eliminate half of the remaining elements at a time.
- Data must be sorted  
- Split data into left and right.
- If value we are looking for is greater then we search the right side.
- If value is lesser we search left side.

```
function binaryS(a, n){
  let left = a[0];
  let right = a.length - 1;
  let mid = Math.floor((left + right) / 2);
  while(a[mid] !== n && left <= right){
 if(n < a[mid]){
      right = mid-1 
    } else {
      left = mid+1
    }
    mid = Math.floor((left + right) / 2)
  }
  if(a[mid] === n){
    return mid
  }
  return -1
  }

  console.log(binaryS(n,1))
  ```
