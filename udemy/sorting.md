# Sorting Algorithms
- Rearranging items in a collections.
- arrays, linked list, trees.
- Ascending or descending, alphabetical, year, revenue.
- Different sorting algorithms work better for different types of data. 

# Javascript Sorting Algorithms
- Arrays have build in ways to sort.
- .sort() sorts according to unicode --> converted to strings > then sorted
    - we can tell sort how we want it to sort
    - a and b
    - We can create a function and give the function as an input of sort to tell it if we want a descending or ascending sort returned.
    
    **This will return lowest to highest number**
    ```
    function ascending(a,b){
        return a - b
    }
    ```

    **This wil return Highest to Lowest numbers
    ```
    function descending(a,b){
        return b - a
    }
    ```