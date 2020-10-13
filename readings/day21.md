## Jonathon Lee
## Javascript 401
## Message Queues


### Review, Research, and Discussion

What does it mean that web sockets are bidirectional? Why is this useful?
```
Yes. Both server and client can send messages to one another.
```
Does socket.io use HTTP? Why?
```
It uses http at initial transport, but runs TCP after initial connection via http.
```
What happens when a client emits an event?
```
The io server connection will be listening to the event and will emit back to the clients listening for a server emit.
```
What happens when a server emits an event?
```
Server emits events to clients.
```
What happens if a client “misses” an event?
```
The event should go into a queue waiting for a client to listen when ready. If not it the event will never be heard by the client.
```
How can we mitigate this?
```
We can send events into Queues.
```
### Document the following Vocabulary Terms
**Term**
- Web Socket:
```
Computer communication protocol that uses TCP connection.
```
- Socket.io:
```
A JS library build on top of websockets and other tech. Allows socket.io to be used when websockets are not available.{hackdoor.io}
```
- Client:
```
Can emit to a socket.io server or listen to emit from socket.io server.
```
- Server:
```
Server can be a hub that listens for client request and sends back information to the client.
```

- Which 3 things had you heard about previously and now have better clarity on?

```
Learned a bit about join rooms in socket.io. I was able to build a message app using socket.io. I also learned about pseudo coding before starting your code. 
```
- Which 3 things are you hoping to learn more about in the upcoming lecture/demo?

```
I'm interested in learning more about rooms. React. Sass.

```
- What are you most excited about trying to implement or see how it works?

```
I want to see how midterms turn out.
```
