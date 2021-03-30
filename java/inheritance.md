# Use a parents constructor
A child class can use its parents constructor by user the keyword super.
The child method extending the parent can also create its own constructor by using the keyword this and assigning a value.
If we're writing a constructor of a child class, and don't explicitly make a call to a constructor from a parent class using super, it's important to remember that java will automatically call super() as the first line of your child class constructor.