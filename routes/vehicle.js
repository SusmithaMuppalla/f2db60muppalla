var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vehicle', { title: 'Search Results vehicle' });
});
var express = require('express');
const vehicle_controlers= require('../controllers/vehicle');
var router = express.Router();
/* GET costumes */
router.get('/', vehicle_controlers.vehicle_view_all_Page );
module.exports = router;