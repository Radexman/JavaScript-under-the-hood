# **What is the Call Stack**

To keep the track of all the contexts, including global and functional, the JavaScript engine uses a **call stack**. A call stack is also known as na 'Execution Context Stack', 'Runtime Stack', or 'Machine Stack'.

It uses the **LIFO** principle (Last-In-First-Out). When the engine first starts executing the script, it creates a global context and pushes it on the stack. Whenever a function is invoked, similarly, the JS engine creates a function stack context for the function and pushes it to the top of the call stack and starts executing it.

When execution of the current function is complete, then the JavaScript engine will automatically remove the context from the call stack and it goes back to its parent.
