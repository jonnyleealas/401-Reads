# State
- An object I control where I give it the key and the value
- This is the shape of data that I need. 
- No schema needed I can make it as i go.
- Eventually this will be a cloud of data that any component can use.
- In react state is a container that holds data.
- Methods change state or read state When I click this change state to this.,
- Or When I re-render use state to render
- Methods change state or read state
- Components: State, Functions that manage state, a way to render markup.

# App Component
- Main part of app
- However entry point is index
- App.js doesn't do much. 
    1. We declare our state
    2. Render our state as html
    3. We have methods that can manage it.
- We get a function out of app.js

# Class based components
- React class bases components Renders what the render method returns
- we have to write a method called render that has the return in it.
```
import React from 'react'
import './styles.css'

class App extends React.Component{

render(){
  return(
    <div className="App">
      <h1>HJellow CpodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
    )

}

}

export default App;
```

# {} means in React
- JS can run inside curly braces inline
