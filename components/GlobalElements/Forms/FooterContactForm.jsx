import axios from 'axios';
import { SuccessAlert, ErrorAlert } from 'components/index';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
import Error from 'pages/_error';

const FooterContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/api/FooterContactForm', fetcher);
    //Handle the error state
    if (error) return <Error statusCode={error} />;
    //Handle the loading state
    if (!data) return <></>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    const content = JSON.parse(data);

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
    return (
        <div className="mt-2">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-center justify-center"
            >
                <h2 className="cstm-title-height-line text-clrgolden hover:text-brightColor transition-all cursor-pointer">
                    {content.title}
                </h2>
                <div className="text-left">
                    {showSuccessMessage && (
                        <SuccessAlert message={content.successMsgText} />
                    )}
                    {showFailureMessage && (
                        <ErrorAlert message={content.errorMsgText} />
                    )}
                </div>
                <div className="my-4">
                    <input
                        name="fullName"
                        className="cstm-input border"
                        placeholder={content.name.placeholder}
                        {...register('fullName', {
                            required: `${content.name.emptyMsg}`,
                            pattern: {
                                value: /^[A-Za-z\s]+$/,
                                message: `${content.name.errorMsg}`
                            }
                        })}
                    />
                    <p className="cstm-error-message">
                        {errors?.fullName?.message}
                    </p>
                </div>
                <div className="mb-4">
                    <input
                        name="email"
                        className="cstm-input border"
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
                <div className="mb-4">
                    <textarea
                        name="message"
                        className="cstm-input h-24 w-full border"
                        placeholder={content.message.placeholder}
                        {...register('message', {
                            required: `${content.message.emptyMsg}`
                        })}
                    ></textarea>
                    <p className="cstm-error-message">
                        {errors?.message?.message}
                    </p>
                </div>
                <div className="col-span-2">
                    <button
                        className="flex justify-center items-center relative rounded px-2 py-1 overflow-hidden group bg-clrgolden  hover:bg-gradient-to-r hover:from-white hover:to-clrgolden cstm-black-text hover:ring-2 hover:ring-offset-2 hover:ring-clrgolden transition-all ease-out duration-300 mb-4 border-2 border-clrgolden"
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
                        <span className="relative cstm-black-text  pl-2">
                            {content.btnTextSend}
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FooterContactForm;
