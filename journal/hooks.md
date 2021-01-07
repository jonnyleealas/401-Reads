## Out of a class component what is rendered?
    * whatever the render method returns.
    * render method
    * this. : [props, state, functions]
    * this is an instance
    * class has state; starts in the constructor: the initial state.
    * change state by calling setState
    * class state is an obj with many keys.


## Out of a functional component what renders?
        * whatever we choose to return.
        * literally a function.
        * takes one less level deep.
        * no instance or other words no this.
        * they just execute; just there and they run.
        * no inherent state in functional components
        * there is a thing called functional state given to us in
        a thing called a hook. Allows to declare state in an individual 
        function.
        * many individual variables instead of key value pairs.
        - writing components as functions are instantly attainable.Takes more memory, but memory is cheaper than speed.

## Va engine
- takes code and turns into machine language. It gets compiled.
- comiler takes all code that it can, takes all things it can handle, and is part of the memory foot print(the app).

## useState Hooks
- takes two things [count, andSomeFunction]
- we use this in a functional component where we want to use state.

## useEffect 
- the effect that runs when count changes
- this is an event listener
- never set initial state from props
- only when it needs to run given certain conditions
- when we need to run code when something changes
- when variable changes we can run this code. this is useEffect
- hooks always start with use
- only effect hook takes callbacks

