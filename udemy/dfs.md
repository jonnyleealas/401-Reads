# Depth First Search
- Search down till we hit the end of the tree.
- For any traversal we need to visit node, add to list, explore the entire left and entire right side.
- When we change the order in which we visit it will change the output. 

# DFS Pre-Order
- Visit node then left then right.
- Visit node first then explore left side, then explore right side.
- array for visited
- binding for current = this.root
- Helper function that accepts a node
    - push node into visited array
    - if node has left call helper function on left
    - if node has right call helper on right
    - invoke the helper function with current
    - return array of visited.

# Summary DFS Pre-Order
- Visit node first
- Search entire left side then entire right side of each node.
- We do this with a helper function recursively.
- We then instantiate the function and return our data array.

# Pre-Order Code
```
pre-order(){
    let data = [];
    let current = this.root;

    function traversal(node){
        data.push(node.value);
        if(node.left) traversal(node.left);
        if(node.right) traversal(node.right);
    }

    traversal(current);
    return data;
}
```

# Summary DFS Pre-Order
- We push our root node.value before we visit its left and right children.

# DFS Post-Order
- We visit root node last.
- We visit the children left and right before pushing the parent node.

# Post-Order Code
```
postOrder(){
   let data = []
   let current = this.root
    function traverse(node){
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        data.push(node.value)
    }

    traverse(current);
    return data;
}
```

# Summary Post-Order
- Similar to DFS pre-order except we push the root value after we have visited the left and right children.