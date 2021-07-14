# Frequency Count Method
- Finds sum of all elements in an array.
- This method is useful for finding time complexity of an algorithm.
- One unit of time per statement.
- f(n)= ---> Time and space is calculate using polynomial notation.

# Loops
- Loops always run at n+1 time --> n means the number of elements + 1 last check.
- Whatever is inside will run at n times --> n means for the number of times the loop runs.
- The time complexity is chosen by the highest degree in the polynomial. --> f(n) = 2nˆ2 + 2n + 1 --> 2nˆ2 is the highest degree therefore the time complexity is O(nˆ2) 

# Space complexity
- Always count the variables being used.

# Example 
```
function add(a,b,n){

for(let i =0 ; i < n; i++){ ---> n + 1
    for(let j=0; j < n; j++){ ---> n * (n+1)
        c[i,j] = a[i,j] + b[i,j]; ---> n * n
    }
  }
}

```