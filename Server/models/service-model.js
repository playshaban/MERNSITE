
const {Schema, model} = require('mongoose');

const serviceSchema = new Schema(
    {
        service:{type: String, required: true},
        service:{type: String, required: true},
        service:{type: String, required: true},
        service:{type: String, require: true},

    }
);

const Service = new model('Service',serviceSchema);

module.exports = Service;