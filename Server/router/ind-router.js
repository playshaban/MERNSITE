const express = require('express');
const router = express.Router();
const indController = require('../controllers/ind-controller');
const indContactController = require('../controllers/ind-contact-controller');
const {IndSchema , IndContactSchema } = require('../validators/ind-validators');
const validate = require('../middlewares/validate-middleware');

//get all user list 
router.route('/register').post(validate(IndSchema) , indController);
router.route('/contact').post(validate(IndContactSchema) , indContactController);

//get all contact messages 
//router.route("/contacts").get(adminController.getContacts);

module.exports = router;