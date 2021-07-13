# Intro
- First Design
    - Algorithms can sometime be written in design time first.
    - Starts with knowledge of domain. The people who are using the program may have the domain knowledge.
    - Programers also can have domain knowledge.
        - Design can be written in English or math. Math is better. It must be understandable.
    - Hardware and software are not dependant on the design. 
    - Analyze what your design.
- Then Program
    - After designing we can move to programming our program/ problem.
    - Must be written in a programming knowledge. 
    - When writing the program it is dependant on hardware and software.
    - Test the program.

# Priori Analysis
- Algorithm
- Time and Space Function

# Posteriority Testing
- Program

# Characteristics of Algorithm
- Input/ what are we putting into our program when the user is using it?
- Output/ Result
- Everything in your algorithm should be human readable and clear to understand.
- Statement in you algo should have purpose.

# How to write an algorithm
We write the basics or what the program will do. Its not necessary to code the program at this stage. It should just be understandable and readable to humans.

```
algo swap(a,b){
    temp = a; 
    a = b;
    b = temp;
}

Time = f(n) = 3 or constant time
```

# Analyzing an Algo
1. Time --> How long a procedure is going to take --> Programs should be time efficient.
1. Space --> How much memory space will it take from a machine to run the program.
1. Network Transfer --> Network consumption --> How much data is going to be transferred. 
1. Power consumption on different devices --> How much power will be consumed by our program.
1. How many registers in a CPU will our program use. 

# Time
- Every statement takes 1 unit of time.
    - Single statements 

# Space 
- We count each variable used when counting space.
```
temp = 1
a = 1
b = 1
s(n) = 3word --> constant ---> O(1)

```

# Summary on Design
## We have to think about a few things when writing a program.
- First we Design a program and next we write the program.
- When designing we need to make sure everything is human readable and easy to understand. Like talking to a child. Nothing complicated.
- We must know what input goes in our program and what output we are expecting.
- Knowing hardware and software is not necessary in this stage.
- When writing a program we must know which software we are using and which hardware. Also which programming language we are using to accomplish our program. 
- We must also analyze our program according to space and time.
    - Each statement takes 1 time unit
    - Each variable takes 1 space unit
    - Constant time is equal to O(n) and S(n)
    - If each statement only does one thing than it is said to be constant.
- When analyzing we should also take into account how much power and memory it will take up in the machine our program is meant for. Ex: mobile, laptop, etc.
- Also how many registers in a CPU our program will need to use.