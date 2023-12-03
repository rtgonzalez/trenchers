import React from 'react';

const WorkingHours = ({ openDaysHours }) => {
    return (
        <div>
            <ul>
                <li>
                    <h1>{openDaysHours.title}</h1>
                </li>
                {openDaysHours.daysHours.map((openDayHour, index) => (
                    <li key={index}>
                        <p>
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
