Dependencies: 
npm init 
socket .io socket.io client

Files: 
brain.js
eyes.js
fire-events.js

## Server
There needs to be a servers that takes information from the front end.

## Front End
Front end will have html that sends information to the back end through socket. 

## Socket
Once the socket receives info from the front end it sends it to a function in the front end to send over to the browser where the user can see it. 


npm init 
npm i socket.io socket.io/client


From the hub server we can emit things that can be heard by the whole system.
We can also separate who can hear based on payload using if statements.
We can also create new routes to further separate who can hear the is being emitted.