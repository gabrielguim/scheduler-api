const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * Schema that represents an calendar in your database
 * @author Gabriel Guimarães
 */
const calendarSchema = new Schema({
    
    name: {
        type: String,
        required: [true, "Name is required"]
    },

    creationDate : {
        type: Date,
        default: Date.now
    },

    owner: { 
        type: Schema.Types.ObjectId, 
        ref: 'Employee',
        required: [true, "Owner is required"] 
    },

    slots: {
        type: [String],
        required: [true, "At least one slot is required"] 
    },

    occupedSlots: [
        {
            service: {
                type: Object,
                required: [true, "Service is required"] 
            },

            slot: String,

            owner: {
                type: Object,
                required: [true, "User is required"] 
            }
        }
    ],

    users: [String]

});

module.exports = mongoose.model('Calendar', calendarSchema);
