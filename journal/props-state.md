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
- used for async calls
- use this when im fetching data. If i know the data then just set the state.

# Iterate through an array
- .map: Both map and filter Return something. They return a new array.
  ```
  takes value and index
  map((value, index)=>{})
- .foreach
- .for
- .while
- .filter: Both map and filter Return something. They return a new array.

# Props
- send state to children
- send functions to children
- send data to functions
We can have a parent component take in a child component. The parent can have state or functions that the child components can use. It can send data to the children and the children can use that data.
- Props are the properties of the instance of the class.
- When we make a component, in order to use props from the parent we must give it the ability to use those props ex: spend={this.props.spend}.
Then when we call the child component inside the parent component we can use those props ex: <kid spend={this.withdraw}>. Above we gave spend the props of {this.props.spend} .spend is the props. In our parent component we have spend={this.withdraw}. Our child component is matching its props.spend with the spend in the parent component; the spend value is now able to give the child this.withdraw method from the parent component.