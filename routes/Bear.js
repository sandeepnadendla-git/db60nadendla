var express = require('express');
var router = express.Router();
const bear_controlers = require("../controllers/Bear");
/* GET home page. */
router.get("/", bear_controlers.bear_view_all_Page);

/* GET detail Bear page */
router.get('/detail', bear_controlers.Bear_view_one_Page);
router.get('/:id', bear_controlers.Bear_detail);


module.exports = router;
