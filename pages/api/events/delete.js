import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const eventId = parseInt(req.query.id);

    if (req.method === 'DELETE') {
        const event = await prisma.event.delete({
            where: { id: eventId }
        });
        res.json(event);
    }
}
