
## Jonathon Lee
## Javascript 401
## Trees

### Trees Vocab 
```
Node - A node is the individual item/data that makes up the data structure
Root - The root is the first/top Node in the tree
Left Child - The node that is positioned to the left of a root or node
Right Child - The node that is positioned to the right of a root or node
Edge - The edge in a tree is the link between a parent and child node
Leaf - A leaf is a node that does not contain any children
Height - The height of a tree is determined by the number of edges from the root to the bottommost node
```
#
### Traversal Depth First
Here we traverse through a trees height, or the connecting lines between root and edges.
There are three methods for traversing depth first
```
- Pre-order: If it's the first thing you do.
- In-order: If you ask for the left value first.
- Post-order: If you ask about left and then right and then push. {credit Sarah Shattus}
```

### Traversal Breadth First
Iterates through the tree by going through each level of the tree node by node. 
```
- Uses a queue instead of a call stack.
```

### Binary Tress
```
- Only two children per node; left and a right.
```

### Adding a node
```
- No rules for where nodes are placed.
- Good choice to fill all child nodes top down. 
- Using breadth traversal we can find the first node that doesn't have 2 child nodes and insert a new node.
```

### Big O
```
- Inserting a new node is O(n)
- Breadth is O(w) w meaning the largest width of the tree.
- A perfect tree non leaf nodes have exactly two children. 2^(h-1) h is the height of the tree; height is log n. n is the number of nodes.
```
#### Binary Search Trees(BTS)
```
- Values smaller than the root are placed to the left.
```

#### Searching Binary Trees
```
- Compare against the root of the tree of sub tree to the node you are looking for. If smaller traverse the left side and vice versa.
```

#### Binary Tree Big O
```
- O(h) h being height. Height is log(n)
- Space complexity will be o(1) because we aren't allocating additional space.
```
