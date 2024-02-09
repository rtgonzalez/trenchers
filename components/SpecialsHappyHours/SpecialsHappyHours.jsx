import React from 'react';
import { RightLeftTextBgImage } from 'components/index';
import Error from 'pages/_error';
import useSWR from 'swr';
const SpecialsHappyHours = () => {
    //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/api/happyHoursSpecials', fetcher);
    //Handle the error state
    if (error) return <Error statusCode={specialsError} />;
    //Handle the loading state
    if (!data) return <></>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    const jdata = JSON.parse(data);
    const spclsTitle = jdata.specials.title;
    const spclsSubtitle = jdata.specials.subtitle;
    const spclsTextlist = jdata.specials.specialsList;
    const spclsBtnsList = jdata.specials.buttons;
    const spclsImageUrl = jdata.specials.imageUrl;
    const spclsImageAlt = jdata.specials.altUrl;
    const happyHsTitle = jdata.happyHours.title;
    const happyHsSubtitle = jdata.happyHours.subtitle;
    const happyHsTextlist = jdata.happyHours.happyHoursList;
    const happyHsBtnsList = jdata.happyHours.buttons;
    const happyHsImageUrl = jdata.happyHours.imageUrl;
    const happyHImageAlt = jdata.happyHours.altUrl;

    return (
        <section>
            {
                <RightLeftTextBgImage
                    leftTitle={spclsTitle}
                    leftSubtitle={spclsSubtitle}
                    leftTextlist={spclsTextlist}
                    /*leftBtnsList={spclsBtnsList} */
                    leftImageUrl={spclsImageUrl}
                    leftImageAlt={spclsImageAlt}
                    rightTitle={happyHsTitle}
                    rightSubtitle={happyHsSubtitle}
                    rightTextlist={happyHsTextlist}
                    /* rightBtnsList={happyHsBtnsList} */
                    rightImageUrl={happyHsImageUrl}
                    rightImageAlt={happyHImageAlt}
                />
            }
        </section>
    );
};

export default SpecialsHappyHours;
