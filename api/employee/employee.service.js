const Employee =  require('./employee.schema');

/**
 * Employee
 * @author Gabriel Guimarães
 */
export class EmployeeService {

    /**
     * Get all existent employees
     * 
     * @returns {Promise}  resolved Promise with the employee object as mongo returns.
     */
    static getAllEmployees(populate = "") {
      return Employee.find().populate(populate).exec();
    }

    /**
     * Get all services for an employee
     *
     * @param   {String}  uid for the employee
     * @return  {Promise}  resolved Promise with the employee object as mongo returns.
     */
    static getEmployee(id, uid, populate = "") {
      return Employee.findOne({_id: id, uid: uid}).populate(populate).exec();
    }

    /**
     * Removes a employee
     *
     * @param   {String}  id for the employee to be removed
     * @param   {String}  uid for the employee to be removed
     * @return  {Promise}  resolved Promise with the removed object
     */
    static removeEmployee(id, uid) {
      return new Promise((resolve, reject) =>
        Employee.findOneAndRemove({_id: id, uid: uid}, (err, result) => {
          if (err || !result) return reject(err);
          return resolve(result);
        })
      );
    }


    /**
     * Removes all employees
     *
     * @return  {Promise}  resolved Promise with all the removed objects
     */
    static removeAllEmployees() {
      return new Promise((resolve, reject) =>
        Employee.remove({}, (err, result) => {
          if (err || !result) return reject(err);
          return resolve(result);
        })
      );
    }

    /**
     * Register a employee
     *
     * @param   {Object}  employee to be registered
     * @return  {Promise}  resolved Promise with the employee object as mongo returns.
     */
    static registerEmployee(employee) {
      const employeeMongoose = new Employee(employee);
      return employeeMongoose.save();
    }
  
}