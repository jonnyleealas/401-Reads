class {
    public String name;
    public int age;
    public int weight;
    // these are variables that can be used and changed. These live outside the constructor 
}

local variables are variables created inside of a method. These cannot be accessed by other methods. These local variables are only accessed inside it's parent method. Local variables do not need to use public or private.

# This keyword
This refers to an instance variable of the class and not the method. The method uses local variables. If the method needed to use an instance variable of the class we need to use the 'this' keyword. Ex: this.name, this.word, this.whatever. These would all be instance variables that come from the class and are used inside the method.