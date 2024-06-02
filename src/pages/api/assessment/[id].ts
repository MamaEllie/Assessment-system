import { NextApiRequest, NextApiResponse } from 'next';
import DBClient from '../../../config';

const prisma = DBClient.getInstance().prisma;


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const assessment = await prisma.assessment.findUnique({
      where: { id: Number(id) },
      include: {
        questions: true,
      },
    });
    if (assessment) {
      res.status(200).json(assessment);
    } else {
      res.status(404).end();
    }
  } else {
    res.status(405).end();
  }
}
