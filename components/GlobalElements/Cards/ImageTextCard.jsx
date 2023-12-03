import React from 'react';
import Image from 'next/image';
import { ButtonsAnimatedGroup } from 'components/index';
import { IoBeerSharp } from 'react-icons/io5';

const ImageTextCard = ({
    title,
    text,
    altText,
    imageUrl,
    btnsList,
    imageSide,
    isJson
}) => {
    const dynamicClasses = imageSide
        ? 'image-text-card-wrapper-right'
        : 'image-text-card-wrapper-left';

    const BeerList = ({ beers }) => {
        return (
            <ul>
                {beers.map((beer, index) => (
                    <li key={index}>
                        <div className="flex justify-start items-center">
                            <IoBeerSharp className="text-clrgolden" />
                            <div className="pl-2 leading-10">{`${beer.name}`}</div>
                            <br />
                        </div>
                    </li>
                ))}
            </ul>
        );
    };
    return (
        <div
            className={`${dynamicClasses} mb-7 justify-around items-center w-[98%]`}
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
            <div className="flex flex-col justify-center pl-7 space-y-3 md:w-[45%] w-[70%] md:pb-2 pb-4">
                <div>
                    <h1 className="tracking-wider leading-5 md:text-5xl text-3xl font-bold  md:text-left text-center md:py-2 py-4">
                        {title}
                    </h1>
                </div>
                <div className="flex md:justify-start justify-center">
                    <p className="cstm-reg-para-height-line">
                        {isJson ? <BeerList beers={text} /> : text}
                    </p>
                </div>
                <div className="pt-4">
                    <ButtonsAnimatedGroup btnsList={btnsList} />
                </div>
            </div>
        </div>
    );
};

export default ImageTextCard;
