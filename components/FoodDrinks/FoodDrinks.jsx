import { ImageTextCard } from 'components/index';
import { formatTextSplitStr } from 'utils/jsfunctions';
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
    const text = formatTextSplitStr(content.text, '.', '.\n');
    return (
        <section>
            <ImageTextCard
                title={content.title}
                titleText={content.titleText}
                text={text}
                altText={content.image.alt}
                imageUrl={content.image.url}
                btnsList={content.buttons}
                imageSide="image-text-card-wrapper-left"
            />
        </section>
    );
};
export default FoodDrinks;
