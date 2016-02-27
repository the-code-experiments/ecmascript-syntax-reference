/**
 * For Node environment,
 * Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
 */
'use strict';

/* NOTES: Don't uncomment, its for understanding purpose.

function counter(no) {

  for(var i = 0; i < no; i++) {
    console.log("`i` value inside the `for` loop: ", i);
  }

  // `i` is accessible here and will be 5
  console.log("`i` value outside the `for` loop: ", i);
}
counter(5);
*/

function counter(no) {

  for(let i = 0; i < no; i++) {
    console.log("`i` value inside the `for` loop: ", i);
  }

  /**
   * Uncommenting below "console.log("`i` ... ")" will throw "ReferenceError: i is not defined" error.
   */
  // console.log("`i` value outside the `for` loop: ", i);
}
counter(5);
