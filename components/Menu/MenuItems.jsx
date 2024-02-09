import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import { MdDeliveryDining } from 'react-icons/md';

const MenuItems = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li>
            {items.url && items.submenu ? (
                <div className="relative">
                    <div>
                        <Link href={items.url} legacyBehavior>
                            <a
                                className="flex items-center justify-center"
                                target={items.target}
                                onClick={toggleNavbar}
                            >
                                <div className="flex items-center">
                                    <div className="cstm-white-menu-text">
                                        {items.title}
                                    </div>
                                    <div>
                                        <IoIosArrowDown className="ml-1" />
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    {isOpen && (
                        <div
                            className="absolute z-10 left-2 top-8 mt-3 bg-clrwhite text-black font-semibold rounded"
                            onMouseEnter={() => setIsOpen(true)}
                            onMouseLeave={() => setIsOpen(false)}
                        >
                            <ul className="flex flex-col ">
                                {items.submenu.map((item, index) => (
                                    <li
                                        className=" flex items-center pt-2 h-10 w-40 md:pl-4 pl-10  hover:text-white hover:bg-black"
                                        key={index}
                                    >
                                        <Link href={item.url} legacyBehavior>
                                            <a target={item.target}>
                                                <div className="flex items-center">
                                                    <div className="md:text-lg text-sm">
                                                        <MdDeliveryDining />
                                                    </div>
                                                    <div className="md:text-lg text-sm pl-2 pb-2">
                                                        {item.title}
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    {items.image ? (
                        <div>
                            <Link href={items.url} legacyBehavior>
                                <a target={items.target}>
                                    <div className="relative md:w-[200px] w-[90px] h-[80px]">
                                        <Image
                                            src={items.image.url}
                                            alt={items.image.alt}
                                            fill
                                            priority
                                            className="md:pb-6 pb-10 object-contain absolute top-0 left-0 h-full w-full"
                                        />
                                    </div>
                                </a>
                            </Link>
                        </div>
                    ) : (
                        <Link href={items.url} legacyBehavior>
                            <a className="cstm-menu-link" target={items.target}>
                                <p className="cstm-white-menu-text">
                                    {items.title}
                                </p>
                            </a>
                        </Link>
                    )}
                </div>
            )}
        </li>
    );
};

export default MenuItems;
