/**
 * Parent class 'Person'
 */
class Person {
  constructor(params) {
    console.log('Parent constructor: ', params.age);

    this.name = params.name;
  }
};

/**
 * Child class 'Engineer'.
 * By using 'extends' we can inherit fro base/parent class
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
     * We can also pass parameter to constructor.
     * super() always have to be the first thing in constructor body.
     */
    super(params);
    console.log('Manager constructor');

    /**
     * Below will override parent class 'name' property
     */
    // this.name = 'Kumar Kundan';
  }
};

/**
 * Create instance of child class
 */
let manager = new Manager({
  age: 27,
  name: 'Ashwin Hegde'
});

/**
 * Check if child class instance is instanceof child class
 */
console.log('manager instanceof Manager: ', manager instanceof Manager);

/**
 * Check if child class instance is instanceof another child class
 */
console.log('manager instanceof Engineer: ', manager instanceof Engineer);

/**
 * Check if child class instance is instanceof parent class
 */
console.log('manager instanceof Person: ', manager instanceof Person);

/**
 * Check if child class instance is instanceof Object
 */
console.log('manager instanceof Object: ', manager instanceof Object);

/**
 * Because of inheritance we are able to access parent class 'name' property
 */
console.log(manager.name);
