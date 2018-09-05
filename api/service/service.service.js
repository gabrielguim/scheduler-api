const dbConfig = require('../../config/db.config.js');
const Service =  require('./service.schema');

dbConfig();

/**
 * Service
 * @author Gabriel Guimarães
 */
export class ServiceService {

    /**
     * Get all existent services
     * @returns {Promise}  resolved Promise with the user object as mongo returns.
     */
     static getServices() { 
       return Service.find().exec();
     }
  
}