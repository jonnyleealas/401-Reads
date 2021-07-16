# Recursion Relation
- T(n) = Time taken by a specific algo. 
- (T(n) = T(n-1) +1) --> T = time, n = numbers, T(n-1)+1 = Is a recursive functions that subtracts 1 from n each time it calls itself. The +1 is the extra time that the loop checks once n is no longer greater than 0. 
- If a code statement is 1 then it is said to be constant.

# Code Sample
```
Test(n){  --> T(n) time
    if(n > 0){ --> 1 
        print --> 1
        Test(n-1) --> T(n -1) time// This is recursive minus 1
    }
}



```

# Summary 
- The function runs some commands
- At the end of the command it runs its self Test(n) but subtracts 1 from n --> Test(n-1). Each time it runs itself it subtracts 1 from n so that by the end it has reached 0.
- In this case the function is O(n) time.