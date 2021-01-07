# Hashmaps
- Have a key and a value
- Are objects
- Hash tables are objects
- Stores unique keys in a way we can find them easily.

# Finding a think in a list
- Iterate
- look at the value
- have I seen it before

## How do I decide if I've seen it before using array O(n)?
- Check the list
- Array.includes()
- yes return true
- no 
- add to a list (array.push())
- keep going
- Return false

## Using a hashtable object O(1)
- hashmap .set()
- seenBefore.has()
    - iterate
    - have i seen it before
    - yes return
    - no
    - store the thing to reference later
    - keep going
    - hash tables use keys to name an index position

## Names
- dictionaries(python)
- hashtable
- hashmaps
- objects(javascript)
- maps(java)
- hashes(ruby)

# Hash Function
- Generates a value of fixed length for each input that it gets
- md5, sha-1, sha-256, different types of hash functions
- Hash functions only go one way
- indemponent: a function always out puts the same output
- really fast data access
    - insert O(1)
    - lookup O(1)
    - delete O(1)
    - search O(1)

# Collision
- slows down reading and writing
- O(n/k) k is size of hashtable
- Or O(n) if we remove constants

