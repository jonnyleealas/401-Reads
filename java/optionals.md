# optionals
null pointer exceptions
Optional.(methods)

EX: Optional<Object> empty = empty();
    Optional<String>  empty = Optional.of("Hello")
    Optional<String>  empty = Optional.ofNullable(null)
        .isPresent()
        .isEmpty()

# Why Optionals
They are a better way of handling null checks
Avoid potential NullPointerException
Avoid boilerplate coding
Clean Code & Easy to read and understand

#  NullPointerException
Null deals with java memory handling.
Null can be though of as a ref that doesnt poijt at an object
A variable that is initialiezed as null is dif than avar that is uninitialized
Static methods can be called from a var initialized as null
You can write code to check if a variable is null before using it.
variables point to data.

int [] x; points to nothing/ this will throw a compile time exception
int [] y = null; points to null/ this will throw a run time exception
int [] z = {2,3,5,8,}; points to an object/ this will work if we try to access an index