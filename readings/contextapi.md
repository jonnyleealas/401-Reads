# Jonathon Lee
# Context API

# Describe use cases for useMemo() and useReducer()
```
- useMemo: saves previously used functions results for later use instead of having to run the function again. This saves time. So if we have something hard coded like a name, that hard coded data would run every time another code needs to update state. Since it is hard coded its state doesn't need to change ever. We could use useMemo in this case.

- useReducer: When states need to mingle with each other. In other words, they don't connect or affect each other. However, when one state changes and affects another state we could use reducer. When a state updates several properties and we need to change multiple states. When a states are affecting each other we can use a reducer to avoid that.
```
# Why do custom hooks need the use prefix?
```
Its a react naming convention. It helps keep react syntax and it allows JS to use React hooks.
```
# What do custom hooks usually do?
```
They allow us to re-use state logic between components.
```
# Using any list of custom hooks, research and name one that you think will be useful in your applications
```
- useldb: Uses indexedDb in the browser to store data. It is the other localstorage.
- use-mouse-action: listens to mouse events on element or jsk.
   * useMouseAction: This is used to register mouse actions on an element.
    * useMouseDown: This is used to register a mouse down event on an element.
     * useMouseUp: This registers a mouse up event on an element.
```
# Describe how a hook that fetches API data might work
```
useEffect can fetch API data and useState can save it. useEffect would fetch data as soon as it knows that component has been mounted; it will then fetch the data from the api.
```

# Term
```
- reducer: Instructions for combining things. It can also keep tally of things with its accumulator param. Reduce() takes an accumulator and an initialvalue as its first two params; returns and updated accumulator. Reducers are also used to manage state. It can accept state and actions as arguments ex: (previousestate, action)=> newState.
```