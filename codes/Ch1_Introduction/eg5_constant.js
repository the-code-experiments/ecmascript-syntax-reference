/**
 * For Node environment,
 * Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
 */
'use strict';

/**
 * Variable declared with `const` are considered as constants, their values cannot be changed once set.
 * `let` and `const` variables have no hoisting behavior.
 */
function counter() {
  const no = 5;

  /**
   * Every const variable must be initialized on declaration.
   * Below will throw "SyntaxError: Unexpected token ;" error because `items` is not initialized.
   */
  // const items;

  /**
   * Below will throw "SyntaxError: Identifier 'no' has already been declared" error.
   * Because let/var and const defined in the same scope is not allowed.
   */
  // let no = 10;

  /**
   * Below will throw "TypeError: Assignment to constant variable." error.
   * Because attempting to reassign a const is not allowed in both strict or non-strict mode.
   */
  // no = 10;

  for(let i = 0; i < no; i++) {
    console.log("`i` value inside the `for` loop: ", i);
  }

  /**
   * Declaration of object with const
   */
  const employee = {
    "name": "Ashwin Hegde",
    "level": "Engineer"
  };
  console.log(employee);

  /**
   * Below will work;
   * `const` prevents modification of the binding, not modification of the bound value.
   */
  employee.name = "Kumar Kundan";
  employee.level = "Manager";
  console.log(employee);

  /**
   * Below will throw "TypeError: Assignment to constant variable." error.
   * Because attempting to reassign a const is not allowed in both strict or non-strict mode.
   */
  // employee = {
  //   "name": "Saju Sasidharan",
  //   "level": "Sr Engineer"
  // };

}

counter();
