import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { capitalizeSentences } from 'utils/jsfunctions';

const ImageTextHero = ({
    image,
    imageHoverTitle,
    title,
    text,
    rightPicLeftTextClass
}) => {
    const { ref, inView } = useInView({
        threshold: 0.1
    });
    const capitalText = capitalizeSentences(text);
    // Split the text by period into an array of sentences
    const sentences = capitalText.split('.').filter(Boolean);
    return (
        <div className="container mx-auto p-4">
            <div
                className={`flex md:flex-row flex-col gap-4 ${rightPicLeftTextClass}  `}
            >
                <div ref={ref} className={`flex-1 ${inView ? 'animate' : ''}`}>
                    <div className={`relative h-96 `}>
                        <Image
                            src={image}
                            alt={imageHoverTitle}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <div ref={ref} className={`p-4 ${inView ? 'animate' : ''}`}>
                        <div>
                            <h1 className="tcstm-black-title font-bold ">
                                {title}
                            </h1>
                        </div>
                        <div className="flex flex-col gap-1 text-center">
                            {sentences.map((sentence, index) => (
                                <div key={index}>
                                    <p className="cstm-black-text">
                                        {sentence.trim()}.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageTextHero;
