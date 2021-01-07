# Linked List

## Sequential collections elements
- Node/DataValue with a pointer that reference the next node in the list
- head point to the second
- Tail is the end and points to null or the end
- each node points to the next node

## Doubly linked list
- Point to next
- Second pointer to pervious node
- Allows it to traverse forward and backward
- head has a previous pointer to null
    ```
    music player each song is node with a reference to next and previous
    - It may even be a circular linked list
    Where head and tail point to each other rather than null.
# Array vs Linked List
- Array: Direct access to stored data
- Linked list are sequential access to stored data.

## Array 
- continues block of memory; we can jump to whichever position.

## Linked list
- Sequential access
- Each element remembers that its part of a specific order, but elements can be stored anywhere in memory. Because of this we have to go through each node till we find a specific node.
- Advantage: Elements can be stored anywhere in memory.
- Adding and removing elements is faster than an array.
## To add
- we just create a node anywhere we have space in memory. Then we point the newNode to a node in the linked list, and have the list point back to the newNode.
## To Delete
- Have the previous node point to the node after the node you want to delete. Then we break that nodes link to the linked list.
## What makes linked list cool
- They are really good at inserting and deleting.
- Used for volatile dataset that is always changing. 
- Always takes the same amount of time no matter the size of the linked list.

```



class LinkedList{
constructor(){
  this.head = this.tail = null
  }
  // append adds to end of list
  append(value){
    if(!this.tail){
      // if list is empty set head and tail with newNode plus the value passed into it.
      this.head = this.tail = new Node(value)
    } else{
      // capture current tail in variable
      let oldTail = this.tail
      // set new tail to new value
      this.tail = new Node(value)
      // then the old tail point to the new tail
      oldTail.next = this.tail
      // new tail point to the old tail
      this.tail.prev = oldTail
    }

  }
  // adds to beginning of list. Pass in a param value
  prepend(value){
    // check if list is empty
  if(!this.head){
  // set head and tail to new Node
  this.head = this.tail = new Node(value)
  } else {
    // capture old head
    let oldHead = this.head
    // set this.head to new Node 
    this.head = new Node(value)
    // old head point to the new head
    oldHead.prev = this.head
    this.head.next = oldHead

  }
  }
  deleteHead(){
    // if list is empty
    if(!this.head){
      // return null
      return null
    } else {
      // capture val of old head and return it
      let removeHead = this.head
      // if only 1 node left in the list
      if(this.head === this.tail){
        this.head = this.tail = null
      } else {
        this.head = this.head.next
        this.head.prev = null
      }
      return removeHead.value
    }

  }
  deleteTail(){
    // if list is empty
    if(!this.tail){
      return null
    } else{
      // capture value of tail and return
      let removedTail = this.tail
      // if 1 node left
      if(this.head === this.tail){
        this.head = this.tail = null
      } else{
        this.tail = this.tail.prev
      // clean up the reference to the next node
        this.tail.next = null
      }
      return removedTail.value
    }

  }
  // traversal we always need to keep track which node we're on. we can use a while loop
  search(value){
    // we keep track of the currenNode first
    let currentNode = this.head
    // start at the head and traverse through the list
    // while we have a current node
  while(currentNode){
    // if currenNode value is equal to the value passed in return currenNode value
    if(currentNode.value === value){
      return currentNode
    }
    // if that currentNode value is not equal to value passed in, we go to the next node
    currentNode = currentNode.next

  }
  // if we traverse entire linked list without ever finding the value, we will return null
  return null

 }
}

class Node{
  constructor(value, prev, next){
    this.value = value
    // null will set a default value is next or prev are not given
    this.prev = prev || null
    this.next = next || null
  }
}
let list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)

// instantiate the list in order to view it
list.prepend(0)
list.prepend(-1)
list.search('jason')

list.search('blah')

list.deleteHead()

// node hold objects
// the object holds a value
// linked list hold objects

```