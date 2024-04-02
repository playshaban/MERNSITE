const express = require('express');
const router = express.Router();
const indController = require('../controllers/ind-controller');

//get all user list 
router.route('/register').post(indController);


//get all contact messages 
//router.route("/contacts").get(adminController.getContacts);

module.exports = router;