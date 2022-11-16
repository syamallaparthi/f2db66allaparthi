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
exports.fuel_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Fuel.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Fuel create on POST. 
exports.fuel_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Fuel();

    document.Category = req.body.Category;
    document.Color = req.body.Color;
    document.Quantity = req.body.Quantity;

    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}; 
 
// Handle Fuel delete on DELETE. 
exports.fuel_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Fuel.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle Fuel update form on PUT. 
exports.fuel_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
        ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Fuel.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Category) toUpdate.Category = req.body.Category; 
        if(req.body.Color) toUpdate.color = req.body.color; 
        if(req.body.Quantity) toUpdate.Quantity = req.body.Quantity; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 