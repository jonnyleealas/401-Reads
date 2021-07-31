# Recursion
- Must have a base case -->  A point where the recursion stops
- Different input each time the function is called within itself(recursively)

# Example
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