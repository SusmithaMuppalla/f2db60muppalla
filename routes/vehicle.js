var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vehicle', { title: 'Search Results vehicle' });
});
var express = require('express');
const vehicle_controlers= require('../controllers/vehicle');
const vehicle = require('../models/vehicle');
var router = express.Router();
/* GET vehicles */
router.get('/', vehicle_controlers.vehicle_view_all_Page );
module.exports = router;
// GET request for one vehicle. 
router.get('/vehicle/:id', vehicle_controlers.vehicle_detail); 
// GET request for one vehicle.
router.get('/vehicle/:id', vehicle_controlers.vehicle_detail);
/* GET detail vehicle page */
router.get('/detail', vehicle_controlers.vehicle_view_one_Page);
/* GET create vehicle page */
router.get('/create', vehicle_controlers.vehicle_create_Page);
/* GET create update page */
router.get('/update', vehicle_controlers.vehicle_update_Page);
/* GET delete vehicle page */
router.get('/delete', vehicle_controlers.vehicle_delete_Page);
