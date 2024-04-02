const { Schema, model } = require("mongoose");

const IndSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: true,
    },
    linkedin: {
        type: String,
        required: true,
    },
    portfolio: {
        type: String,
        required: true,
    },
    applyDate:{
        type:String, 
        required:true
    },
    userid: {
        type: String,
        required: true,
    },
    offerLetter:Boolean,
    dateOfLetter:String,
    TA1Status:Boolean,
    TA1Marks: Number,
    TA2Status:Boolean,
    TA2Marks: Number,
    TA3Status:Boolean,
    TA3Marks: Number,
    FAStatus: Boolean,
    FAMarks: Number,
    CertiType: String,
    CertiStatus: Boolean,
});

const Ind = new model("Indintern", IndSchema);
module.exports = Ind;
