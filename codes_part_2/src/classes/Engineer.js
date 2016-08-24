import { Person } from './Person.js';

export class Engineer extends Person {
  constructor() {
    super();

    console.log('Engineer child class');
  }
};
