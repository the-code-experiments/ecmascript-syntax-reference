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
          this.technical.push(data);
          break;

        case 'Manager':
          this.management.push(data);
          break;
      }
    }
  }

}
