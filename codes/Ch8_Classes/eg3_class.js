/**
 * In Node environment for default parameter for function are "In Progress".
 * Command to run the program:
 * node --harmony eg3_class.js
 */
'use strict';

let methodName = "sayHello";

let Person = class {

  constructor(name) {
    this.name = name;
  }

  /**
   * Class methods can have computed names. Instead of using an identifier,
   * use square brackets around an expression
   */
  [methodName]() {
    console.log(this.name);
  }
}

let person = new Person("Ashwin Hegde");
person.sayHello(); // Output: Ashwin Hegde
