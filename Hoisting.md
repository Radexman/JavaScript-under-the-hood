# **Hoisting**

**Hoisting** is a concept that enables us to extract values of variables and functions even before initializing/assigning value without getting errors and this happens during the 1 st phase (memory creation phase) of the Execution Context.

## **Features of Hoisting**

-   In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless functions of whether their scope is global or local.

-   It allows us to call functions before even writing them in our code.

**Note:** JavaScript only hoists declarations, not initializations.
JavaScript allocates memory for all variables and functions defined in the program before execution.

However, since JavaScript allows us to both declare and initialize our variables simultaneously, so we can declare and initialize at the same time.

**Note:** Always remember that in the background the JavaScript is first declaring the variable and then initializing them. It is also good to know that variable declarations are processed before any code is executed.

However, in JavaScript, undeclared variables do not exist until the code assigning them is executed. Therefore, assigning a value to an undeclared variable implicitly creates it as a global variable when the assignment is executed. This means that all undeclared variables are global variables.
