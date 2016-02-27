/**
 * For Node environment,
 * Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
 */
'use strict';

function message(name) {

  /**
   * Uncommenting below "var msg ... " will not throw error.
   */
  var msg = "Learning ES6/2015";

  if(name) {

    /**
     * Uncommenting below "console.log(msg) or console.log(typeof msg)" will throw "ReferenceError: msg is not defined" error.
     */
    // console.log(msg);
    // console.log(typeof msg);

    /**
     * Redeclaration of identifier is not allowed in the same scope.
     * Uncommenting below "var msg ... " will throw "SyntexError: Identifier 'msg' has already been declared" error.
     */
    // var msg = "Learning ES6/2015"; // Redeclaration

    let msg = "Hello World!";

    /**
     * This will console "Hello World!" and "string".
     */
    console.log(msg);
    console.log(typeof msg);

    return name + ", " + msg;
  } else {

    /**
     * This will console "Learning ES6/2015" and "string".
     */
    console.log(msg);
    console.log(typeof msg);

    return "Hi!";
  }
}

console.log(message("Ashwin Hegde"));
console.log(message());
