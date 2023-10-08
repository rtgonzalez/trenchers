import React from 'react';
import { Slideshow, Location } from 'components/index';
import styles from './Hero.module.scss';


//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());
const Hero = () => {
    return (
        <div className={styles['hero-wrapper']}>
            <div className={styles['hero-slidershow']}>
                <Slideshow />
            </div>
            <div className={styles['hero-location']}>
                <Location />
            </div>
        </div>
    );
};

export default Hero;
