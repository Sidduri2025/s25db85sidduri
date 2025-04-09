var expeditions = require('../models/expeditions');
// List of all expeditions
// exports.expeditions_list = function(req, res) {
// res.send('NOT IMPLEMENTED: expeditions list');
// };

// List of all expeditions
exports.expeditions_list = async function (req, res) {
    try {
        theexpeditions = await expeditions.find();
        res.send(theexpeditions);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific expeditions.
exports.expeditions_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: expeditions detail: ' + req.params.id);
};
// Handle expeditions create on POST.
//exports.expeditions_create_post = function (req, res) {
//  res.send('NOT IMPLEMENTED: expeditions create POST');
//};
// Handle Costume create on POST.
exports.expeditions_create_post = async function (req, res) {
    console.log(req.body)
    let document = new expeditions();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.expeditions_type = req.body.expeditions_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle expeditions delete from on DELETE.
exports.expeditions_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: expeditions delete DELETE ' + req.params.id);
};
// Handle expeditions update form on PUT.
exports.expeditions_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: expeditions update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.expeditions_view_all_Page = async function (req, res) {
    try {
        theexpeditions = await expeditions.find();
        res.render('expeditions', { title: 'expeditions Search Results', results: theexpeditions });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};