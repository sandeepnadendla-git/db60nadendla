var express = require('express');
var router = express.Router();
const bear_controlers = require("../controllers/Bear");
/* GET home page. */
router.get("/", bear_controlers.bear_view_all_Page);
router.get('/:id', bear_controlers.Bear_detail);
console.log("dsdd");
/* GET detail Bear page */
router.get('/detail/:id', bear_controlers.Bear_view_one_Page);


module.exports = router;
