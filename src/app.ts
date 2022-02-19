import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { StatusCode, getStatusPhraseByCode, RequestMethod } from 'ts-http-status-utils';

export const lambdaHandler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  try {
    if (event.httpMethod !== RequestMethod.GET) {
      return {
        statusCode: StatusCode.METHOD_NOT_ALLOWED,
        headers: {},
        body: JSON.stringify({
          message: getStatusPhraseByCode(StatusCode.METHOD_NOT_ALLOWED),
        }),
      };
    }

    return {
      statusCode: StatusCode.OK,
      body: JSON.stringify({
        message: `${getStatusPhraseByCode(StatusCode.OK)} - Ready to start`,
      }),
    };
  } catch (error) {
    console.info(error, context.awsRequestId);

    return {
      statusCode: StatusCode.INTERNAL_SERVER_ERROR,
      body: JSON.stringify({
        message: error instanceof Error ? error.stack : JSON.stringify(error, null, 2),
      }),
    };
  }
};
