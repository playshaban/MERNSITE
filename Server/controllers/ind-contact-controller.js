const Contact = require('../models/ind-contact-model');

const contactForm = async(req,res,next) =>
{
    try
    {
        const newMessage = new Contact(req.body);
        await newMessage.save();
        return res.status(200).json({message : "Message Sent"});
    }
    catch(err)
    {
        const status = 500;
        const message = "Unble to send Message";
        const extraDetails ="Server side controller failure ";
        next({status,message,extraDetails});
    }
}

module.exports = contactForm;