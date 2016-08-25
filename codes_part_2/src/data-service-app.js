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
