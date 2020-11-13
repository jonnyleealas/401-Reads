# Jonathon Lee
# Hash Tables


## Hash table
 Hash tables are another form of data structure. Libraries use these. They assign a number to a book that gives its position in a library. When a key is too large to give an index position its a good idea to use hash to assign it an index position. Large keys are converted into small keys by using a hash function. The values are stored in a data structure call a hash table. The idea is in hashing is to distribute entries (key/values pairs) uniformly across an array. A hash is the result of some algorithm taking an incoming string and converting it into a value that could be used for either securely or some other purpose. In the case of a hash table, it is used to determine the index of the array.

 ```
- hash= hashfunction(key)
- index= hash% array_size
 ```

### Buckets 
- A bucket is what is contained in each index of the array of the hash table. Each index is a bucket. An index could potentially contain multiple key/value pairs if a collision occurs.

### What are they
The basic idea of a hash table is the ability to stored the key into this data structure, and quickly retrieve the value. This is done through what is called a hash. A hash is the ability to encode the key that will eventually map to a specific location in the data structure that we can look at directly to retrieve the value. Since we are able to hash our key and determine the exact location where our value is stored, we can do a lookup in an O(1) time complexity. 

### Creating a Hash
We should use 1024 as a hash array size, which is important for index placement.
```
1. Add or multiply all the ASCII values together.
2. Multiply it by a prime number such as 599.
3. Use modulo to get the remainder of the result, when divided by the total size of the array.
4. Insert into the array at that index.
```
### Collision
A collision is what happens when more than one key gets hashed to the same location of the hash table.
We avoid collision by storing linked lists instead or leaving empty buckets at null. Each index is called a bucket because they store multiple key/value pair.
Collisions aren't necessarily bad we just don't want many collisions. We can avoid collisions by chaining using linked lists.

### Maps
- accept a key 
- calculate the hash of the key 
- use modulus to convert the hash into an array index
- store the key with the value by appending both to the end of a linked list

### Hashmap reads
- Accept a key
- calculate the hash of the key
- use modulus to convert hte has intro an array index
- use the array index to access the short linkedlist representing a bucket
- search through the bucket look

ing for a node with key/value pairs that matches the key you were given

### Chaining
chaining  means creating linked lists inside of buckets.

### Conclusion 
A hash map or hash table uses a hash function to compute an index(hash code), into an array. That array can hold data in its index or buckets in the for of linked lists to avoid collision( having multiple values stored in the same index). Hash tables are more efficient than search trees or other table look up structures.

**side notes**
```
Hash maps are sets of data that are chained. Think of a door that has hanging beads across the top frame. The frame would be the array holding the data(beads). The beads would be the linked list, or chains that hang to the frame, and can go on forever.
```