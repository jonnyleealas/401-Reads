# Jonathon Lee
## Javascript 401
### Custom Hooks




## What does a component’s lifecycle refer to?
- Mounting
- Updating
- Unmounting
## Why do you sometimes need to “wrap” functions in useCallback when called from within useEffect
It prevents the the re-creation of a function.
## Why are functional components preferred over class components?
Faster to process; easier to read; less code; testing is easier.
## What is wrong with the following code?
In the return value will always be 0.


## Term
state hook: Used to set state in a functional component.
effect hook: Data fetching, subscription, manually changing DOM. The affect other components.
reducer hook: Accepts reducer(); returns state; dispatches function. 