# Jonathon Lee
## ``` <Login /> and <Auth /> ```






## Why is the Context API useful?
```
It allows us to create global variables that can be passed around in React.
It's an alternative to having to pass props from parent to child components.{taniarascia.com}


```
## Can a component outside of a provider get its context?
```
No the component would have to be wrapped inside a provider. However, a component does not need a provider for context. Createcontext by default get its value from the first argument that was passed when the context object was created.

```
## What are some common use cases for using the Context API?
```
When we don't have direct parent child relationship between components we could use context to pass down data. This would help the passing of data less confusing.

```
## Describe “Context Hell”
```
When the massive quantity of nested components create complex logic in the application.

```



## Term
- global state:
```
Allows a parent component to pass down props with out the child component having to pass props to grandchild.

```
- global context:
```
A way to share data at the global level to between react components.

```
- provider:
```
When calling createContext in react we have to use the createContext provider component to wrap the components that will be using context.


```
- consumer:
```
We use the consumer component to gain access to the data that was passed as a value prop to the context provider component. 

```