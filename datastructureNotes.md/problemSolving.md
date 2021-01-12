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
            
3. Solve or simplify