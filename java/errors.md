# Syntax errors
These are grammar errors caught by the compiler.

# Run-time Errors
If the compiler doesn't find errors the program will run. These are errors that happen at program execution (run-time). These happen after a successful execution of the code and are called run-time errors.
- opening a file that doesn't exist
- division by zero also known as division error
- Exception in thread "main

# Exceptions
Java uses exceptions to handle errors and other exceptional events. These are conditions that occur at runtime and may cause the termination of the program.
Exceptions include:
- name of exception
- the line of the program where the exception occurred
- stack trace
    - method that was running
    - method that invoked it
    - method that invoked that one
        - Examples of exceptions:
            - ArithmeticExceptions: something went wrong during arithmetic operation.
            - NullPointerException: You tried to access an instance variable or invoke a method on an object that is currently null.
            - ArrayIndexOutOfBoundsExceptions: The index you are using is either negative or greater than the las index of the array.
            - FileNotFoundException: Java didn't find the file it was looking for.
# Exception Handling
Helps make run-time error exceptions handling debugging easier. For example using a try catch. 
- Try allows you to define a block of code to be tested for errors while it is being executed.
- Catch statement allows you to define a block of code to be executed if an error occurs in the try block.
    - Example: Code run try this code. If I don't get this piece of data in the correct format, run this other piece of code that has a message saying, "this is not the correct data format".
    - We print an error code using System.err.println("message") this will print to the standard error but the text will be red.
    - We can also chain together catch() to catch different errors.

# Logic Errors
Once compile errors and run-time errors are not found we can start looking at our logic. Logic errors are when the program runs but still doesn't act the way we intended. This is a design flaw. These errors are solely dependent on the logical thinking of the programmer. Logic errors don't have error messages. This is where test driven development comes in. This is a way to give logic errors error messages.

# Debugging techniques
1. Divide and conquer: Comment out or temp delete half the code to isolate an issue.
    - If the code compiles then the error is in the commented out codde.
    - If the program still doesn't compile, the error must be in the code that remains. Now we can try deleting half of the code that we have left and see if that compiles.
2. Print statements: Use System.out.println() to check var/return values at various points throughout the program. By printing out the values at different stages of execution flow, you can then hopefully pinpoint where you made a mistake.