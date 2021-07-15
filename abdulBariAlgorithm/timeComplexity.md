# If we don't know how many times
- If we can't answer how many times a loop will run then it is known as O(root n)
- K is used when we don't know how many times.

```
for(let i=0; i < n; i = i * 2){
    console.log()
}

```

This loop will run 2ˆk power. Meaning we don't know exactly how many times it will exponentially run because i in always multiplied by 2. This will always be 2ˆk = n --> k = logn base 2 time.