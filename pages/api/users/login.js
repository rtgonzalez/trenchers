// pages/api/login.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
    }

    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || user.password !== password) {
            return res
                .status(400)
                .json({ error: 'Invalid email or password.' });
        }

        // Authentication successful, handle login logic
        res.status(200).json({ message: 'Login successful.' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}
