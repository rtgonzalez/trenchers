import React from 'react';
import Image from 'next/image';

const ImageWithCenteredText = ({ bgImgUrl, bgImgAlt, title, text }) => {
    return (
        <div className="w-full md:h-[26rem] h-[45rem] flex md:flex-row flex-col justify-center items-center mt-4 mb-2">
            <div className="w-full h-full flex flex-col justify-center items-center relative z-10">
                <div className="absolute top-0 left-0 w-full h-full z-[-1]">
                    <Image
                        className="object-cover"
                        src={bgImgUrl}
                        fill
                        alt={bgImgAlt}
                    />
                </div>

                <div className="absolute top-0 left-0 w-full h-full bg-clrblack opacity-40 z-[-1]"></div>
                <h1 className="tracking-wider leading-8 md:text-4xl text-3xl text-center font-bold text-clrwhite p-4">
                    {title}
                </h1>
                <p className="tracking-wider leading-8 md:text-lg text-base text-center font-bold text-clrwhite p-4">
                    {text}
                </p>
                
            </div>
        </div>
    );
};

export default ImageWithCenteredText;
