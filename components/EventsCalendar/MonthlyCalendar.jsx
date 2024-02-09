import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { EventCard } from 'components/index';
import {
    MdOutlineArrowBackIosNew,
    MdOutlineArrowForwardIos
} from 'react-icons/md';

import styles from './ResponsiveGrid.module.css'; // Import Styles from CSS for the calendar - No tailwrind;

import { daysOfWeek, convertAMPMHours, diffWeeksDays } from 'utils/jsfunctions';

const MonthlyCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [activeCell, setActiveCell] = useState(null);
    const [events, setEvents] = useState([]);
    const [eventDetail, setEventDetail] = useState(null);

    const goToPreviousMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        );
    };

    const goToNextMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        );
    };

    const days = () => {
        const monthStart = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            1
        );
        const monthEnd = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            0
        );
        const startDate = new Date(monthStart);
        startDate.setDate(startDate.getDate() - startDate.getDay());

        const calendarDays = [];

        while (startDate <= monthEnd) {
            calendarDays.push(new Date(startDate));
            startDate.setDate(startDate.getDate() + 1);
        }

        return calendarDays;
    };

    const handleMouseEnter = (index) => {
        const column = index % 7;
        const isNearColsEnd = column > 2;
        setActiveCell({ index, isNearColsEnd });
    };

    const isTheSameMonthAndYear = (givenDate) => {
        const month1 = currentDate.getMonth();
        const year1 = currentDate.getFullYear();
        const month2 = givenDate.getMonth();
        const year2 = givenDate.getFullYear();

        return month1 === month2 && year1 === year2;
    };

    function getFirstDayOfMonth(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month, 1);
    }

    function getLastDayOfMonth(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month + 1, 0);
    }

    const activeCellAndEventDetail = (index) => {
        return activeCell?.index === index && eventDetail;
    };

    useEffect(() => {
        const startDate = getFirstDayOfMonth(currentDate);
        const endDate = getLastDayOfMonth(currentDate);
        fetch(`/api/events/${startDate}/${endDate}`)
            .then((response) => response.json())
            .then((data) => setEvents(data));
    }, [currentDate]);

    const doesDateExist = (date) => {
        const formattedDate = new Date(date).toISOString().split('T')[0];
        return !!events[formattedDate];
    };

    const eventsSpecificDate = (date) => {
        const formattedDate = new Date(date).toISOString().split('T')[0];
        const eventsForADate = events[formattedDate];
        return eventsForADate;
    };

    return (
        <div className="flex flex-col justify-center items-center mt-5 mb-10">
            <div className={styles['calen-header']}>
                <div className="flex justify-center items-center ">
                    <button
                        className="circular-btn btn-animated btn-golden"
                        onClick={goToPreviousMonth}
                    >
                        <MdOutlineArrowBackIosNew />
                    </button>
                    <span className="cstm-black-title  font-bold">
                        <h1>{format(currentDate, 'MMMM yyyy')}</h1>
                    </span>
                    <button
                        className="circular-btn btn-animated btn-golden"
                        onClick={goToNextMonth}
                    >
                        <MdOutlineArrowForwardIos />
                    </button>
                </div>
            </div>
            {Object.keys(events).length === 0 && (
                <div className="flex justify-start items-start">
                    <h1 className="cstm-dark-grey-title">No Events to Show</h1>
                </div>
            )}
            <div className={styles['calen-grid']}>
                {daysOfWeek.map((day) => (
                    <div
                        className="flex items-center justify-center md:w-[11rem] w-[3rem] h-[2rem] md:text-sm text-xs"
                        key={day}
                    >
                        {day}
                    </div>
                ))}
            </div>

            <div className={styles['calen-grid']}>
                {days().map((day, index) => (
                    <div
                        key={day.toISOString()}
                        className={styles['calen-cell-body']}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => setActiveCell(null)}
                    >
                        {isTheSameMonthAndYear(day) && (
                            <div>
                                <div className={styles['calen-day']}>
                                    <p className="md:text-sm text-xs">
                                        {format(day, 'd')}
                                    </p>
                                </div>
                                <div>
                                    {doesDateExist(day) && (
                                        <div>
                                            {eventsSpecificDate(day).map(
                                                (even) => (
                                                    /* This div is for desktop */
                                                    <>
                                                        <div key={even.id}>
                                                            <div
                                                                onMouseEnter={() =>
                                                                    setEventDetail(
                                                                        even
                                                                    )
                                                                }
                                                                onMouseLeave={() =>
                                                                    setEventDetail(
                                                                        null
                                                                    )
                                                                }
                                                                className="md:flex hidden justify-center items-centerflex gap-2"
                                                            >
                                                                <p className="md:text-sm text-xs ">
                                                                    {even.title}
                                                                </p>

                                                                <p className="md:text-sm text-xs">
                                                                    {convertAMPMHours(
                                                                        even.showStarts
                                                                    )}
                                                                </p>
                                                            </div>

                                                            {activeCellAndEventDetail(
                                                                index
                                                            ) && (
                                                                <div
                                                                    className={`${
                                                                        styles.details
                                                                    } ${
                                                                        activeCell.isNearColsEnd
                                                                            ? styles.detailsLeft
                                                                            : styles.detailsRight
                                                                    }`}
                                                                >
                                                                    <EventCard
                                                                        title={
                                                                            eventDetail.title
                                                                        }
                                                                        description={
                                                                            eventDetail.description
                                                                        }
                                                                        date={
                                                                            eventDetail.eventDate
                                                                        }
                                                                        showStart={
                                                                            eventDetail.showStarts
                                                                        }
                                                                        showEnd={
                                                                            eventDetail.showEnds
                                                                        }
                                                                        minAge={
                                                                            eventDetail.ageRequirement
                                                                        }
                                                                        imageUrl={
                                                                            eventDetail.pictureUrl
                                                                        }
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="md:hidden flex justify-center items-center gap-2">
                                                            {activeCell?.index ===
                                                                index && (
                                                                <div
                                                                    className={` flex flex-col ${
                                                                        styles.details
                                                                    } ${
                                                                        activeCell.isNearColsEnd
                                                                            ? styles.detailsLeft
                                                                            : styles.detailsRight
                                                                    }`}
                                                                >
                                                                    <p className="text-xs">
                                                                        {
                                                                            even.title
                                                                        }
                                                                    </p>

                                                                    <p className="text-xs">
                                                                        {convertAMPMHours(
                                                                            even.showStarts
                                                                        )}
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                {Array.from({ length: diffWeeksDays(currentDate) }).map(
                    (_, index) => (
                        <div
                            key={index}
                            className={styles['calen-cell-body']}
                        ></div>
                    )
                )}
            </div>
            {console.log('This is the last day' + diffWeeksDays(currentDate))}
        </div>
    );
};

export default MonthlyCalendar;
