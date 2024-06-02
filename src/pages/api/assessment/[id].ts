import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const test = await prisma.assessment.findUnique({
      where: { id: Number(id) },
      include: {
        questions: true,
      },
    });
    if (test) {
      res.status(200).json(test);
    } else {
      res.status(404).end();
    }
  } else {
    res.status(405).end();
  }
}
