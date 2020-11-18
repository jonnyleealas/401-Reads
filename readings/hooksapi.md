# Jonathon Lee
# Hooks API


## Why do we not need more .html pages in a multi-page React app?
React is component based. If a new page is needed react can keep most of
the current page and update the new component on the current page. There isn't a need to request a completely new document. Instead of new documents we would use different routes to handle multiple views.

## If we wanted a component to show up on every page, where would we put it and why?
```

Inside the <BrowserRouter />
```
## What does props.children contain?
```
It contains the content to be rendered by our component. This.props.children allows us to access the content inside our component.
```
## Term
- Composition
```
When a class uses another object to provide some or all its functionality. {thoughtworks.com}
```
- Children / Child Components
```
If a component contains components within it those components would be considered child components.
```
- Hash Routing
```
Uses hash in a url to render a component.
```
- Link Routing
```
Primary way to allow users to navigate an application. 
```
