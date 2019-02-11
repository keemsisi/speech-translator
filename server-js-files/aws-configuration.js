// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('uuid');

// Create unique bucket name
var bucketName = 'cedarview-bucket' + uuid.v4();
// Create name for uploaded object key
var keyName = 'hello_world.txt';
var AWS_IDENTITY_POOL_ID = ''; // aws identity



//credentials configuration
var myCredentials = new AWS.CognitoIdentityCredentials({IdentityPoolId:AWS_IDENTITY_POOL_ID});
var myConfig = new AWS.Config({
    credentials: myCredentials, region: 'us-west-2'
});

// Create a promise on S3 service object
var bucketPromise = new AWS.S3({apiVersion: '2006-03-01'}).createBucket({Bucket: bucketName}).promise();

// Handle promise fulfilled/rejected states
bucketPromise.then(
    function(data) {
        // Create params for putObject call
        var objectParams = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
        // Create object upload promise
        var uploadPromise = new AWS.S3({apiVersion: '2006-03-01'}).putObject(objectParams).promise();
        uploadPromise.then(
            function(data) {
                console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
            });
    }).catch(
    function(err) {
        console.error("Error Occured",err, err.stack);
    });


function updateRegion (regionName){
    myConfig = new AWS.Config();
    myConfig.update({region: regionName});
}
