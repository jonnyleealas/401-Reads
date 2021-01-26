# Native String Search
- Checking for a pattern
- Checking multiple characters against multiple characters
- Checking a long string against a short string
-
# Pseudocode
- Loop over longer string
- Takes larger string and pattern we are looking for
    - Loop over shorter string
    - if char dont mathc break inner loop
    - if char match keep going
    - if complete innner loop and find a match, ++ the count of matches
    - return the count
    ```
    function nativeSearch(array, match){
        for(let i = 0; i < array.length; i++){
         for(let j = 0; j< match.length; j++){
             // array[i+j] means that we are looking one position ahead of i in the loop.
             if(match[j] !== array[i+j]) break
         }
        }
    }

# Sorting
- Rearancing the items in a collectionso the items are in some kind of order.
- Assending or descending
- names alphabetically
- sorting movies based on revenue
- soreting movies based on release year
- 