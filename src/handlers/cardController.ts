import { APIGatewayProxyHandler } from "aws-lambda";

export const saveCard: APIGatewayProxyHandler = async (event) => {
  const body = JSON.parse(event.body || "{}");

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello world!",
        body,
        input: event,
      },
      null,
      2
    ),
  };
};
