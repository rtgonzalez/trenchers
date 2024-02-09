import React from 'react';
import Link from 'next/link';

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
        <div className={`${btn} ${btnBg} ${btnAnimated} ${btnText}`}>
            <Link href={buttonUrl} legacyBehavior>
                <a target={target}>
                    <span>{urlText}</span>
                </a>
            </Link>
        </div>
    );
};

export default GlobalBtnAnimated;
