/**
 * In Node environment for default parameter for function are "In Progress".
 * Command to run the program:
 * node --harmony_default_parameters eg5_function.js
 */
// 'use strict';

function getName(firstname) {
  return firstname + " Hegde";
}

/**
 * A previous parameter can be used as the default for a later parameter.
 * firstname can be passed into a function to get the value for fullname.
 *
 * Notes:
 *    Earlier arguments do not have access to later arguments.
 */
function Person(firstname, fullname = getName(firstname)) {
  return 'Mr.' + " " + fullname;
}

/**
 * Here, if the last argument isn’t provided, the function getLastName() is called to retrieve the correct default value.
 * getLastName() is only called when Person() is called without a second parameter, not when the function declaration is first parsed.
 */
console.log(Person("Ashwin"));
