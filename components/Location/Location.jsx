import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { ButtonsAnimatedGroup } from 'components/index';
import styles from './Location.module.scss';
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
        <section className={styles['location-wrapper']}>
            <div className={styles['location-address']}>
                <h1 className="black-title bold-text size-4xl-text">
                    {welcomeSection.title}
                </h1>
                <p className="black-subtitle bold-text">
                    <GrLocation className={styles['location-icon']} />
                    {address}
                </p>
                <h2 className="black-subtitle bold-text">
                    {location.contact.title}
                </h2>
                <p className="black-subtitle">{location.contact.phone}</p>
                <ButtonsAnimatedGroup btnsList={location.contact.buttons} />
            </div>
        </section>
    );
};

export default Location;
