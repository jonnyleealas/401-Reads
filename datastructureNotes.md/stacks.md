# Stacks
- Managing invocations in the event loop.
- Undo/Redo
- Routing history 
- More than one way to implement a stack.
- Stack is a concept for storing data where the last thing is the first thing to go out.

# Creating a Stack
- Push method to add to a stack.
- Pop method to remove the last thing added in.
- unshift() will add to the beginning of an array.
- shift will remove from the beginning of an array.
- adding to the beginning of an array using unshift we will have to shift each index and reposition everything in the array.
- when working with an array push and pop are faster than unshift and shift.
- we can create new stack: let stack = new Stack()
# Class Stack
- constructor: this.first, this.last, this.size
- Node: this.value, this.next
    ```
    class Node{
        constructor(){
            this.value= value;
            this.next = null
        }
    }
    class Stack{
        constructor(){
            this.first = null;
            this.last = null;
            this.size = 0;
        }
    }
    ```
- Push and pop in a stack are supposed to be constant time.