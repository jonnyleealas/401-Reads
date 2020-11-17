React Router v4 is a react rewrite of a popular react package. Everything is components. 

## Basics
- Choosing our router
- Creating our routes
- Navigating between routes using links

## Choosing type of router
- Browser router is used for dynamic server requests.
- Hash router should be used for static server requests.

## Rendering Router
- Router components expect only a single child element. 
- We create an app component that renders the rest of our application.
- Seperation of application from router is useful for server rendering because you can re-use the app on the server while switching the router to a memory router.

## App Component
- Our app is defined here. 
- We split our app in two parts: Header and Main components.
    * Header contains links to navigate throughout the site
    * Main component is where everything else is rendered.
    ```
    function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
    ```

## Routes
- Main building blaock or react router. Use this anywhere we onlyu render content based on the locations pathname, you should use a route element.

## Path
- Routes expect a path: a string that describes the patname that the route mathches ``` route paht= '/roster/' ``` .

## Matching Paths
- React Router uses path-to-regexp package to determind if a route elements path prop matches the current location. It compiels the path string into a regular expression, which will be mathhed against the locations pathname.

## Creating our routes
- Anywhere inside the router. 
- Swithe component to group routes. The switch will iterate opver its children elements (routses) and only render teh first one that mathces the current pathname.
```
For this website, the paths that we want to match are:

/	the homepage
/roster	the team’s roster
/roster/:number	a profile for a player, using the player’s number
/schedule	the team’s schedule of games
In order to match a path in our application, all that we have to do is create a <Route> element with the path prop we want to match.

<Switch>
  <Route exact path='/' component={Home}/>
  {/* both /roster and /roster/:number begin with /roster */}
  <Route path='/roster' component={Roster}/>
  <Route path='/schedule' component={Schedule}/>
</Switch>
```
## Hooks
- Allows the use of state and other react features without having 
to use classes.
    ```
    import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
    ```

- useState(true) returns an array with state value and a function to update state. This allows us to add state to function components.
- useEffect() takes function and optional array.
- Hooks are functions that help us do stuff.
```
import React, { useState} from 'react'
```

- Classes cannot use hooks.
- must use a function component
- they must always execute in the same order. probably don't use them in an if check. Avoid conditional statements when using hooks. Only at the top level of our functions.
- useState returns and array with two values: first thing is the current state and the second thing a function that allows us to update our state. The things in the array can be called bananas.