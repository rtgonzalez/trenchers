import React, { useState } from 'react';
import { ButtonsAnimatedGroup } from 'components/index';
import { SuccessAlert, ErrorAlert } from 'components/index';
import { useForm } from 'react-hook-form';

const ReservationForm = ({ content }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('/api/sendEmail', data);
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            reset();
        } catch (error) {
            setShowSuccessMessage(false);
            setShowFailureMessage(true);
        }
    };

    const times = [
        { label: '10:00 AM', value: '10:00' },
        { label: '12:00 PM', value: '12:00' },
        { label: '02:00 PM', value: '14:00' }
        // Add more time options as needed
    ];

    return (
        <div className="w-full mb-8">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="cstm-contact-form"
            >
                <h1 className="cstm-black-subtitle text-center">
                    {content.title}
                </h1>
                <div className="text-left">
                    {showSuccessMessage && (
                        <SuccessAlert message={content.successMsgText} />
                    )}
                    {showFailureMessage && (
                        <ErrorAlert message={content.errorMsgText} />
                    )}
                </div>
                <label htmlFor="firstName" className="cstm-black-text">
                    {content.firstName.text}
                    <span className="cstm-asterisk">*</span>
                </label>
                <input
                    name="firstName"
                    className="cstm-input border py-4"
                    placeholder={content.firstName.placeholder}
                    {...register('firstName', {
                        required: `${content.firstName.emptyMsg}`,
                        pattern: {
                            value: /^[A-Za-z\s]+$/,
                            message: `${content.firstName.errorMsg}`
                        }
                    })}
                />
                <p className="cstm-error-message py-4">
                    {errors?.lastName?.message}
                </p>
                <label htmlFor="lastName" className="cstm-black-text">
                    {content.lastName.text}
                    <span className="cstm-asterisk">*</span>
                </label>
                <input
                    name="lastName"
                    className="cstm-input border py-4"
                    placeholder={content.lastName.placeholder}
                    {...register('lastName', {
                        required: `${content.lastName.emptyMsg}`,
                        pattern: {
                            value: /^[A-Za-z\s]+$/,
                            message: `${content.lastName.errorMsg}`
                        }
                    })}
                />
                <p className="cstm-error-message py-4">
                    {errors?.lastName?.message}
                </p>

                <label htmlFor="phone" className="cstm-black-text">
                    {content.phone.text}
                    <span className="cstm-asterisk">*</span>
                </label>
                <input
                    name="phone"
                    className="cstm-input border py-4"
                    placeholder={content.phone.placeholder}
                    {...register('phone', {
                        required: `${content.phone.emptyMsg}`,
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: `${content.phone.errorMsg}`
                        }
                    })}
                />
                <p className="cstm-error-message py-4">
                    {errors?.phone?.message}
                </p>

                <label htmlFor="email" className="cstm-black-text">
                    {content.email.text}
                    <span className="cstm-asterisk">*</span>
                </label>
                <input
                    name="email"
                    className="cstm-input border py-4"
                    placeholder={content.email.placeholder}
                    {...register('email', {
                        required: `${content.email.emptyMsg}`,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: `${content.email.errorMsg}`
                        }
                    })}
                />
                <p className="cstm-error-message py-4">
                    {errors?.email?.message}
                </p>
                <label htmlFor="company" className="cstm-black-text">
                    {content.company.text}
                    <span className="cstm-asterisk">*</span>
                </label>
                <input
                    name="company"
                    className="cstm-input border py-4"
                    placeholder={content.company.placeholder}
                    {...register('company', {
                        required: `${content.company.emptyMsg}`,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: `${content.company.errorMsg}`
                        }
                    })}
                />
                <p className="cstm-error-message py-4">
                    {errors?.company?.message}
                </p>
                <div className="mb-4">
                    <label htmlFor="spaceVenue" className="cstm-black-text">
                        {content.spaceVenue.text}
                        <span className="cstm-asterisk">*</span>
                    </label>
                    <select
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="spaceVenue"
                        required
                    >
                        <option value="" disabled>
                            {content.spaceVenue.placeholder}
                        </option>
                        {content.spaceVenue.options.map((time, index) => (
                            <option key={index} value={time.value}>
                                {time.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="startTime" className="cstm-black-text">
                        {content.startTime.text}
                        <span className="cstm-asterisk">*</span>
                    </label>
                    <select
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="startTime"
                        required
                    >
                        <option value="" disabled>
                            {content.startTime.placeholder}
                        </option>
                        {content.startTime.options.map((time, index) => (
                            <option key={index} value={time.value}>
                                {time.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="endTime" className="cstm-black-text">
                        {content.endTime.text}
                        <span className="cstm-asterisk">*</span>
                    </label>
                    <select
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="endTime"
                        required
                    >
                        <option value="" disabled>
                            {content.endTime.placeholder}
                        </option>
                        {content.endTime.options.map((time, index) => (
                            <option key={index} value={time.value}>
                                {time.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="eventType" className="cstm-black-text">
                        {content.eventType.text}
                        <span className="cstm-asterisk">*</span>
                    </label>
                    <select
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="eventType"
                        required
                    >
                        <option value="" disabled>
                            {content.eventType.placeholder}
                        </option>
                        {content.eventType.options.map((time, index) => (
                            <option key={index} value={time.value}>
                                {time.name}
                            </option>
                        ))}
                    </select>
                </div>
                <label htmlFor="additionalInfo" className="cstm-black-text">
                    {content.additionalInfo.text}
                    <span className="cstm-asterisk">*</span>
                </label>
                <textarea
                    name="additionalInfo"
                    className="cstm-input border pb-4"
                    placeholder={content.additionalInfo.placeholder}
                    {...register('additionalInfo', {
                        required: `${content.additionalInfo.emptyMsg}`
                    })}
                ></textarea>
                <p className="cstm-error-message">
                    {errors?.additionalInfo?.message}
                </p>

                <div className="flex  items-center justify-center mt-4">
                    <button
                        className="flex justify-center items-center relative rounded p-8 overflow-hidden group bg-clrgolden  hover:bg-gradient-to-r hover:from-white hover:to-clrgolden cstm-black-text hover:ring-2 hover:ring-offset-2 hover:ring-clrgolden transition-all ease-out duration-300 mb-4 mr-4 border-2 border-clrgolden "
                        type="submit"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                            />
                        </svg>
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative cstm-black-text pl-2">
                            {content.btnTextSend}
                        </span>
                    </button>
                    <button
                        className="flex justify-center items-center relative rounded p-8 overflow-hidden group bg-clrgolden  hover:bg-gradient-to-r hover:from-white hover:to-clrgolden cstm-black-text hover:ring-2 hover:ring-offset-2 hover:ring-clrgolden transition-all ease-out duration-300 mb-4 mr-4 border-2 border-clrgolden"
                        type="button"
                        onClick={() => reset()}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                        </svg>
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative cstm-black-text pl-2">
                            Reset
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ReservationForm;
