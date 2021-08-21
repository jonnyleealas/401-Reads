# Extract Max Heap
- Removing Max element
- Bubble Down, trickle down, sink down
- We put an element at the root that shouldn't be there then we bubble down till it gets to the correct position.
# Code
```
removeMax(){
      let max = this.values[0];
      let end = this.values.pop();
      if(this.values.length > 0){
          this.values[0] = end;
          this.bubbleDown();
      }
      
      return max
    }

    bubbleDown(){
      let idx = 0
      let length = this.values.length;
      let element = this.values[0];

      while(true){
        let leftIdx = 2 * idx + 1;
        let rightIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;
        if(leftIdx < length){
          leftChild = this.values[leftIdx];
          if(leftChild > element){
            swap = leftIdx;
          }
        }
        if(rightIdx < length){
          rightChild = this.values[rightIdx];
          if(
            (swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)
          ){
             swap = rightIdx;
          }
        }
        if(swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }

    }
```


# Summary extractMaxHeap
- We need to remove the largest element in a heap and then order the heap to send the new largest element to the top.
- pop() the index 0
- We take the last element in the heap and put it in index 0
- Use a bubble down method to swap element till all element are in the correct place.

# Notes 
- Any function that doesn't take an input can use global variables from the outside.

