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
