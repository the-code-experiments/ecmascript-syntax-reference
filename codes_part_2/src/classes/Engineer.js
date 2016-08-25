/**
 * Import Person module (Person is Parent/Base class)
 */
import { Person } from './Person.js';

/**
 * Inherit & export Engineer from Person class using extends
 */
export class Engineer extends Person {
  constructor() {
    super();

    console.log('Engineer child class');
  }
};
