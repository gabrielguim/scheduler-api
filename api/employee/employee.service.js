const Employee =  require('./employee.schema');

/**
 * Employee
 * @author Gabriel Guimarães
 */
export class EmployeeService {

    /**
     * Get all existing employees
     * 
     * @returns {Promise}  resolved Promise with the employee object as mongo returns.
     */
    static getAllEmployees() {
      return Employee.find().exec();
    }

    /**
     * Get all existing employees with populate() 
     * 
     * @returns {Promise}  resolved Promise with the employee object as mongo returns.
     */
    static getAllEmployeesWithPopulate() {
      return Employee.find()
                      .populate('calendars')
                      .populate('services')
                      .exec();
    }

    /**
     * Get all existing employees with services populate 
     * 
     * @returns {Promise}  resolved Promise with the employee object as mongo returns.
     */
    static getAllEmployeesWithServices() {
      return Employee.find()
                      .populate('services')
                      .exec();
    }

    /**
     * Get all existing employees with calendars populate 
     * 
     * @returns {Promise}  resolved Promise with the employee object as mongo returns.
     */
    static getAllEmployeesWithCalendars() {
      return Employee.find()
                      .populate('calendars')
                      .exec();
    }

    /**
     * Get a specific employee
     *
     * @param   {String}  id for the employee
     * @param   {String}  uid for the employee
     * @return  {Promise}  resolved Promise with the employee object as mongo returns.
     */
    static getEmployee(id, uid) {
      return Employee.findOne({_id: id, uid: uid})
                      .populate('calendars')
                      .populate('services')
                      .exec();
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
     * Updates a employee
     *
     * @param   {String}  id for the employee to be updated
     * @param   {String}  uid for the employee to be updated
     * @param   {Object}  newEmployee new employee
     * @return  {Promise}  resolved Promise with the updated object
     */
    static updateEmployee(id, uid, newEmployee) {
      return new Promise((resolve, reject) =>
        Employee.findOneAndUpdate({_id: id, uid: uid}, newEmployee, (err, result) => {
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