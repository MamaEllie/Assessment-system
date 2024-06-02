import { NextApiRequest, NextApiResponse } from 'next';
import DBClient from '../../../config';

const prisma = DBClient.getInstance().prisma;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'POST') {
    const user = await prisma.user.create({
      data: req.body,
    });
    res.status(201).json(user);
  } else {
    res.status(405).end();
  }
}
