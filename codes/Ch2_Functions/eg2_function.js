/**
 * In Node environment for default parameter for function are "In Progress".
 * Command to run the program:
 * node --harmony_default_parameters eg2_function.js
 */
// 'use strict';

/* NOTES: Don't uncomment, its for understanding purpose.

In ES5 `non-strict` mode, the arguments object reflects changes in the named parameters of a function.
Output: (non-strict)
true
true
true
true
// Output: (strict)
true
true
false
false

Tips:
- The arguments object is always updated in nonstrict mode to reflect changes in the named parameters.

function Person(firstname, lastname) {
  console.log(firstname === arguments[0]);
  console.log(lastname === arguments[1]);

  firstname = "Jerin";
  lastname = "John";

  console.log(firstname === arguments[0]);
  console.log(lastname === arguments[1]);
}

Person("Ashwin", "Hegde");

The arguments object in a function using ES6 default parameter values,
will always behave in the same manner as ES5 strict mode,
regardless of whether the function is explicitly running in strict mode.

The presence of default parameter values triggers the arguments object to remain detached from the named parameters.

// Output:
1
true
false
false
false
*/

function Person(firstname, lastname = "Hegde") {

  // 1, Because only one argument was passed, arguments[1] is undefined.
  console.log("Argument Length: ", arguments.length);

  console.log(firstname === arguments[0]);
  console.log(lastname === arguments[1]);

  // Changing firstname and lastname has no effect on arguments.
  firstname = "Jerin";
  lastname = "John";

  console.log(firstname === arguments[0]);
  console.log(lastname === arguments[1]);
}

Person("Ashwin");
