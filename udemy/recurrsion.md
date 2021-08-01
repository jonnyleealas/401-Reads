# Recursion
- Must have a base case -->  A point where the recursion stops
- Different input each time the function is called within itself(recursively)

# Example 1
- We start with our base case so that we can stop our recursive call as soon as our condition is met.
- We change our input so for our next function call to get closer to our end statement.
- We call our function again with our new modified input.

```
function countDown(num) {
    if(num <= 0){
        console.log("all done)
        return
    }
    console.log(num)
    num--
    countDown(num)
}

countDown(5)
```

# Example 2 add range of num
```
function sumRange(num){
    if(num === 1) return 1

    return num + sumRange(num - 1)
}
```
## Summary 
- The top function in the stack waits on the lower functions for the elements it can use to finish its task.
1. sumRange(3) is called and it waits for sumRange(3-1) to return with a number
1. sumRange(2) is called and waits for sumRange(2-1) to return with a number
1. sumRange(1) returns 1 over to sumRange(2)
1. sumRange(2) adds 1 which equals 3 and returns 3 over to sumRange(3) which is the top of the stack.
1. sumRange(3) adds 3 which equals 6 and returns that number to finish the call stack of the recursive function.
1. sumRange returns 6 and we are done.
```
    1) sumRange(3) --> waits for step 2 --> takes the return from step 2 and returns the sum --> recursion is finished.
        if(3 === 1) return 1

        return 3 + sumRange(3 - 1) --> Becomes 3 + (3) = 6
            2) sumRange(2) --> waits for step 3f
                if(2 === 1) return 1
                
                return 2 + sumRange(2 - 1) --> Becomes 2 + (1)= 3 --> takes step 3s return and sends the sum to step 1.
                    3) sumRange(1) --> returns int 1 to step 2
                        if(1 === 1) return 1

                        return 1 + sumRange(1 - 1) --> Becomes 1 + (1 - 1) = 1
```

# Factorial
- Instead of adding 5 then 4 then 3 then 2 then 1 we multiply.
- 5 * 4 * 3 * 2 * 1

```

function factorial(n){
    if(n ===1){
        return 1
    }
    return n * factorial(n - 1)
}
```