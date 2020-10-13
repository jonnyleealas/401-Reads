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

Socketio has a few things we can use to segment who listens.
- Global pool
- Name space
- And inside of name space are rooms. Similar to direct messages on slack.

const helathsyem = io.of('/healthsystme)
healthsystem.on('connection),(socket)=>{
    socket.on('join', room =>{
        const valid = ['sickness', 'diabetes']
        if(valid.includes(room))
        console.log('welcome')
        socket.join(room)
    })
}

Rewatch Socketio

coder serves as a servers
server listens on a port
server then runs events/ manages the clients it doest this using .on('connection')
Ex: on('connection',){
    on('light)
    on('table)
    on(blach)
        
        
    emit()
}

Client: 
will connect to server
they will monitor events
also they can emit their own events


