/**
 * In Node environment for default parameter for function are "In Progress".
 * Command to run the program:
 * node --harmony eg4_class.js
 */
'use strict';

/**
 * classes allow you to define accessor properties on the prototype.
 * To create a getter, use the keyword get followed by a space followed by an identifier;
 * to create a setter, do the same using the keyword set.
 */
class Person {

  constructor(name) {
    this.name = name;
  }

  get fullname() {
    return this.name;
  }

  set fullname(value) {
    this.name = value;
  }
}

let person = Object.getOwnPropertyDescriptor(Person.prototype, "fullname");

console.log("get" in person);
console.log("set" in person);
