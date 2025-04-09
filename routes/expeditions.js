var express = require('express');
var router = express.Router();

/* GET expeditions listing. */
router.get('/', function(req, res, next) {
  let expeditions = [
    { name: "Everest Base Camp", destination: "Nepal", duration: 14 },
    { name: "Amazon Rainforest", destination: "Brazil", duration: 10 },
    { name: "Antarctic Voyage", destination: "Antarctica", duration: 21 }
  ];
  res.render('expeditions', { title: "Search Results - Expeditions", expeditions });
});
var express = require('express');
const expeditions_controlers= require('../controllers/expeditions');
var router = express.Router();
/* GET costumes */
router.get('/', expeditions_controlers.expeditions_view_all_Page );
module.exports = router;



