# Binary Search Tree
- Has to be ordered.
- Any child of a parent lower are to the left and higher are to the right.
- Any node to the left of the parent is higher in value and any node to the right of the parent is lower in value than the parent.

# Node Class
- classes need a constructor function to create our object template
- this.value = value
- this.left = null
- this.right = null

```
class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null
    }
}
```

# BST class
- define class
- define constructor
- Give it a root that points to null
```
class BST{
    constructor(){
        this.root = null
    }
}
```

# Summary BST
- Binary Search tree must be in order
- left of the root is less than and right of the root is greater
- Must create a class for node and a class for bst
- Also we make root and point it to null so that we have a base layout for new instances of the class. We need to give the bst class an empty root.

# Summary Node Class
- We create a class with pointers to left, right, and value

