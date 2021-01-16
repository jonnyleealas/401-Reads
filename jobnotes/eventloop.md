# Event loop
- Single thread means one line at a time. 
- Event loop takes things out of queue and puts it in the event stack.

It starts at the stack and calls an api. API sends a callback function into the event queue. The queue sends it to the stack.

- Event loop looks for events.
- It waits, when a command is called it executes the command. 
- The event loop is Queue, to stack to heap/ web apis.
# Example
    1. ANy pending timers done? - run callbacks
    2. Any pending OS task done? - Run Callbacks
        3. Pause execution. Resume when new OS task/operation/timer is completed.

-  Syntax sugar: Means we don't get new functionality, but a different way to write a synchronous function.

## Async
- When async is added to a function that function will then wait for other functions to run before it executes.