import React from 'react';
import Image from 'next/image';
import { ButtonsAnimatedGroup } from 'components/index';
import { IoBeerSharp } from 'react-icons/io5';
import { useInView } from 'react-intersection-observer';

const ImageTextCard = ({
    title,
    text,
    altText,
    imageUrl,
    btnsList,
    imageSide,
    isJson
}) => {
    const { ref, inView } = useInView({
        threshold: 0.1
    });
    const dynamicClasses = imageSide
        ? 'image-text-card-wrapper-right'
        : 'image-text-card-wrapper-left';

    const BeerList = ({ beers }) => {
        return (
            <ul>
                {beers.map((beer, index) => (
                    <li key={index}>
                        <div className="flex justify-start items-center">
                            <div className="pb-2">
                                <IoBeerSharp className="text-clrgolden" />
                            </div>
                            <div>
                                <p className="pl-2 pb-2 leading-1 cstm-par-text">{`${beer.name}`}</p>
                            </div>
                            <br />
                        </div>
                    </li>
                ))}
            </ul>
        );
    };
    return (
        <div
            ref={ref}
            className={`${dynamicClasses} mb-7 justify-around items-center w-[98%] ${
                inView ? 'animate' : ''
            }`}
        >
            <div className="relative overflow-hidden md:w-[45%] w-full h-[600px] shadow-lg animation-traslateX">
                <Image
                    className="z-[99] absolute top-0 left-0 w-full h-full object-cover rounded-lg object-center  drop-shadow-2xl contrast-150"
                    src={imageUrl}
                    alt={altText}
                    fill
                    loading="lazy"
                />
            </div>
            <div className="flex flex-col justify-center pl-7 gap-1 md:w-[45%] w-[70%] md:pb-2 pb-4">
                <div>
                    <h1
                        className={`tracking-wider leading-5 md:text-5xl text-3xl font-bold  text-center pt-2 pb-6  ${
                            isJson ? 'md:text-left' : 'md:text-center'
                        }`}
                    >
                        {title}
                    </h1>
                </div>
                <div className="flex md:justify-start justify-center">
                    {isJson ? (
                        <BeerList beers={text} />
                    ) : (
                        <p className="cstm-black-subtitle text-center leading-8 ">
                            {text}
                        </p>
                    )}
                </div>
                {btnsList && (
                    <div className="flex justify-center items-center">
                        {btnsList && (
                            <ButtonsAnimatedGroup btnsList={btnsList} />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageTextCard;
