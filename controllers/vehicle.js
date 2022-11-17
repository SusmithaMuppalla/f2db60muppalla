var vehicle = require('../models/vehicle');
// List of all vehicles
exports.vehicle_list = function(req, res) {
    res.send('NOT IMPLEMENTED: vehicle list');
};s
// for a specific vehicle.
exports.vehicle_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: vehicle detail: ' + req.params.id);
};
// Handle vehicle create on POST.
exports.vehicle_create_post = async function(req, res) {
    console.log(req.body)
    let document = new vehicle();
    document.vehicle_name = req.body.vehicle_name;
    document.vehicle_type = req.body.vehicle_type;
    document.vehicle_size = req.body.vehicle_size;
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
// Handle vehicle delete on DELETE.
exports.vehicle_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await vehicle.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
// Handle a show one view with id specified by query
exports.vehicle_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await vehicle.findById( req.query.id)
    res.render('vehicledetail',
    { title: 'vehicle Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for creating a vehicle.
// No body, no in path parameter, no query.
// Does not need to be async
exports.vehicle_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('vehiclecreate', { title: 'vehicle Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for updating a vehicle.
// query provides the id
exports.vehicle_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await vehicle.findById(req.query.id)
    res.render('vehicleupdate', { title: 'vehicle Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle a delete one view with id from query
exports.vehicle_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await vehicle.findById(req.query.id)
    res.render('vehicledelete', { title: 'vehicle Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };