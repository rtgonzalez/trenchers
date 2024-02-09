// components/ContactForm.js
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { SuccessAlert, ErrorAlert } from 'components/index';
import { MdEmail } from 'react-icons/md';

export default function FooterContactForm({ content }) {
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
            const response = await fetch('/api/emails/sendFooterContactForm', {
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
        <div className="flex flex-col">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col  gap-1 "
            >
                <h1 className="cstm-golden-title text-center fond-bold ">
                    {content.title}
                </h1>
                <div className="text-left">
                    {showSuccessMessage && (
                        <SuccessAlert
                            message="The message has been sent successfully"
                            dynamicClass="cstm-white-text"
                        />
                    )}
                    {showFailureMessage && (
                        <ErrorAlert message="Oops! Something went wrong, please try again" />
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <input
                        name="name"
                        className="bg-black opacity-90 cstm-white-text"
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
                    <input
                        name="email"
                        className="bg-black opacity-90 cstm-white-text"
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
                    <textarea
                        name="message"
                        className="bg-black opacity-90 cstm-white-text"
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
                        className="flex items-center justify-center gap-1 btn-golden btn-animated p-2"
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
