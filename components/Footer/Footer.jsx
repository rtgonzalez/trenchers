import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useSWR from 'swr';

const Footer = () => {
    //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/api/location', fetcher);
    //Handle the error state
    if (error) return <></>;
    //Handle the loading state
    if (!data) return <></>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    const contentObj = JSON.parse(data);
    const location = contentObj.location;
    const openDaysHours = contentObj.openingsDaysHours;
    const socialNetwork = contentObj.socialNetwork;
    return (
        <footer>
            <div className={styles.footer__wrapper}>
                <div className={styles.container}>
                    <section>
                        <div className={styles.item}>
                            <ul>
                                <li>
                                    <h1 className={styles.title}>
                                        {location.title}
                                    </h1>
                                </li>
                                <li>
                                    <p className={styles.text}>
                                        {location.streetAddress}
                                        <br /> {location.addressLocality},{' '}
                                        {location.addressRegion}
                                        <br /> {location.postalCode}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <div className={styles.item}>
                            <ul>
                                <li>
                                    <h1 className={styles.title}>
                                        {openDaysHours.title}
                                    </h1>
                                </li>
                                {openDaysHours.daysHours.map(
                                    (openDayHour, item) => (
                                        <li>
                                            <p className={styles.text}>
                                                {openDayHour.dayOfWeek}{' '}
                                                {openDayHour.opens} -{' '}
                                                {openDayHour.closes}
                                            </p>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </section>
                    <section>
                        <div className={styles.item}>
                            <ul>
                                <li>
                                    <h1 className={styles.title}>
                                        {socialNetwork.title}
                                    </h1>
                                </li>
                                {socialNetwork.socialNetworksList.map(
                                    (socialNetwork, item) => (
                                        <li>
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
                                <br />
                                <li>
                                    <h1 className={styles.title}>
                                        {location.contact.title}
                                    </h1>
                                </li>
                                <li>
                                    <p className={styles.text}>
                                        {location.contact.phone}
                                    </p>
                                </li>
                                <li>
                                    <p className={styles.text}>
                                        {location.contact.email}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
