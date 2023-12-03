import React from 'react';
import Image from 'next/image';
import useSWR from 'swr';
import Error from 'pages/_error';
import { capitalizeSentences } from 'utils/jsfunctions';

const AboutUs = () => {
    //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/api/aboutUs', fetcher);
    //Handle the error state
    if (error) return <Error statusCode={error} />;
    //Handle the loading state
    if (!data) return <></>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    const content = JSON.parse(data);

    return (
        <section className="container mt-[8rem]">
            <div className="flex flex-col justify-center items-center mb-8 relative space-y-6 md:left-[5%]">
                <div className="flex justify-center items-center w-[90%]">
                    <h1 className="tracking-wider leading-8 md:text-5xl text-4xl text-center font-bold text-clrblack mb-4">
                        {content.title}
                    </h1>
                </div>
                <div className="relative w-[600px] h-[400px]">
                    <div className="absolute top-0 md:left-0 left-[10%] md:w-full w-[80%] h-full">
                        <Image
                            className="object-cover rounded-lg brightness-80 object-center"
                            src={content.img.url}
                            fill
                            alt={content.img.alt}
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center w-[80%]">
                    <p className="tracking-wider leading-8 md:text-base text-sm text-center font-bold text-clrblack">
                        {capitalizeSentences(content.text)}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
