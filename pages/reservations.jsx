import Link from 'next/link';
import {
    ImageWithCenteredText,
    ButtonsAnimatedGroup,
    ContactForm,
    ImagesCarousel
} from 'components/index';
import useSWR from 'swr';
import Error from 'pages/_error';
import { capitalizeSentences } from 'utils/jsfunctions';

const Reservations = () => {
    //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/api/reservations', fetcher);
    //Handle the error state
    if (error) return <Error statusCode={error} />;
    //Handle the loading state
    if (!data) return <></>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    const content = JSON.parse(data);
    const formatText1 = capitalizeSentences(content.text1);
    const formatText2 = capitalizeSentences(content.text2);

    return (
        <div className="flex flex-col  items-center space-y-8 mt-[6rem]">
            <ImageWithCenteredText
                bgImgUrl={content.heroImg.url}
                bgImgAlt={content.heroImg.alt}
                title={content.heroImg.title}
                text={content.heroImg.text}
            />

            <div className="w-1/2">
                <h1 className="tracking-wider leading-6 md:text-4xl text-3xl text-center font-bold  text-[#B59410]">
                    {content.title}
                </h1>
            </div>
            <div className="w-[60%] flex flex-col justify-center items-center">
                <div>
                    <h2 className="tracking-wider leading-6 text-center cstm-black-subtitle">
                        <p>{formatText1}</p>
                        <br />
                        <span>{content.linkSec.text1}</span>
                        <span className="px-2 ">
                            <Link
                                href={content.linkSec.link.url}
                                legacyBehavior
                            >
                                <a
                                    target={content.linkSec.link.target}
                                    className="text-[#B59410] font-bold hover:underline-offset-4"
                                >
                                    {content.linkSec.link.title}
                                </a>
                            </Link>
                        </span>
                        <span>{content.linkSec.text2}</span>
                        <br />
                        <br />
                        <p>{formatText2}</p>
                    </h2>
                </div>
                <div>
                    <ButtonsAnimatedGroup btnsList={content.buttons} />
                </div>
            </div>

            <div className="md:w-[50%] w-full">
                <ContactForm content={content.contactForm} />
            </div>
            <div>
                <ImagesCarousel
                    images={content.slidershow.items}
                    title={content.slidershow.title}
                />
            </div>
        </div>
    );
};

export default Reservations;
