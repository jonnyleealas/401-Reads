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

# htmlFor
- A label function in react. 
- Don't know what it does exactly.

# Forms 
1. get a form with submit method
2. Input with onChange
3. When input is changed I set a State value called form values
4. We then handler a submit with a submit function. Must add e.preventDefault to tell that we are handling the submit.
```
  - Type into form field and an onChange triggers a handleChange method
  - HandleChange sets name by saving the value in a variable
  - Then we setState.
```
- Every input has a change event handler.
  ```
  add field values to state.
  ```
- The form has a handleSubmit handler.
```
On submit we have access to the whole form
```
```
  we capture thing in variable from the parameter arguments.
  EX: fuction values(values){
    const saveValues = values.target.value
  }
  ```

  # this.setState
  - Expects the next state to be sent to it
  - It takes the state you gave it to re-render
    ```
    * this.state.form will stay the same but the name will change
    handleChange(e){
      const name = e.target.value
      this.setState( { form: { ...this.state.form, name}})
    }
    ```