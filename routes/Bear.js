var express = require('express');
var router = express.Router();
const bear_controlers = require("../controllers/Bear");
/* GET home page. */
router.get("/", bear_controlers.bear_view_all_Page);


module.exports = router;
