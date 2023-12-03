import React from 'react';
import { EventsCalendar } from 'components/index';

const eventsAndPictures = [
    {
        date: '2023-11-05',
        event: 'Event 1',
        picture: '/assets/images/events/trenchers_events_8.webp'
    },
    {
        date: '2023-11-15',
        event: 'Event 2',
        picture: '/assets/images/events/trenchers_events_11.webp'
    }
    // Add more events and pictures as needed
];

function App() {
    return (
        <div>
            <h1>Calendar with Events and Pictures</h1>
            <EventsCalendar eventsAndPictures={eventsAndPictures} />
        </div>
    );
}

export default App;
