import { ImageTextCard } from 'components/index';
import {
    capitalizeSentences,
    capitalizeWords,
    joinSentencesWithPeriodAndBreak
} from 'utils/jsfunctions';
import useSWR from 'swr';
import Error from 'pages/_error';

const FoodDrinks = () => {
    //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/api/foodDrinks', fetcher);
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
    const capitalizeFirstWords = capitalizeSentences(content.text);
    const formatText = joinSentencesWithPeriodAndBreak(capitalizeFirstWords);
    return (
        <section className="md:mt-2 mt-8">
            <ImageTextCard
                title={capitalizeWords(content.title)}
                titleText={content.titleText}
                text={formatText}
                altText={content.image.alt}
                imageUrl={content.image.url}
                btnsList={content.buttons}
            />
        </section>
    );
};
export default FoodDrinks;
