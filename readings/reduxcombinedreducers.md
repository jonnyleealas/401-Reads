# Jonathon Lee
# Combined Reducers
# Dec 14, 2020

# Why choose Redux instead of the Context API for global state?
```
When state is more complex and is frequently update redux is a better solution.

```
# What is the purpose of a reducer?
```
Reducer manager our state. Anywhere state is changed can have it's own state manager called a reducer. We can place our reducers in an index and use them anywhere we would like to use them. 

```
# What does an action contain?
```
Action sends events that our reducers listen for. They are used to trigger our reducer to change state based on the action it is listening for. Actions have a type field and a payload field. Payload is a key we can use to store data we would like to pass to our reducer.


```
# Why do we need to copy the state in a reducer?

```
We copy the state using spread operator so that we can manipulate the state.

```



## Term
- immutable state
```
A state that cannot be changed.

```
- time travel in redux
```
Moving back and forth among previous states of an application and view results in real time. [blog.scottlogic.com]


```
- action creator
```
A function that returns an action object.


```
- reducer
```
They manage state in react and redux.

```
- dispatch
```
A function used to send out an action function or in other words dispatch an action.

```