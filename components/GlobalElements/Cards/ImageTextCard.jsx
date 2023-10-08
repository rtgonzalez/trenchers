import React from 'react';
import Image from 'next/image';
import styles from './ImageTextCard.module.scss';
import { ButtonsAnimatedGroup } from 'components/index';
import { formatParagraph } from 'utils/jsfunctions';

const ImageTextCard = ({
    title,
    text,
    altText,
    imageUrl,
    imageBgUrl,
    bgAlt,
    btnsList,
    imageSide
}) => {
    const imageBg = imageBgUrl ? 'image-bg-text-card' : 'hidden';

    return (
        <div className={styles['image-text-card-section']}>
            <div className={`${styles[imageSide]}`}>
                {/* <div className={`${styles[imageBg]}`}>
                    <Image
                        className={styles['image-bg']}
                        src={imageBgUrl}
                        alt={bgAlt}
                        fill
                    />
                </div>
                <div className={styles['image-bg-text-card-cover']}></div> */}
                <div
                    className={`${styles['image-text-card-left']} ${styles['image-card-box-animated']}`}
                >
                    <Image
                        className={styles['image']}
                        src={imageUrl}
                        alt={altText}
                        fill
                        sizes="100vw"
                        loading="lazy"
                    />
                    <div className={styles['hover-over-text']}></div>
                </div>
                <div
                    className={`${styles['image-text-card-right']} ${styles['image-card-box-animated']}`}
                >
                    <h1 className="black-title size-7xl-text left-align-text bold-text ">
                        {title}
                    </h1>
                    <p className="black-text left-align-text pre-wrap-text">
                        {formatParagraph(text)}
                    </p>
                    <ButtonsAnimatedGroup btnsList={btnsList} />
                </div>
            </div>
        </div>
    );
};

export default ImageTextCard;
