# Procedural abstraction
Knowing what a method does, but not how it accomplishes it.


# Definitions 
Public - Means that other classes can access this method. 
Void - Means that there is no speciric output from th method. 
Every method has its own unique method signature which is comoprised of the methods name and its parameter type. 
The methods name and its  parameter type.
The body of the method is everything inside the curly brackets after the parameter parenthesis.

# Static
A non-static method to a class is available to use on an object of that class. In order to execute our method must be called on the object we created. Methods are ignored by a program unless they are being called. When a method is called, the compiler executes every statement contained within the method. Once all method instructions are executed, the top-down order of execution continues. 

# Scope
A method is a task that an object of a class performs. Everything inside the curly braces are part of the methods task. This domain is called the scope of a method. 
We can't access variables that are declared inside a method in code that is outside the scope of that method.

# Parameters
Adding information in one method that we needed to pass into another method. All methods can accept parameters. 
# Method Signature
Method signature includes the method name as well as the parameter types of the method. Ex: startRadio(doubl, String, INT);
When we call on a method with multiple param, the args given in th ecall must be placed in the same order as the params appear in the signature.
# Method Overload
Java programs can contain multiple methods with the same name as long as each method param list is unique.

# Instance Fields
These are assigned at the top of a class. Ex: String productType, double price;

# Returns
Variables only exist in th escope that they were declared in. We can use a value outside of the method it was created in if we ;return it from the method. We return a value from inside a method by using the keyword return. Any code that exists after a return statement in a function is ignored. 
When we replace void with a data type int we are saying that the return type is int.
The void keyword(which means completely empty) indicates that no value is returned after calling the method. Any non-void method can be used as either a variable value or as part of an expression.
Returning a primitive value returns a copy of the value returned; when we return an object we return a reference to the object instead of a copy. 
Reference values are like an id for object that are returned as references of a method.

# toString()
When printing out objects java returns a reference number to the position of the object in memory. This is not very helpful.
To make the printout more descriptive we can use toString().
When we define a toString() method for a class, we can return a string that will print when we print the object.

# Methods
Allow for repeatable code and define behavior for classes.