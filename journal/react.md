Hook and functional components vs class components.
- Application wide state are similar to global components. 
Not everything should be global state. Some should only be components.
- We push from parent to child and the child should know as little as possible.
Browser Router
- Renders this.props

Tips for learning
- Watch it 
- Study
- Do it

Jams Stack
- Javascript
- API
- Markup
```
API, express
React draws the mark up. React at its core renders markup. That is its primary job. similar to mustache. A rendering engine on steroids. We can also make some JS calls.

PLAN 
WATCH THE VIDEO recode it
reimplenmant the labs on my own
code out the demo
take the demo and add to it
make alterations to the demo
new stuff is on wednesday

Data structures
from college are good because they take 4 years
after graduation we need to practice them on our own
approach to those thing are 

what is this.bind

Checkout the docs for react
1. getting started
2. forms
3. how to handle button handlers
4. wiring

Extened a class
- Extends will allow you to combine a class with another class

Super
- A method that calls the constructor method of the class its extending

This
- Is a reference to the object that is executing a specific piece of code.
- Represents the object that is executing the current function
- refers global object in the browser is the window.

Constructor 
- A constructor can assign parameters and is started with the word this.
- this.name = name;
- A function that Creates objects.
- Creating a new object using a constructor we always have to use the work new.

Obect
- an instance of a class
- const name = {
    name: 'jonn'
}

use strict
- removes access from this to access global scope inside a function

Class
- Are just functions inside javascript

STATE
- Global memory box
- in constructor set it as an object
- command f let you find things on the page

React 
- initialize this.state to an empty object so that give the object whatever you want.
- its a memory box

this.setState
- reacts to whenever its state is changed
- This is how other values are read because they now have access to the saved value when we use setSTate.

Passing A Value
-  <button type="button" onClick={() => this.crudMethod("GET")}>
            GET
         </button>
- when passing a value in react we have to call a function that calls this.function with an arrow

Disable Clicked button
- {https://reactjs.org/docs/conditional-rendering.html}

Text Area and Buttons
- Can Disable true if we want to block them out from letting someone use them.

Div
- Adding a div puts things in order underneath eachother

\n returns a line break thing look this up