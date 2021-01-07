# Common Time complexities N:19
- Constant --> O(1)-->  1
- Linear -->O(n)--> 
- Quadratic -->O(nˆ2)--> 4
- Logorithmic -->O(log n)--> 19
- N log N -->O(n log n)--> 361
- Exponential -->O(2ˆn)--> 524288
- N Factorial -->O(n!)--> 121645100408832000

# Space Complexity
- Amount of space a program takes

# Searching by cutting in half
- Binary Search

# Sorting
- in order for bs to work we need to use sort
- Cost of sort is O(N Log N)

# arrays
- Fundamental data structure
- Full cap

# List data structure that is flexible
- Linked list
- Nodes hold data and a pointer
- Pointing to null means the end of the list
- If it points to prev its a doubly linked list
- Appending to a list is O(1)

# Trees
- Point to left or right
- Binary tree
- No children is a leaf
- BST : left is > than right
- Time complexity is O(H) based on the height of the tree.

# HEAP
- Another type of search tree
- Parent nodes have a greate that or equal to priority as their child nodes.
- The root is the heighest priority element
- Its unsorted we only care about whats at the top.
- O(Log N)

# Traversal
- Depth first: going deep and then moving on to the next. Fully exploring one path.
- Depth first can use stacks, and recursion.
- Breath first: Level by level. Inward outward.
- Breath first uses queues.

# Graphs
- Collection of vertices
- All trees are graphs but not all graphs are trees.
- Can be directed or undirected.
- 5 degrees of separation kevin bacon.
- Model people as vertices and model relationship as edges(lines or height).
- Facebook friend list. We can find smallest degrees of separation.

# Hash Maps
- Holy grail of data structures
- Built on top of an array.
- Optimized to store key value pairs.
- Retrieve, delete, and store in O(1)
- Constant time.
- Use hash functions which take a key and return a hash code.
- Collisions: Two or more key objects produce the same hash value.
- Collisions can be avoided by storing values in linked list.
- Object in js is a hash map.