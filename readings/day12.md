# Jonathon Lee
# Class 401
## Read 12

# Stack and Queues
A stack is made up of Nodes that point to the next node in the stack. There is always a next value until there isn't. When there is not another node to point to we have reached the end or the null. 

## Terms
- Push: Adding a node to the stack.
- Top: The first node in the stack.
- Pop: Removing a node from memory.
- Peek: Viewing the value of the top node in the stack.
- IsEmpty: Returns true when a stack is empty else it returns false.

## Adding a node to the top.
Lets say we have a stack of nodes and we would like to add a new node to the top.
We start by saying "new node make the next thing you point to point to the current top node". Next We say " new node, become the top node". Now we have added a new node to the top of a stack.