var express = require('express');
var errorPage = require('http-errors');
var router = express.Router();

/* GET users listing. */
router.get('/send/audio/aws/api', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
