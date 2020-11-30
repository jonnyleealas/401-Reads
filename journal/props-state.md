# React components 
- Are classes or functions

# CallBacks
- Allow us to send functions into functions

# State and Props
- Ability to pass state and properties between components
# Parent and Child Components
- Parent pass down to children
- Children have siblings
- state is an object that is scoped to the top level of whatever function its in.

# Children Components
- App component can have state
- Components withing app can have their own state.
```
    * Rules:
    - One way data flow
    - Info can go to your children and their siblings
    - App can share state to their children
    - Children cannot share with their siblings
    - This is called one way data flow
    If there was a component inside a child container child 1 can send state into child 2 that is inside.
```

# Changing stat within a functions
- To change the state of a child within a container. C1 must pass the change functions to a container below it.
- App.js must send down the functions to change to its children.

# React server
- Kinda requires a server
- When its deployed to a service the service runs it on its own web server.

# Remember about state
- On an onClick we need to use a blank function to call a function when the function is using a parameter.
```
Wrong: onClick={ this.function(param) }
Correct: onClick={ () => this.function(param) }
```
- HandleSubmit must always take an e.preventDefault()
- Instances of class are all separated unless they are passed down functions. Each instance are on their own and don't know that the other exists.

# Mounting
- Component is first created
- put into the dom
- constructor
- static method
- render()
- componenetDidMount() this happnes instantly
- state change is updating
- anytime state changes render gets called

# ComponentDidMount()
- Use this when we want to render things right away.

# Iterate through an array
- .map: Both map and filter Return something. They return a new array.
- .foreach
- .for
- .while
- .filter: Both map and filter Return something. They return a new array.