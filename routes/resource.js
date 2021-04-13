var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Bear_controller = require('../controllers/Bear');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Bear ROUTES ///
// POST request for creating a Bear.
router.post('/Bear', Bear_controller.Bear_create_post);
// DELETE request to delete Bear.
router.delete('/Bear/:id', Bear_controller.Bear_delete);
// PUT request to update Bear.
router.put('/Bear/:id', Bear_controller.Bear_update_put);
// GET request for one Bear.
router.get('/Bear/:id', Bear_controller.Bear_detail);
// GET request for list of all Bear items.
router.get('/Bear', Bear_controller.Bear_list);
module.exports = router;


