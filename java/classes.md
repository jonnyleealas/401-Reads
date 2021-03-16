toString() - used for printing out strings instead of an objects class and address.

equals() - used for equality operator between strings.
equalsIgnoreCase() - avoids consideration of upper/lower case.

compareTo() - compares strings based on their unicode. Which string is greater? if it returns 0 then they are equal.
Uppercase and lowercase have different unicode values. We must pay attention to caps when using compareTo().

indexOf() - returns the index of a given string. It can also return the index of where a substring begins. If something isn't there it will return -1.

charAt() - returns the character at a given index.

# Notes on classes
Classes create small mini programs that have functions that can be accessed and used on the outside. Lets say there is a class of Person. A person has eyes, nose, arms, legs. Not all people have blue eyes. We could however use the Person class to create a person object. The new person object can than be extended and given color to its eyes to make them blue.
So a Class is a chunk of code that has methods that we can use according to what the class was intended for. 
What makes up a class? The methods inside of a class make up a class. 