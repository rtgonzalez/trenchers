import React from 'react';
import Image from 'next/image';
import { ButtonsAnimatedGroup } from 'components/index';
import { capitalizeWords, capitalizeSentences } from 'utils/jsfunctions';

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
        <div className="md:w-full w-[99%] md:h-[25rem] flex md:flex-row flex-col">
            <div className="w-full h-full flex flex-col justify-center items-center animation-traslateX relative z-[10]">
                <div className="absolute top-0 left-0 w-full h-full z-[-1]">
                    <Image
                        className="w-full h-full object-cover object-bottom"
                        src={leftImageUrl}
                        fill
                        alt={leftImageAlt}
                    />
                </div>

                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 p-4 z-[-1]"></div>
                <h1 className="tracking-wider leading-8 md:text-5xl text-3xl font-bold text-clrblack pb-4 md:pt-1 pt-4">
                    {capitalizeWords(leftTitle)}
                </h1>
                <h2 className="cstm-cards-subtitle-height-line text-clrblack pb-4">
                    {leftSubtitle}
                </h2>
                <ul>
                    {leftTextlist.map((item, index) => (
                        <li key={index}>
                            <hr className="solid-color-line" />
                            <p className="tracking-wider leading-8 md:text-lg text-base text-center font-bold text-clrblack pb-2 pt-6">
                                {item.text}
                            </p>
                            <p className="tracking-wider leading-8 md:text-lg text-base text-center font-bold text-clrblack pb-2">
                                {`${item.day} ~ ${item.hours}`}
                            </p>
                        </li>
                    ))}
                </ul>
                <div className="pb-6">
                    <ButtonsAnimatedGroup btnsList={leftBtnsList} />
                </div>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center animation-traslateX relative z-[10]">
                <div className="absolute top-0 left-0 w-full h-full z-[-1]">
                    <Image
                        className="w-full h-full object-cover object-bottom"
                        src={rightImageUrl}
                        fill
                        alt={rightImageAlt}
                    />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 p-4 z-[-1]"></div>
                <h1 className="tracking-wider leading-8 md:text-5xl text-3xl font-bold text-clrblack pb-4 md:pt-1 pt-6">
                    {capitalizeWords(rightTitle)}
                </h1>
                <h2 className="tracking-wider leading-8 md:text-base text-xs text-center font-bold text-clrblack pb-4">
                    {capitalizeSentences(rightSubtitle)}
                </h2>
                <ul>
                    {rightTextlist.map((item, index) => (
                        <li key={index}>
                            <hr className="solid-color-line" />
                            <p className="tracking-wider leading-8 md:text-lg text-base text-center font-bold text-clrblack pb-2 pt-4">
                                {item.text}
                            </p>
                            <p className="tracking-wider leading-8 md:text-lg text-base text-center font-bold text-clrblack pb-2">
                                {`${item.day} ~ ${item.hours}`}
                            </p>
                        </li>
                    ))}
                </ul>
                <div className="pb-6">
                    <ButtonsAnimatedGroup btnsList={rightBtnsList} />
                </div>
            </div>
        </div>
    );
};
export default RightLeftTextBgImage;
