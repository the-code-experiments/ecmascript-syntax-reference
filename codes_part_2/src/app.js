/**
 * Module in ES6 do not populate the global namespace.
 * For e.g. with ES5 HelloMsg will go with window object but with ES6
 * HelloMsg is scope to this module.
 *
 * By default in ES6 module are in strict mode.
 */
// let HelloMsg = 'Hello World!';
// console.log(HelloMsg);

/**
 * Its common practice to have class name as Capital
 */
class Person {
  /**
   * constructor gets called at the time of instance creation.
   * It used to initialize member variables and function, do not perform
   * any heavy operations in constructor
   */
  constructor(fname, lname) {
    /**
     * this.fname & this.lname are class properties.
     * these properties value are different for each instance.
     */
    this.fname = fname;
    this.lname = lname;
  }
};

/**
 * Static properties (this is same way in ES5)
 */
Person.department = 'Engineering';

/**
 * Class are functions
 */
console.log('Type of Person class: ', typeof Person); // function

/**
 * We can create instance of class. so that we can access member variables and functions.
 */
let person1 = new Person();

/**
 * Instance are object.
 */
console.log('Type of person1 instance: ', typeof person1); // object

/**
 * So, person1 is instance of Person class.
 */
console.log('person1 is instance of Person class: ', person1 instanceof Person); // true

/**
 * Pass parameters to class constructor.
 */
let person2 = new Person('Ashwin', 'Hegde');

/**
 * Get the passed parameters with the help of class instance.
 * using (.) way
 */
console.log('Class Properties using (.): ', person2.fname + ' ' + person2.lname);

/**
 * Get the passed parameters with the help of class instance.
 * using [string] way
 */
console.log('Class Properties using [string]: ', person2['fname'] + ' ' + person2['lname']);

/**
 * How to access static properties with Class and Instance
 */
console.log('Static Properties using Class: ', Person.department);

console.log('Static Properties using Instance: ', person2.department);
