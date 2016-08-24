/**
 * Parent class 'Person'
 */
class Person {
  constructor(params) {
    console.log('Parent constructor: ', params.age);

    /**
     * Below is parent class 'coding' property
     */
    this.name = params.name;
  }

  /**
   * Below is parent class 'coding' method
   */
  coding() {
    return this.name + ' is coding';
  }

  /**
   * Below is parent class 'training' static method
   */
  static training() {
    return 'Training is in progress!';
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
     * super() always have to be the first thing in constructor body only.
     */
    super(params);
    console.log('Manager constructor');

    /**
     * Below will override parent class 'name' property
     */
    // this.name = 'Kumar Kundan';
  }

  /**
   * Below will override parent class 'coding' method
   */
  coding() {
    /**
     * No specific requirement to be on first. super() must be first only apply to constructor
     * Access parent class 'coding' method.
     */
    super.coding();
    return this.name + ' is coding on training material';
  }

  /**
   * Below is child class 'training' static method.
   * This will override the parent class static method.
   */
  static training() {
    /**
     * No specific requirement to be on first. super() must be first only apply to constructor
     * Access parent class 'training' static method.
     */
    super.training();
    return 'Child training is in progress!';
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
console.log('Name property: ', manager.name);

console.log('Coding method: ', manager.coding());

/**
 * This will result into an error, because static method can only
 * be access class and not by class instance
 */
// console.log(manager.training());
console.log(Manager.training());
