var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var fuel_controller = require('../controllers/fuel'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// Pastry ROUTES /// 
 
// POST request for creating a Fuel.  
router.post('/fuels', fuel_controller.fuel_create_post); 
 
// DELETE request to delete Fuel. 
router.delete('/fuels/:id', fuel_controller.fuel_delete); 
 
// PUT request to update Fuel. 
router.put('/fuels/:id', fuel_controller.fuel_update_put); 
 
// GET request for one Fuel. 
router.get('/fuels/:id', fuel_controller.fuel_detail); 
 
// GET request for list of all Fuel items. 
router.get('/fuels', fuel_controller.fuel_list);  
 
/* GET detail fuel page */ 
router.get('/detail', fuel_controller.fuel_view_one_Page); 

/* GET create fuel page */ 
router.get('/create', fuel_controller.fuel_create_Page); 
 
/* GET create update page */ 
router.get('/update', fuel_controller.fuel_update_Page); 

/* GET delete fuel page */ 
router.get('/delete', fuel_controller.fuel_delete_Page); 
module.exports = router;