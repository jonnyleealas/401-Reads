# How to search
- Brute force we can go through an array and check each item in the array.
- If unsorted we actually have to go through each item.
- This is called linear search.
    - indexOf, includes, find, etc ....
- Linear means one item at a time checking every single thing.
    - function linear(arr, value){
        for(let i = 0; i < array.length; i++){
            if(arr[i] === value) return i;
        }
        return -1
    }
- Time is O(n) depends on the size of the array.
- Big O
    - Best Case is O(1)
    - Worst Case is O(n)
    - Average Case is O(n)

# Sorted Search Binary Search
- Much faster
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at time.
- Arrays must be sorted. Only works on ordered arrays.
# Divide and Conquer
- Start at left 0 and right array.length -1 then start at the middle

# Binary Search Pseudocode
- function binarySearch(array, value){
    let left = 0
    let right = array.length -1
    let middle = Math.floor((left + right)/2)  // rounds down
    while(array[middle]!== value && left <= right){
        if(value < array[middle]){
            right = middle -1
        }else{
            left = middle +1
        }
        middle = Math.floor((left + right)/2) 
    }
    if(array[middle] === value){
        return middle;
    }
    return -1
}

# Binary Search Big O
- Worst Case and Average Case is O(log n)
    - When we double the size of n we are simply adding one more step or one more thing that the search is searching for.
- O(1)
