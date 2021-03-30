# What is polymorphism
In Greek meaning "many forms", allows a child to share the information and behavior of its parent class while also incorporating its own functionality.

# Why polymorphism?
- Simplifies syntax
- Reduces cognitive overload for developers.
- Helpful when we want to develop our own Java packages for other developers to import and use.

# Method overriding - @Override
Overriding parent class methods in a child class. 
The child can class method can have the same name as the parent class method but behave differently.
When overriding a parent class method inside a child class we need to add the @Override annotation above the method we are overriding. This annotation informs the compiler that we want to override a method in the parent class. If a method doesn't exist we will get an error message.
    - Method must have the following corresponding:
        - Method name
        - Return type
        - Number and type parameters

# More polymorphism child to parent
We can use a child object where a parent object is expected.e
Ex: Bank Account kaylasAccount = new CheckingAccount(6.00):

'''
What we would usually do in this case is call new Bank(). Usually we would call a new class of the parent keyword modifier. However, with polymorphism we can also call a new child object or the parent instead of the parent.
'''

