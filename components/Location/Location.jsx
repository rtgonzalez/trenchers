import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { ButtonsAnimatedGroup } from 'components/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useSWR from 'swr';
import Error from 'pages/_error';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());
const Location = () => {
    const { data, error } = useSWR('/api/location', fetcher);
    //Handle the error state
    if (error) return <Error statusCode={error} />;
    //Handle the loading state
    if (!data) return <div></div>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    const content = JSON.parse(data);
    const location = content.location;
    const welcomeSection = location.welcomeSection;
    const mergeStrings = (array) => array.map((elem) => `${elem}`).join(' ');
    const address = mergeStrings([
        location.streetAddress,
        location.addressLocality,
        location.addressRegion,
        location.postalCode
    ]);
    return (
        <section className="flex items-center justify-center md:mb-2 mb-2">
            <div className="flex flex-col justify-between items-center space-x-2">
                <h1 className="cstm-cards-title-height-line text-clrblack">
                    {welcomeSection.title}
                </h1>
                <div className="flex space-x-3 pt-4">
                    <GrLocation className="text-3xl animation-translateY" />
                    <p className="cstm-cards-reg-height-line text-clrblack">
                        {address}
                    </p>
                </div>

                <h2 className="cstm-cards-subtitle-height-line text-clrblack">
                    {location.contact.title}
                </h2>

                <div className=" flex justify-center items-center space-x-2 pt-2">
                    <div>
                        <FontAwesomeIcon
                            icon={['fas', 'phone']}
                            className="fas-phone-icon"
                        />
                    </div>
                    <p className="cstm-cards-reg-height-line text-clrblack">
                        {location.contact.phone}
                    </p>
                </div>
                <ButtonsAnimatedGroup btnsList={location.contact.buttons} />
            </div>
        </section>
    );
};

export default Location;
