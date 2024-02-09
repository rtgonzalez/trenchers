import { useState, useEffect } from 'react';
import { convertAMPMHours } from 'utils/jsfunctions';
const { format } = require('date-fns');
import { FaTrashAlt } from 'react-icons/fa';
import { EventForm } from 'components/index';
import { signIn, useSession } from 'next-auth/react';

function EventDetailsList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/events/details');
            const data = await res.json();
            setEvents(data);
        }
        fetchData();
    }, []);
    const { data: session } = useSession();

    const [showEvent, setShowEvent] = useState(false);

    const handleAddEvent = () => {
        setShowEvent(true);
    };

    const hideAddEvent = () => {
        setShowEvent(false);
    };

    const removeEvent = async (id) => {
        await fetch(`/api/events/delete/${id}`, { method: 'DELETE' });
        setEvents(events.filter((event) => event.id !== id));
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="overflow-x-auto shadow-xl md:w-[80%] w-full bg-white rounded p-8 space-y-3 opacity-90 mt-36 mb-20">
                {session && (
                    <>
                        <div>
                            {!showEvent && (
                                <div className="flex justify-end">
                                    <button
                                        className="rounded-btn btn-golden my-5"
                                        onClick={handleAddEvent}
                                    >
                                        Add Event
                                    </button>
                                </div>
                            )}
                            {showEvent && (
                                <div className="flex justify-end">
                                    <button
                                        className="rounded-btn btn-golden my-5"
                                        onClick={hideAddEvent}
                                    >
                                        Hide Add Event
                                    </button>
                                </div>
                            )}
                            {showEvent && <EventForm />}
                        </div>
                        <div className="grid grid-cols-7  bg-black opacity-90 hover:scale-105 transform transition duration-150">
                            <div className="cstm-white-text text-center ">
                                <h2>Title</h2>
                            </div>
                            <div className="cstm-white-text text-center">
                                <h2>Date</h2>
                            </div>
                            <div className="cstm-white-text text-center  md:inline-block hidden">
                                <h2>Description</h2>
                            </div>
                            <div className="cstm-white-text text-center">
                                <h2>Start Time</h2>
                            </div>
                            <div className="cstm-white-text text-center">
                                <h2>End Time</h2>
                            </div>
                            <div className="cstm-white-text text-center">
                                <h2>Minimum Age</h2>
                            </div>
                            <div className="cstm-white-text text-center">
                                <h2>Action</h2>
                            </div>
                        </div>
                        {events.map((event, index) => (
                            <div
                                key={event.id}
                                className={`grid grid-cols-7  hover:scale-105 transform transition duration-150  ${
                                    index % 2 === 0
                                        ? 'bg-gray-200'
                                        : 'bg-gray-300 '
                                }`}
                            >
                                <div className="border px-2 py-1">
                                    <p className="cstm-black-text text-center">
                                        {event.title}
                                    </p>
                                </div>
                                <div className="border px-4 py-2">
                                    <p className="cstm-black-text text-center">
                                        {format(
                                            new Date(event.eventDate),
                                            'MM-dd-yyyy'
                                        )}
                                    </p>
                                </div>
                                <div className="border px-4 py-2 md:inline-block hidden">
                                    <p className="cstm-black-text text-center">
                                        {event.description}
                                    </p>
                                </div>
                                <div className="border px-4 py-2">
                                    {event.showStarts && (
                                        <p className="cstm-black-text text-center">
                                            {convertAMPMHours(event.showStarts)}
                                        </p>
                                    )}
                                </div>
                                <div className="border px-4 py-2">
                                    {event.showEnds && (
                                        <p className="cstm-black-text text-center ">
                                            {convertAMPMHours(event.showEnds)}
                                        </p>
                                    )}
                                </div>
                                <div className="border px-4 py-2">
                                    {event.ageRequirement ? (
                                        <p className="cstm-black-text text-center ">
                                            All Ages
                                        </p>
                                    ) : (
                                        <p className="cstm-black-text text-center ">
                                            21+
                                        </p>
                                    )}
                                </div>
                                <div className="border px-4 py-2 text-center">
                                    <button
                                        onClick={() => removeEvent(event.id)}
                                    >
                                        <FaTrashAlt className="text-red-500 " />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </>
                )}
                {!session && (
                    <div className="flex justify-center items-center">
                        <button
                            className="rounded-btn btn-golden"
                            onClick={() => signIn('google')}
                        >
                            Sign in with Google
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default EventDetailsList;
