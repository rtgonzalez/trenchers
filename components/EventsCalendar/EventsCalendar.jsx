import React from 'react';
//Fullcalendar and Realted Plugins
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import styles from './EventsCalendar.module.scss';
import Image from 'next/image';

const EventsCalendar = () => {
    // Event Render Function To Get Images and Titles
    function renderEventContent(eventInfo) {
        return (
            <div>
                <p>{eventInfo.event.title}</p>
                <Image className="eventimage" src={eventInfo.event.url} />
            </div>
        );
    }

    return (
        <main>
            <div className={styles.eventCalendarContainer}>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                    initialView="timeGridDay"
                    eventContent={renderEventContent}
                    events={[
                        {
                            title: 'MINGO - THURSDAYS AT 7.30 PM',
                            date: '2023-10-02'
                        }
                    ]}
                />
            </div>
        </main>
    );
};

export default EventsCalendar;
