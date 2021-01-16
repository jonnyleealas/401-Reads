# Promise
- Its an object
- Uses fetch
    - Pending waiting for an api.
    - fulfilled, meaning we have the results from the api
    - Reject 
        - then is a functions that takes a functions when its been fulfilled
        - catch takes a function to be executed if and when it has been rejected.
# Fetch 
- takes a url and gives a promise back
- let promise = fetch(wordinapi)
- Has to be JSON
- .json returns a promise
- Returns a promise
- .json returns a promise

# Then
- promise.then(igotthedata)
- this runs when its successful
# Catch
- Promise.catch(error)
- this runs when it has failed.

# Chaining
- Do this function and run this function 
```
fetch(workinapi).then(gotdata).catch(gorError)

or


fetch(workAPi).then(function(data){
    conosle.log(somestuff)
}).catch(function(err){
    console.log(err)
})

or

fetch(workapi)
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log(err))

or 

function setup(){
    noCanvas()

    fetch(workApi)
    .then(response => response.json())
    .then(json =>{
        createP(json.word);
        return fetch(giphyAPi + json.word)
    })
    .then(response => response.json())
    .then(json =>{
        createImg(json.data[0].images['blabh].url)
    })
    .catch(err => console.log(err))
}
```


# Promises
- setTimeout was the old way of making a promise
