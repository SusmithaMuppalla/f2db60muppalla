var vehicle = require('../models/vehicle');
// List of all vehicles
exports.vehicle_list = function(req, res) {
    res.send('NOT IMPLEMENTED: vehicle list');
};
// for a specific vehicle.
exports.vehicle_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: vehicle detail: ' + req.params.id);
};
// Handle vehicle create on POST.
exports.vehicle_create_post = async function(req, res) {
    console.log(req.body)
    let document = new vehicle();
    document.Vehicle_name = req.body.Vehicle_name;
    document.Vehicle_size = req.body.Vehicle_size;
    document.Vehicle_type = req.body.Vehicle_type;
    
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};
// Handle vehicle delete form on DELETE.
exports.vehicle_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: vehicle delete DELETE ' + req.params.id);
};
// Handle vehicle update form on PUT.
exports.vehicle_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: vehicle update PUT' + req.params.id);
};
exports.vehicle_list = async function(req, res) {
    try{
        thevehicles = await vehicle.find();
        res.send(thevehicles);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};
// VIEWS
// Handle a show all view
exports.vehicle_view_all_Page = async function(req, res) {
    try{
        thevehicles = await vehicle.find();
        res.render('vehicle', { title: 'vehicle Search Results', results: thevehicles });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};