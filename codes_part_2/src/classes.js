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

    /**
     * This are not private variables in JavaScript.
     * We can use _<var-name> convension to represent private variables
     */
    this._fullName = fname + ' ' + lname;
  }

  /**
   * By using getter function we can return the private variable.
   */
  get fullName() {
    return this._fullName;
  }

  set fullName(name) {
    this._fullName = name;
  }

  /**
   * coding is class method.
   */
  coding() {
    return this.fname + ' ' + this.lname + ' is coding!';
  }

  /**
   * training is class static method. It only exist to class and not to instance
   */
  static training() {
    /**
     * class properties cannot be access with static methods
     */
    console.log('Access static properties with static method: ', this.department);
    return this.fname + ' ' + this.lname + ' is training!';
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
 * We can create instance of class. so that we can access member variables and method.
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
 * Access static properties with Class and Instance.
 */
console.log('Static Properties using Class: ', Person.department);
console.log('Static Properties using Instance: ', person2.department);

/**
 * Access class methods
 */
console.log(person2.coding());

/**
 * Access class static methods using Class and Instance.
 */
console.log(Person.training());

/**
 * This will be error, as static method cannot be access with instance.
 */
// console.log(person2.training());

/**
 * Access getter function like a property instead of function.
 */
console.log('Using GET: ', person2.fullName);

/**
 * Access setter function.
 */
person2._fullName = 'Kumar Kundan';
console.log('Using SET: ', person2.fullName);
