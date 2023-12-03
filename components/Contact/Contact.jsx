import React from 'react';
import Error from 'pages/_error';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mergeStrings } from 'utils/jsfunctions';
import useSWR from 'swr';
const Contact = () => {
    //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/api/location', fetcher);
    //Handle the error state
    if (error) return <Error statusCode={error} />;
    //Handle the loading state
    if (!data) return <></>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    const content = JSON.parse(data);
    const contact = content.location.contact;

    return (
        <div>
            <div className={`${mergeStrings(['dot'])}`}>
                <FontAwesomeIcon
                    icon={['fas', 'phone']}
                    className="fasPhoneIcon"
                />
                <p>{contact.phone}</p>
            </div>
            <div>
                <Link href={contact.link.url}>{contact.link.title}</Link>
            </div>
        </div>
    );
};

export default Contact;
