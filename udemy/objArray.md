# Objects Big O
- Objects are not ordered
- Searching O(n) --> Linear
- Insertion, Removal, Access --> O(1) --> Constant --> Fastest

# Arrays
- Ordered
- Search is O(n) --> Linear
- Access is O(1) when we have the index of the element we need to access
- Adding and removing depends on where we are inserting or removing.
    - Adding to the end is Constant time because we don't need to move anything.
    - Insert/removing at the beginning is a bit tricker because every element will need to be re-indexed to insert an element at the beginning.
        - Probably O(n)