/**
 * For Node environment,
 * Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
 */
'use strict';

/* NOTES: Don't uncomment, its for understanding purpose.

function counter(no) {

  var bucket = [];
  for(var i = 0; i < no; i++) {
    bucket.push(function() {
      console.log("`i` value inside the `for` loop: ", i);
    });
  }

  // This will out "`i` value inside the `for` loop:  5" 5 times
  bucket.forEach(function(func) {
    func();
  });

}
counter(5);

Tips:
- To fix the above problem we use IIFE - Immediately Invoked Function Expression

function counter(no) {
  var bucket = [];
  for(var i = 0; i < no; i++) {
    bucket.push((function(value) {
      return function() {
        console.log("`i` value inside the `for` loop: ", value);
      }
    }(i)));
  }

  // This will out "`i` value inside the `for` loop:  0" then 1, 2, 3, 4
  bucket.forEach(function(func) {
    func();
  });
}
counter(5);

Tips:
- The `let` will help to simply this loop
*/
function counter(no) {

  var bucket = [];
  for(let i = 0; i < no; i++) {
    bucket.push(function() {
      console.log("`i` value inside the `for` loop: ", i);
    });
  }

  // This will out "`i` value inside the `for` loop:  5" 5 times
  bucket.forEach(function(func) {
    func();
  });

}
counter(5);

/**
 * Tips:
 * - The above code cleaning applies to `for-in` loop also for `object`
 */
function objectCounter() {

  var employees = [],
    names = {
      "Ashwin": "Engineer",
      "Kumar": "Manager",
      "AjayS": "Sr Engineer",
      "Saju": "Sr Engineer",
      "Jerin": "Engineer",
      "AjayP": "Sr Engineer",
      "Rajan": "Engineer"
    };

  for(let name in names) {
    employees.push(function() {
      console.log(name + ", " + names[name]);
    });
  }

  // This will out "`i` value inside the `for` loop:  5" 5 times
  employees.forEach(function(func) {
    func();
  });

}
objectCounter();
