var express = require('express');
var router = express.Router();


router.get("/:jobName",function (request,response,error){
    response.send() ; // send the URL of the transcript for the user to download
});


