/**
 * In Node environment for default parameter for function are "In Progress".
 * Command to run the program:
 * node --harmony_default_parameters eg4_function.js
 */
// 'use strict';

/**
 * A previous parameter can be used as the default for a later parameter.
 */
function Person(firstname, lastname = firstname) {
  return firstname + " " + lastname;
}

/**
 * Here, if the last argument isn’t provided, the function getLastName() is called to retrieve the correct default value.
 * getLastName() is only called when Person() is called without a second parameter, not when the function declaration is first parsed.
 */
console.log(Person("Ashwin"));

console.log(Person("Ashwin", "M. Hegde"));
