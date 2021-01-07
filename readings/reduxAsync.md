# Jonathon Lee
# Javascript 401
# Redux Async





## How granular should your reducers be?
```
A reducer should be as simple as possible. Each action it listens to should do one thing. 

```
## Pro or Con – multiple reducers can “fire” when a commonly named action is dispatched
```
We need the reducers to act up the actions we want implemented. Our actions should be named according to the action we want handled and two actions should not be named the same. However, sometimes we need to call two reducers at on one handle function. If our actions are named and organized properly running multiple reducers at once shouldn't be an issue.



```
## Name a strategy for preventing the above
```
We should have a reducer for each individual state. We also need to make sure our action names are unique so that we aren't calling the wrong actions.


```

## Term
- store
```
Our store manages our reducers.

```
- combined reducers
```
We can combine reducers by using redux. We combine our reducers and add them to an object function in one file. When we need to use a specific reducer we can use useSelector and call the reducer by object key.


```


