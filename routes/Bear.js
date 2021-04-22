var express = require('express');
var router = express.Router();
const bear_controlers = require("../controllers/Bear");
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}
/* GET home page. */
router.get("/", bear_controlers.bear_view_all_Page);

/* GET detail Bear page */
router.get('/detail', bear_controlers.Bear_view_one_Page);
router.get('/create', bear_controlers.Bear_create_Page);
router.get('/update',secured, bear_controlers.Bear_update_Page);
/* GET create Bear page */
router.get('/delete', bear_controlers.Bear_delete_Page);

router.get('/:id', bear_controlers.Bear_detail);



module.exports = router;
