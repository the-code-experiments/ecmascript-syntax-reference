import { Engineer } from './Engineer.js';
/**
 * DataService class
 */
export class DataService {
  constructor() {
    /**
     * Class properties
     */
    this.technical = [];
    this.management = [];
  }

  /**
   * LoadData method
   */
  loadData(engineers) {

    /**
     * Divided data as per skill and push into respective class properties
     */
    for(let data of engineers) {
      switch(data.skill) {
        case 'Technical':
          let t = this.loadAsPerSkill(data);
          this.technical.push(t);
          break;

        case 'Manager':
          let m = this.loadAsPerSkill(data);
          this.management.push(data);
          break;
      }
    }
  }

  loadAsPerSkill(data) {
    let engineer = new Engineer(data.name, data.department);
    engineer.drive = data.drive;
    return engineer;
  }

}
