var Fuel = require('../models/fuel'); 
 
// List of all Fuel 

exports.fuel_list = async function(req, res) {  
    try{ 
        theFuels = await Fuel.find(); 
        res.send(theFuels); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
exports.fuel_view_all_Page = async function(req, res) { 
    try{ 
        theFuels = await Fuel.find(); 
        res.render('fuel', { title: 'Fuel Search Results', results: theFuels }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
// for a specific Fuel. 
exports.fuel_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Fuel detail: ' + req.params.id); 
}; 
 
// Handle Fuel create on POST. 
exports.fuel_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Fuel create POST'); 
}; 
 
// Handle Fuel delete form on DELETE. 
exports.fuel_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Fuel delete DELETE ' + req.params.id); 
}; 
 
// Handle Fuel update form on PUT. 
exports.fuel_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Fuel update PUT' + req.params.id); 
};