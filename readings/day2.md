# Jonathon Lee
## Javascript 401
### Read 2

# Test Driven Development Advantages
1. It helps devs find bugs early on. It saves money to fix bugs earlier in the project.
1. Easier to maintain and refactor code.
1. It can help serve as live documentation and improve your understanding of the code.
{https://leantesting.com/test-driven-development/}


# beforeEach() and afterEach()

In jest we can use these functions for work that we are doing repeatedly. If we are using a method in several tests that needs to be called before everything we can use beforeEach(). If we are using a method that needs to run after each test we can use afterEach().
{https://jestjs.io/docs/en/setup-teardown}

# Cons of Test Driven Development 
1. Makes development feel slow.
1. It takes time and effort to maintain test suit.
1. If the design changes so must the test. Meaning extra work going from designing and testing.

# ES6 VS Constructor/Prototype Classes
Class can be instantiated at runtime, while prototype is itself an object instance. ES6 syntax is easier to read and more straight forward. Faster to write as well.
{toptal.com}

# When to use a static method
We use this when making multiple instances of a class. Whenever we don't access an instance property. This can only be accessed on the class definition itself. Cannot access the method on the instance.
{corylan.com}

# Higher Order Functions
We can use higher order functions when we need to return a function or return an output.
```
With Higher-order function reduce
const arr = [5, 7, 1, 8, 4];
const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
// prints 25
console.log(sum);

#

# Vocabulary
* functional programming - Building software with functions instead of imperative statements. 
* pure function - A function where it's return value is the same as it's input value without side effects.
* higher-order function - A function that can take a function as an argument and can also return a function.
* immutable state - An object who's state cannot be modified after it is created. 
* object - A container in js for values called properties and methods.
* object-oriented programming (OOP) - A program model that uses objects in stead of functions. (c#, java)
* class - Holds information and details about an object. A template to create new objects.
* prototype - Prototype is an object in javascript that is added to functions. They have constructor properties by default.
* super - A keyword used to access functions on an objects parents.
* inheritance - Pertains to a heirachy. Classes and objects inherit properties from the class above(parent, child).
* constructor - A constructor is used to build objects.
* instance - An object created by a constructor function.
* context - The object a function belongs to.
* this - This can be a default in a global object if not in strict mode. The value is determined by function call.
* Test Driven Development (TDD) - A process of development that is based on writing tests for code at each step of the way.
* Jest - A JS testing framework.
* Continuous Integration (CI) - Using a shared repository to make sure every step of the building is tested with every change. Tests and safety checks from dev branch to production branch.
* unit test - Testing of individual components.















