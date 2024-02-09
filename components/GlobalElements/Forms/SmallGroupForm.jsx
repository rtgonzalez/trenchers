import { TextFormatter, GlobalBtnAnimated } from 'components/index';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import useSWR from 'swr';
import Error from 'pages/_error';

const SmallGroupReservation = () => {
    const { ref, inView } = useInView({
        threshold: 0.1
    });
    //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/api/reservations', fetcher);
    //Handle the error state
    if (error) return <Error statusCode={error} />;
    //Handle the loading state
    if (!data) return <></>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    const content = JSON.parse(data);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className=" flex flex-col justify-center items-center overflow-x-auto shadow-xl md:w-[90%] w-full bg-black rounded p-8 space-y-3 opacity-90 mt-40 mb-20">
                <div
                    ref={ref}
                    className={` md:w-[70%] w-full flex flex-col justify-center items-center gap-2 ${
                        inView ? 'animate' : ''
                    }`}
                >
                    <div>
                        <h1 className="tracking-wider cstm-golden-title cstm-par-text leading-8">
                            {content.title}
                        </h1>
                    </div>
                    <TextFormatter
                        text={content.text1}
                        dynamicDivTextClass={''}
                        dynamicPTextClass={`cstm-white-subtitle text-center leading-8 cstm-par-text`}
                    />
                    <div className="md:text-left text-center">
                        <span className="cstm-white-subtitle cstm-par-text">
                            {content.linkSec.text1}
                        </span>
                        <Link href={content.linkSec.link.url} legacyBehavior>
                            <a target={content.linkSec.link.target}>
                                <span className="cstm-golden-text cstm-par-text hover:underline-offset-4 px-2">
                                    {content.linkSec.link.title}
                                </span>
                            </a>
                        </Link>
                        <span className=" cstm-white-subtitle cstm-par-text">
                            {content.linkSec.text2}
                        </span>
                    </div>

                    <TextFormatter
                        text={content.text2}
                        dynamicDivTextClass={''}
                        dynamicPTextClass={`cstm-white-subtitle cstm-par-text`}
                    />
                    <TextFormatter
                        text={content.smallGroupsText}
                        dynamicDivTextClass={''}
                        dynamicPTextClass={`cstm-white-subtitle text-center leading-8 cstm-par-text`}
                    />
                    <div className="flex justify-center items-center pl-10">
                        <GlobalBtnAnimated
                            buttonUrl={content.buttons[0].url}
                            urlText={content.buttons[0].title}
                            target={content.buttons[0].target}
                            btn="rounded-btn"
                            btnBg="btn-golden"
                            btnAnimated="btn-animated"
                            btnText="cstm-black-text"
                        />
                    </div>
                </div>
                <div>{/*<ContactForm content={content.contactForm} /> */}</div>
            </div>
        </div>
    );
};

export default SmallGroupReservation;
