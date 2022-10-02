import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { StatusCode, getStatusPhraseByCode } from 'ts-http-status-utils';

export const lambdaHandler = async (
  _: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  try {
    return {
      statusCode: StatusCode.OK,
      body: JSON.stringify({
        message: `${getStatusPhraseByCode(StatusCode.OK)} - Happy coding!`,
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
