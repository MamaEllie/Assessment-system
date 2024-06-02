import { NextApiRequest, NextApiResponse } from 'next';
import DBClient from '../../../config';

const prisma = DBClient.getInstance().prisma;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).end();
    }
  } else {
    res.status(405).end();
  }
}
