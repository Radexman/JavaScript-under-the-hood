# **How does JavaScript actually work**

## **Java Script is a single threaded language**

It means that JavaScript has only one call stack so it can execute code libe by line. It can't execute multiple lines of code a once.
Java Script engine is called V8 and it has 2 parts.

### **Memory Heap**

All variables are stored inside memory heap.

```JavaScript
const x = 10;
let name = 'Emilia';
```

### **Call Stack**

Call stack is the enviroment where the code like functions is executed. The call stack executes one task at the time.

```JavaScript
console.log('Hello World');
```

### **JavaScript has asynchronous capabilities**

```JavaScript
console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000);
console.log('3')
```

Output

-   1
-   3
-   2

Callback - is a piece of code that is executed after other action is done.

### **Event Loop**
