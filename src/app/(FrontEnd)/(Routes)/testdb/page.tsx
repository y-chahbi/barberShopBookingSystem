import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(process.env.DATABASE_URL);

    try {
        const user = await prisma.user.findFirst();
        if (user) {
            res.status(200).json({ message: 'Database connection is working!' });
        } else {
            res.status(404).json({ message: 'No user found!' });
        }
    } catch (error) {
        console.error('Error connecting to the database:', error);
        res.status(500).json({ error: 'Error connecting to the database' });
    }
}
