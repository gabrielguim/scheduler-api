const Service =  require('./service.schema');

/**
 * Service
 * @author Gabriel Guimarães
 */
export class ServiceService {

    /**
     * Get all existing services
     * 
     * @returns {Promise}  resolved Promise with the service object as mongo returns.
     */
    static getAllServices() {
      return Service.find().exec();
    }

    /**
     * Get a specific service
     * 
     * @param   {String}  id for the service to be find
     * @returns {Promise}  resolved Promise with the service object as mongo returns.
     */
    static getService(id) {
      return Service.findOne({_id: id}).exec();
    }

    /**
     * Removes a service
     *
     * @param   {String}  id for the service to be removed
     * @return  {Promise}  resolved Promise with the removed object
     */
    static removeService(id) {
      return new Promise((resolve, reject) =>
        Service.findOneAndRemove({_id: id}, (err, result) => {
          if (err || !result) return reject(err);
          return resolve(result);
        })
      );
    }

    /**
     * Updates a service
     *
     * @param   {String}  id for the service to be updated
     * @param   {Object}  newService new service
     * @return  {Promise}  resolved Promise with the updated object
     */
    static updateService(id, newService) {
      return new Promise((resolve, reject) =>
        Service.findOneAndUpdate({_id: id}, newService, (err, result) => {
          if (err || !result) return reject(err);
          return resolve(result);
        })
      );
    }

    /**
     * Removes all services
     *
     * @return  {Promise}  resolved Promise with all the removed objects
     */
    static removeAllServices() {
      return new Promise((resolve, reject) =>
        Service.remove({}, (err, result) => {
          if (err || !result) return reject(err);
          return resolve(result);
        })
      );
    }

    /**
     * Register a service
     *
     * @param   {Object}  service to be registered
     * @return  {Promise}  resolved Promise with the service object as mongo returns.
     */
    static registerService(service) {
      const serviceMongoose = new Service(service);
      return serviceMongoose.save();
    }
  
}