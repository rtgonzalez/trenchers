/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'components/index';
import Error from 'pages/_error';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useSWR from 'swr';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
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
    const socialNetworkList = content.socialNetwork.socialNetworksList;

    return (
        <nav className="fixed top-0  left-0 right-0 md:w-full z-[999] cstm-white-subtitle bg-black opacity-80 md:h-[7rem] h-full">
            <div className="flex md:flex-row flex-col  md:justify-between justify-center">
                <div className="flex flex-col items-start  justify-center  md:w-[18%] w-[40%] md:h-[15%]">
                    <div className="flex md:justify-start justify-center pl-2">
                        <FontAwesomeIcon
                            icon={['fas', 'phone']}
                            className="fas-phone-icon"
                        />
                        <p className="flex items-center justify-center cstm-white-menu-text hover:text-clrgolden">
                            {contact.phone}
                        </p>
                    </div>

                    <div className="flex items-center justify-center w-[11rem] h-[2.5rem] text-center cstm-border-2-golden rounded semi-bold mt-2 ml-2 p-1 hover:bg-clrgolden">
                        <Link href={contact.buttons[1].url} legacyBehavior>
                            <a target={contact.buttons[1].target}>
                                <p className="cstm-white-menu-text">
                                    {contact.buttons[1].title}
                                </p>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-[2] items-center justify-start mt-2 w-[60%]  max-[768px]:hidden">
                    <Menu />
                </div>
                {/* Mobile Menu (hidden by default) */}
                {isOpen && (
                    <div className="flex flex-[3] items-center justify-center mt-2 w-full h-[40%] md:hidden">
                        <Menu />
                    </div>
                )}
                <div>
                    <ul className=" flex w-[15%] h-[20%] absolute top-3 md:left-[88%] left-[55%] text-center px-[15px]">
                        {socialNetworkList.map((socialNetwork) => (
                            <li className="text-cstmgolden p-3">
                                <Link href={socialNetwork.url}>
                                    <FontAwesomeIcon
                                        icon={[
                                            'fab',
                                            socialNetwork.name.toLowerCase()
                                        ]}
                                        className={`${socialNetwork.class}`}
                                    />
                                </Link>
                            </li>
                        ))}

                        <li>
                            <div className="md:hidden block pl-3 pt-2">
                                <button type="button" onClick={toggleMenu}>
                                    <FontAwesomeIcon
                                        icon={['fas', 'bars']}
                                        className="fas-bars-icon"
                                    />
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
