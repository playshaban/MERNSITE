const {Schema, model} = require('mongoose');

const IndContactSchema = new Schema(
    {
        fullName: {
            type : String,
            required : true
        }
        ,
        email: 
        {
            type: String,
            required : true
        },
        subject: 
        {
            type: String,
            required : true
        },
        message : 
        {
            type : String ,
            required:true
        }
    }
);

const IndContact = new model('IndContact',IndContactSchema);

module.exports = IndContact;