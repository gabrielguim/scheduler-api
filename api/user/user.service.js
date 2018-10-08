const dbConfig = require('../../config/db.config.js');
const User =  require('./user.schema');

dbConfig();

/**
 * User
 * @author Gabriel Guimarães
 */
export class UserService {

    /**
     * Get all existing users
     * 
     * @returns {Promise}  resolved Promise with the user object as mongo returns.
     */
    static getAllUsers() {
      return User.find().exec();
    }

    /**
     * Removes a user
     *
     * @param   {String}  id for the user to be removed
     * @param   {String}  uid for the user to be removed
     * @return  {Promise}  resolved Promise with the removed object
     */
    static removeUser(id, uid) {
      return new Promise((resolve, reject) =>
        User.findOneAndRemove({_id: id, uid: uid}, (err, result) => {
          if (err || !result) return reject(err);
          return resolve(result);
        })
      );
    }

    /**
     * Updates a user
     *
     * @param   {String}  id for the user to be updated
     * @param   {String}  uid for the user to be updated
     * @param   {Object}  newUser new user
     * @return  {Promise}  resolved Promise with the updated object
     */
    static updateUser(id, uid, newUser) {
      return new Promise((resolve, reject) =>
        User.findOneAndUpdate({_id: id, uid: uid}, newUser, (err, result) => {
          if (err || !result) return reject(err);
          return resolve(result);
        })
      );
    }

    /**
     * Removes all users
     *
     * @return  {Promise}  resolved Promise with all the removed objects
     */
    static removeAllUsers() {
      return new Promise((resolve, reject) =>
        User.remove({}, (err, result) => {
          if (err || !result) return reject(err);
          return resolve(result);
        })
      );
    }

    /**
     * Register a user
     *
     * @param   {Object}  user to be registered
     * @return  {Promise}  resolved Promise with the user object as mongo returns.
     */
    static registerUser(user) {
      const userMongoose = new User(user);
      return userMongoose.save();
    }
  
}