## Jonathon Lee
## Javascript 401
## Socket.io

### Review, Research, and Discussion


What is the benefit of transforming data into packets?
```
Bidirectional communication between the client and server over TCP connections. Does not support fallback or broadcasting.

```
UDP is often refereed to as a connectionless protocol. Why is this?
```
No connection needs to be established between the source and destination for transmitting data.

```
Can a socket server application have multiple socket connections?
```
One socket can be connected to multiple clients simultaneously.

```
Can a socket connection application be connected to multiple socket servers?
```
Yes as long as they are associated with different client side ip/port pairs.

```
Can an application be both a socket server and a socket connection?
```
It's possible, but best practice is to have client on one port separate from server side. Server side can have multiple connections. You wouldn't want both server and client using the same ports, it's best to have them separated. Server waits and is open for client to make a connection.

```
### Document the following Vocabulary Terms
**Term**
#
- OSI Model:
```
Concept used to to describe the functions of a network system.
```
- TCP Model:
```
Determines how a specific computer should be connected to the web and how data is transmitted between them.
```
- TCP:
```
Transmission control protocol/internet protocol. Standardized rules that allows computers to communicate on the internet.

```
- UDP:
```
Communications protocol used for establishing low-latency and loss-tolerating connections from app to internet.

```
- Packets:
```
A collection of data send in small pieces used in tcp. Tcp reassembles the packets into the original data.s

```
- Socket:
```
Endpoint for sending and receiving data across a network.

```
#

**Which 3 things had you heard about previously and now have better clarity on?**
```
1. I was confused about the word this in constructors. When using this in a class and using that in another class; the confusing part was why we were not using the word this. It makes sense that we would use the word this inside the class it was created. However, using this in another class wouldn't make sense, because the outside class will have its own this. 
2. Traversing through data structures is becoming more clear.
3. I've seen how whiteboards help clarify thoughts before writing code.

```
**Which 3 things are you hoping to learn more about in the upcoming lecture/demo?**
```
1. Sockets
2. Data structures
3. How to ask better questions.
```
**What are you most excited about trying to implement or see how it works?**
```
Socket.io
```
