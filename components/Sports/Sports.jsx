import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Sports.module.scss';
import Error from 'next/error';
import useSWR from 'swr';

const Sports = () => {
    //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/api/sports', fetcher);
    //Handle the error state
    if (error)
        return (
            <div>
                <Error statusCode={error} />
            </div>
        );
    //Handle the loading state
    if (!data) return <div></div>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    const content = JSON.parse(data);
    const title = content.title;
    const subtitle = content.subtitle;
    const text = content.text;
    const sportsList = content.sportsImagesList;
    const urlbg = content.urlbg;
    const altbg = content.altbg;
    return (
        <section className={styles['sports-wrapper']}>
            <div className={styles['sports-bg']}>
                <Image
                    className={styles['bg-image']}
                    src={urlbg}
                    fill
                    alt={altbg}
                />
            </div>
            <div className={styles['sports-cover']}></div>
            <div className={styles['sports-content']}>
                <h1 className="white-title">{title}</h1>

                <h1 className="white-subtitle">{subtitle}</h1>

                <p className="white-text">{text}</p>

                <div className={styles.logo}>
                    <ul>
                        {sportsList.map((sport) => (
                            <li>
                                <Link href={sport.url} legacyBehavior>
                                    <Image
                                        className={styles['responsive-img']}
                                        src={sport.image}
                                        alt={sport.team}
                                        width={sport.width}
                                        height={sport.height}
                                        priority
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Sports;
