var express = require('express');
var router = express.Router();

/* GET grid display. */
router.get('/', function(req, res, next) {
  let query = req.query || {}; // Ensure query object exists
  console.log("Query received:", query);

  let rows = Number(query.rows) || 0;  // Convert to number (default to 0 if missing)
  let cols = Number(query.cols) || 0;

  console.log(`Parsed rows: ${rows}, Parsed cols: ${cols}`);

  res.render('grid', { title: "Grid Display", query: query });
});

module.exports = router;
