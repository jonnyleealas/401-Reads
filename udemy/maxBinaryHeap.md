# Max Binary Heap
- 2n + 1 to find the right node
- 2n + 2 to find the left node
- (n - 1) /2 to find its parent floored("take decimal off")

# Steps to Building a Binary Heap
- Insert --> push --> add to the end of an array
- Swap to find its parent
- Parent must always be bigger than child


# Code 
```
class MaxBinaryHeap{
  constructor(){
    this.values = [41,39,33, 18, 27, 12];
    
  }

  insert(element){
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp(){
 // gives us the index of our pushed value
    let idx = this.values.length - 1;
// element gives us the value of idx
    const element = this.values[idx];
    while(idx > 0){
// Gives the index of the value pushed
      let parentIdx = Math.floor((idx - 1)/2);
// Gives you the value at parentIdx
      let parent = this.values[parentIdx];
// if the element is <= to parent we are done child needs to be less than parent in MaxBHeap
      if(element <= parent)break;
// the value at our parentIdx is now the value of our element index
      this.values[parentIdx] = element;
// the value at our idx is now the value of our parents index
      this.values[idx] = parent;
//this updates our previous index to be our new
      idx = parentIdx;
      
    }
  }

}
let heap = new MaxBinaryHeap();


heap.insert(9)
console.log(heap)
heap.insert(8)
console.log(heap)
heap.insert(700)
console.log(heap)

```