import React from 'react';
import { ImageTextCard } from 'components/index';
import useSWR from 'swr';
import Error from 'pages/_error';
import {
    capitalizeSentences,
    joinSentencesWithPeriodAndBreak
} from 'utils/jsfunctions';

const HostEvents = () => {
    //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/api/hostEvents', fetcher);
    //Handle the error state
    if (error) return <Error statusCode={error} />;
    //Handle the loading state
    if (!data) return <></>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    const content = JSON.parse(data);
    const capitalizeFirstWords = capitalizeSentences(content.text);
    const formatText = joinSentencesWithPeriodAndBreak(capitalizeFirstWords);
    return (
        <>
            <ImageTextCard
                title={content.title}
                text={formatText}
                altText={content.imagesUrl[1].alt}
                imageUrl={content.imagesUrl[1].url}
                imageBgUrl={content.imagesUrl[0].url}
                bgAlt={content.imagesUrl[0].alt}
                btnsList={content.buttons}
            />
        </>
    );
};

export default HostEvents;
