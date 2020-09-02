# Jonathon Lee
# Class 401
## Read 8

### Review, Research, and Discussion
1. Name 3 real world use cases where you’d want to change the request with custom middleware.
#
    a. When modifying the property for a req.
    #
    b. Custom string responses.
    #
    c. To prevent a user from preforming certain operations.
    #
1. True or false: The route handler is middleware?
Yes.
1. In what ways can a middleware function end the process and send data to the browser?
Middle can stop the process by not calling next in the function. Or by req.end or req.send.
1. At what point in the request lifecycle can you “inject” middleware?
After a req and before a res.
1. What can cause express to error with “Request headers sent twice, cannot start a second response”
Attempting to send two responses to the same request.

### Vocabulary
- Middleware: Functions that have access to req, res, and next object.
- Request Object: Represents the http request and has properties for query strings, parameters, body, http headers.
- Response Object: Represents the http response when it get an http request.
Application Middleware: Are bound to express instances using app.use and app.Verb.
- Routing Middleware: Bound to instances of express.router()