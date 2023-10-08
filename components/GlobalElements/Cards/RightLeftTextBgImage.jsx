import React from 'react';
import Image from 'next/image';
import styles from './RightLeftTextBgImage.module.scss';
import { ButtonsAnimatedGroup } from 'components/index';

const RightLeftTextBgImage = ({
    leftTitle,
    leftSubtitle,
    leftTextlist,
    leftBtnsList,
    leftImageUrl,
    leftImageAlt,
    rightTitle,
    rightSubtitle,
    rightTextlist,
    rightBtnsList,
    rightImageUrl,
    rightImageAlt
}) => {
    return (
        <div className={styles['left-right-text-section']}>
            <div
                className={`${styles['left-right-text-wrapper']} ${styles['image-card-box-animated']}`}
            >
                <div className={styles['bg-image-wrapper']}>
                    <Image
                        className={styles['bg-image']}
                        src={leftImageUrl}
                        fill
                        alt={leftImageAlt}
                    />
                </div>
                <div className={styles['image-shadow-black']}></div>
                <h1 className="white-title size-7xl-text center-align-text bold-text">
                    {leftTitle}
                </h1>
                <h2 className="white-subtitle center-align-text pre-wrap-text padding-text">
                    {leftSubtitle}
                </h2>
                <ul>
                    {leftTextlist.map((item) => (
                        <li>
                            <hr className="solid-color-line" />
                            <p className="white-text center-align-text pre-wrap-text padding-text">
                                {item.text}
                            </p>
                            <p className="white-text center-align-text pre-wrap-text">
                                {item.day} ~ {item.hours}
                            </p>
                        </li>
                    ))}
                </ul>
                <ButtonsAnimatedGroup btnsList={leftBtnsList} />
            </div>
            <div
                className={`${styles['left-right-text-wrapper']} ${styles['image-card-box-animated']} ${styles['margin-top']}`}
            >
                <div className={styles['bg-image-wrapper']}>
                    <Image
                        className={styles['bg-image']}
                        src={rightImageUrl}
                        fill
                        alt={rightImageAlt}
                    />
                </div>
                <div className={styles['image-shadow-black']}></div>
                <h1 className="white-title size-7xl-text center-align-text bold-text">
                    {rightTitle}
                </h1>
                <h2 className="white-subtitle center-align-text pre-wrap-text padding-text pre-wrap-text">
                    {rightSubtitle}
                </h2>
                <ul>
                    {rightTextlist.map((item) => (
                        <li>
                            <hr className="solid-color-line" />
                            <p className="white-text center-align-text padding-top pre-wrap-text">
                                {item.text}
                            </p>
                            <p className="white-text center-align-text">
                                {item.day} ~ {item.hours}
                            </p>
                        </li>
                    ))}
                </ul>
                <ButtonsAnimatedGroup btnsList={rightBtnsList} />
            </div>
        </div>
    );
};
export default RightLeftTextBgImage;
