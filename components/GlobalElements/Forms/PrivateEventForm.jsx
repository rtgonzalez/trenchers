// pages/eventForm.js
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { SuccessAlert, ErrorAlert } from 'components/index';
import { MdEmail } from 'react-icons/md';

const PrivateEventForm = ({ content }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    async function onSubmit(data) {
        try {
            const response = await fetch('/api/emails/sendPrivateEventForm', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            // handle response from the server
            if (response.ok) {
                setShowSuccessMessage(true);
                setShowFailureMessage(false);
                reset();
            } else {
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
            }
        } catch (error) {
            setShowSuccessMessage(false);
            setShowFailureMessage(true);
        }
    }

    return (
        <div className="flex flex-col justify-left items-left gap-2 border bg-white shadow-lg rounded  px-20 py-10 mb-10">
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <h1 className="cstm-black-title  fond-bold text-center">
                    {content.title}
                </h1>
                <div className="text-left">
                    {showSuccessMessage && (
                        <SuccessAlert message="The message has been sent successfully" />
                    )}
                    {showFailureMessage && (
                        <ErrorAlert message="Oops! Something went wrong, please try again" />
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="cstm-black-text">
                        {content.email.text}
                        <span className="cstm-asterisk">*</span>
                    </label>
                    <input
                        name="email"
                        className="cstm-input"
                        placeholder={content.email.placeholder}
                        {...register('email', {
                            required: `${content.email.emptyMsg}`,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: `${content.email.errorMsg}`
                            }
                        })}
                    />
                    <p className="cstm-error-message">
                        {errors?.email?.message}
                    </p>
                </div>
                <div className="flex md:flex-row flex-col gap-2">
                    <div className="flex flex-col gap-2 md:w-1/2 w-full">
                        <label htmlFor="firstName" className="cstm-black-text">
                            {content.firstName.text}
                            <span className="cstm-asterisk">*</span>
                        </label>
                        <input
                            name="firstName"
                            className="cstm-input"
                            placeholder={content.firstName.placeholder}
                            {...register('firstName', {
                                required: `${content.firstName.emptyMsg}`,
                                pattern: {
                                    value: /^[A-Za-z\s]+$/,
                                    message: `${content.firstName.errorMsg}`
                                }
                            })}
                        />
                        <p className="cstm-error-message">
                            {errors?.firstName?.message}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 md:w-1/2 w-full">
                        <label htmlFor="lastName" className="cstm-black-text">
                            {content.lastName.text}
                            <span className="cstm-asterisk">*</span>
                        </label>
                        <input
                            name="lastName"
                            className="cstm-input"
                            placeholder={content.lastName.placeholder}
                            {...register('lastName', {
                                required: `${content.lastName.emptyMsg}`,
                                pattern: {
                                    value: /^[A-Za-z\s]+$/,
                                    message: `${content.lastName.errorMsg}`
                                }
                            })}
                        />
                        <p className="cstm-error-message">
                            {errors?.lastName?.message}
                        </p>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-2">
                    <div className="flex flex-col gap-2 md:w-1/2 w-full">
                        <label htmlFor="phone" className="cstm-black-text">
                            {content.phone.text}
                            <span className="cstm-asterisk">*</span>
                        </label>
                        <input
                            name="phone"
                            className="cstm-input"
                            placeholder={content.phone.placeholder}
                            {...register('phone', {
                                required: `${content.phone.emptyMsg}`,
                                pattern: {
                                    value: /^[0-9]{11}$/,
                                    message: `${content.phone.errorMsg}`
                                }
                            })}
                        />
                        <p className="cstm-error-message">
                            {errors?.phone?.message}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 md:w-1/2 w-full">
                        <label htmlFor="company" className="cstm-black-text">
                            {content.company.text}
                            <span className="cstm-asterisk">*</span>
                        </label>
                        <input
                            name="company"
                            className="cstm-input"
                            placeholder={content.phone.placeholder}
                            {...register('company', {
                                required: `${content.company.emptyMsg}`,
                                pattern: {
                                    value: /^[A-Za-z\s]+$/,
                                    message: `${content.company.errorMsg}`
                                }
                            })}
                        />
                        <p className="cstm-error-message">
                            {errors?.company?.message}
                        </p>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-2">
                    <div className="flex flex-col gap-2 md:w-1/2 w-full">
                        <label htmlFor="spaceVenue" className="cstm-black-text">
                            {content.spaceVenue.text}
                            <span className="cstm-asterisk">*</span>
                        </label>
                        <select
                            className="cstm-input"
                            name="spaceVenue"
                            {...register('spaceVenue', {
                                required: `${content.spaceVenue.emptyMsg}`
                            })}
                        >
                            <option value="" disabled>
                                {content.spaceVenue.placeholder}
                            </option>
                            {content.spaceVenue.options.map((item, index) => (
                                <option key={index} value={item.value}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col gap-2 md:w-1/2 w-full">
                        <label htmlFor="eventDate" className="cstm-black-text">
                            {content.eventDate.text}
                            <span className="cstm-asterisk">*</span>
                        </label>
                        <input
                            name="eventDate"
                            type="date"
                            className="cstm-input"
                            placeholder={content.eventDate.placeholder}
                            {...register('eventDate', {
                                required: `${content.eventDate.emptyMsg}`
                            })}
                        />
                        <p className="cstm-error-message">
                            {errors?.eventDate?.message}
                        </p>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-2">
                    <div className="flex flex-col gap-2 md:w-1/2 w-full">
                        <label
                            htmlFor="startTime"
                            className="cstm-black-text pr-2"
                        >
                            {content.startTime.text}
                            <span className="cstm-asterisk">*</span>
                        </label>
                        <input
                            name="startTime"
                            type="time"
                            className="cstm-input pl-2"
                            placeholder={content.startTime.placeholder}
                            {...register('startTime', {
                                required: `${content.startTime.emptyMsg}`
                            })}
                        />
                        <p className="cstm-error-message">
                            {errors?.startTime?.message}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 md:w-1/2 w-full">
                        <label
                            htmlFor="endTime"
                            className="cstm-black-text pr-2"
                        >
                            {content.endTime.text}
                            <span className="cstm-asterisk">*</span>
                        </label>
                        <input
                            name="endTime"
                            type="time"
                            className="cstm-input pl-2"
                            placeholder={content.endTime.placeholder}
                            {...register('endTime', {
                                required: `${content.endTime.emptyMsg}`
                            })}
                        />
                        <p className="cstm-error-message">
                            {errors?.endTime?.message}
                        </p>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-2">
                    <div className="flex flex-col gap-2 md:w-1/2 w-full">
                        <label htmlFor="eventType" className="cstm-black-text">
                            {content.eventType.text}
                            <span className="cstm-asterisk">*</span>
                        </label>
                        <select
                            className="cstm-input"
                            name="eventType"
                            {...register('eventType', {
                                required: `${content.eventType.emptyMsg}`
                            })}
                        >
                            <option value="" disabled>
                                {content.eventType.placeholder}
                            </option>
                            {content.eventType.options.map((item, index) => (
                                <option key={index} value={item.value}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 md:w-1/2 w-full">
                        <label htmlFor="peopleNum" className="cstm-black-text">
                            {content.peopleNum.text}
                            <span className="cstm-asterisk">*</span>
                        </label>

                        <input
                            name="peopleNum"
                            type="number"
                            className="cstm-input cstm-black-text"
                            placeholder={content.peopleNum.placeholder}
                            {...register('peopleNum', {
                                required: `${content.peopleNum.emptyMsg}`
                            })}
                        />

                        <p className="cstm-error-message">
                            {errors?.peopleNum?.message}
                        </p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <label>{content.minors.text}</label>
                    <input
                        name="minors"
                        type="checkbox"
                        className="cstm-input"
                        placeholder={content.minors.placeholder}
                        {...register('minors')}
                    />
                </div>
                <div className="flex flex-col gap-2 pt-4">
                    <label htmlFor="additionalInfo" className="cstm-black-text">
                        {content.additionalInfo.text}
                    </label>
                    <textarea
                        name="additionalInfo"
                        className="cstm-black-text border"
                        placeholder={content.additionalInfo.placeholder}
                        rows="5"
                        {...register('additionalInfo')}
                    ></textarea>
                    <p className="cstm-error-message">
                        {errors?.additionalInfo?.message}
                    </p>
                </div>

                <div className="flex md:flex-row  items-center justify-center">
                    <button
                        className="rounded-btn btn-golden btn-animated"
                        type="submit"
                    >
                        <MdEmail />

                        <span className="cstm-black-text pl-2">
                            {content.btnTextSend}
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PrivateEventForm;
