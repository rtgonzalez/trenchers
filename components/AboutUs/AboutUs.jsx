import { ImageTextHero, SlickCarousel, ImageTextCard } from 'components/index';
import useSWR from 'swr';
import Error from 'pages/_error';
import { useInView } from 'react-intersection-observer';
import {
    capitalizeSentences,
    capitalizeWords,
    joinSentencesWithPeriodAndBreak
} from 'utils/jsfunctions';

const fetcher = (url) => fetch(url).then((res) => res.json());

const AboutUs = () => {
    const { ref, inView } = useInView({
        threshold: 0.1
    });

    //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
    const { data, error } = useSWR('/api/aboutUs', fetcher);
    //Handle the error state
    if (error) return <Error statusCode={error} />;
    //Handle the loading state
    if (!data) return <></>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    const content = JSON.parse(data);
    const capitalizeBusinessFriendsText = capitalizeSentences(
        content.businessFriendsStory.text
    );
    const businessFriendsText = joinSentencesWithPeriodAndBreak(
        capitalizeBusinessFriendsText
    );
    const capitalizeplaceHistText = capitalizeSentences(
        content.businessFriendsStory.text
    );
    const placeHistTextText = joinSentencesWithPeriodAndBreak(
        capitalizeplaceHistText
    );

    return (
        <section className="container flex flex-col mt-40 mb-10">
            <div className=" flex flex-col  overflow-x-auto shadow-xl  w-full bg-white rounded-lg p-8  opacity-90 mx-20 mb-10">
                <div className="md:mt-2 mt-8">
                    <ImageTextCard
                        title={capitalizeWords(content.placeHist.title)}
                        text={placeHistTextText}
                        imageUrl={content.placeHist.img.url}
                        altText={content.placeHist.img.alt}
                    />
                </div>
            </div>
            <div className=" flex flex-col overflow-x-auto shadow-xl  w-full bg-white rounded-lg p-8  opacity-90 mx-20 mb-10">
                <div className="md:mt-2 mt-8">
                    <ImageTextCard
                        title={capitalizeWords(
                            content.businessFriendsStory.title
                        )}
                        text={businessFriendsText}
                        altText={content.businessFriendsStory.img.url}
                        imageUrl={content.businessFriendsStory.img.url}
                        imageSide="image-right"
                    />
                </div>
            </div>
            <div>{/*   <SlickCarousel data={content.owners} /> */}</div>
        </section>
    );
};

export default AboutUs;
