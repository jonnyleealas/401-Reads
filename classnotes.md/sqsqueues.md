sent the message to the q for opt in. the queue has a url to get the next mesage or all the messages. 
this is a notification service that is based on aws subscription.
were gonna save the messag3es
when we have the messagers say that we got it
emit a get all 
\
queueu.js file
const io = require('socketn.io)(3000)
// queue of events 
// each key in the quyeue is an event name
// exh entry under than event name is a mesaage

const queue = {
    hello: {}
}

io.on ('connection', socket =>{
     socket.on ('hellow), payload =>{
          let id = Math.random();
          queueu.hello[id= payload]
     }
})
/* queue: {
     hellos: {P
     12345.: { words: ' hi john }
     }
}
*/

greeter.js
const cliten = require(' socket.io-client)
const socketh = clietn.connect('http://localhost:3000)

let x=1

setInterval(( =>{
    socket.emtjh('hellos ${x++})
}), 1000)

//client.js
const client = require(' socket.io-client)
const soket = cleint.connect('http//localhose:3000)
soncket.on('hello), payload =>{
    consoel.log('heard), payload
}

how to we handle the client that is not logged in?
on th queueu we need to start using the queue. 

queue.js
sockert.on(*'getAll), ()=>{
     Object.keys(queue.hello).forEach(id=>{
         let payload = queue.hellos[id]
      soke.boradcast.emti(emit(hello,payload}))   

     })

     }
}

we put this into th qeueu if im not listening i can come back later and get them all. 
the client will emeit the get all event.

client socket is what connescts to the locak host 3000. thats how it listens to socket on the server sidew.

once i tell the server we have it the server can delete it from the queueue.

client will eim ('erceive), paylod.id
server will socket.on('reciece, id =>[
    delete queue.hellow[id]
    console.log(queueu)
])

keys of obj are not gaurantieed to be in order. they are not in order or sorted.
drivers will probgably nee  a fifo ordered queue. so that drivers dont get confused as to which order to get.

todays lab is add queueing to caps.

what are we trying to do (users story)
sub systems 
functions 
how do they commuynicate to each other