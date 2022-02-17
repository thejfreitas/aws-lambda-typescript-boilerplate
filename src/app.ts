import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { HTTP } from './utils/types';
import { getHttpResponseByCode } from './utils';

export const lambdaHandler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  try {
    if (event.httpMethod !== HTTP.GET) {
      return {
        statusCode: 405,
        headers: {},
        body: JSON.stringify({
          message: getHttpResponseByCode(405),
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Ready to start',
      }),
    };
  } catch (error) {
    console.info(error, context.awsRequestId);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error instanceof Error ? error.stack : JSON.stringify(error, null, 2),
      }),
    };
  }
};
