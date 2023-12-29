const Contact = require('../models/contact-model');

const contactForm = async(req,res) =>
{
    try
    {
        const response = req.body;
        await Contact.create(response);
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