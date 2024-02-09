import React from 'react';
import Image from 'next/image';
import { ButtonsAnimatedGroup, LocationMap } from 'components/index';
import useSWR from 'swr';
import Error from 'pages/_error';

const BeersClub = () => {
    //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/api/beerClub', fetcher);
    //Handle the error state
    if (error) return <Error statusCode={error} />;
    //Handle the loading state
    if (!data) return <></>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    const content = JSON.parse(data);

    return (
        <section className="w-full md:h-[26rem] h-[45rem] flex md:flex-row flex-col justify-center items-center my-6">
            <div className="md:w-1/2 w-full h-full flex flex-col justify-center items-center relative z-10">
                <div className="absolute top-0 left-0 w-full h-full z-[-1]">
                    <Image
                        className="object-cover"
                        src={content.bgurl}
                        fill
                        alt={content.title}
                    />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-clrblack opacity-40 z-[-1]"></div>
                <h1 className="tracking-wider leading-8 md:text-4xl text-3xl text-center font-bold text-clrwhite p-4">
                    {content.title}
                </h1>
                <p className="tracking-wider leading-8 md:text-lg text-base text-center font-bold text-clrwhite p-4">
                    {content.text}
                </p>
                <ButtonsAnimatedGroup btnsList={content.buttons} />
            </div>
            <div className="flex flex-col justify-center items-center md:w-1/2 w-full">
                <LocationMap />
            </div>
        </section>
    );
};

export default BeersClub;
