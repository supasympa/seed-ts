/*
aws lambda create-function \
    --function-name helloWorld \
    --runtime nodejs8.10 \
    --role 'arn:aws:iam::369180253773:role/lambda_exec_role' \
    --handler helloWorld \
    --memory-size 256 \
    --publish \
    --zip-file fileb://./lambdas/hello-world/target/helloWorld.lambda.zip
*/
const {Lambda} = require('aws-sdk');
const path = require('path');
const zipPath = path.resolve(__dirname, '../lambdas/hello-world/target/helloWorld.lambda.zip');
const {readFileSync} = require('fs');
const lambdaSdk = new Lambda();

const req = {
  FunctionName: `HelloWorld2`,
  Runtime: `nodejs8.10`,
  Role: `arn:aws:iam::369180253773:role/lambda_exec_role`,
  Handler: `index.helloWorld`,
  MemorySize: `256`,
  Publish: true,
  Code: {
      ZipFile: readFileSync(zipPath)
  }
};

lambdaSdk.createFunction(req, (err, data) => {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});
