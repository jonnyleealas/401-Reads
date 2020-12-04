# useEffect()
- When something is affected run this function.
- This hook is only used in functional components.
- When something changes thats when this runs.
- useEffect watches a variable, when that variable changes, useEffect runs.
- useEffect always run a callback
useEffect always looks like the code below.
```
useEffect( () => {

})
```
- will run every time a re-render happens.
- useEffect is a hook
- a call back is a function that is run by another function.

# it also accepts an array of things to watch
```
useEffect ( () =>{

},[])
We can also have useEffect only run once