var fs = require('fs');
var http= require('http');
var downloadRouter = require('express').Router();


/**
 *
 * @param responseData File data collected form AWS response
 */
function collectDatAndWrite(responseData){
    fs.appendFile()
}


/**
 * Download the trranscript for the user
 */
downloadRouter.get('/download/transcript/text',
    (request,response,error)=>{
    //download the transcript


});
