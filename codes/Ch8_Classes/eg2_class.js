/**
 * In Node environment for default parameter for function are "In Progress".
 * Command to run the program:
 * node --harmony eg2_class.js
 */
'use strict';

let Person = class Employee {  // class expression with name

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

/**
 * The Employee identifier exists only within the class definition
 * so that it can be used inside of methods. Outside of the class,
 * there is no Employee binding, so typeof Employee is "undefined".
 */
console.log(typeof Person) // Output: function
console.log(typeof Employee); // Output: undefined
