import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GlobalBtnAnimated = ({ buttonUrl, urlText, target }) => {
    return (
        <div className="flex justify-center items-center relative rounded p-8 overflow-hidden group bg-clrgolden  hover:bg-gradient-to-r hover:from-white hover:to-clrgolden cstm-black-text hover:ring-2 hover:ring-offset-2 hover:ring-clrgolden transition-all ease-out duration-300 mb-4 mr-4 border-2 border-clrgolden">
            <Link href={buttonUrl} legacyBehavior>
                <a target={target}>
                    <span>{urlText}</span>
                </a>
            </Link>
        </div>
    );
};

export default GlobalBtnAnimated;
