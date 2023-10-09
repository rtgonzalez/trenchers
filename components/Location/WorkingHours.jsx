import React from 'react';
import styles from './Location.module.scss';

const WorkingHours = ({ openDaysHours }) => {
    return (
        <div className={styles['location-working-hours']}>
            <ul>
                <li>
                    <h1>{openDaysHours.title}</h1>
                </li>
                {openDaysHours.daysHours.map((openDayHour) => (
                    // eslint-disable-next-line react/jsx-key
                    <li>
                        <p className={'black-text bold-text'}>
                            {openDayHour.dayOfWeek}:{openDayHour.opens} -{' '}
                            {openDayHour.closes}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkingHours;
