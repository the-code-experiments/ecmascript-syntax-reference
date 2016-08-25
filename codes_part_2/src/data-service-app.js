/**
 * Import data (engineers) module
 */
import { engineers } from './services/data.js';

/**
 * Import DataService class module
 */
import { DataService } from './services/data-service.js';

/**
 * Check if data is getting displayed.
 */
console.log('Data (engineers): ', engineers);

/**
 * Create instance of DataService class and call loadData method
 */
let dataService = new DataService();
dataService.loadData(engineers);

/**
 * Check if data data divided as per skill
 */
console.log('Technical Team: ', dataService.technical);
console.log('Management Team: ', dataService.management);

/**
 * Loop through Technical data
 */
for (let engineer of dataService.technical) {
  console.log(engineer.name + ' is from ' + engineer.department + ' department');
}

/**
 * Loop through Management data
 */
for(let engineer of dataService.management) {
  console.log(engineer.name + ' is from ' + engineer.department + ' department');
}
