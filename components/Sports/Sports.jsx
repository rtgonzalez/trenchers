import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { capitalizeWords, capitalizeSentences } from 'utils/jsfunctions';
import Error from 'pages/_error';
import useSWR from 'swr';

const Sports = () => {
    //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/api/sports', fetcher);
    //Handle the error state
    if (error)
        return (
            <div>
                <Error statusCode={error} />
            </div>
        );
    //Handle the loading state
    if (!data) return <div></div>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    const content = JSON.parse(data);
    const title = content.title;
    const subtitle = content.subtitle;
    const text = content.text;
    const sportsList = content.sportsImagesList;
    const urlbg = content.urlbg;
    const altbg = content.altbg;
    return (
        <section className="w-full md:h-[30rem] h-[43rem] my-7 relative">
            <div className="w-full h-full absolute top-0 left-0">
                <Image className="object-cover" src={urlbg} fill alt={altbg} />
            </div>
            <div className="w-full h-full absolute top-0 left-0 bg-clrblack opacity-60"></div>
            <div className=" flex  flex-col justify-center items-center w-full h-full absolute top-0 left-0 z-[10]">
                <h1 className="tracking-wider leading-8 md:text-5xl text-3xl text-center font-bold text-clrwhite pb-4 md:pt-1 pt-10">
                    {capitalizeWords(title)}
                </h1>
                <h2 className="tracking-wider leading-8 md:text-2xl text-xl text-center font-bold text-white pb-2 pt-6 px-10">
                    {subtitle}
                </h2>
                <p className="tracking-wider leading-8 md:text-lg text-base text-center font-bold text-white pb-1 pt-6 px-10">
                    {capitalizeSentences(text)}
                </p>
                <div>
                    <ul className="flex justify-between items-center relative space-x-8 space-y-10">
                        {sportsList.map((sport, index) => (
                            <li key={index}>
                                <div className="md:block hidden">
                                    <Link href={sport.url} legacyBehavior>
                                        <Image
                                            className="object-contain object-center"
                                            src={sport.image}
                                            alt={sport.team}
                                            width={sport.width}
                                            height={sport.height}
                                            priority
                                        />
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Sports;
