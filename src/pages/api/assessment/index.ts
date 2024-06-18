import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../config';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const assessments = await prisma.assessment.findMany({
      include: {
        questions: true,
      },
    });
    res.status(200).json(assessments);
  } else if (req.method === 'POST') {
    const { name, description, questions } = req.body;
    const assessment = await prisma.assessment.create({
      data: {
        name: name,
        description: description,
        questions: {
          create: questions,
        },
      },
    });
    res.status(201).json(assessment);
  } else {
    res.status(405).end();
  }
}
