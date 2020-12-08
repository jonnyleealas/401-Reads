# Context
- Provides a way to pass data the a component without using props at entry.
# When to use
- Considered global
- current auth user
- theme
- preffered language
- when data needs to be used by many components
- use sparingly

# memoization
- in compouting memoization or memoisation is an optimization technique used primarily to speed up computer prorams by stroting the results of expensive function calls and returning the cahched result when the same inputs occur again.

# State 
- can only flow downwards
- we can set a global state that any component can subscribe to.
- like the state lives in a cloud that components can access.
- this state will have its own functions.
- components can access those functions from the global state.
- also known as opt in or subscribe.
- also known as a God component
- components using the god component will and can have their own state

# What goes in global?
- Components
    * esoteric
    * not shared
- Application data
    * todo
    * application data
    * common
    * visible
    * shared
    * high level of volatility
    * things change all the time meaning its volatile
    * redux will make app global
    * will be able to work alongside context.
- Context
    * Global
    * shared
    * common
    * Level of volatility is low or stable
    * extensions within dont move much
    * setting and font size or dark mode don't change much; making context stable.
    * we can have layers of context
    * try to keep context small

