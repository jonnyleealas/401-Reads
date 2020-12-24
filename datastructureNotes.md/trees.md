# Trees
- edge are the lines that connect nodes
- branch are the nodes children
- leafs are children that don't have children
- the top node is the root
- width is the widest without counting leafs.
- height is number of edges

# traversal 
- systematic way of visiting nodes in a tree

# breadth first
- level order
- use a queue
- means go deep first 
- the queue is as big as the width
- time N space is W
- we use while loops which are efficient.

# depth first 
- pre, in order, post
- stack

# Pre
- visit, print, left, right
- Check left
- if left, the child will check if it has a left
- if there isnt it will go back to the parent root and check if it has a right.
- if it has a right the child node will check if it has a left
- if not it will check it it has a right
-

# in order
- produces a sorted list
- it starts with the smallest number starting at the left

# post order
- left
- right
- visit
- when each node has finished its left, right, visit it will be printed