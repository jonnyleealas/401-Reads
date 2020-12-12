# Redux is comprised of
- has a store
- redux manages state
- the state is what the thing is currently. if we set the state to 0 it will always be 0 unless the state is change. The state is changed then the state is no longer 0.

# Store in redux
- where state is managed
1. state itself
1. reducer manages state.

# Reducer 
- We need to initialState = {} before we create the reducer.
```
const reducer = (state = insitialState, action){
    switch statesment
}
we can also look at a reducer as such: {previousState, action} = new state
```
- reducer mangages state in response to actions made in the store.
- actions are made in the store and sent to reducer.
- actions describe what happend but dont descibe how the applications state changes.
- Takes a state and action
- Returns new state
- state is represented as an object.

# What does the switch do?
- it listens for an action
- its listens for a specific action, spreads the state, and changes the initial state, it then returns state which is our new state.

# What does the store do?
- resposnsible for holding app state
- getState gives app access to the state it hold
- allow state to be update via dispatch(action)
- provides dispatch to allow update to app state.
- register listener via subscribe method
- subscribe accepts a function : subscribe(listener) which is executed every time state in redux store is changes.
- store holds app state

# importing redux
- import redux
- import createStore: redux.createStore
- at the botton const store = createStore(reducer)
- reducer has initial state 
- store requires a reducer to make state transitions based on actions received

# getState
- gives current state in the store
- console.log('initial state', store.getstate())

# Allow app to subscibe to changes in the store
- store.subscribe(()console.log('updatestate), store.getstate)

# 3rd resposibility
- store.dispatch(action)
- this updates the state
- store.dispatch(buyCake())

# STEP BY STEP
1. CREATE A STATE
1. CREATE AN ACTION
1. REDUCER DEALS WITH THOSE ACTIONS USING A SWITCH CASE
1. CREATE A STORE TO HOLD STATE createStore(action)
1. CREATE A SUBSCRIBE METHOD FOR APP TO SUBSCRIBE TO STORE.
1. STORE PROVIDES DISPATCH METHOD TO UPDATE STATE STORE.DISPATCH(ACTION FUNCTION)
1. UNSUBSCRIBE 