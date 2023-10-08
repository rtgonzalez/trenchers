import React from 'react';
import Link from 'next/link';
import styles from './GlobalBtnAnimated.module.scss';

const GlobalBtnAnimated = ({
    buttonUrl,
    urlText,
    target,
    btn,
    btnBg,
    btnAnimated,
    btnText
}) => {
    return (
        <div
            className={`${styles[btn]} ${styles[btnBg]} ${styles[btnAnimated]} ${btnText}`}
        >
            <Link href={buttonUrl} legacyBehavior>
                <a target={target}>
                    <span>{urlText}</span>
                </a>
            </Link>
        </div>
    );
};

export default GlobalBtnAnimated;
