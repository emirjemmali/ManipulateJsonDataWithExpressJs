var express = require('express');
var router = express.Router();
var os = require("os")
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({
        hostname:os.hostname(),
        type:os.type(),
        platform:os.platform()
    })
});
router.get('/cpus', function(req, res, next) {
    Listcp=os.cpus();
        res.json({
            a:Listcp
        })
});
router.get('/cpus/:id', function(req, res, next) {
    Listcp=os.cpus();
    res.json({
        a:Listcp[req.params.id]
    })
});

module.exports = router;
