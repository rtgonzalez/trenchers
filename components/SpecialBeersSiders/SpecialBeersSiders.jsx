import React from 'react';
import { ImageTextCard } from 'components/index';
import { joinedString } from 'utils/jsfunctions';
import useSWR from 'swr';

const SpecialBeersSiders = () => {
    //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/api/beersCiders', fetcher);
    //Handle the error state
    if (error) return <Error statusCode={error} />;
    //Handle the loading state
    if (!data) return <></>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    const content = JSON.parse(data);
    const textJoined = joinedString(content.beersCiders);
    return (
        <section>
            <ImageTextCard
                title={content.title}
                titleText={content.subtitle}
                text={textJoined}
                altText={content.altUrl}
                imageUrl={content.imageUrl}
                btnsList={content.buttons}
                imageSide="image-text-card-wrapper-right"
            />
        </section>
    );
};

export default SpecialBeersSiders;
