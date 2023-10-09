import React from 'react';
import Head from 'next/head';
import useSWR from 'swr';
import Error from 'pages/_error';

function Header() {
    //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/api/header', fetcher);
    //Handle the error state
    if (error) return <Error statusCode={error} />;
    //Handle the loading state
    if (!data) return <></>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    const content = JSON.parse(data);

    return (
        <>
            <Head>
                <title>{content.header.title}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
                <meta
                    name="description"
                    content={content.header.metas['description']}
                />
                <link rel="icon" href={content.header.logoImage} />
            </Head>
        </>
    );
}

export default Header;
