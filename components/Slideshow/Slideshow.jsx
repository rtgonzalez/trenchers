import React from 'react';
import useSWR from 'swr';
import { SlideshowAnimated } from 'components/index';
import Error from 'pages/_error';

const Slideshow = () => {
    //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/api/slideshow', fetcher);
    //Handle the error state
    if (error) return <Error statusCode={error} />;
    //Handle the loading state
    if (!data) return <></>;
    const content = JSON.parse(data);
    const sliderImages = content.images;
    return (
        <div>
            <SlideshowAnimated sliderImages={sliderImages} />
        </div>
    );
};

export default Slideshow;
