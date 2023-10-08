import React from 'react';
import styles from './SpecialBeersSiders.module.scss';
import Image from 'next/image';

const SpecialBeersSidersHelper = ({
    title,
    sutitle,
    text,
    imageUrl,
    altUrl,
    buttonText,
    buttonUrl
}) => {
    return (
        <section className={styles['beers-siders']} data-aos="fade-up">
            <div className={styles['beers-siders-wrapper']}>
                <div className={styles['beers-ciders-image']}>
                    <Image src={imageUrl} fill alt={altUrl} />
                </div>
                <div className={styles['beers-ciders-info']}>
                    <h1 className={styles['beers-ciders-title']}>{title}</h1>
                    <h2 className={styles['beers-ciders-subtitle']}>
                        {sutitle}
                    </h2>
                    <p className={styles['beers-ciders-text']}>{text}</p>
                    <div className={styles['beers-ciders-button']}>
                        <Link href={buttonUrl}>
                            <a>{buttonText}</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialBeersSidersHelper;
