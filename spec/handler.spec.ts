import { Context as LambdaContext } from 'aws-lambda';
import { handler } from '../src/handler';
import { expect } from './support';

describe('A handler', () => {
    it('should work', () => {
        const fakeEvent = {};
        // TODO: Move this into a support file.
        const fakeContext: LambdaContext = {
          awsRequestId: 'string',
          callbackWaitsForEmptyEventLoop: false,
          functionName: 'string',
          functionVersion: 'string',
          getRemainingTimeInMillis: () => 0,
          invokedFunctionArn: 'string',
          logGroupName: 'string',
          logStreamName: 'string',
          memoryLimitInMB: 10000,
          done(error?: Error, result?: any) { return null; },
          fail(error: Error) { return null; },
          succeed(messageOrObject: any) { return null; },
        };

        return expect(handler(fakeEvent, fakeContext, () => void(0))).to.eventually.equal('Hello World!');
    });
});
