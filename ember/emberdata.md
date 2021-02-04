# What is Ember data?
It is a data management library in Ember to help deal with persistent application data.
WE define the structure of the data you wish to provide to your application by extending DS.MODEL.
You can generate an Ember Data Model using Ember CLI. we'll call our model rental and gnerate it as follows: ember g model rental.

Next we define the structure of our rental object using the same attribues for our rental that we previously used in our hard-coded array of JavaScript objects-title, owner, city , category, image, bedrooms and description. Define attributes by giving them the resultt of the function DS.attr(). 

All Ember Data classes, methods and functions re deinded insideof this namespace.

DS.attr defins an attribute on a DS.Model. 
By dfault, attributes are passed through as-is, however you can specify an ooptional type to have the value automatically transformed. Ember Data ships with four basic ;transform types: string, number , boolean and date. You can define your own transforms by subclassing DS.Transform.

# Steps for using Ember Data
We need to define our data structure we wish to provide to our application by extending DS.model. We can start by defining our attributes: title, owner, etc.
title: DS.attr()

# Updating the Model Hook
To use our new Ember Data Model object, we need to update the model function in our route handler. 
In our route handler we have to call the Ember Data store service. The store service is injected into all routes and their corresponding controller in Ember. It is the main interface you use to interact with Ember Data. In this cas, call the finAll function on the store and provide it with the name of your newly created rental model.

# Store and a Single Source of Truth
One commone way of building web applications is to tightly couple user interface elements to data fetching. For exampl, imagine you are writing the admin section of a blogging app, which has a feature that lists the drafts for the currently logged in user. you might be tempted to make the component responsible for fetching that data and storing it.

# Persistant Data
Means that the user does not expect the model data to be lost when they close their browser window. To make sure no data is lost, if the user makes changes to a model, you need to store the model data somewhere that it will not be lost.

Typicall, most models are loaded from a and saved to a server that uses a database to store data. Usually you will send JSON representations of models back and forth to an HTTP server that you have written. However, Ember makes it easy to use other durable storage, sua as saving to the user's hard disk with IndeedDB, or hoted storage solutions that let you avoid writing and hosting ;your won servers.

Once you''ve loaded your modesl from stroage, components know how to translate model data ino a UI that you user can interact with. 

Ember Datas, included by default when you create a new app, is a library that intergrates tightly with Ember to make it easy to retrieve models from your server as JSON, save updates back to the server, and create new models in the browser.

Thanks to its use of the dapter pattern, Ember Data can be configured to work with many different kinds of backends. There is an eintire ecosytsem of adapters that allow your ember app to talk to different types fo servers withour you wrigin any networking code.

If you need ton integrate your ember app with a server that does not have an adaptter available(for ex you hand rolled an api server that does not adhere to any JSON spec), ember data is designed to config to work with whatever dat you server returns.

# The Store
Principles of good design tell us that objects should have a single responsibility. The responsibility of a compoonent should be presenting model data to the user, not fetching the model.

Ember data gives you a store that is the central repo of models in you app. Routes and conrollers can ask the store for models and the stor is responsible for know how to fetch them.
It also means that the stoore can detect the two different componenets are asking for the same model, allow your app to only fetch the data from the server once. 

You can thins kof the store as a read-through cash for you app's models. Both routes and their corresponding controller have access to this shared store; when they need to display or modify a model, they first ask the store for it.

# Models
In Ember Data, each model is represented by a subclas of Model that defines the attr, relationships, and behavior of th data that you present to the user.

Modles define the type of data that will be provided by your server. Ex: Person model might have firstName attr that is a string, and bday attr that is date.
```
import DS from 'emvber-data;
esport default DS.Model.extend({
    firstName: DS.attr('string'),
    bday: DS.attr('data')
})
```
A model also describes its relationships with other objecs. For example, an order may have many line-item, and line-itme may belng to a particular order.
```
DS.Model.extend){
    lineItems: DS.hasMany('line-item')
}
```
Models don't have any data themselves, they define the attributes, relationships and behavior of specific instances, which are called records.

# Records
An instance of a model that contains dat loaded from a server. Your server can also create new records and save them back to th eserver.
A record is unquely identified by its model type and id.
Ex person model may have an individual record in your app might have a type of person and an id of 1 or steve-buscemi.
```
this.store.findRecord('person', 1)//=>{id:1, name: 'steve-buscemi'}

```
# Adapter
An adapter is an object that translates request from ember into frequest to a server. Ex: such as find the user with an id of 1.

Whenver you app asks the store for a record that it doesn't have chaded, it wil lask the dapter for it. If you change a grecord a;nd save it, the store will haand the record to the adapter to se3nd the appropriate data to you server and confirm that the save was ;sucessful.
adapters let you completely change how your api is impolemented withour impacting your emver app.

# Caching
The store will autmoatically chae re3oords for you. The first time you app asks the store for a person record it will fetch that information from your server. However, the next time youapp asks for a person with id`1, the store will notice that it had already retrieved and chaed that info from the server. Instead of sending another request for the same infor, it will give your app the same record it had proided it the first time. This is sometimes called an identity map. Using an idenetity map is important because it ensures that changes you make in one part of your ui are proagated to other parts of th ui. It also means taht you dont have to manually keep records in sync- you can ask for record by id and not have to worry agbout whether other parts of you app have already asked for and loaded it.

Downside to returning chaded record is you may find t;h state of the data has changed since it was first loaded in to th stores identity map. In order to preven the stale data from being a probmel for long, ember dat will autmatically make a request in the background each time a cached record is returned from the store. When the new data comes in, the reocrd is updated, and if there have been changes to the record since the intiiall render, the template is re0-rendere with the new info.

# Architecture
first time you app asks fthe store for a record, the sotre sees that it doesn;have local cpoy nad request it from you adapter. 

Your adapter will go a retrieve the record from the persistenc layer; typically, this will be a JSON representation of th erecord server from HTTP server

App asks store to find, store asks adapter to find, adapter ask http server for json.
Adapter sends a promise to the store, store sends promise to e app. Adapter make asynchronous request to server and only when that request finishes loading can the record be created with its backing dat.
Once the request to th eserver return with JSON payload for th erequrested record, the adapter resolves the promise it returne to the store with the JSON. 
Store then takes the JSON, initializes the record with the JSON DATA         and resolves the promise retunred to you app with the newly-loaded record.
If the store already knew about a record the request never passes the store. The store merely resolvs with the record and doesnt have to send a request to the adapter.

# Store Service
The store sercie is injecte into all roues and their corresponding controller in Ember. It is the main interface you use to interact with Ember Data. In this cas, call the findall funcrtion on th store and privide it with the name of you newmly created rental model class.