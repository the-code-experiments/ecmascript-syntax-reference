/**
 * Parent class 'Person'
 */
class Person {
  constructor(params) {
    console.log('Parent constructor: ', params.age);
  }
};

/**
 * Child class 'Engineer'
 */
class Engineer extends Person {

};

/**
 * Child class 'Manager'
 */
class Manager extends Person {
  constructor(params) {
    /**
     * In JavaScript 'super()' is required to perform inheritance
     * We need to call Parent constructor first by using super()
     * Even if there is no constructor in parent we must have to call super()
     *
     * We can also pass parameter to constructor
     */
    super(params);
    console.log('Manager constructor');
  }
};

/**
 * Create instance of child class
 */
let manager = new Manager({
  age: 27
});

/**
 * Check if child class instance is instanceof child class
 */
console.log(manager instanceof Manager); // true

/**
 * Check if child class instance is instanceof another child class
 */
console.log(manager instanceof Engineer); // false

/**
 * Check if child class instance is instanceof parent class
 */
console.log(manager instanceof Person); // true because its inheritance

/**
 * Check if child class instance is instanceof Object
 */
console.log(manager instanceof Object); // true
