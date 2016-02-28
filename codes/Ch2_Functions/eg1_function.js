/**
 * In Node environment for default parameter for function are "In Progress".
 * Command to run the program:
 * node --harmony_default_parameters eg1_function.js
 */
'use strict';

/* NOTES: Don't uncomment, its for understanding purpose.

// Both age and work are optional as they are given a default value if the parameter are not provided.
// The || operator will return second operand when first is false. The names parameter that are not
// explicitly provided are set to `undefined`.
function Person(name, age, work) {
  age = age || 18;
  work = work || "Engineer";
}

Tips:
- There is problem with above approach, when the age is set actually to 0, it will get replaced with 18
because 0 is false/undefined

// Below is a safe alternative.
function Person(name, age, work) {
  age = (typeof age !== "undefined") ? age || 18;
  work = (typeof work !== "undefined") ? work || "Engineer";
}

Tips:
- Above code needs lot of extra code to just perform basic operation
- Below is the default parameter in ES6
*/

// Assign the default parameter in the arguments.
function Person(name, age = 18, work = "Engineer") {
  console.log("My name is " + name + " and its my " + age + " birthday!");
  console.log("Currently, I work as " + work);
}

/**
 * name = "Ashwin Hegde", age is not passed so it default to 18, work is not passed so it default to Engineer
 */
Person("Ashwin Hegde");

/**
 * name = "Ashwin Hegde", age = 25 (Overrite the default), work is not passed so it default to Engineer
 */
Person("Ashwin Hegde", 25);

/**
 * name = "Ashwin Hegde", age = 25 (Overrite the default), work = Full Stack Engineer (Overrite the default)
 */
Person("Ashwin Hegde", 27, "Full Stack Engineer");

/**
 * name = "Ashwin Hegde", age is passed as undefined so it default to 18, work = Sr Engineer (Overrite the default)
 */
Person("Ashwin Hegde", undefined, "Sr Engineer");

/**
 * name = "Ashwin Hegde", age = null (Overrite the default), work = Sr Engineer (Overrite the default)
 */
Person("Ashwin Hegde", null, "Sr Engineer");
