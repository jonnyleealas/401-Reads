# Life Cycle
URl maps or calls router. 
Router Loads templates and models
Templates Load components and Model data.

Every time the url changes the Ember router maps the url to a route handler.
The route handler either renders a template or loads a model that si s abailable to the template.

Templates  organize the layo8ut of HTML. 

Templates use handlbars syntax. Anything that is handlbar syntax is valid Ember syntax. 

Models: Models are persistent state.
FOr example, a property rental app would wat to save the details fo a rental when a user publishes it, and so a rental would have a model defining its details, perhaps called the rental model.

A model typically persists information to a web server, although models can be configures to save to anywhere elswe, such as the browsers local storage.

Components: Templates describe how a user interface lo9oks, and components control how the user interface behaves.
Components have two parts:
    A template writtien in handlebars, and a source file written in js that deins the behavior of a component. 

Hooks: Methods that are automatically called within the ember app. These can be expected to be called automatically. 