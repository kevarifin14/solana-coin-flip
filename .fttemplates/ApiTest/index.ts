import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks } from 'node-mocks-http';

import handler from 'pages/api/'

describe('/api/ handler', () => {
  it('', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      url: `/api/aws/s3`,
    });

    await handler.run(req, res);

    expect(res.statusCode).toBe(200);
  });
});