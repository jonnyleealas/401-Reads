# React 
- Deals with components
- Deals with state

# Persistance 
- Database state 
- Real persistent 

# React State
- State of the page
- Page state knows everything that is typed
- A moment in time
- Context in which we live in the room
- Defines the shape of markup
- Changes the state of things
- Mark up reacts to state
- State is data inside of an object
- React binds that data
- Manages whats in data and bind that data to the front end.
- We change data and the front end changes
- Bind the state do the div
- the div changes our mark up through the bound state
- This component is tied to this state
- We tell which things to change when things change
- Change this, when this changes

# Virtual Dom
- React has an object called virtual dom
- React manages this behind the scenes
- I knows what to render through which variables
- Its the manager of things

# Render Function
- React cares about this
- Can be done with class with .Render()
- Second way is with a functional component that has a return
- All these things go into the markup
- Render from class and return from function; this becomes our markup

# JSX
- JS extension
- We can write js into our markup
- It turns our div in markup into React.createEvent(dive blah blah) turns our mark up into a function and does the work for us.
- It turns markup into vanilla js so that we don't have to.
- It looks like mark up but its js behind the scenes.
- Must be wrapped in ```<></> fragment tags```

# Phases
- What are the components; What things make up my app
- What data do I need to makes the things look right and present to the user

# Create
- $npx create-react-app nameOfAppWeWantToCreate
- Installs jest as well
- npx will save us time
- npm run start: starts our app in the browser

# Index files
- We don't have to touch the index.html file don't touch this file
we are not allowed to touch this file
- id="root" is where all our jsx renders. All our code renders here.
- We work in the src folder
    * index: entry point; non logic goes in entry point. It wires everything. 
    * index: reac, reactDom, indexcss, app. 
        * Renders everything into id="root"
- Root is the only thing we care about in index because it renders app.js which is our everything.

# App.js
- We are allowed to touch app.js
- import is the same as requiring something in vanilla js
- export default App which is added to index for us and rendered there.

# If rendering
- use class to add state

# if not rendering
- use functional components

# Capitol letter in functions
- When creating components

