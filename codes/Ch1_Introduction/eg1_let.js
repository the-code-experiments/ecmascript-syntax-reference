/**
 * `var` are treated as global scope, if they are declared outside the function.
 * this is called var hoisting.
 */

/**
 * For Node environment,
 * Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
 */
'use strict';

/* NOTES: Don't uncomment, its for understanding purpose.

function message(name) {
  if(name) {
    var msg = "Hello World!";
    return name + ", " + msg;
  } else {

    // `name` exists here with a value of `undefined`.
    return "Hi!";
  }

  // `name` exists here with a value of `undefined`.
}

Tips:
- The variable value is created regardless behind the scenes.
- The JavaScript engine changes the above function as below.
- All varibles are hoisted to the top (top of function in case of function).

function message(name) {
  var msg; // Create a variable and assign `undefined`

  if(name) {
    msg = "Hello World!"; // Initialization remains here
    return name + ", " + msg;
  } else {
    // here the msg is accessible with value undefined because it hasn't been Initialize
    return "Hi!";
  }
}
*/

/**
 * The `let` declaration is the same as `var`.
 * `var` can be replaced with `let` but limit the variable scope to only the current code block/function.
 * Since `let` do not hoisted to the top of the block/function. Placing `let` declaration first in the block/function
 * will be available to the entire block/function.
 */

function message(name) {
  if(name) {
    let msg = "Hello World!";
    return name + ", " + msg;
  } else {
    // here the msg value does not exists, the `msg` will never declared or initialized.
    console.log(msg); // Try to console, will throw an error "ReferenceError: msg is not defined"
    return "Hi!";
  }
  // here the msg value does not exists
}

console.log(message("Ashwin Hegde"));
// console.log(message()); // This will throw an error "ReferenceError: msg is not defined"
