/**
 * In Node environment for default parameter for function are "In Progress".
 * Command to run the program:
 * node --harmony_default_parameters eg2_function.js
 */
// 'use strict';

function getLastName() {
  return "Hegde";
}

/**
 * default parameter can be a function to retrieve the default parameter value.
 */
function Person(firstname, lastname = getLastName()) {
  return firstname + " " + lastname;
}

/**
 * Here, if the last argument isn’t provided, the function getLastName() is called to retrieve the correct default value.
 * getLastName() is only called when Person() is called without a second parameter, not when the function declaration is first parsed.
 */
console.log(Person("Ashwin"));

console.log(Person("Ashwin", "M. Hegde"));
