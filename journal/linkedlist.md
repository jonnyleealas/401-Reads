# first part of checking wether there are duplicates
traverse the list
at each node 
- have i seen it?
- yes? return true
- no, keep going.
Return false

## second part
traverse the list
at each node 
- have i seen it?
- check the list = array.includes()
- yes? return true
- no, keep going.
Return false

## Hashtable
We can use a hash table array.set instead of includes to get an O(1)
instead of O(n).
We need to see something unique? use a hashtable
This is a tool to solve a problem with.