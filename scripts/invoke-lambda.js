/*
aws lambda invoke \
    --invocation-type RequestResponse \
    --function-name helloWorld \
    --region eu-west-2 \
    --log-type Tail \
    --payload '{}' \
    --profile default \
    outputfile.txt
 */

const {Lambda} = require('aws-sdk');
const lambdaSdk = new Lambda();

var params = {
    FunctionName: 'HelloWorld2',
    InvocationType: 'RequestResponse',
    LogType: 'Tail',
    Payload: new Buffer(`{}`),
};
lambdaSdk.invoke(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});
