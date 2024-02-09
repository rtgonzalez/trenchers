import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { startDate, endDate } = req.query;
    const start = new Date(startDate);
    const end = new Date(endDate);

    try {
        const events = await prisma.event.findMany({
            where: {
                eventDate: {
                    gte: start,
                    lte: end
                }
            }
        });

        const eventsByDate = events.reduce((acc, event) => {
            const dateStr = event.eventDate.toISOString().split('T')[0];
            acc[dateStr] = acc[dateStr] || [];
            acc[dateStr].push(event);
            return acc;
        }, {});

        res.status(200).json(eventsByDate);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch events' });
    }
}
