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
## Sliding Windows


## Divide and Conquer

## Dynamic Programming

## Greedy Algorithm

## Backtracking

