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

# Example Nested Loops
```
function add(a,b,n){

for(let i =0 ; i < n; i++){ ---> n + 1
    for(let j=0; j < n; j++){ ---> n * (n+1)
        c[i,j] = a[i,j] + b[i,j]; ---> n * n
    }
  }
}

```

```
function multiply(a, b, n){

    for(let i=0; i < n; i++){ --> n+1
        for(let j=0; j < n; j++){ --> n * (n+1)
            c[i,j]=0; --> n * n
            for(let k=0; k < n; k++){ --> n * n (n +1)
                c[i,j]= c[i,j] + a[i,j] --> n * n * n
            }
        }
    }
}


```
# How we count polynomials
- We count each time an nˆ2 appears. Say we have nˆ2 appear twice --> 2nˆ2

# Summary
Frequency count method is used for finding the time and space complexity of a program.
- We count each statement
- Which ever statement has the highest number of executions will dictate the time complexity of a program.
- For space we count each variable. Whichever variable is executed the highest number of times dictates the amount of space being used each time a program runs.
- For space we count the number of times n is run. For example: in a nested for loop n would run nˆ2 --> So our space complexity will be s(nˆ2) 