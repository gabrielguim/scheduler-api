const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * Schema that represents a service in your database
 * @author Gabriel Guimarães
 */
const serviceSchema = new Schema({
    name : {
        type: String,
        required: [true, "Name is required"]
    },

    duration : {
        type: Number,
        required: [true, "Password is definitely required"]
    },

    price: {
        type: Number,
        required: [true, "A price value is required"]
    },

    employees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }]

});

serviceSchema.pre("save", (next) => {
    const service = this;
    if (service.price > 0) {
        return next();
    } else {
        const err = new Error("A price value needs to be bigger the zero :(")
        return next(err);
    }
});

module.exports = mongoose.model('Service', serviceSchema);
