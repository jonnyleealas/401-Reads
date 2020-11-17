# Jonathon Lee
# React Routing


## Do child components have direct access to props/state from the parent?
```
A child does not have direct access to a parent state.
State must be passed down from parent.
```
## When a component “wraps” another component, how does the child component’s output get rendered?
```
<Main>
  <Content />
</Main>
```

The wrapped component receives props from the container, along with new prop, and data, which renders output.

## Can a component, such as ```<Content />```, which is a child also be used as a standalone component elsewhere in the application?
Yes.

## What trick can a parent use to share all props with it’s children
We can set a variable with this.props.datafromparent.

## Term

- props.children
```
Can be used to display anything between opening and closing tags. We don't need to use this because it is stateless.
```
- composition
```
How we can build components out of other components.

```


### Which 3 things had you heard about previously and now have better clarity on?
this.state, constructors, bind.
### Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
HOC, Hooks, General React.
### What are you most excited about trying to implement or see how it works?
Axios.