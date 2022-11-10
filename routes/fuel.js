var express = require('express');
const fuel_controlers= require('../controllers/fuel')
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('fuel', { title: 'Search Results Fuel' });
// });
router.get('/', fuel_controlers.fuel_view_all_Page );
module.exports = router;
