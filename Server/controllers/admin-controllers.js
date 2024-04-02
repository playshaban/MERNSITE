const Contact = require('../models/contact-model');
const Users = require('../models/user-model');


// for getting all users data except passwords
const getAllUsers = async(req,res,next)=>
{
    try 
    {
        const users = await Users.find({},{password:0});
        if(!users || users.length===0)
        {
            return res.status(404).json({message : "No Users Found"});
        }
        return res.status(200).json(users);
    }
    catch(err)
    {
        next(err);
    }
}


//for getting the context messages

const getContacts = async(req,res,next)=>
{
    try 
    {
        const contacts = await Contact.find({});
        if(!contacts || contacts.length === 0)
        {
            return res.status(404).json({message : "No Contact Messages Found"});
        }
        return res.status(200).json(contacts);
    }
    catch(err)
    {
        next(err);
    }
}

module.exports = {getAllUsers , getContacts};