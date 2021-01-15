# Algorithim
- A set of steps or instructions to accomplish a task.
- Foundation of being a problem solving developer.

# How to get better
- Some people are better, but its not hopeless.
- Some have to work towards it. A week later we could solve it.
- Devise a plan for solving problems. Strategies 
- Master common solving patterns.

# Problem solving strategies
- Set of steps that can help.
- This is a game plan on how to attack problems.
- Understand the problem
- Explore examples
- Break it down
- Solve and simplify
- Look back and refactor
- We get better with time. 
- Its a skill set that comes with time.
- Use a game plan as a step by step guide.
- How to solve it book
# 5 Steps
1. Understand the problem:
Don't just dive in. Take time and understand. Before everything and make sure what needs to be done. Ask questions
  - Can i restate the prob in my own words?
  - what are the inputs and outputs
  - Can the outputs be determined from the inputs. Do i have enough info to solve the problem just using the information.
  - How should i label the important pieces of data that are part of the problem? What really matters and whats the terminology i should use?
   -Sum of two: write a function that takes two numbers and returns their sum.
     - write a function that adds two numbers?
     - input: what are the exact inputs? is it always two numbers? 
     - Output: should it be an integer or a flow or string?
     - Do we have enough info to solve the problem? Can outputs be determined from the inputs?
     - How should I label the important data? In this case input and output. Add num1 and num2, and sum is what we return. That is how we label this specific problem.
2. Concrete Examples: Come up with examples can help understand the problem better. 
    - Provides sanity checks that your solution will work.
    - will help get additional info on how to solve the challenge.
    - User stories.
    - Unit Tests are used to help layout how things should work.
        - Start with simple examples.
        - Write down two or 3 simple examples.
        - Progress to other examples
        - Edge cases
        - Invalid inputs
            ## Write a function whcih takes in a string and returns counts of each character in the string
            - Do we want to account for spaces or numbers?
            - Ignore casing?
            - What are we returning.
            - Explore examples with empty inputs? Whate are we returning.
            - Explore with invalid inputs.
            - Understanding this is importanint int hte real world.
            - can give insight on how a problem works.
    3. Break it down: Take the steps of the problem and write them down. We need to communicate what we are doing.
        - Could this be the right way to do it?
        - Does this sound crazy?
        - Helps think before we start flying. 
        - Helps catch any lingering conceptual issues or misunderstanding.
            - make obj to return at end
            - looper over string, for each char
            - if the char is number/letter key in obj add 1 to count
            - if not number/letter add it and set val to 1
            - if its space, period etc do nothing
            - return obj at end
            
4. Solve or simplify:  Solve a simpler problem. Try to ignore the part that is giving me a hard time and work on what you can make progress on.
    - Helps gain insight on how to solve the problem.
    - find core difficulty
    - ignore di
    - write simplified solution
    - incorporate difficulty again
    - Im not sure how to do this do you have any suggestions
5. Refactor: Once you solve it go back and refactor it. This will improve youre code.
    - Can i arrive to a result differently?
    - Can I check the result?
    - Can i understand it at a glance?
    - Can I use this result to solve another problem?
    - Can I improve the performance?
    - How have other people solved this problem?
    - Its worth looking at other implementations.
    - Compare others code to yours.
    - Use a for of instead of a for loop for better esthetics.
    ```
    fn charCount(str){
        var obj = {}
        for(var char of str){
            char = char.toLowerCase()
            if(/[a-z0-9]/.test(char)){
                if(obj[char]>0){
                    obj[char]++
                }else{
                    obj[char]=1;
                }
            }
        }
        return obj
    }

The above could be written as 
    fn charCount(str){
        var obj ={}
        for(var char of str){
            char = char.toLowerCase()
            if([/a-z0-9]/.test(char)){
                obj[char]= ++obj[char]|| 1
            }
        }
        return obj;
    }
    
    ```

# Recap
- Understand problem
- Explore Examples
- Break it Down into steps or pseudo code
- Solve/Simply try and solve something and then come back to the hard part. 
- Look back and refactor. This is most important for learning.
    
# How To Improve?
- Devise a plan for solving problems?
- Master common problem solving patterns.

# Patterns
- Frequency Counter
- Multiple Pointers
- Sliding Windows
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithm
- Backtracking

## Frequency Counter
- Use an object to collect values and frequency
- similar values
- if a value is contained in a value
- comparing certain data
- usually O(n)
- frequency meaning how frequent
- ** means exponent
- Anagrams compare whether letters occur in a different order. Ask whether there will be number, upper or lowercase, more words or just one.
    - if the lengths dont match then false.
    - if its in the obj add 1 if its not in the object we set the object to array index 1.
    - when checking array 2 we subtract 1 from the object.
    - if the letter is not there we return false.


## Multiple Pointers
- Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on certain condition.
- Very efficient for solving problems with minimal space complexity as well.
- We can use them in arrays, string , linked list.
- We use two references. 
- Creating pointer means creating a variable.
    - Approach to sumZero
    - Use two pointers to test conditions
    - start one pointer at 0 and the other and 0 + 1 index.
        - A faster solution
        - in an ordered array we could set a pointer at index 0 to move through the list while another pointer starts at the end of the list toward the first pointer.
        ```
        fn sumZero(){
            let left = 0;
            let right = arr.length -1
            while(left < right){
                let sum = arr[left] + arr[right]
                if(sum === 0){
                    return [arr[left], arr[right]]
                }else if( sum > 0){
                    right--
                }else{
                    left++
                }
            }
            return undefined
        }


        ```

        - countUniqueValues
            - Takes a sorted array
            - counts all unique values and returns how many unique values there are in an array.
            ```
            fn countUniqueValues(arr){
                //this i is a counter at the end we return the count and it gives us how many unique values we have.
                let i = 0
                for(let j=1; j< arr.length; j++){
                    if(arr[i]!== arr)[j]{
                        //this moves i + 1
                        i++
                        // this move j to the i position
                        arr[i]=arr[j]
                    }
                    //do get the number of unique values we can return our counter of i. However i started at index 0. If we just return i it will give us an index of 6. We need to add 1 to add the correct number of unique numbers.
                    return i + 1
                }
            }



            ```
## Sliding Windows or sub array
- This pattern involves creating a window which can either be an array or number from one position to another. Depending on a certain condition, th window either increase or closes(and a new window is created). Very useful for keeping track of a subset of data in an array/string etc.
- It can be var, sub array, or string and we move that window depending on condition.
- can move from left to right or start at the center etc.
- Used to keep track and find a subset of data in a larger set of data.
    - MaxSubarraySum
        - start at the first index and count n spaces to the right. Add those number. Then keep doing that till we reach the end. 
        - Return maxSubArraySum.
        ```
        fn maxSubarraySum(arr,num){
            // if num is greater than the amount of things in the array stop.
            if(num>arr.length){
                return null
            }
            let max = -Infinify;
            for(let i = 0; i < arr.length - num + 1; i++){
                //temp stores our sum
                temp = 0
                // this second loop adds the numbers
                for(let j = 0; j< num; j++){
                temp += arr[i +j]
                }
                if( temp>max){
                    max = temp
                }
            }
          
        return max;
        }




        ```
        - Sliding window approach to the above code
        ```
        fn maxSubarraySum(arr, num){
            let maxSum= 0
            let tempSum= 0
            if(arr.length < num) return null
            for(let i = 0; i < num; i++){
                maxSum += arr[i]
            }
            tempSum = maxSum;
            for(letr i = num; i < arr.length; i++){
                tempSum = tempSum - arr[i - num]+ arr[i]
                maxSum = Math.max(maxSum, tempSum)
            }
            return maxSum
        }




        ```



## Divide and Conquer
- This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
- This pattern can tremendously decrease time complexity.
- Binary search, Sorting, Searching.
- We can take an array and we divide into smaller pieces. 
## Recursion
- Different way of thinking about finding solutions.
- Taking one problem over and over and doing it on a smaller piece of that problem.
- Two things have to be done.
- Call stack.
- Chrome dev tools to debug call stack.
- Helper method recursion and pure recursion to solve more difficult problems.
- Recursion is a function that calls itself.
- Invoke the same function with a different input until you reach the base case.
- Base case is where recursion stops. This is THE MOST IMPORTANT THING TO REMEMBER IN RECURSION.
- BASE CASE(END OF LINE) & DIFFERENT INPUT EACH TIME.
- Recursion is basically a call stack.
- 
## Trees
- Trees, binary search trees.
- Parent/ Child relationship
- Branches
- Lists are linear in a line in a row.
- Trees are non linear they can have many different paths to take. 
- Singly linked list are simple case for a tree. Special case of a tree.
- A child pointing to a parent is graph not a tree. 
- Every node edge must point down and only have 1 root.
- siblings are nodes that have the same parents. 
- Leaf node with no children.
- Html dom is a tree, network routing, Abstract syntax trees, artificial intelligence, computer files.

## Binary search tree
- each node can have at most 2 children
- it cannot have three.
- these are kept in an order.
- These are special case binary trees.
- BST used to store data to compare or can be compared.
- Which is greater or less.
- Less than are always left
- Greater are always to the right.
- Binary tree is not sorted but binary search is sorted.
- Search, Delete, Insert O(Log n)
- Space O(n) Worst Case O(n)
- Root is the most important.
- It only has a left or a right.
- Constructor has: value, left, right.
```
Create new node
start at root
    is there a root
    if not number becomes new root
    if yes, is number > or < than root
    if >
        is there a node to the right?
            if yes move to the right and check > or <
            if no, add node to the right
    if less than
        is there a left node
            if yes move there and repeat above steps
            if no, add node to the right position.

```
## BST find node O(log n)
- Start at root
    - is there a root. 
    - no? stop search is over
    - yes? is the root the element?
    - yes? return element
    - no? is value > or <
    - if >
        - is there a node.right?
        - if yes move to the right node and repeat steps
        - no? we're done searching
    - is it is <
        - is there a node to the left?
        - if yes go to the left node and repeat these steps
        - if no stop search we are done
## Tree traversal
- BFS, DFS, 
- BFS
    - Start at root and work across the tree
- DFS
    - Going down then going back up
        - in order
        - preOrder
        - post order
### Breadth First Search
- Use a queue, list, or array.
- push to add, shift to remove from beginning 
- queue to keep track
- build a list of data to return
    - take root and add to queue
    - loop as long as there is anything in the queue
        - dequeue a node from the queue and push the value of the node into the variable that stores the nodes.
        - if there is a left property on the node dequeue  add it to the queue
        - if there is aright property onb the the node dequeue -add it to the queue
        - return the variable that stores our values
        - the queue is used to remember if there is a left or a right. It will pop the left first and check to see if it has a left or a right. then it will pop the right and check if it has a left or a right. The queue helps us keep track of whether there is a left or a right. Then it tells us, "this was the first thing we looked out, so now lets go there and make some more checks.'
        - each time a node is popped off the queue, it is then added to visited array.


### DFS
- Pre, post, 
    - Pre
        - create a variable
        - create current
        - write helper function which takes a node
            - push val to store
            - if node has a left recursive call helper
            - if right recursive call helper function
        - invoke helper function with current var
        - return the array of values