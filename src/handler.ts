import { APIGatewayEvent, Context, Handler } from 'aws-lambda';

export const handler: Handler = async (
    event: APIGatewayEvent,
    context: Context,
) => {
    return `Hello World!`;
};
