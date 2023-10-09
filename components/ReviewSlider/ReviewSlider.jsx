import React from 'react';
import useSWR from 'swr';
import Reviews from './ReviewsItems';
import Error from 'pages/_error';

function ReviewSlider() {
    //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/api/reviews', fetcher);
    //Handle the error state
    if (error) return <Error statusCode={error} />;
    //Handle the loading state
    if (!data) return <></>;
    const reviews = JSON.parse(data);
    return (
        <div>
            <Reviews reviews={reviews} />
        </div>
    );
}

export default ReviewSlider;
