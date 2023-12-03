/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'components/index';
import Error from 'pages/_error';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoIosArrowDown } from 'react-icons/io';
import useSWR from 'swr';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [isOpenResv, setIsOpenResv] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const toggleReserv = () => {
        setIsOpenResv(!isOpenResv);
    };

    const { data: locData, error: locError } = useSWR(
        '/api/location',
        fetchData
    );

    if (locError) {
        return <Error statusCode={locError} />;
    }

    if (!locData) {
        return <div></div>;
    }

    const content = JSON.parse(locData);
    const contact = content.location.contact;
    const socialNetworkList = content.socialNetwork.socialNetworksList;
    return (
        <nav className="fixed top-0 left-0 right-0 md:w-full z-[999] cstm-white-subtitle bg-black opacity-80 md:h-[7rem]">
            <div className="flex items-center md:mt-1 my-3">
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center">
                        <div>
                            <FontAwesomeIcon
                                icon={['fas', 'phone']}
                                className="fas-phone-icon"
                            />
                        </div>
                        <div>
                            <p className="cstm-white-menu-text">
                                {contact.phone}
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="flex justify-center items-center relative rounded overflow-hidden group bg-clrgolden  hover:bg-gradient-to-r hover:from-white hover:to-clrgolden cstm-black-text hover:ring-2 hover:ring-offset-2 hover:ring-clrgolden transition-all ease-out duration-300 mb-4 mr-4 border-2 border-clrgolden">
                            <button onClick={toggleReserv}>
                                <div className="flex items-center justify-center">
                                    <div>
                                        <p className="cstm-black-menu-text">
                                            {contact.buttons[1].title}
                                        </p>
                                    </div>
                                    <div className="cstm-black-menu-text">
                                        <IoIosArrowDown />
                                    </div>
                                </div>
                            </button>
                        </div>
                        {isOpenResv && (
                            <div className="absolute z-10 left-2 top-13 md:mt-2 mt-1 bg-clrwhite text-black font-semibold rounded">
                                <ul className="flex flex-col">
                                    {contact.buttons[1].submenu.map(
                                        (item, index) => (
                                            <li
                                                className="h-8 w-40 md:pl-4 pl-10 hover:text-white hover:bg-black"
                                                key={index}
                                            >
                                                <Link
                                                    href={item.url}
                                                    legacyBehavior
                                                >
                                                    <a target={item.target}>
                                                        <div className="flex items-center md:text-lg text-xs font-semibold hover:text-white">
                                                            <div className="pl-2">
                                                                {item.title}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div className="hidden md:block">
                    <Menu />
                </div>
                <div className="absolute top-4 md:left-[87%] left-[45%]">
                    <ul className="flex justify-center items-center space-x-1">
                        {socialNetworkList.map((socialNetwork) => (
                            <li className="text-cstmgolden">
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
                    </ul>
                </div>
                <div className="md:hidden absolute top-6 left-[90%]">
                    <button
                        onClick={toggleNavbar}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6 fas-bars-icon"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden mt-2 flex flex-col items-center h-screen">
                    <Menu />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
