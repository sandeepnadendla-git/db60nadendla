var Bear = require('../models/Bear');
// List of all Bears
exports.Bear_list = function(req, res) {
res.send('NOT IMPLEMENTED: Bear list');
};
// for a specific Bear.
exports.Bear_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Bear detail: ' + req.params.id);
};
// Handle Bear create on POST.
exports.Bear_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Bear create POST');
};
// Handle Bear delete form on DELETE.
exports.Bear_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Bear delete DELETE ' + req.params.id);
};
// Handle Bear update form on PUT.
exports.Bear_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Bear update PUT' + req.params.id);
};