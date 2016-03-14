/**
 * In Node environment for default parameter for function are "In Progress".
 * Command to run the program:
 * node --harmony eg1_class.js
 */
'use strict';

/* NOTES: Don't uncomment, its for understanding purpose.

// Class like structures in ECMAScript 5. There were no classes, and the closest
// equivalent was creating a constructor and then assigning methods to its prototype.
// This approach is called creating a custom type.
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(this.name);
};

// Person is a constructor function that creates a single property called name.
// The sayHello method is assigned to the prototype so the same function is shared by
// all instances of Person. Then, a new instance of Person is created via the new operator.
// and the resulting person object is considered an instance of PersonType and
// of Object (through prototypal inheritance).
let person = new Person("Ashwin Hegde");
person.sayHello(); // Output: Ashwin Hegde

console.log(person instanceof Person); // Output: true
console.log(person instanceof Object); // Output: true

*/

/**
 * ECMAScript 6 classes aren’t exactly the same as classes in other languages.
 * Class declarations begin with the class keyword followed by the name of the class.
 *
 * NOTES:
 *  - Class declarations, unlike function declarations are not hoisted. they act like `let` declarations.
 *  - All code inside of class declarations runs in strict mode automatically.
 *  - All methods are non-enumerable.
 *  - Calling the class constructor without new throws an error.
 *  - Attempting to overwrite the class name within a class method throws an error.
 */

class Person {  // class declarations
// let Person = class {  // class expression

  /**
   * Equivalent of the Person constructor.
   * Instead of defining a function as the constructor,
   * class declarations allow you to define the constructor
   * directly inside of the class using the special constructor method name.
   */
  constructor(name) {
    this.name = name;
  }

  // Equivalent of Person.prototype.sayHello
  sayHello() {
    console.log(this.name);
  }
}

let person = new Person("Ashwin Hegde");
person.sayHello(); // Output: Ashwin Hegde

console.log(person instanceof Person) // Output: true
console.log(person instanceof Object) // Output: true

console.log(typeof Person) // Output: function
console.log(typeof Person.prototype.sayHello); // Output: function
