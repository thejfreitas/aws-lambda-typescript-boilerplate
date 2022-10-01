import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export const lambdaHandler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  let response: APIGatewayProxyResult;

  try {
    response = {
      body: JSON.stringify({
        message: `Happy coding!`,
      }),
      statusCode: 200,
    };
  } catch (error) {
    response = {
      body: JSON.stringify({
        message: error instanceof Error ? error.stack : JSON.stringify(error, null, 2),
      }),
      statusCode: 500,
    };
  }

  console.log('OVER HERE', response);

  return response;
};
