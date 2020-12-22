## Jonathon Lee
## Javascript 401
## Redux Additional Topics


# What’s the best practice for “pre-loading” data into the store (on application start) in a Redux application?
```
We can use useEffect hook to render data at initial render.


```
# When using a thunk/async action that dispatches the actual action, which do you export from your reducer?
```
Thunk/async makes the call, reducer hears the action call. Reducer takes state and uses the payload given by the Thunk action. Next it makes changes to state with the payload given.


```

*Term*
- middleware
```
A function that can be added as a parameter and runs before the function that is using it. After the middleware in the functions runs, the actual function runs. 

```
- thunk
```
Thunk is used for async actions using redux.


```