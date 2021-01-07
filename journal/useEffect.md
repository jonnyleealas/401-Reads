# useEffect()
- When something is affected run this function.
- This hook is only used in functional components.
- When something changes thats when this runs.
- useEffect watches a variable, when that variable changes, useEffect runs.
- useEffect always run a callback
useEffect always looks like the code below.
```
useEffect( () => {

})
```
- will run every time a re-render happens.
- useEffect is a hook
- a call back is a function that is run by another function.

# it also accepts an array of things to watch
```
useEffect ( () =>{

},[])
We can also have useEffect only run once when we add the array of things to listen to in the params.
```
# use case for only render once
- loading intitial state from a db or api
- loading a list of searched url from local storage on page render.

- on useEffect, unload, go to the database, fetch and it all comes out. This is how the list works.
- There are event listeners in useEffect
- constantly listening
- it listens to what we pass in the second parameter. once it notices that the second parameter function was affected it runs the code inside useEffect. We give it what to listen for and then it runs a code.

# Rule 
- WE MAY NEVER SET INITIAL STATE FROM PROPS
- THIS WILL ONLY SET IT ONCE
- We should use useEffect() if we need to run code on certain conditions.
- If you dont need initial loading or something of the sort we dont need to use useEffect.

# Steps
1. import React
1. import React, { useState, other hooks}
1. import React, { useState, other hooks} from 'react'

## side note
- Hooks always start with the word use.
- only effect hooks runs a callback function.
- consider hooks to be asynchronous. 
- organize and prioritize: what needs to get done, where is the best place to start.