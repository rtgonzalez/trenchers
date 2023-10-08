import React from 'react';
import Image from 'next/image';
import { ButtonsAnimatedGroup, LocationMap } from 'components/index';
import styles from './BeersClub.module.scss';
import useSWR from 'swr';

const BeersClub = () => {
    //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/api/beerClub', fetcher);
    //Handle the error state
    if (error) return <Error statusCode={error} />;
    //Handle the loading state
    if (!data) return <></>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    const content = JSON.parse(data);

    return (
        <section className={styles['beer-club-wrapper']}>
            <div className={styles['beer-club-info']}>
                <div className={styles['beer-club-bg']}>
                    <Image
                        className={styles['bg-image']}
                        src={content.bgurl}
                        fill
                        alt={content.title}
                    />
                </div>
                <div className={styles['beer-club-cover']}></div>
                <h1 className="black-title">{content.title}</h1>
                <p className="black-text">{content.text}</p>
                <ButtonsAnimatedGroup btnsList={content.buttons} />
            </div>
            <div className={styles['beer-club-map']}>
                <LocationMap />
            </div>
        </section>
    );
};

export default BeersClub;
