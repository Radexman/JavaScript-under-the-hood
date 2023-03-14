# **Execution Context**

When you run any JavaScript, a special environment is created to handle the transformation & execution of code. This is called the **execution context**. It contains the currently running code and everything that aids in its execution.

There is a global execution context as well as a function execution context for every function invoked.

## **Execution Context Phases**

### **Memory Creation Phase:**

1. Create the global object (browser = window, Node.js = global).
2. Create the 'this' object and bind it to the global object.
3. Setup memory heap for storing variables and function references.
4. Store functions and variables in global execution context and set to 'undefined'.

### **Execution Phase:**

1. Execute code line by line.
2. Create a new execution context for each function call.

## **Example**

```JavaScript
    var x = 100;
    var y = 50;
    function getSum(n1, n2) {
        var sum = n1 + n2;
        return sum;
    }
    var sum1 = getSum(x , y);
    var sum2 = getSum(10, 5);
```

### **Creation Phase:**

-   **Line 1:** _x_ variable is allocated memory and stores _'undefined'_.
-   **Line 2:** _y_ variable is allocated memory and stores _'undefined'_.
-   **Line 3:** _getSum()_ function is allocated memory and stores all the code.
-   **Line 7:** _sum1_ variable is allocated memory and stored _'undefined'_.
-   **Line 8:** _sum2_ variable is allocated memory and stored _'undefined'_.

### **Execution Phase:**

-   **Line 1:** Places the value of _100_ into the _x_ variable.
-   **Line 2:** Places the value of _50_ into the _y_ variable.
-   **Line 3:** Skips the function because there is nothing to execute.
-   **Line 7:** Invokes the _getSum()_ function and creates a new function execution context.

### **Function Execution Context Creation Phase**

-   **Line 3:** _n1_ & _n2_ variables are allocated memory and stores _'undefined'_.
-   **Line 4:** _sum_ variable is allocated memory and stores _'undefined'_.

### **Function Execution Context Execution Phase:**

-   **Line 3:** _n1_ & _n2_ are assigned _100_ and _50_.
-   **Line 4:** Calculation is done and _150_ is put into the _sum_ variable.
-   **Line 5:** return tells the function EC to return to the global EX with value of sum (150).
-   **Line 7:** Returned _sum_ value is put into the _sum1_ variable.
-   **Line 8:** Open another function execution context and do the same thing.

## **Hoisting**

Hoisting is often referred to as the process where the interpreter appears to **move the declaration of funtions and variables** to the top of their scope prior to the execution of the code.
