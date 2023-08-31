const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const productsCtrl=require('../controllers/products.controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/getproducts',productsCtrl.getproducts);



module.exports = router;



