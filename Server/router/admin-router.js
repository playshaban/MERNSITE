const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controllers');

//get all user list 
router.route('/users').get(adminController.getAllUsers);


//get all contact messages 
router.route("/contacts").get(adminController.getContacts);

module.exports = router;