// components/ContactForm.js
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { SuccessAlert, ErrorAlert } from 'components/index';
import { MdEmail } from 'react-icons/md';

export default function ContactForm({ content }) {
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
            const response = await fetch('/api/emails/sendContactForm', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            // handle response from the server
            reset();
            if (response.ok) {
                setShowSuccessMessage(true);
                setShowFailureMessage(false);
            }
        } catch (error) {
            setShowSuccessMessage(false);
            setShowFailureMessage(true);
        }
    }

    return (
        <div className="flex flex-col justify-left items-left gap-2 border bg-white shadow-lg rounded  px-20 py-10 mb-10">
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <h1 className="cstm-black-title  fond-bold ">
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
                    <label htmlFor="name" className="cstm-black-text">
                        {content.name.text}
                        <span className="cstm-asterisk">*</span>
                    </label>
                    <input
                        name="name"
                        className="cstm-input"
                        placeholder={content.name.placeholder}
                        {...register('name', {
                            required: `${content.name.emptyMsg}`,
                            pattern: {
                                value: /^[A-Za-z\s]+$/,
                                message: `${content.name.errorMsg}`
                            }
                        })}
                    />
                    <p className="cstm-error-message">
                        {errors?.name?.message}
                    </p>
                </div>
                <div className="flex flex-col gap-2">
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
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="cstm-black-text">
                        {content.message.text}
                        <span className="cstm-asterisk">*</span>
                    </label>
                    <textarea
                        name="message"
                        className="cstm-black-text border"
                        placeholder={content.message.placeholder}
                        {...register('message', {
                            required: `${content.message.emptyMsg}`
                        })}
                    ></textarea>
                    <p className="cstm-error-message">
                        {errors?.message?.message}
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
}
