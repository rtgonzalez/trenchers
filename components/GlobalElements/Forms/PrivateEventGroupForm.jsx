import { TextFormatter, PrivateEventForm } from 'components/index';
import { useInView } from 'react-intersection-observer';
import useSWR from 'swr';
import Error from 'pages/_error';

const SmallGroupReservation = () => {
    const { ref, inView } = useInView({
        threshold: 0.1
    });
    //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/api/privateEvents', fetcher);
    //Handle the error state
    if (error) return <Error statusCode={error} />;
    //Handle the loading state
    if (!data) return <></>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    const content = JSON.parse(data);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className=" overflow-x-auto shadow-xl md:w-[95%] w-full bg-black rounded p-8  opacity-90 mt-40 mb-20">
                <div className="flex flex-col justify-center items-center">
                    <div
                        ref={ref}
                        className={` md:w-[70%] w-full flex flex-col justify-center items-center gap-2 ${
                            inView ? 'animate' : ''
                        }`}
                    >
                        <div>
                            <h1 className="tracking-wider cstm-golden-title cstm-par-text leading-6">
                                {content.title}
                            </h1>
                        </div>
                        <TextFormatter
                            text={content.text}
                            dynamicDivTextClass={`flex flex-col text-center tracking-wider cstm-white-title leading-8`}
                            dynamicPTextClass={`cstm-par-text`}
                        />
                    </div>
                </div>
                <div className="flex justify-center p-10">
                    <div className="md:w-[70%] w-full">
                        <PrivateEventForm content={content.contactForm} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallGroupReservation;
