# Graphs
- Are node but in graph are called vertex
- linked list and trees are graphs
- LL are linear
- trees are hierarchical, parent to child
- react components are trees because they all point down.
- Graphs can point anywhere not just parent to child.
- Edges can point anywhere.
- Edges connect two nodes/vertices together.

# Neighbors
- If  b, d, and ,c are all connected to a they are neighbors.
- If nodes are connected to edges they are call neighbors. However, to actually be neighbors they have to have edges that point to each other. If a point to c and c does not point to a c does not have a neighbor. A however has c as its neighbor do to its edge pointing to it.
- face book is an undirected graph: like a doubly linked list
- instagram is a directed graph

# Complete Graph or Commune
- Every node is connected by edges to one another. Looks like a kite.
- No start and no end. 
- Where we start becomes the root.

# Traversal
- Depth First
- Breadth First

# Ascyclic
- Directed
- No cycles
- Linear
- Only go one way

# Representation Of Graphs
- Adjacency Matrix
```
      a b c
    a 0 0 1
    b 0 0 1
    c 1 1 0
```
- Adjacency List
Adjacency is a hash map that shows neighbors
```
a --> c --> d
b --> c
c --> a --> b

```

# Traversal Steps using Depth First
- Create a queue
- give it a root 
- use a while loop
- enqueue
- also dequeue
- then enqueue its children and run the same process on them
- maybe use a set to return the things we have seen
- We traverse neighbors instead of left and right
- We keep track of the things we have seen.
- Set is O(1)