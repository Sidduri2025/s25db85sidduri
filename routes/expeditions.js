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

module.exports = router;

