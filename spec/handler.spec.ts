import {
    ClientContext,
    CognitoIdentity,
    Context as LambdaContext,
} from 'aws-lambda';
import { handler } from '../src/handler';
import { expect } from './support';

describe('A handler', () => {
    it('should work', () => {
        const fakeEvent = {};
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

        expect(handler(fakeEvent, fakeContext, null)).to.equal('Hello World!');
    });
});
