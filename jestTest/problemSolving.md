# Understand 
- Make sure you understand the prolblem before trying to solve it.
- Come up with concrete examples to reword the problem. Explain the problem to a child.
- Come up with user stories with input and output.
- Unit test help too however I am not great at them at the moment.
- Restate the problem to understand.
- Then progress to more complex examples.
- Explore with invalid inputs.
- Explore examples with empty inputs.
- Explore edge cases or invalid inputs.

# Breaking down the problem
- Understand the problem
- Explore with concrete examples.
- Break it down
- Does that sound crazy to you? Do you think that will work?
- Allows for time to think about the code. 
- Allows for hashing out of lingering questions.
- Forces you to think about the code before you run without walking.
- Helps stay focused.
- Loop over every character in the string and do something.

Example of pseudo
    Make and object to retun
    loop over string
    return the object at end

- Alpha numeric characters are spaces and exclamation points or periods.
- In an interview it helps and demonstrates to the interview that you have formulated an approach to solve the problem when you write down pseudo code.

# Break down problems
- We must master common problem solving patterns. These will help.
- Smaller part of the problem are easier to solve.
- Do the stuff you know how to do and come back to the solve the harder parts later.
- Ignore where you are stuck to focus on making progress.
- Do what you know and come back to the difficult part. It may even help make something understanding click or gain an ah ha moment.
- Find core thing
- Temp ignore 
- then come back.
- Start with main logic.
- I dont know exactly how to do this part so i'll just skip it for now and come back to. If I can't solve it with alloted time I would simply make a google search.
- Its ok to start with a brute force approach.
- Adding to an object variable let object = {} : object[add a thing]
- Shoot for getting 90% of the problem solved.
- Demonstrate problem solving ability.
- Get righ pieces in place so you can just plug and play.


# Frequency counter
    - Collect and compare values and frequencies. If a value is contained in 
       - Example:
        Write a function call same should return true every value in a second array is the same except squared.
        // this is a non frequencey version of solving a problem
            func same(arr1, arr2){
                if(arr1.lentch !== arr2.length){
                    return false
                }
                for(let i = 0; i < arr1.length; i++){
                    // this asks what is the index of arr1 ˆ2 in arr2
                    // what index in array 2 is the squared index of array1
                    let correctIndex = arr2.indexOf(arr1[i]** 2)
                    // -1 means it is not found
                    if(correctIndex === -1){
                        return false;
                    }
                    // this removes 1 if the an index is found splice removes from an array.
                    arr.splice(correctIndex, 1)
                }
            }

            two un-nested loops are better than two nested loops
            // Here is a frequency version of the above code

            funtion same(arr1, arr2){
                if(arr1.length !== arr2.length){
                    let frequencyCounter1 ={}
                    let frequencyCounter2 ={}
                   for(let val of array1){
                       frequencyCounter[val]= (frequencyCounter1[val] || 0) +1
                   }
                   for(let val of arr2){
                       frequencyCounter2[val] = (frequenceyCounter2[val] || 0) +1
                   }
                   for(let key in frequencyCounter1){
                       if(!(key ** 2 in frequencyCounter2)){ 
                           return false
                       }
                       if(frequencyCounter2[key **2] !== frequencyCounter1[key]){
                           return false
                       }
                   }
                   return true
                }
            }


## FrequencyCounter

 - Usually use an object to construct a profile
 - Break down the contents of an array
 - Usualy a linear structure
 - Then we can compare one object to another.
 - This heps improve our code


 
        
# Multiple pointers
    - Searching for a pair of values
    - Searching for something that meets a condition
    - Use two references or pointers/variable
    - pointers are variables
        - SumZero 
        - countUniqueValues

# sliding window
    - Set of data looking for a subset of that data 
    - a subset of data that is contigues
    - we make a window that is a variable or a sub array.
        - maxSubArray
# divide and conquer
    - Binary search
    -  
- dynamic programming
- greedy algorithm
