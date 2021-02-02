# Tools
When building api's we can use HTTPie to make CLI interaction with web services as human-friendly as possible. HTTPie is desinged for testing, debugging, and interacting with API and HTTP servers. 
- http & https commands allow for creating and sending arbitrary HTTP requests. They use simple and natural syntax and provide formatted and colorized output. 
- HTTpie is used for testing REST, Auth, and all things http query.

# Sidenote: What is a kernel
```
THe kernel is a computer program at th core of a computer's operating system that has complete control over everything in the system. It is the "portion of the operating system code that is always resident in memory", and facilitates interactions between hardware and software components.

The kernel connects the system hardware to the application software, and every operating system has a kernel. The kernel is responsible for: Process management for application execution.

In OS the kernel is responsible for low-level taks such as disk management, memory management, taks management, etc. It provides an interface between the user and the hardware componenets of the system. When a process makes a request to the kernel, the it is called System Call.

In conclusion the kernel is the most fundamental part of an operating system. It can be thought of as the program which controls all other programs on the computer. 

```

# API
- Application Program Interface

# RTOS
A real time operating system is a software component that rapidly switches between tasks, giving the impression that multiple programs are being executed at the same time on a single processing core.


# Blocking vs Non-blocking calls
A program may make an API call to request a specific resource or service. Such a call may normally return with the required result and/or a pointer to requested resources. There may also be the possibility for an error result. But, what if the call is valid, but the resource or service cannot be provided at this time. 
There are two ways to make such a call, which differ in their response to this unavailability: A blocking call resultsin the task being suspended [put to sleep]; the task will be woken when the request can be fulfilled. A non-blocking call results in an error code being returned; the task has the option of trying the call again later.

If several tasks are blocked pending the availability of a resource, which then becomes available? Which task is woken up to have its reuest satisfied? This depends upon the specific RTOS. Typically tasks are either woken in priority order or they are woken in the order in which they suspended[fifo]. This may be a kernel configuration choice or may be selectable on a per-object basis.
The choice of using a blocking or non-blocking call is genereally u8p to the applications programmer. Using a non-blocking call is simple to understand - typically  the task would put itself to sleep for a while then try again. A blocking call is simpler to code and reduces the use of system resources, as the taks remains suspended and not in contention for CPU time until the resource is available.

# Play and blocking
The mose common place where a typical Play app will block is when its talking to a database. Unfortunately, none of the major dv provide asynchronous dv drivers for Java Virtual Machines. 

Other cases when code may block:
```
- REST through a 3rd party client library.
- Some messagin tech only provide synchronous APIs to send messages
- When opening files or sockets directly yourself
- CPU intresnsive operations that block by virtue of the fact that they take a - long time to execute.
```

In general, if the API you are using returns Future s, it is non-blocking, otherwise it is blocking.
```
Note that you may be tempted to therefore wrap your blocking code in Futures. This does not make it non-blocking, it just means the blocking will happen in a different thread. You still need to make sure that the thread pool that you are using has enough threads to handle the blocking. Please see Play’s example templates on https://playframework.com/download#examples for how to configure your application for a blocking API.
```

# Thread Pools
```
Internal thread pools- Used internally by the server engine for handling IO. An apps code should never be executed by a thread in these thread pools. Play is configured with Akka HTTP server backend by default, and so config settings from app.conf should be used to change the backend. Alternately, Play also comes with Netty server backend which, if enabled, also has settings that can be configured from app.conf.

Play default thread pool- This is the thread pool in which all of your app code in Play Framework is executed. It is an Akka dispatcher, and is used by the app ActorSystem. It can be configured by configuring Akka, described below.
```

# Using default thread pool
```
All actions in Play Framework use the default thread pool. When doing certain asynch operations, for example, calling map or flatMap on future, you may need to provide an implicit execution context to execute the given functions in. An execution contex is basically another name for a ThreadPool.

Default threadpool can be configured using standard Akka config in app.conf under the Akka namespace. Dispatchers can be configed in Akka docs.
```

Thread pools are used to spread work. 

# Using other threads
In certain circumstances, you may wish to dipatch work to other thread pool. This may include cpi heavy work, or IO work, such as db access. To do this, you should first create a ThreadPool. 

# Special handling in multithreaded environment such as Play program
- Application loaders.
In a play app thread context class loader may not always be able to load application classes. You should explicitly use the application class loader to load classes.
```
Class myClass = app.classloader().loadClass(myClassName);
Being explicit about loading classes is most important when running Play in development mode(using run) rather than production mode. That's because Play's development mode uses multiple class loaders so that it can support automatic application reloading. Some of Play's threads  might be bound to a class loader that only knows about a subset of you application's classes.

In some cases you my not be able to explicitly use the application classloader. This is sometimes the case when using third party libraries. In this case you may need to set t;he tread context class loader explicitly before you call the third pary code. If you do, remember to restore the context class loader back to its previous value once you've finished calling the thrid party code.
```

# Switching Threads
```
The problem with class loaders however is that as soon as control switches to another thread, you lose access to the original class loader. So if you were to map a CompletionStage using theApplyAsync, or using theApply at a point in time the Future associated with that CompletionStage had completed, and you then try to access the original class loader, it probably won'twork. To adress this, Play provides an HttpExecutionContex. This allows you to capture the current class loader in Executor, which you cna then pass to the CompletionStage*Async methods such as theApplyAsync(), and when the executor executers you callback, it will ensure the class loader reamins in scope.

```

# Best Practices
Pure asynchronous: 
```
In this case, you are doing no blocking IO in you app. Since you are never blocking, the default configuration of one thread per processer suits you use case perfectly, so no extra configuration needs to be done. The Play default execution context can be used in all cases.



```
Highly synchronous:
```
This profile mathces that of a traditional synchronous IO based web framework, such as a Java servlet container. It uses large thread pools to handle blocking IO. It is useful for applications where most actions are doing databse synchronous IO call, such as acc;essing a databse, and you don't want or need control over concurrency for different types of work. This profile is th esimplest for handling blocking IO.

```
Many specific thread pools:
```
This profile is for when you want to do a lot of synchronous IO, but you also want to control exactly how much of which types of operations you application does at once. In this profile, you would only do non blocking operations in the dfault execution context, and then dipatch blocking operations to different execution contexts for those specific operations.


```
Few specific thread pools:
```
This is a comination between the m;any specific thread pools and the highly synchronized profile. You would do most simple IO in the default execution context and set the number of thread there to be reasonably high(say 100), but then dispatch certain expensive operations ot specific contexts, where you can limi the number of them that are done at one time.
```
# Debugging Thread Pools
```
There are many possible setting for a dispatcher, and it can be hard to see which ones have been applied and what the defaults are, particularly when overriding the default dispatcher. The akk.log-config-on-start configuration option shows the entire applied configuration when the application is loaded:
akka.log-config-on-start = on



```