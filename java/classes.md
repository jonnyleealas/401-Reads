toString() - used for printing out strings instead of an objects class and address.

equals() - used for equality operator between strings.
equalsIgnoreCase() - avoids consideration of upper/lower case.

compareTo() - compares strings based on their unicode. Which string is greater? if it returns 0 then they are equal.
Uppercase and lowercase have different unicode values. We must pay attention to caps when using compareTo().

indexOf() - returns the index of a given string. It can also return the index of where a substring begins. If something isn't there it will return -1.
