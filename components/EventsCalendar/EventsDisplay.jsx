import { MonthlyCalendar } from 'components/index';

function EventsDisplay() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="overflow-x-auto shadow-xl md:w-[95%] w-full bg-white rounded p-8 space-y-3 opacity-90 mt-36 mb-20">
                <MonthlyCalendar />
            </div>
        </div>
    );
}

export default EventsDisplay;
