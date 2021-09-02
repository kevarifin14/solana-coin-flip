import { NextApiRequest, NextApiResponse } from 'next';
import NextConnect from 'next-connect';

const handler = NextConnect<NextApiRequest, NextApiResponse>();

handler.get(async (req, res, next) => {

  return next();
});

export default handler;