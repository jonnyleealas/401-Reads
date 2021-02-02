# MVC
- Model represents data used in the app
- View is what the users see and interact wthi, for example web pages and forms.
- Controller handles request and decides what logic to invoke.
- sbt is used to build application projects


# sbt
Sbt is built for Java projects. It is a build tool. 
# Handling asynchronous results with play
Application code should avoid blocking controllers. We should avoid having the controller wait for  operations. Common examples are JDBC call, streaming API, HTTP requests and long computations. We can increase the number of threads to allow more concurrent requests to be processed by blocking controllers, following the recommended aproach of keeping the controllers asynchronous makes it easier to scale and to keep the system responsive under the load.

Because of the way play works, action code must be as fast as possible, i.e., non-blocking. So what should we return from our action if we are not yet able to compute the result? We should return the promise of a result!

Java 8 provides a generic promise API called CompletionStage. A CompletionStage<Result> wil eventually be redeemed with a value of type Result. By using a CompletionStage<Result> instead of a normal Result, we are able to return from our action quickly withour blocking anything. Play will then serve the result as soon as the promise is redeemed.

# Dependency Injection
This is used to require one component in another component. We first import javax.inject and then call @Inject Blah blah; This is called field injection.
The preferred way of injection is to use constructor injections. We do this to avoid breaking encapsulation.
Constructor injection works like this: 
```
public class myComponent{
    private final WSCLIENT ws;

    @Inject
    public MyComponent(WSCLIENT ws){
        this.ws = ws;
    }
}
```
Constructor injection is more testable.

# Guice
It alleviates the need for factories and the use of new in Java. Guice's @Inject is the new new. Factories will be needed in some cases but your code will not depend directly on them. Your code will be easier to change, test and reuse. 

Guice embraces Java's type safe nature. Guice fills in missing features for core Java. 

Guice helps desing better APIs.
# Locate important files
