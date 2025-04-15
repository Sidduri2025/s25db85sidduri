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
//exports.expeditions_detail = function (req, res) {
//res.send('NOT IMPLEMENTED: expeditions detail: ' + req.params.id);
//};
// Handle expeditions create on POST.
//exports.expeditions_create_post = function (req, res) {
//  res.send('NOT IMPLEMENTED: expeditions create POST');
//};
// Handle expeditions create on POST.
exports.expeditions_create_post = async function (req, res) {
    console.log(req.body)
    let document = new expeditions();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"expeditions_type":"goat", "cost":12, "size":"large"}
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

// Handle expeditions delete on DELETE.
exports.expeditions_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await expeditions.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle expeditions update form on PUT.
// exports.expeditions_update_put = function (req, res) {
//     res.send('NOT IMPLEMENTED: expeditions update PUT' + req.params.id);
// };

// Handle expeditions update form on PUT.
exports.expeditions_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await expeditions.findById(req.params.id)
        // Do updates of properties
        if (req.body.expeditions_type)
            toUpdate.expeditions_type = req.body.expeditions_type;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        if (req.body.size) toUpdate.size = req.body.size;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
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
// for a specific expeditions.
exports.expeditions_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await expeditions.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle a show one view with id specified by query
exports.expeditions_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await expeditions.findById(req.query.id)
        res.render('expeditionsdetail',
            { title: 'expeditions Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a expeditions.
// No body, no in path parameter, no query.
// Does not need to be async
exports.expeditions_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('expeditionscreate', { title: 'expeditions Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a expeditions.
// query provides the id
exports.expeditions_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await expeditions.findById(req.query.id)
        res.render('expeditionsupdate', { title: 'expeditions Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.expeditions_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await expeditions.findById(req.query.id)
    res.render('expeditionsdelete', { title: 'expeditions Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };