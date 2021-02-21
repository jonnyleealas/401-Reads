Today I was able to follow a turorial for creating a modal.
The modal started by creating a few div with css classes.
The classes define color, sized, parameters, shade, positioning.
Then I can create event listeners to call the css properties into play.
The tutorial uses an app.js file to add the javascript event listeners.
For some reason this didn't work. 
A work around for this was to use a controller file and use the exported action file to add my select query listeners. This worked. 
There was an issue with having to double click in order to call the action on click.
The work around for that was to take the function for eventlistner and break it out of the function. Then I was able to just call the method in the controller action and no more need to double click.
