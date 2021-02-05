# Nested Routes
A templet that displays inside another template. For exampl, in a bloggin application, instead of goin from a list of blog posts to creating a new post, you might want ot have the post creation page dsplay next to the list.
We use nested routes to display a template inside another template.
You can define nested routes by passing a callback to this.route.
```
Router.map(function(){
    this.roue('posts', function(){
        this.route('new');
    })
})
```
# Nested Index Route
An index nested route works similarly to the base index route. It is the default route that renders when no route is provided. If we navigate to /rentals, Ember will attempt to load th rentals index route as a nested route.
Ember's default action to index routes are implied  to 
path: '/'

# Finding Records
Ember Data store provides an interface for retrieving records of a single type.
Use store.findRecord() to retrieve a record by its type and ID. This will return a promise that fulfills with the requested record.
```
this.store.findRecord('blog-post',1)//Get/blog-posts/1
.then(function(blogPost){
    // Do something with 'blogPost'
})


```
Use store.peekRecord() to retrieve a record by its type and ID, withour making a network request. This will return the record only if it is already pressent in the store
```
let blogPost= this.store.peekRecord('blog-post',1) // no network request
```

Use store.findAll() to retrieve all of the records for a given type.
```
this.store.findAll('blog-post') // GET / blog-posts
    .then(function(blogPosts){
        // do something with "blogPosts"
    })
```
Use store.peekAll() to retrieve all o the records for a given type that are already loaded into th store, without making a network request.


store.findAll() returns a DS.PromiseArray that fulfills to a DS.RecordArray and store.peekAll() directly returns DS.RecordArray.

Its important to note that DS.RecordArray is not a js array, its an object that implements MutableArray. This is important because, for example, if you want to retrieve records by index, the [] notation will not work, you'll have to use objectAt(index) instead.

# Querying for Multiple Records
Ember Data provides the ability to query for records that meet certain criteria. Calling store.query() will make a GET req with th passed object serialized as query params. This method returns a DS.PromiseArray in th e same way as findAll().
```
// Search for all person models who have the names of peter.
// GET/persons?filter[name]=Peter
this.store.query('person',{
    filter: {
        name: 'Peter'
    }
}).then(function(peters){
    // Do something with 'peters'
})

```