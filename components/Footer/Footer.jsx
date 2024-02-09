import React from 'react';
import Link from 'next/link';
import {
    capitalizeWords,
    joinSentencesWithCommaAndBreak
} from 'utils/jsfunctions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useSWR from 'swr';
import { FooterContactForm } from 'components/index';
import Error from 'pages/_error';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

const Footer = () => {
    const { data, error } = useSWR('/api/location', fetcher);
    const addressArray = [];
    //Handle the error state
    if (error) return <Error statusCode={error} />;
    //Handle the loading state
    if (!data) return <></>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    const contentObj = JSON.parse(data);
    const location = contentObj.location;
    const openDaysHours = contentObj.openingsDaysHours;
    const socialNetwork = contentObj.socialNetwork;
    const contactForm = contentObj.contactForm;
    addressArray.push(`${location.streetAddress}, ${location.addressLocality}`);
    addressArray.push(`${location.addressRegion}, ${location.postalCode}`);
    return (
        <footer className="mx-auto bg-clrblack opacity-90">
            <div className="flex md:flex-row flex-col  items-center pb-4">
                {/* Visit Us Section */}
                <div className="flex flex-col md:w-[35%] w-full  md:ml-10 mt-2">
                    <div>
                        <FooterContactForm content={contactForm} />
                    </div>
                </div>

                {/* Working Hours Section */}

                <div className="flex flex-col md:w-[35%] w-full justify-center items-center gap-1 md:ml-20 mt-4 mb-4">
                    <div>
                        <h1 className="cstm-golden-title text-center hover:text-brightColor transition-all cursor-pointer mb-4">
                            {capitalizeWords(openDaysHours.title)}
                        </h1>
                    </div>
                    <div>
                        {openDaysHours.daysHours.map((openDayHour, item) => (
                            <div
                                className="flex flex-col justify-center items-center gap-1 cursor-pointer"
                                key={item}
                            >
                                <div className="flex py-2">
                                    <div className="pr-8">
                                        <span className="cstm-white-text pr-2">
                                            {`${openDayHour.dayOfWeek}`}:
                                        </span>
                                        <span className="cstm-white-text text-right">{`${openDayHour.opens}`}</span>
                                        <spa className="cstm-white-text">{`-`}</spa>
                                        <span className="cstm-white-text">{`${openDayHour.closes}`}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="md:w-[35%] w-full flex flex-col justify-between items-center gap-1 md:mr-20 mb-4">
                    <div>
                        <h1 className="cstm-golden-title text-center hover:text-brightColor transition-all cursor-pointer">
                            {capitalizeWords(socialNetwork.title)}
                        </h1>
                    </div>
                    <div>
                        <ul className="flex gap-1 justify-center items-center">
                            {socialNetwork.socialNetworksList.map(
                                (socialNetwork, item) => (
                                    <li className="py-2" key={item}>
                                        <Link href={socialNetwork.url}>
                                            <FontAwesomeIcon
                                                icon={[
                                                    'fab',
                                                    socialNetwork.name.toLowerCase()
                                                ]}
                                                className={`${socialNetwork.class}`}
                                            />
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                    <div>
                        <h1 className="cstm-golden-title hover:text-brightColor transition-all cursor-pointer pb-2">
                            {capitalizeWords(location.contact.title)}
                        </h1>
                    </div>
                    <div className=" flex justify-center items-center">
                        <div>
                            <FontAwesomeIcon
                                icon={['fas', 'phone']}
                                className="fas-phone-icon"
                            />
                        </div>
                        <p className="cstm-white-subtitle hover:text-brightColor transition-all cursor-pointer">
                            {location.contact.phone}
                        </p>
                    </div>
                    <div>
                        <p className="cstm-white-subtitle hover:text-brightColor transition-all cursor-pointer">
                            {capitalizeWords(location.contact.email)}
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-2">
                        <div>
                            <h1 className="cstm-title-height-line text-clrgolden text-center hover:text-brightColor transition-all cursor-pointer">
                                {capitalizeWords(location.title)}
                            </h1>
                        </div>
                        <div>
                            <p className="cstm-white-text text-center hover:text-brightColor transition-all cursor-pointer">
                                {joinSentencesWithCommaAndBreak(addressArray)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
