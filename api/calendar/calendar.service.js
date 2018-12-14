const Calendar =  require('./calendar.schema');

/**
 * Calendar
 * @author Gabriel Guimarães
 */
export class CalendarService {

    /**
     * Get all existing calendars
     * 
     * @returns {Promise}  resolved Promise with the calendar object as mongo returns.
     */
    static getAllCalendars() {
      return new Promise((resolve, reject) =>
        Calendar.find().populate('owner').exec((err, result) => {
          if (err || !result) return reject(err);
          return resolve(result);
        })
      );
    }

    /**
     * Get all existing calendars for a specific user
     * 
     * @returns {Promise}  resolved Promise with the calendar object as mongo returns.
     */
    static getCalendarsForUser(userId) {
      return new Promise((resolve, reject) =>
        Calendar.find({owner: userId}).populate('owner').exec((err, result) => {
          if (err || !result) return reject(err);
          return resolve(result);
        })
      );
    }

    /**
     * Search all existing calendars with the param name for a specific user 
     * 
     * @returns {Promise}  resolved Promise with the calendar object as mongo returns.
     */
    static searchCalendar(text, userId) {
      return new Promise((resolve, reject) =>
        Calendar.find({owner: userId, name: { $regex : `.*${text}.*`, $options: 'i' }}).populate('owner').exec((err, result) => {
          if (err || !result) return reject(err);
          return resolve(result);
        })
      );
    }

    /**
     * Get a specific calendar
     * 
     * @param   {String}  id for the calendar
     * @param   {String}  requester id for the requestser
     * @returns {Promise}  resolved Promise with the calendar object as mongo returns.
     */
    static getSharedCalendars(requester) {      
      return new Promise((resolve, reject) =>
        Calendar.find({users: requester}).populate('owner').exec((err, result) => {
          if (err || !result) return reject(err);
          return resolve(result);
        })
      );
    }

    /**
     * Removes a calendar
     *
     * @param   {String}  ownerId for the owner user
     * @param   {String}  calendarId for the calendar to be removed
     * @return  {Promise}  resolved Promise with the removed object
     */
    static removeCalendar(ownerId, calendarId) {
      return new Promise((resolve, reject) =>
        Calendar.findOneAndRemove({_id: calendarId, owner: ownerId}, (err, result) => {
          if (err || !result) return reject(err);
          return resolve(this.getCalendarsForUser(ownerId));
        })
      );
    }

    /**
     * Removes all calendars for one user
     *
     * @return  {Promise}  resolved Promise with all the removed objects
     */
    static removeAllCalendarsForUser(ownerId) {
      return new Promise((resolve, reject) =>
        Calendar.remove({owner: ownerId}, (err, result) => {
          if (err || !result) return reject(err);
          return resolve(result);
        })
      );
    }

    /**
     * Updates a calendar
     *
     * @param   {String}  ownerId for the owner user
     * @param   {String}  calendarId for the calendar to be removed
     * @param   {Object}  newCalendar new calendar
     * @return  {Promise}  resolved Promise with the updated object
     */
    static updateCalendar(ownerId, calendarId, newCalendar) {
      return new Promise((resolve, reject) =>
        Calendar.findOneAndUpdate({_id: calendarId, owner: ownerId}, newCalendar, (err, result) => {
          if (err || !result) return reject(err);
          return resolve(result);
        })
      );
    }

    /**
     * Register a calendar
     *
     * @param   {Object}  calendar to be registered
     * @return  {Promise}  resolved Promise with the calendar object as mongo returns.
     */
    static registerCalendar(calendar) {
      const calendarMongoose = new Calendar(calendar);
      return new Promise((resolve, reject) =>
        calendarMongoose.save((err, result) => {
          if (err || !result) return reject(err);
          return resolve(this.getCalendarsForUser(calendar.owner._id));
        })
      );
    }
  
}