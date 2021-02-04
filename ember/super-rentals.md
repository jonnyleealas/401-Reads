# App
This is the folder where models, components, routes , templates, and styles are stored.
THe majority of your coding on an Ember project happens in this folder.
# Config
This contains the environment.js where you can fonfigure settings for you app.

# node_modules/package.json
This directory and file are from npm.

# Public
This directory contains assets such as images and fonts.

# Vendor
This directory is where front-end dependencies(such as javascript or css) that are not managed by npm go.

# tests/ testem.js
automated tests for out app go in th etests folder, and Ember CLI's test runner Testem is configured in testem.js

# import EmberRouter 
Gives us access to Embers rouiter class as the var EmberRouter. 

# Ember Server
This allows us to run a server to test our app.
Short version of that command is ember s

# Filter
This is how we filter catagories. Ex: city, state, type.

# URL
When we want to make a new page that can be visited using a URL, we need to generate a 'rout' using Ember CLI. Ex: ember generate route about

# Core Concepts for Ember
Our URL / route gets its data from a Router.map from router.js.
Router.js gets its data from a Route Handler. This is where we could find something like a findAll()
The Rout Handler gets its data from a template and a model
Template is where we have our for each render individual data. It also calls for data from components.

# Router and Route Handlers
The state of a url in ember is determined by ember via router maps. Ember's routers maps the URL to a route handler.
The route handler does two things: Renders a template or it load a model that is then available to the template.

# Templates
Ember uses templates to organize the layout of HTML in an app.
Templates are familiar HTML fragments except they use handlebars.

# Models
Models represent persistent state.

# Components 
Templates describe how a user interface looks, components conterol how the user interface behave. Componentes consist of two parts: a template written in Handlebars, and a source file written in JS that defines the components behavior.

# Hooks
Hooks are methods that are automatically called within the Ember app. Thers are methods that can be expected to be called automatically, rather than having to call them specifically.
Ex: willRender(), or Route Hooks: model()
didRender() can be used to console.log(a message to show it rendered)

# Route
Ember route is build in three parts: 
An entry ni the app/router.js which maps between our route name and specific URI
A route handler file which sets up what should happen when that route is loaded.
A route template which is where we display the actual content for th page.

# BeforeModel
This hook gets executed before the data gets fetched from the model hook and before the page is rendered. 
Each route handler has a set of "lifecycle hooks".
Lifecycle hooks are functions that are invoked at specific times during the loading of a page. 

# Index Route
Index route does not require an entry in the routers mapping. Ember does something special to index routes. 

# replaceWith hook
This is a hook that replaces the current UTL in the browser's history, while transitionTo will ad to the history. 

# Model
Ember keeps data for a page in an object called a model. 
There is a library called Ember Data that allows us to robustly manage data.
The model function acts as a hook, meaning that ember will call it for us during different times in our app. 
In Ember, route handlers are responsible for loading the model with data for the page. The model function we've added to our rentals route handler will be called when a user navigates to the rentals route via root URL.

# How templates use models
A template takes the model and renders it using html handlebar elements. The model is where all of our object data is held for specific templates. If the model is called rentals then we can use the model in the template component called rental. Ember automatically generates a route, template component, and adds the path to our app router.
