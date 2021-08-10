# Tree Traversal
- Breadth-first Search --> Working across the tree on the same level
- Depth-first Search --> 3 types --> Going down and then going back up

# BFS
- Going across the tree level per level
- Uses a queue --> first in first out --> push or shift(remove from the end)
- The queue helps the program remember which node to visit next. 

# Code
- Create a queue(can be an array) and variable to store the values of the nodes visited.
- Place the root node in the queue.
- Loop as long as there is anything in the queue.
    - Dequeue a node form the queue and push the value of the nod into the variable that stores the nodes.
    - If there is a left property on the node dequeue- ad dit to the queue.
    - If there is a right property on the queue add it to the queue.
- Return the variable that stores the values.

# Simplified
- Binder for this.root, queue array, data array
- push this.root into our queue
- while queue.length
    - take the first thing off of queue
    - put the first node into data array
    - if there is a left queue.push left
    - if there is a right queue.push right
    - return data array