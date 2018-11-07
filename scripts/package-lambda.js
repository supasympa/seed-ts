const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function zip(relativePath, lambdaName) {
    const { stdout, stderr } = await exec(`zip -r -j ${relativePath}/target/${lambdaName}.lambda.zip ${relativePath}/dist`);
    !!stdout && console.log('SUCCESS:', stdout);
    !!stderr && console.log('ERROR:', stderr);
}

zip(`./lambdas/hello-world`, 'helloWorld');
