# Functions are values
- Below is an example of higher order functions and how they are ultimately just values.
- the function "loop" takes a value: start, function: test, function: update, function: body
- Below are several ways we can write values using functions. 
- I can see how a function is just a tool to that returns a value.


```
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}
```

```
let test = (n)=> n>0;
let test = function(n){
  return n >0
}
```

```
 let update = (n)=> n-1;
```

```
 let update = function(n){
   return n-1
 }
```

```
function update(n){
  return n-1
}
```

```
loop(5, 5 => 5 > 0, 5 => 5 -1, console.log)
```

```
loop(5, test, update, console.log);
```