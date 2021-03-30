# Use a parents constructor
A child class can use its parents constructor by user the keyword super.
The child method extending the parent can also create its own constructor by using the keyword this and assigning a value.
If we're writing a constructor of a child class, and don't explicitly make a call to a constructor from a parent class using super, it's important to remember that java will automatically call super() as the first line of your child class constructor.

# Keyword protected
Protected is similar to private where it protects methods from being accessed outside of the parent class. The difference with protected is that the child class can access protected methods from it's parent while those methods cannot be accessed by other classes. 