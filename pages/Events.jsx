import React from 'react';
import { useRouter } from 'next/router';
import { EventList, EventsBigCalendar } from 'components';

const eventsData = [
    {
        title: 'Event 1',
        date: '2023-10-22T10:00:00',
        start: new Date('2023-10-22T10:00:00'),
        end: new Date('2023-10-22T12:00:00')
    },
    {
        title: 'Event 2',
        date: '2023-10-23T14:00:00',
        start: new Date('2023-10-23T14:00:00'),
        end: new Date('2023-10-23T16:00:00')
    }
];

const EventsPage = () => {
    const router = useRouter();
    const { view } = router.query;

    return (
        <div className="container mx-auto mt-10">
            {view === 'list' ? (
                <EventList events={eventsData} />
            ) : (
                <EventsBigCalendar events={eventsData} />
            )}
        </div>
    );
};

export default EventsPage;
