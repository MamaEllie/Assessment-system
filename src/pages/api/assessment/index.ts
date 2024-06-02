import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const tests = await prisma.assessment.findMany({
      include: {
        questions: true,
      },
    });
    res.status(200).json(tests);
  } else if (req.method === 'POST') {
    const { name, description } = req.body;
    const newTest = await prisma.assessment.create({
      data: {
        name,
        description,
      },
    });
    res.status(201).json(newTest);
  } else {
    res.status(405).end();
  }
}
