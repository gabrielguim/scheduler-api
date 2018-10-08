const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * Schema that represents an employee in your database
 * @author Gabriel Guimarães
 */
const employeeSchema = new Schema({
  
    name: {
      type: String,
      required: [true, "Name is required"]
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "This email is already registered"]
    },

    uid: {
      type: String,
      required: [true, "UID is required"],
      unique: [true, "This UID is already registered"],
      index: true
    },

    calendars: [{ type: Schema.Types.ObjectId, ref: 'Calendar' }],

    services: [{ type: Schema.Types.ObjectId, ref: 'Service' }]

});

module.exports = mongoose.model('Employee', employeeSchema);
