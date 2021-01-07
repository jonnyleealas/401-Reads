# Hashtables
- Also known as dictionaries
- Similar to maps
- Used in security , crptography and graphics.
- Creates a reference to data.
- Results are irreversible
- deterministic: same values in are the same values out; always.
- if same values then collisions are created.

# Buckets
- hold content
- we set initial max capacity.

# Adding a key balue pair
- take a key and pass through hash
- hash outputs a number that corrisponds to an index in an array where we store the value.

# Accessing 
- take a key and run it through the same hash functions, and we directly access the bucket in the array where the value is stored.
- Direct access
- Efficient

# Notes
/**
 * hash tables always have key value pairs.
 * we need to keep track of the keys to find the values when searching.
 * when deleting we need to keep track of the key and value we delete in order to return.
 * To grab a value we name the array and the index[index]. However with hashtables we call the array name and instead of index we call the id of the index to return the value.
 * 
 * offeset/index gives you exactly where it is in memory
 * 
 * hash tables do not give you exact position of where it is in memory.
 *  We need one extra step to get the actual location. 
 * Insert and retrevals are O(1)
 */

 # Hashing Aspects
 - We get an array of a certain size
 - The position in a hash table is determined by using a hashing algorithm. Thats how a position for data is chosen.
 - we can hash by taking the key % the size of the array.
 - the remainder give us the position of the data in the array.
 - key can be strings or numbers. If the data type is hashable we are good. Data type that constantly changes are probably not hashable.
 - immutable data can be hashed.

 # Collisions
 - A problem with hashtables is collision. 
 - When the hashtable is trying to store a key in a key that already exists.
 - We can avoid this by using a linked list. linked list option of storing in hashtable is called separate chaining. 

 # hashing
 - take string and convert it into a hash
 - we use a for loop at string.length
 - create a const hash
 - multiple hash by prime number then by s.charCode(i) then modulo charCOde(i) with a prime number.
 - we always set an array size.