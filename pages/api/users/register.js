import { PrismaClient } from '@prisma/client';
//import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
    }

    const { name, email, password } = req.body;

    try {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already in use' });
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        });

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}
