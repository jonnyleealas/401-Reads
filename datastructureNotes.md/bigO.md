# big o what is it?
- how do we know which ds is the correct for time and space.
- There are many approaches to solving problems. Big helps us find which one is best.
- Its a system of how to compare code based on time and space.
- Helps find the best solution.
- Helps discuss trade-offs between solutions.

# snippets
- inspect
- sources
- snippets
- save code for reuse in your browser.

# Takes time
- every operation takes memory
- an operation is as simple as a letter or number on the screen.

# Big o
- relationship of input size and time
- if n grows how does the time change
```
f(n) = function with an input of n

```

# linear
- As n scales the runtime scales
# quadratic
- As n grows the runtime is related to the square of n
```
f(n)= nˆ2
```
# constant
- As n grows runtime stays the same
- when there is a definite limit to the number of operations its probably constant.
```
f(n)= 1
```

# Space
- This is concerning only the algorithm
- Boolean, numbers, undefined, mull are all constant
- strings are O(n)
- arrays and objects are O(n)
- for loop if O(1)

# Logarithms
- Not O(1) or O(nˆ2) basically not simple
- Its the inverse of exponentiation
```
logˇ2(8)= 3 this is asking 2 to what power equals 8. 
2ˆ3 = 8 there for our answer is 3 because 2 to the power of 3 equals 8. 
```
- log of a number roughly measure the number of times you can divide that number by 2 before you get a value thats less than or equal to one.
```
8 / 2
4 / 2
2 / 2
1
the Log of 8 is 3 or log(8) = 3
```
- Log(n) is linear is FANTASTIC but not as FANTASTIC as O(1)
- O(nˆ2) is bad

