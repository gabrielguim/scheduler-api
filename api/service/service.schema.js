const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * Schema that represents a service in your database
 * @author Gabriel Guimarães
 */
const serviceSchema = new Schema({
    
    name: {
        type: String,
        required: [true, "Name is required"]
    },

    duration: {
        type: Number,
        required: [true, "Duration is definitely required"]
    },

    price: {
        type: Number,
        required: [true, "A price value is required"]
    }

});

serviceSchema.pre("save", (next) => {
    const service = this;
    if (service.price > 0 && service.duration > 0) {
        return next();
    } else {
        const err = new Error("Price or Duration needs to be bigger then zero :(")
        return next(err);
    }
    
});

module.exports = mongoose.model('Service', serviceSchema);
