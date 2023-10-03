# JavaScript Beginning to Mastery Syllabus 🚀

Welcome to the "JavaScript Beginning to Mastery" course! This syllabus will guide you through your journey to mastering JavaScript. 📚

## Video Tutorials

- [Part 1](https://youtu.be/chx9Rs41W6g?si=dUTFZo0WTZMPR187)
- [Part 2](https://youtu.be/Llsq1y-HWs4?si=WA0pXUL0CT8nh8MO)
- [Part 3](https://youtu.be/pAl_uGXKXq8?si=cTPtRe0nYt-WWDYB)


## Table of Contents

1. [JavaScript vs EcmaScript](#javascript-vs-ecmascript)
2. [Installation and Setup](#installation-and-setup)
3. [Basics of Programming in JavaScript](#basics-of-programming-in-javascript)
4. [Strings and Variables](#strings-and-variables)
5. [Conditional Statements](#conditional-statements)
6. [Loops](#loops)
7. [Arrays](#arrays)
8. [Objects](#objects)
9. [Functions](#functions)
10. [Important Array Methods](#important-array-methods)
11. [Useful Concepts](#useful-concepts)
12. [Object-Oriented JavaScript](#object-oriented-javascript)
13. [How JavaScript Works](#how-javascript-works)
14. [DOM Tutorial](#dom-tutorial)
15. [HTML and CSS Crash Course](#html-and-css-crash-course)
16. [Asynchronous JavaScript](#asynchronous-javascript)
17. [Project Building](#project-building)
18. [Conclusion](#conclusion)

## Part 1

## JavaScript vs EcmaScript

- Learn about the differences between JavaScript and EcmaScript.

## Installation and Setup

- Install Visual Studio Code (VSCode) and run your first JavaScript program.

## Basics of Programming in JavaScript
<details>
   <summary ><strong>Notes 📄</strong></summary>
  - **Write a "Hello World" program:**
    ```javascript
    console.log("Hello, World!");
    ```
    This simple program prints "Hello, World!" to the console, demonstrating the basic structure of a JavaScript program.

  - **Declare variables using `var`:**
    ```javascript
    var myVar;
    ```
    Variables are declared using `var` followed by the variable name. Variables declared with `var` have function-level scope.

  - **Explore more about variables:**
    ```javascript
    var number = 42;
    var text = "Hello";
    var isTrue = true;
    ```
    Variables can hold different types of data, including numbers, strings, and booleans. You can assign values to variables using the assignment operator (`=`).

  - **Learn about `let` and `const`:**
    ```javascript
    let count = 0;
    const PI = 3.14159;
    ```
    `let` allows you to declare block-scoped variables, and `const` is used for constants that cannot be reassigned.

  - **Understand string indexing:**
    ```javascript
    var str = "Hello";
    var firstChar = str[0]; // "H"
    ```
    Strings are sequences of characters, and you can access individual characters using square brackets and an index. Indexing starts at 0.

  - **Useful string methods:**
    ```javascript
    var text = "JavaScript";
    var upperCaseText = text.toUpperCase(); // "JAVASCRIPT"
    var subText = text.substring(0, 4); // "Java"
    ```
    JavaScript provides built-in string methods for tasks like converting to uppercase and extracting substrings.

  - **Explore template strings:**
    ```javascript
    var name = "Alice";
    var greeting = `Hello, ${name}!`;
    ```
    Template strings (using backticks) allow you to embed expressions within strings, making string interpolation easy.

  - **Null, undefined, BigInt, and the `typeof` operator:**
    ```javascript
    var value = null;
    var uninitializedVar;
    var bigIntValue = 1234567890123456789012345678901234567890n;

    console.log(typeof value); // "object"
    console.log(typeof uninitializedVar); // "undefined"
    console.log(typeof bigIntValue); // "bigint"
    ```
    `null` represents the absence of a value, `undefined` indicates an uninitialized variable, and `BigInt` is used for large integers. `typeof` checks the data type.

  - **Booleans and comparison operators:**
    ```javascript
    var x = 5;
    var y = 10;

    var isGreaterThan = x > y; // false
    var isEqual = x === y; // false
    ```
    Booleans represent true or false values. Comparison operators like `>` and `===` compare values and return booleans.

  - **Truthy and falsy values:**
    ```javascript
    var emptyString = "";
    var zero = 0;
    var notDefined;
    
    console.log(Boolean(emptyString)); // false
    console.log(Boolean(zero)); // false
    console.log(Boolean(notDefined)); // false
    ```
    JavaScript has truthy and falsy values. Falsy values include empty strings, zero, and undefined, among others.

  - **If-else statements:**
    ```javascript
    var age = 18;

    if (age >= 18) {
      console.log("You can vote!");
    } else {
      console.log("You cannot vote yet.");
    }
    ```
    Conditional statements like `if` and `else` allow you to execute different code blocks based on conditions.

  - **Ternary operators:**
    ```javascript
    var isAdult = age >= 18 ? "Yes" : "No";
    ```
    The ternary operator (`?`) provides a concise way to write conditional expressions.

  - **Logical `&&` and `||` operators:**
    ```javascript
    var isTrue = true;
    var isFalse = false;

    var resultAnd = isTrue && isFalse; // false
    var resultOr = isTrue || isFalse; // true
    ```
    Logical AND (`&&`) and OR (`||`) operators allow you to combine conditions.

  - **Nested if-else statements:**
    ```javascript
    var x = 5;
    var y = 10;

    if (x === y) {
      console.log("x is equal to y");
    } else {
      if (x < y) {
        console.log("x is less than y");
      } else {
        console.log("x is greater than y");
      }
    }
    ```
    You can nest if-else statements to handle multiple levels of conditions.

  - **If-else if-else statements:**
    ```javascript
    var grade = "B";

    if (grade === "A") {
      console.log("Excellent");
    } else if (grade === "B") {
      console.log("Good");
    } else {
      console.log("Needs improvement");
    }
    ```
    Use if-else if-else chains to check multiple conditions in order.

  - **Switch statements:**
    ```javascript
    var day = "Monday";

    switch (day) {
      case "Monday":
        console.log("It's the start of the week.");
        break;
      case "Friday":
        console.log("It's the end of the week.");
        break;
      default:
        console.log("It's another day.");
    }
    ```
    Switch statements handle multiple cases based on the value of an expression.

  - **Introduction to loops:**
    ```javascript
    for (var i = 0; i < 5; i++) {
      console.log("Iteration " + i);
    }
    ```
    Loops allow you to repeat a block of code. The `for` loop is commonly used for this purpose.

</details>

- Write a "Hello World" program.
- Declare variables using `var`.
- Explore more about variables.
- Learn about `let` and `const`.
- Understand string indexing.
- Useful string methods.
- Explore template strings.
- Null, undefined, BigInt, and the `typeof` operator.
- Booleans and comparison operators.
- Truthy and falsy values.
- If-else statements.
- Ternary operators.
- Logical `&&` and `||` operators.
- Nested if-else statements.
- If-else if-else statements.
- Switch statements.
- Introduction to loops.

## Strings and Variables

<details>
  <summary> <strong>Notes : Strings and Variables 📄 </strong></summary>

  - **Continue with loops (while, for, do-while):**
    - **While loop:**
      ```javascript
      var i = 0;
      while (i < 5) {
        console.log("Iteration " + i);
        i++;
      }
      ```
      The `while` loop repeatedly executes a block of code as long as a specified condition is true.
    
    - **For loop:**
      ```javascript
      for (var i = 0; i < 5; i++) {
        console.log("Iteration " + i);
      }
      ```
      The `for` loop is a compact way to iterate over a range of values.
    
    - **Do-while loop:**
      ```javascript
      var i = 0;
      do {
        console.log("Iteration " + i);
        i++;
      } while (i < 5);
      ```
      The `do-while` loop is similar to `while`, but it always executes the block at least once before checking the condition.

  - **Arrays in JavaScript:**
    - **Introduction to arrays:**
      ```javascript
      var colors = ["red", "green", "blue"];
      ```
      An array is a data structure that stores a collection of values. In JavaScript, you can create arrays by enclosing elements in square brackets.

    - **Push, pop, shift, unshift operations:**
      ```javascript
      var fruits = ["apple", "banana", "cherry"];
      fruits.push("grape"); // Adds "grape" to the end of the array.
      fruits.pop(); // Removes the last element ("cherry") from the array.
      fruits.shift(); // Removes the first element ("apple") from the array.
      fruits.unshift("orange"); // Adds "orange" to the beginning of the array.
      ```
      These operations allow you to add and remove elements from arrays.

    - **Primitive vs reference data types:**
      - Primitive data types (e.g., numbers, strings, booleans) are stored directly in variables, and their values are copied when assigned to other variables.
      - Reference data types (e.g., arrays, objects) are stored as references, so changing one variable can affect others that reference the same data.

    - **Cloning arrays and using the spread operator:**
      ```javascript
      var originalArray = [1, 2, 3];
      var clonedArray = [...originalArray];
      ```
      The spread operator (`...`) is used to create a shallow copy of an array. It prevents changes to the original array from affecting the cloned one.

    - **Array destructuring:**
      ```javascript
      var [first, second, third] = ["apple", "banana", "cherry"];
      console.log(first); // "apple"
      ```
      Array destructuring allows you to extract values from an array into separate variables using pattern matching.

    - **Multi-dimensional arrays:**
      ```javascript
      var matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      console.log(matrix[1][2]); // Accessing an element: 6
      ```
      JavaScript supports multi-dimensional arrays, which are arrays within arrays. They can represent tables or grids of data.

    - **Array methods (e.g., forEach, map, filter):**
      ```javascript
      var numbers = [1, 2, 3, 4, 5];
      numbers.forEach(function(num) {
        console.log(num * 2);
      });
      ```
      Array methods allow you to perform operations on arrays, such as iterating through elements, mapping values, or filtering based on conditions.

    - **Common array properties (e.g., length):**
      ```javascript
      var fruits = ["apple", "banana", "cherry"];
      console.log(fruits.length); // 3
      ```
      The `length` property of an array indicates the number of elements it contains.

</details>



- Continue with loops (while, for, do-while).
- Arrays in JavaScript.
- Introduction to arrays.
- Push, pop, shift, unshift operations.
- Primitive vs reference data types.
- Cloning arrays and using the spread operator.
- Array destructuring.

## Objects in JavaScript

<details>
  <summary><strong>Notes : Objects in JavaScript 📄</strong></summary>

  - **Introduction to objects:**
    ```javascript
    var person = {
      name: "John",
      age: 30,
      gender: "male"
    };
    ```
    Objects in JavaScript are data structures that store key-value pairs. They are used to represent entities and their attributes.

  - **Dot vs bracket notation:**
    ```javascript
    var person = {
      name: "John",
      age: 30
    };

    console.log(person.name); // Dot notation to access property
    console.log(person["age"]); // Bracket notation to access property
    ```
    Both dot and bracket notations can be used to access object properties. Bracket notation is useful when property names are dynamic or contain special characters.

  - **Iterating through objects:**
    ```javascript
    var person = {
      name: "John",
      age: 30,
      gender: "male"
    };

    for (var key in person) {
      console.log(key + ": " + person[key]);
    }
    ```
    To loop through the properties of an object, you can use a `for...in` loop, which iterates over the keys (property names).

  - **Computed properties:**
    ```javascript
    var prop = "color";
    var car = {
      [prop]: "blue"
    };
    console.log(car.color); // "blue"
    ```
    Computed properties allow you to use variables or expressions as property names when defining objects.

  - **Spread operator in objects:**
    ```javascript
    var person = { name: "John" };
    var details = { age: 30, gender: "male" };

    var combined = { ...person, ...details };
    ```
    The spread operator (`...`) allows you to merge multiple objects into one, creating a new object with the combined properties.

  - **Object destructuring:**
    ```javascript
    var person = { name: "Alice", age: 25 };
    var { name, age } = person;
    console.log(name); // "Alice"
    console.log(age);  // 25
    ```
    Object destructuring provides a convenient way to extract values from objects and assign them to variables with the same names as the object's properties.

  - **Objects inside arrays:**
    ```javascript
    var students = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 28 },
      { name: "Charlie", age: 22 }
    ];
    ```
    Arrays can contain objects as elements, allowing you to store collections of related data.

  - **Nested destructuring:**
    ```javascript
    var student = { name: "Alice", details: { age: 25, grade: "A" } };
    var { name, details: { age, grade } } = student;
    console.log(name);  // "Alice"
    console.log(age);   // 25
    console.log(grade); // "A"
    ```
    Nested destructuring enables you to extract values from nested objects within an object.

</details>


- Introduction to objects.
- Dot vs bracket notation.
- Iterating through objects.
- Computed properties.
- Spread operator in objects.
- Object destructuring.
- Objects inside arrays.
- Nested destructuring.

## Functions in JavaScript
<details>
  <summary><strong> Notes : Functions in JavaScript 📄</strong></summary>

  - **Function declaration:**
    ```javascript
    function greet(name) {
      return "Hello, " + name + "!";
    }
    ```
    Function declarations define named functions with parameters and a body that performs a specific task when called.

  - **Function expression:**
    ```javascript
    var greet = function(name) {
      return "Hello, " + name + "!";
    };
    ```
    Function expressions define anonymous functions and assign them to variables. They can be used as values and passed as arguments.

  - **Arrow functions:**
    ```javascript
    const greet = (name) => {
      return "Hello, " + name + "!";
    };
    ```
    Arrow functions provide a more concise syntax for defining functions. They are especially useful for short, one-liner functions.

  - **Function declarations are hoisted:**
    Function declarations are hoisted to the top of their containing scope, which means they can be called before they are defined in the code.

  - **Functions inside functions:**
    ```javascript
    function outer() {
      function inner() {
        return "Inside inner function";
      }
      return inner();
    }
    ```
    JavaScript allows functions to be defined inside other functions, creating a concept called nested functions.

  - **Lexical scope:**
    Lexical scope, also known as static scope, determines the accessibility of variables based on their location within the code.

  - **Block scope vs. function scope:**
    Block scope is introduced by `let` and `const` declarations, and it confines variable accessibility to the innermost block. Function scope, on the other hand, is limited to the containing function.

  - **Default parameters:**
    ```javascript
    function greet(name = "Guest") {
      return "Hello, " + name + "!";
    }
    ```
    Default parameters allow you to specify default values for function parameters in case no argument is provided.

  - **Rest parameters:**
    ```javascript
    function sum(...numbers) {
      return numbers.reduce((total, num) => total + num, 0);
    }
    ```
    Rest parameters allow you to represent an indefinite number of arguments as an array within the function.

  - **Parameter destructuring:**
    ```javascript
    function personInfo({ name, age }) {
      return `${name} is ${age} years old.`;
    }
    ```
    Parameter destructuring lets you extract values from objects passed as function arguments.

  - **Introduction to callback functions:**
    A callback function is a function passed as an argument to another function, which will be executed at a later point in time.

  - **Functions returning functions:**
    ```javascript
    function multiplier(factor) {
      return function(x) {
        return x * factor;
      };
    }
    ```
    Functions can return other functions, creating a concept known as a closure.

</details>


- Function declaration.
- Function expression.
- Arrow functions.
- Function declarations are hoisted.
- Functions inside functions.
- Lexical scope.
- Block scope vs. function scope.
- Default parameters.
- Rest parameters.
- Parameter destructuring.
- Introduction to callback functions.
- Functions returning functions.

## Important Array Methods

<details>
  <summary><strong>Notes : Important Array Methods 📄</strong></summary>

  - **`forEach` method:**
    ```javascript
    var colors = ["red", "green", "blue"];
    colors.forEach(function(color) {
      console.log(color);
    });
    ```
    The `forEach` method iterates through an array and executes a provided function for each element in the array.

  - **`map` method:**
    ```javascript
    var numbers = [1, 2, 3, 4, 5];
    var squaredNumbers = numbers.map(function(number) {
      return number * number;
    });
    ```
    The `map` method creates a new array by applying a provided function to each element of the original array.

  - **`filter` method:**
    ```javascript
    var numbers = [1, 2, 3, 4, 5];
    var evenNumbers = numbers.filter(function(number) {
      return number % 2 === 0;
    });
    ```
    The `filter` method returns a new array containing elements that meet a specified condition.

  - **`reduce` method:**
    ```javascript
    var numbers = [1, 2, 3, 4, 5];
    var sum = numbers.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
    ```
    The `reduce` method applies a function against an accumulator and each element of the array, reducing it to a single value.

  - **`sort` method:**
    ```javascript
    var fruits = ["apple", "banana", "cherry"];
    fruits.sort();
    ```
    The `sort` method arranges the elements of an array in ascending order by default or based on a comparison function.

  - **`find` method:**
    ```javascript
    var users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" }
    ];
    var user = users.find(function(u) {
      return u.id === 2;
    });
    ```
    The `find` method returns the first element in an array that satisfies a provided testing function.

  - **`every` method:**
    ```javascript
    var numbers = [2, 4, 6, 8, 10];
    var allEven = numbers.every(function(number) {
      return number % 2 === 0;
    });
    ```
    The `every` method checks if all elements in an array satisfy a given condition.

  - **`some` method:**
    ```javascript
    var numbers = [1, 3, 5, 7, 8];
    var hasEven = numbers.some(function(number) {
      return number % 2 === 0;
    });
    ```
    The `some` method checks if at least one element in an array satisfies a given condition.

  - **`fill` method:**
    ```javascript
    var array = [1, 2, 3, 4, 5];
    array.fill(0, 2, 4);
    ```
    The `fill` method changes all elements in an array to a static value within a specified range.

  - **`splice` method:**
    ```javascript
    var colors = ["red", "green", "blue", "yellow"];
    colors.splice(1, 2, "orange", "purple");
    ```
    The `splice` method changes the contents of an array by removing, replacing, or adding elements at a specific position.

</details>


- forEach method.
- Map method.
- Filter.
- Reduce.
- Sort.
- Find.
- Every.
- Some.
- Fill method.
- Splice method.

## Useful Concepts

<details>
  <summary><strong>Notes : Useful Concepts 📄</strong></summary>

  - **Iterables:**
    - Iterables are objects in JavaScript that can be iterated over using loops or other iteration mechanisms. Examples of iterables include arrays, strings, and objects.

  - **Sets:**
    - Sets are a built-in data structure in JavaScript that store unique values. They can be used to efficiently manage collections of values without duplicates.
    ```javascript
    const uniqueNumbers = new Set([1, 2, 3, 2, 4, 5]);
    ```

  - **Maps:**
    - Maps are another built-in data structure in JavaScript that store key-value pairs. They are highly flexible and can use various data types as keys.
    ```javascript
    const userMap = new Map();
    userMap.set("Alice", { age: 30, email: "alice@example.com" });
    ```

  - **Object.assign:**
    - `Object.assign` is a method used to copy the values of all enumerable properties from one or more source objects into a target object.
    ```javascript
    const target = {};
    const source = { a: 1, b: 2 };
    Object.assign(target, source);
    ```

  - **Optional chaining:**
    - Optional chaining (`?.`) is a feature introduced in JavaScript to simplify working with potentially undefined or null values when accessing nested properties or methods.
    ```javascript
    const user = {
      name: "Alice",
      address: {
        street: "123 Main St",
        city: "Wonderland",
      },
    };

    const cityName = user.address?.city; // "Wonderland"
    const zipCode = user.address?.zip; // undefined (no error)
    ```

</details>


- Iterables.
- Sets.
- Maps.
- Object.assign.
- Optional chaining.

## Object-Oriented JavaScript / Prototypal Inheritance

<details>
  <summary><strong>Notes : Object-Oriented JavaScript 📄</strong></summary>

  - **Methods:**
    - Methods are functions that are defined as properties of objects. They allow objects to perform actions and manipulate their internal data.

    ```javascript
    const person = {
      firstName: "Alice",
      lastName: "Johnson",
      fullName: function() {
        return `${this.firstName} ${this.lastName}`;
      }
    };

    console.log(person.fullName()); // "Alice Johnson"
    ```

  - **`this` keyword and the Window object:**
    - The `this` keyword refers to the current object context. When used outside of an object, it can refer to the global `Window` object.

    ```javascript
    function greet() {
      console.log(`Hello, ${this.name}`);
    }

    const person = {
      name: "Alice",
      sayHello: greet
    };

    person.sayHello(); // "Hello, Alice"

    const globalName = "John";
    greet(); // "Hello, John"
    ```

  - **Call, apply, and bind methods:**
    - `call` and `apply` are methods that allow you to invoke a function with a specific context and arguments. `bind` creates a new function with a bound context.

    ```javascript
    function greet() {
      console.log(`Hello, ${this.name}`);
    }

    const alice = { name: "Alice" };
    const john = { name: "John" };

    greet.call(alice); // "Hello, Alice"
    greet.apply(john); // "Hello, John"

    const sayHelloToAlice = greet.bind(alice);
    sayHelloToAlice(); // "Hello, Alice"
    ```

  - **Some warnings:**
    - JavaScript has some quirks and potential pitfalls, such as implicit type conversions and variable hoisting. Understanding these issues is important.

  - **`this` inside arrow functions:**
    - Arrow functions do not have their own `this` context. They inherit the `this` value from their enclosing scope.

    ```javascript
    const person = {
      name: "Alice",
      sayHello: () => {
        console.log(`Hello, ${this.name}`);
      }
    };

    person.sayHello(); // "Hello, undefined"
    ```

  - **Short syntax for methods:**
    - ES6 introduced a shorter syntax for defining methods within objects, omitting the `function` keyword.

    ```javascript
    const person = {
      name: "Alice",
      sayHello() {
        console.log(`Hello, ${this.name}`);
      }
    };

    person.sayHello(); // "Hello, Alice"
    ```

  - **Factory functions and memory-related problems:**
    - Factory functions are functions that create and return objects. Care must be taken to manage memory when using factory functions extensively.

    ```javascript
    function createPerson(name, age) {
      return {
        name,
        age,
        sayHello() {
          console.log(`Hello, ${this.name}`);
        }
      };
    }

    const alice = createPerson("Alice", 30);
    alice.sayHello(); // "Hello, Alice"
    ```

  - **Prototype chain (`__proto__`, `[[prototype]]`):**
    - Objects in JavaScript inherit properties and methods from their prototype objects. `__proto__` and `[[prototype]]` represent the prototype chain.

  - **Prototype usage:**
    - You can add properties and methods to object prototypes, and all objects created from that prototype will inherit them.

    ```javascript
    function Person(name) {
      this.name = name;
    }

    Person.prototype.sayHello = function() {
      console.log(`Hello, ${this.name}`);
    };

    const alice = new Person("Alice");
    alice.sayHello(); // "Hello, Alice"
    ```

  - **Constructor functions with the `new` keyword:**
    - Constructor functions are used to create objects with shared properties and methods. The `new` keyword is used to instantiate objects from constructors.

    ```javascript
    function Person(name) {
      this.name = name;
    }

    const alice = new Person("Alice");
    alice.sayHello(); // "Hello, Alice"
    ```

  - **More discussions about `__proto__` and prototype:**
    - Further exploration of prototype-based inheritance and how objects link to their prototypes.

  - **The `class` keyword:**
    - ES6 introduced the `class` syntax to create constructor functions more elegantly, providing a clearer way to define classes and objects.

    ```javascript
    class Person {
      constructor(name) {
        this.name = name;
      }

      sayHello() {
        console.log(`Hello, ${this.name}`);
      }
    }

    const alice = new Person("Alice");
    alice.sayHello(); // "Hello, Alice"
    ```

  - **Examples using the `class` keyword:**
    - Demonstrations of how to create and use classes in JavaScript using the `class` syntax.

  - **The `super` keyword:**
    - The `super` keyword is used to call methods from a parent class in a subclass.

    ```javascript
    class Animal {
      constructor(name) {
        this.name = name;
      }

      makeSound() {
        console.log("Animal sound");
      }
    }

    class Dog extends Animal {
      constructor(name, breed) {
        super(name);
        this.breed = breed;
      }

      makeSound() {
        super.makeSound();
        console.log("Bark");
      }
    }

    const dog = new Dog("Buddy", "Golden Retriever");
    dog.makeSound(); // "Animal sound" followed by "Bark"
    ```

  - **Method overriding:**
    - Subclasses can override methods inherited from their parent classes to provide custom implementations.

  - **Getters and setters:**
    - Getters and setters allow controlled access to object properties and enable custom behavior when reading or setting values.

  - **Static methods and properties:**
    - Static methods and properties belong to the class itself rather than instances and can be called on the class without instantiation.

</details>


- Methods.
- `this` keyword and the Window object.
- Call, apply, and bind methods.
- Some warnings.
- `this` inside arrow functions.
- Short syntax for methods.
- Factory functions and memory-related problems.
- Prototype chain (`__proto__`, `[[prototype]]`).
- Prototype usage.
- Constructor functions with the `new` keyword.
- More discussions about `__proto__` and `prototype`.
- The `class` keyword.
- Examples using the `class` keyword.
- The `super` keyword.
- Method overriding.
- Getters and setters.
- Static methods and properties.

## Part 2

## How JavaScript Works

<details>
  <summary><strong>Notes : How JavaScript Works 📄</strong></summary>

  - **Global Execution Context:**
    - The global execution context is the highest-level context in JavaScript. It represents the environment in which your entire JavaScript program runs.

  - **`this` and `window` in the Global Execution Context:**
    - In the global execution context, the `this` keyword refers to the global object, which is the `window` object in a web browser environment.

    ```javascript
    console.log(this === window); // true
    ```

  - **Hoisting:**
    - Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during compilation.

    ```javascript
    console.log(x); // undefined
    var x = 10;
    ```

  - **Are `let` and `const` Hoisted? What Is a Reference Error?**
    - Unlike `var`, `let` and `const` declarations are hoisted but not initialized. Accessing them before initialization results in a `ReferenceError`.

    ```javascript
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 10;
    ```

  - **Function Execution Context:**
    - When a function is called, a new execution context is created for that function, which includes its own local variables and parameters.

  - **Scope Chain and Lexical Environment:**
    - JavaScript uses a scope chain to determine variable and function accessibility. It checks the current scope and then walks up the chain until it finds the variable or function.

    ```javascript
    const outerVar = 42;

    function outerFunction() {
      const innerVar = 10;

      function innerFunction() {
        console.log(innerVar); // 10
        console.log(outerVar); // 42
      }

      innerFunction();
    }

    outerFunction();
    ```

  - **Introduction to Closures:**
    - Closures are a fundamental concept in JavaScript. They occur when a function has access to variables from its outer (enclosing) scope even after the outer function has finished executing.

    ```javascript
    function outer() {
      const outerVar = "I am from outer scope";

      function inner() {
        console.log(outerVar);
      }

      return inner;
    }

    const closureFunction = outer();
    closureFunction(); // "I am from outer scope"
    ```

  - **Closure Examples:**
    - Closures can be used for various purposes, such as data encapsulation, private variables, and callbacks.

    ```javascript
    function createCounter() {
      let count = 0;

      return {
        increment: function() {
          count++;
        },
        getCount: function() {
          return count;
        },
      };
    }

    const counter = createCounter();
    counter.increment();
    console.log(counter.getCount()); // 1
    ```

</details>


- Global execution context.
- `this` and `window` in the global execution context.
- Hoisting.
- Are `let` and `const` hoisted? What is a reference error?
- Function execution context.
- Scope chain and lexical environment.
- Introduction to closures.
- Closure examples.

## DOM Tutorial

<details>
  <summary><strong>Notes : DOM Tutorial 📄</strong></summary>

  - **HTML and CSS Crash Course:**
    - Before diving into the DOM (Document Object Model), it's essential to understand HTML structure and CSS styling.

  - **Async vs. Defer:**
    - When including external JavaScript files, the `async` and `defer` attributes control how script execution interacts with HTML parsing.

  - **Selecting Elements Using IDs:**
    - You can select an HTML element with a specific ID using `document.getElementById()`.

    ```javascript
    // Example: Select an element with ID "myElement"
    const element = document.getElementById("myElement");
    ```

  - **`querySelector`:**
    - The `querySelector` method allows you to select HTML elements using CSS-style selectors.

    ```javascript
    // Example: Select elements with class "myClass"
    const elements = document.querySelectorAll(".myClass");
    ```

  - **`textContent` & `innerText`:**
    - These properties allow you to get or set the text content of an element.

    ```javascript
    // Example: Get and set text content of a paragraph
    const paragraph = document.querySelector("p");
    console.log(paragraph.textContent); // Get text content
    paragraph.textContent = "New text"; // Set text content
    ```

  - **Changing Styles of Elements Using JavaScript:**
    - JavaScript can modify CSS styles by accessing the `style` property of an element.

    ```javascript
    // Example: Change the color of an element
    const element = document.querySelector(".myElement");
    element.style.color = "red";
    ```

  - **Getting and Setting Attributes:**
    - Attributes like `src`, `href`, or `data-*` can be accessed and modified using `getAttribute()` and `setAttribute()`.

    ```javascript
    // Example: Get and set the href attribute of a link
    const link = document.querySelector("a");
    const href = link.getAttribute("href");
    link.setAttribute("href", "https://example.com");
    ```

  - **Selecting Multiple Elements and Looping Through Them:**
    - Use `querySelectorAll()` to select multiple elements, then loop through them.

    ```javascript
    // Example: Select all paragraphs and log their text content
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
      console.log(paragraph.textContent);
    });
    ```

  - **`innerHTML`:**
    - `innerHTML` allows you to get or set the HTML content of an element.

    ```javascript
    // Example: Get and set HTML content of a div
    const div = document.querySelector("div");
    console.log(div.innerHTML); // Get HTML content
    div.innerHTML = "<p>New HTML</p>"; // Set HTML content
    ```

  - **Understanding the DOM Tree, Root Node, Element Nodes, Text Nodes:**
    - The DOM is represented as a tree structure. The root node is the `<html>` element. Elements and text content are nodes within this tree.

  - **`classList`:**
    - `classList` provides methods to manipulate the class attribute of elements.

    ```javascript
    // Example: Add a class to an element
    const element = document.querySelector(".myElement");
    element.classList.add("active");
    ```

  - **Adding New Elements to the Page:**
    - You can create new elements using `document.createElement()` and append them to the DOM using `appendChild()` or other methods.

    ```javascript
    // Example: Create and append a new div element
    const newDiv = document.createElement("div");
    document.body.appendChild(newDiv);
    ```

  - **Inserting Adjacent Elements:**
    - Methods like `insertBefore()` and `insertAdjacentElement()` allow you to insert elements before or after existing elements.

  - **Cloning Nodes:**
    - You can clone nodes, including elements, using `cloneNode()`.

  - **More Methods to Add Elements to the Page:**
    - Explore methods like `appendChild()`, `insertBefore()`, and `insertAdjacentElement()` for more control over element insertion.

  - **Getting the Dimensions of Elements:**
    - You can obtain the size and position of elements using properties like `offsetWidth`, `offsetHeight`, `clientWidth`, `clientHeight`, `getBoundingClientRect()`.

  - **Introduction to Events:**
    - Events are actions or occurrences in the DOM, like clicking, hovering, or typing.

  - **`this` Keyword Inside Event Listener Callbacks:**
    - Inside event listener functions, the `this` keyword refers to the element that triggered the event.

  - **Adding Events to Multiple Elements:**
    - Use loops to add event listeners to multiple elements at once.

  - **The Event Object:**
    - Event listeners receive an event object containing information about the event, like mouse coordinates.

  - **How Event Listeners Work:**
    - Event listeners wait for specific events on selected elements and execute a callback function when triggered.

  - **Practice with Events:**
    - Experiment with different events and event handling.

  - **Creating a Demo Project:**
    - Build a small project to practice DOM manipulation and event handling.

  - **More Events:**
    - Explore other events like keyboard events, form events, and window events.

  - **Event Bubbling:**
    - Event bubbling is the propagation of an event from the target element to the root of the DOM.

  - **Event Capturing:**
    - Event capturing is the reverse of bubbling, capturing events from the root to the target.

  - **Event Delegation:**
    - Event delegation is a technique where a single event listener is added to a common ancestor for multiple elements. It helps reduce the number of event listeners.

  - **Creating a Project Using Event Delegation:**
    - Create a project where event delegation is employed to handle events efficiently.

</details>


- HTML and CSS crash course.
- Async vs. defer.
- Selecting elements using IDs.
- `querySelector`.
- `textContent` & `innerText`.
- Changing styles of elements using JavaScript.
- Getting and setting attributes.
- Selecting multiple elements and looping through them.
- `innerHTML`.
- Understanding the DOM tree, root node, element nodes, text nodes.
- `classList`.
- Adding new elements to the page.
- Creating elements.
- Inserting adjacent elements.
- Cloning nodes.
- More methods to add elements to the page.
- Getting the dimensions of elements.
- Introduction to events.
- `this` keyword inside event listener callbacks.
- Adding events to multiple elements.
- The event object.
- How event listeners work.
- Practice with events.
- Creating a demo project.
- More events.
- Event bubbling.
- Event capturing.
- Event delegation.
- Creating a project using event delegation.

## Asynchronous JavaScript

<details>
  <summary><strong>Notes : Asynchronous JavaScript 📄</strong></summary>

  - **Is JavaScript a Synchronous or Asynchronous Programming Language?**
    - JavaScript is primarily single-threaded, but it supports asynchronous operations through mechanisms like callbacks, promises, and async/await.

  - **`setTimeout()`:**
    - `setTimeout()` is a function that schedules a function to be executed after a specified delay in milliseconds.
    ```javascript
    // Example: Execute a function after a 2-second delay
    setTimeout(() => {
      console.log("Delayed function executed.");
    }, 2000);
    ```
  
  - **`setTimeout()` with 0 Milliseconds:**
    - Even with a delay of 0 milliseconds, `setTimeout()` schedules the function to run asynchronously, allowing other code to execute first.

  - **Callback Queue:**
    - The callback queue holds functions that are ready to be executed once the call stack is empty.

  - **`setInterval` and a Project with `setInterval`:**
    - `setInterval` repeatedly calls a function at a specified interval until cleared.
    ```javascript
    // Example: Repeatedly log a message every 1 second
    setInterval(() => {
      console.log("Interval function executed.");
    }, 1000);
    ```

  - **Understanding Callbacks in General:**
    - Callbacks are functions passed as arguments to other functions and are executed later, often asynchronously.

  - **Callbacks in Asynchronous Programming:**
    - Callbacks are frequently used in asynchronous programming to handle tasks like handling events or making API requests.

  - **Callback Hell and the Pyramid of Doom:**
    - Callback hell occurs when nested callbacks lead to deeply indented and hard-to-read code. It can be mitigated with techniques like named functions or promises.

  - **Introduction to Promises:**
    - Promises are objects representing the eventual completion (or failure) of an asynchronous operation. They have states (pending, fulfilled, rejected).
    ```javascript
    // Example: Creating a promise
    const myPromise = new Promise((resolve, reject) => {
      // Asynchronous task, then resolve or reject
      if (/* task successful */) {
        resolve("Success");
      } else {
        reject("Error");
      }
    });
    ```

  - **Microtask Queue:**
    - The microtask queue is where promises are executed and prioritized over the callback queue.

  - **Functions That Return Promises:**
    - Functions can be designed to return promises, making them easier to work with in asynchronous code.
    ```javascript
    // Example: A function that returns a promise
    function fetchData() {
      return new Promise((resolve, reject) => {
        // Asynchronous data fetching logic
        if (/* data fetched successfully */) {
          resolve(data);
        } else {
          reject(error);
        }
      });
    }
    ```

  - **Promises and `setTimeout()`:**
    - Promises can be used with `setTimeout()` to handle delayed actions more cleanly.
    ```javascript
    // Example: Using a promise with setTimeout
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    delay(2000)
      .then(() => {
        console.log("Delayed action after 2 seconds.");
      });
    ```

  - **`Promise.resolve` and More About the `then` Method:**
    - `Promise.resolve()` creates a resolved promise. The `then` method is used to handle the result.
    ```javascript
    Promise.resolve("Resolved Value")
      .then((result) => {
        console.log(result);
      });
    ```

  - **Converting Nested Callbacks to Flat Code Using Promises:**
    - Promises can simplify asynchronous code, reducing nesting and improving readability.

  - **Introduction to Ajax and HTTP Requests:**
    - Ajax allows asynchronous communication with a server to fetch or send data without reloading the entire page.

  - **XHR Requests:**
    - XMLHttpRequest (XHR) is a built-in browser object used to make HTTP requests.

  - **Error Handling in XHR Requests:**
    - Proper error handling is crucial when making XHR requests to handle issues like network failures.

  - **XHR Request Chaining:**
    - You can chain multiple XHR requests to execute them sequentially.

  - **Promisifying XHR Requests and Chaining Using the `then` Method:**
    - Promisifying XHR requests makes them easier to work with using promises and chaining.

  - **Fetch API:**
    - The Fetch API provides a modern way to make HTTP requests and handle responses using promises.

  - **Error Handling in Fetch API:**
    - Handle errors in Fetch API requests by checking the response status.

  - **Consuming Promises with `async` and `await`:**
    - `async` and `await` simplify asynchronous code by allowing you to write it in a more synchronous style.
    ```javascript
    // Example: Using async/await with a promise
    async function fetchData() {
      try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    ```

  - **Splitting Code into Multiple Files Using ES6 Modules:**
    - ES6 modules help organize and split code into separate files, making it more maintainable and reusable.

  </summary>
</details>


- Is JavaScript a synchronous or asynchronous programming language?
- `setTimeout()`.
- `setTimeout()` with 0 milliseconds.
- Callback queue.
- `setInterval` and a project with `setInterval`.
- Understanding callbacks in general.
- Callbacks in asynchronous programming.
- Callback hell and the pyramid of doom.
- Introduction to promises.
- Microtask queue.
- Functions that return promises.
- Promises and `setTimeout`.
- `Promise.resolve` and more about the `then` method.
- Converting nested callbacks to flat code using promises.
- Introduction to Ajax and HTTP requests.
- XHR requests.
- Error handling in XHR requests.
- XHR request chaining.
- Promisifying XHR requests and chaining using the `then` method.
- Fetch API.
- Error handling in Fetch API.
- Consuming promises with `async` and `await`.
- Splitting code into multiple files using ES6 modules.

## Project Building

-  🎉
  

 ## Happy coding! 👩‍💻👨‍💻

## Notes Formate
  <details>
  <summary><strong>Basics of Programming in JavaScript</strong></summary>

  <details>
    <summary><strong>Write a "Hello World" program</strong></summary>

    ```javascript
    // Example: Hello World program in JavaScript
    console.log("Hello, World!");
    ```
    - A "Hello World" program is a basic introduction to any programming language. 
    - In JavaScript, you can use `console.log()` to print text to the console. 
    - This simple code snippet prints "Hello, World!" when executed.
  </details>

  <details>
    <summary><strong>Declare variables using `var`</strong></summary>

    ```javascript
    // Example: Declaring a variable with var
    var age = 25;
    var name = "John";
    ```
    - Variables are used to store data in JavaScript.
    - The `var` keyword is traditionally used to declare variables.
    - Here, we declare two variables: `age` and `name`, with different data types.
    - Variables declared with `var` have function-level scope.
  </details>

  <details>
    <summary><strong>Explore more about variables</strong></summary>

    ```javascript
    // Example: Exploring variables
    var count = 10;
    count = count + 5;
    var message = "Hello, " + name;
    ```
    - Variables can hold various types of data, including numbers and strings.
    - You can perform operations on variables, such as addition and concatenation.
    - Variables can be reassigned with new values.
  </details>

  <details>
    <summary><strong>Learn about `let` and `const`</strong></summary>

    ```javascript
    // Example: Using let and const
    let count = 10;
    count = 15; // Allowed with let
    const PI = 3.14159;
    // PI = 3.14; // Not allowed with const, it's a constant
    ```
    - `let` and `const` are modern ways to declare variables.
    - `let` allows you to declare variables with block-level scope and reassign values.
    - `const` is used for constants whose values cannot be changed after declaration.
  </details>

  <details>
    <summary><strong>Understand string indexing</strong></summary>

    ```javascript
    // Example: String indexing
    var text = "JavaScript";
    var firstChar = text[0]; // "J"
    ```
    - Strings are sequences of characters, and each character has an index.
    - Indexing starts at 0, so the first character is at index 0.
    - You can access individual characters in a string using square brackets `[]`.
  </details>

  <details>
    <summary><strong>Useful string methods</strong></summary>

    ```javascript
    // Example: Using string methods
    var text = "JavaScript";
    var upperCaseText = text.toUpperCase(); // "JAVASCRIPT"
    var subText = text.substring(0, 4); // "Java"
    ```
    - JavaScript provides a variety of built-in string methods for working with strings.
    - `toUpperCase()` converts a string to uppercase, and `substring()` extracts a portion of a string.
  </details>

  <details>
    <summary><strong>Explore template strings</strong></summary>

    ```javascript
    // Example: Template strings
    var name = "Alice";
    var greeting = `Hello, ${name}!`;
    ```
    - Template strings (using backticks) allow you to embed expressions within strings.
    - This enables string interpolation, making it easier to create dynamic strings.
  </details>

  <details>
    <summary><strong>Null, undefined, BigInt, and the `typeof` operator</strong></summary>

    ```javascript
    // Example: Data types and typeof
    var value = null;
    var uninitializedVar;
    var bigIntValue = 1234567890123456789012345678901234567890n;

    console.log(typeof value); // "object"
    console.log(typeof uninitializedVar); // "undefined"
    console.log(typeof bigIntValue); // "bigint"
    ```
    - `null` represents the absence of a value, while `undefined` indicates an uninitialized variable.
    - `BigInt` is used for handling large integers.
    - The `typeof` operator checks the data type of a variable.
  </details>

  <details>
    <summary><strong>Booleans and comparison operators</strong></summary>

    ```javascript
    // Example: Booleans and comparison operators
    var x = 5;
    var y = 10;

    var isGreaterThan = x > y; // false
    var isEqual = x === y; // false
    ```
    - Booleans represent true or false values and are used for logical decisions.
    - Comparison operators like `>` and `===` compare values and return boolean results.
  </details>

  <details>
    <summary><strong>Truthy and falsy values</strong></summary>

    ```javascript
    // Example: Truthy and falsy values
    var emptyString = "";
    var zero = 0;
    var notDefined;

    console.log(Boolean(emptyString)); // false
    console.log(Boolean(zero)); // false
    console.log(Boolean(notDefined)); // false
    ```
    - JavaScript has truthy and falsy values.
    - Falsy values include empty strings, zero, `null`, `undefined`, `NaN`, and `false`.
    - Everything else is considered truthy.
  </details>

  <details>
    <summary><strong>If-else statements</strong></summary>

    ```javascript
    // Example: If-else statements
    var age = 18;

    if (age >= 18) {
      console.log("You can vote!");
    } else {
      console.log("You cannot vote yet.");
    }
    ```
    - Conditional statements like `if` and `else` allow you to execute different code blocks based on conditions.
    - Here, the program checks if a person is old enough to vote.
  </details>

  <details>
    <summary><strong>Ternary operators</strong></summary>

    ```javascript
    // Example: Ternary operator
    var isAdult = age >= 18 ? "Yes" : "No";
    ```
    - The ternary operator (`?`) provides a concise way to write conditional expressions.
    - It's useful for simple if-else scenarios.
  </details>

  <details>
    <summary><strong>Logical `&&` and `||` operators</strong></summary>

    ```javascript
    // Example: Logical operators
    var isTrue = true;
    var isFalse = false;

    var resultAnd = isTrue && isFalse; // false
    var resultOr = isTrue || isFalse; // true
    ```
    - Logical AND (`&&`) and OR (`||`) operators allow you to combine conditions in more complex ways.
  </details>

  <details>
    <summary><strong>Nested if-else statements</strong></summary>

    ```javascript
    // Example: Nested if-else statements
    var x = 5;
    var y = 10;

    if (x === y) {
      console.log("x is equal to y");
    } else {
      if (x < y) {
        console.log("x is less than y");
      } else {
        console.log("x is greater than y");
      }
    }
    ```
    - You can nest if-else statements within each other to handle multiple levels of conditions.
    - This is often used for decision trees.
  </details>

  <details>
    <summary><strong>If-else if-else statements</strong></summary>

    ```javascript
    // Example: If-else if-else statements
    var grade = "B";

    if (grade === "A") {
      console.log("Excellent");
    } else if (grade === "B") {
      console.log("Good");
    } else {
      console.log("Needs improvement");
    }
    ```
    - When you have multiple conditions to evaluate, you can use if-else if-else chains to check each condition in order and execute the appropriate block of code based on the first true condition.
  </details>

  <details>
    <summary><strong>Switch statements</strong></summary>

    ```javascript
    // Example: Switch statement
    var day = "Monday";

    switch (day) {
      case "Monday":
        console.log("It's the start of the week.");
        break;
      case "Friday":
        console.log("It's the end of the week.");
        break;
      default:
        console.log("It's another day.");
    }
    ```
    - Switch statements are used when you have multiple cases to consider.
    - They provide an efficient way to handle different scenarios based on the value of an expression.
  </details>

  <details>
    <summary><strong>Introduction to loops</strong></summary>

    ```javascript
    // Example: For loop
    for (var i = 0; i < 5; i++) {
      console.log("Iteration " + i);
    }
    ```
    - Loops allow you to repeat a block of code multiple times.
    - The `for` loop is commonly used for this purpose.
  </details>

</details>

  

