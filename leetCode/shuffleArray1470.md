# Shuffle the array

# Tutorial
- https://www.youtube.com/watch?v=g7wGiljOBgU

x1 = position 1 of x
y2 = position 2 of y

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

# Simplified
We have an array "nums" and an index position to split in half "2n"
If the array is [1,2,3,4] and 2n= 2
We split at index 2 --> [1,2,...,3,4]
We then create a new array 
We push index 0 of array x
we push index 0 of array y
We keep doing this till we have a new shuffled array

var shuffle = function(nums, n) {
    //create variable for x, y, and new array to push into
    
    let x = nums.slice(0,n), y = nums.slice(n), result = [];

    // create variables for current x position and current y position in loop
    for(let i = 0; i < nums.length/2;i++){
        let currentX = x[i];
        let currentY = y[i];
        
        // push currentX first
        result.push(currentX);
        // push currentY second
        result.push(currentY);
    }
    //return new array 
    return result
};