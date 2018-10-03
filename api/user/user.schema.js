const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * Schema that represents an user in your database
 * @author Gabriel Guimarães
 */
const userSchema = new Schema({
  
    name : {
      type: String,
      required: [true, "Name is required"]
    },

    email : {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "This email is already registered"]
    },

    password : {
      type: String,
      required: [true, "Password is definitely required"]
    }

});

module.exports = mongoose.model('User', userSchema);
