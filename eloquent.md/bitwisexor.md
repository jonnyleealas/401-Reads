The bitwise XOR operator (^) returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s


```
let write = 2
let read = 4
let update = 1
let permission = 0
 permission = write | read 

console.log(permission & write | read  ? "yes": "no")

```

