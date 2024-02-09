import { useForm } from 'react-hook-form';
import { useState, React } from 'react';
import { SuccessAlert, ErrorAlert } from 'components/index';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdOutlineEventAvailable } from 'react-icons/md';

const EventForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch
    } = useForm();

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const showStarts = watch('showStarts');
    const showEnds = watch('showEnds');
    const eventDate = watch('eventDate');

    function convertTo24Hour(time) {
        const [hours, minutes] = time.split(':');
        const period = hours >= 12 ? 'PM' : 'AM';
        const convertedHours =
            period === 'PM' && hours < 12 ? parseInt(hours, 10) + 12 : hours;
        return `${convertedHours}:${minutes}`;
    }

    function inValidateTime() {
        if (!showStarts || !showEnds) {
            return false;
        }

        const start = convertTo24Hour(showStarts);
        const end = convertTo24Hour(showEnds);

        // Convert times to Date objects for comparison
        const startDate = new Date(`1970-01-01T${start}:00`);
        const endDate = new Date(`1970-01-01T${end}:00`);
        return startDate > endDate;
    }

    function isTodayGreaterOrEqualToGivenDate() {
        if (!eventDate) {
            return false;
        }
        const givenDate = new Date(eventDate);
        const today = new Date();

        // Set the time of today to 00:00:00 for accurate comparison
        today.setHours(0, 0, 0, 0);

        return givenDate < today;
    }

    async function onSubmit(data) {
        try {
            const formData = new FormData();
            formData.append('file', data.file[0]);
            formData.append('title', data.title);
            formData.append('description', data.description);
            formData.append('eventDate', data.eventDate);
            formData.append('showStarts', data.showStarts);
            formData.append('showEnds', data.showEnds);
            formData.append('ageRequirement', data.ageRequirement);

            const response = await fetch('/api/events/create', {
                method: 'POST',
                body: formData
            });
            if (!response.ok) {
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
            } else {
                setShowSuccessMessage(true);
                setShowFailureMessage(false);
            }
        } catch (error) {
            setShowSuccessMessage(false);
            setShowFailureMessage(true);
        }
    }

    return (
        <div className="flex justify-center items-center">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-left md:w-[80%] w-full bg-black shadow-lg rounded p-8 space-y-3 opacity-90 my-10"
            >
                <h1 className="cstm-white-title text-center">New Event Form</h1>
                <div className="text-left">
                    {showSuccessMessage && (
                        <SuccessAlert message="The Event has been created successfully" />
                    )}
                    {showFailureMessage && (
                        <ErrorAlert message="Oops! Something went wrong, please try again" />
                    )}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="title" className="cstm-white-text">
                        Title:
                        <span className="cstm-asterisk">*</span>
                    </label>
                    <input
                        name="title"
                        type="text"
                        className="cstm-input text-clrwhite"
                        placeholder="Introduce title"
                        {...register('title', {
                            required: 'Event title is required'
                        })}
                    />
                    <p className="cstm-error-message">
                        {errors?.title?.message}
                    </p>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="description" className="cstm-white-text">
                        Description:
                        <span className="cstm-asterisk">*</span>
                    </label>
                    <textarea
                        name="description"
                        className="cstm-input border text-clrwhite"
                        placeholder="Introduce description"
                        {...register('description', {
                            required: 'Event description is required'
                        })}
                    ></textarea>
                    <p className="cstm-error-message">
                        {errors?.description?.message}
                    </p>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="eventDate" className="cstm-white-text">
                        Event Date:
                        <span className="cstm-asterisk">*</span>
                    </label>
                    <input
                        name="eventDate"
                        type="date"
                        className="cstm-input text-clrwhite"
                        placeholder="Select a date"
                        {...register('eventDate', {
                            required: 'Event date is required'
                        })}
                    />
                    <p className="cstm-error-message">
                        {errors?.eventDate?.message}
                    </p>
                    {isTodayGreaterOrEqualToGivenDate() && (
                        <p className="cstm-error-message">
                            The event Date should be greater or equal than the
                            current date
                        </p>
                    )}
                </div>
                <div className="flex md:flex-row flex-col">
                    <div className="md:w-1/2 w-full">
                        <label
                            htmlFor="showStarts"
                            className="cstm-white-text pr-2"
                        >
                            Show Starts:
                        </label>
                        <input
                            name="showStarts"
                            type="time"
                            className="cstm-input  text-clrwhite pl-2"
                            {...register('showStarts')}
                        />
                    </div>
                    <div className="md:w-1/2 w-full  ">
                        <label
                            htmlFor="showEnds"
                            className="cstm-white-text pr-2"
                        >
                            Show Ends:
                        </label>
                        <input
                            name="showEnds"
                            type="time"
                            className="cstm-input text-clrwhite pl-2"
                            {...register('showEnds')}
                        />
                        {inValidateTime() && (
                            <p className="cstm-error-message">
                                Show starts should be earlier than show ends
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex md:flex-row flex-col">
                    <label
                        htmlFor="ageRequirement"
                        className="cstm-white-text pr-2"
                    >
                        Minimum age:
                    </label>

                    {/* Age Requirement */}
                    <select
                        className="cstm-input text-clrwhite pl-2"
                        name="ageRequirement"
                        {...register('ageRequirement')}
                    >
                        <option value="allages">All ages</option>
                        <option value="over"> 21+</option>
                    </select>
                </div>
                <div className="flex md:flex-row flex-col">
                    <label htmlFor="file" className="cstm-black-text pr-2 pt-4">
                        Event Picture:
                    </label>
                    <input
                        className="cstm-input text-clrwhite pl-2 pt-4"
                        type="file"
                        accept="image/webp, image/jpeg, image/jpg, image/png"
                        name="file"
                        {...register('file')}
                    />
                </div>
                <div className="flex md:flex-row  items-center justify-center">
                    <button
                        className="rounded-btn btn-golden btn-animated"
                        type="submit"
                    >
                        <MdOutlineEventAvailable />

                        <span className="cstm-black-text pl-2">
                            Create an event
                        </span>
                    </button>

                    <button
                        type="button"
                        onClick={() => reset()}
                        className="rounded-btn btn-golden btn-animated"
                    >
                        <FaRegTrashAlt />
                        <span className="cstm-black-text pl-2">Clear data</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EventForm;
