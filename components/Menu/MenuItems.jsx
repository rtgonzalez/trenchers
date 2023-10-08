import { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
import Image from 'next/image';
import Link from 'next/link';

const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);

    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (
                dropdown &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                setDropdown(false);
            }
        };
        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };

    const closeDropdown = () => {
        dropdown && setDropdown(false);
    };

    return (
        <li
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={closeDropdown}
        >
            {items.url && items.submenu ? (
                <div>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        className="cstm-menu-btn"
                        aria-expanded={dropdown ? 'true' : 'false'}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {window.innerWidth < 960 && depthLevel === 0 ? (
                            items.title
                        ) : (
                            <Link href={items.url} legacyBehavior>
                                <a
                                    className="cstm-menu-link"
                                    target={items.target}
                                >
                                    <p className="cstm-white-menu-text">
                                        {items.title}
                                    </p>
                                </a>
                            </Link>
                        )}

                        {depthLevel > 0 &&
                        window.innerWidth < 960 ? null : depthLevel > 0 &&
                          window.innerWidth > 960 ? (
                            <span>&raquo;</span>
                        ) : (
                            <span className="cstm-menu-arrow" />
                        )}
                    </button>
                    <Dropdown
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                    />
                </div>
            ) : !items.url && items.submenu ? (
                <div>
                    <button
                        type="button"
                        className="cstm-menu-btn"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? 'true' : 'false'}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}{' '}
                        {depthLevel > 0 ? (
                            <span>&raquo;</span>
                        ) : (
                            <span className="cstm-menu-arrow" />
                        )}
                    </button>
                    {/*  <Dropdown
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                    /> */}
                </div>
            ) : (
                <div>
                    {items.image ? (
                        <div>
                            <Link href={items.url} legacyBehavior>
                                <a target={items.target}>
                                    <Image
                                        src={items.image.url}
                                        alt={items.image.alt}
                                        width={250}
                                        height={80}
                                        priority
                                        className="px-2"
                                    />
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
