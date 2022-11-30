var express = require('express');
const fuel_controlers=require('../controllers/fuel');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET Fuel */
router.get('/', fuel_controlers.fuel_view_all_Page );

/* GET detail Fuel page */
router.get('/detail', fuel_controlers.fuel_view_one_Page);
/* GET create Fuel page */
router.get('/create', secured,  fuel_controlers.fuel_create_Page);

/* GET create update page */ 
router.get('/update', secured, fuel_controlers.fuel_update_Page);
/* GET delete Fuel page */
router.get('/delete', secured, fuel_controlers.fuel_delete_Page);

module.exports = router;