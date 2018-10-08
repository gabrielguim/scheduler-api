const dbConfig = require('../../config/db.config.js');
const User =  require('./user.schema');

dbConfig();

/**
 * User
 * @author Gabriel Guimarães
 */
export class UserService {

    /**
     * Get all existent users
     * 
     * @returns {Promise}  resolved Promise with the user object as mongo returns.
     */
    static getAllUsers(populate = "") {
      return User.find().populate(populate).exec();
    }

    /**
     * Get all calendars for an user
     *
     * @param   {String}  uid for the user
     * @return  {Promise}  resolved Promise with the user object as mongo returns.
     */
    static getUser(id, uid, populate = "") {
      return User.findOne({_id: id, uid: uid}).populate(populate).exec();
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