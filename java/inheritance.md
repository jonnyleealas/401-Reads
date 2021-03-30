# Use a parents constructor - super()
A child class can use its parents constructor by user the keyword super.
The child method extending the parent can also create its own constructor by using the keyword this and assigning a value.
If we're writing a constructor of a child class, and don't explicitly make a call to a constructor from a parent class using super, it's important to remember that java will automatically call super() as the first line of your child class constructor.
Super will also allow us to use a parents methods in the extended child class. Say you want to override the parent method but also want to use the original un-tampered method as well. To use the original un-tampered method we use the keyword super.method.
We can modify a constructor by using the super() keyword.

# Keyword access modifier = protected
Protected is similar to private where it protects methods from being accessed outside of the parent class. The difference with protected is that the child class can access protected methods from it's parent while those methods cannot be accessed by other classes. 

# Keyword access modifier = final
Adding  before the access modifier will disallow any child class from changing that method.

