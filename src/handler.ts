import { APIGatewayEvent, Context, Handler } from 'aws-lambda';

export const handler: Handler = async (
    event: APIGatewayEvent,
    context: Context
) => {
    console.log(`handler: ${event.body}, ${context}`);
    return `Hello World!`;
};
