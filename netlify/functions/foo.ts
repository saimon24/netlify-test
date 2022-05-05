import { Handler } from '@netlify/functions';

const handler: Handler = async (event: any, context) => {
  return { statusCode: 200, body: JSON.stringify({ name: 'Simon', age: '32' }) };
};

export { handler };
