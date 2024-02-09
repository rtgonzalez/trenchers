/* eslint-disable react/jsx-key */
import MenuItems from './MenuItems';
import useSWR from 'swr';
import Error from 'pages/_error';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const Menu = () => {
    const { data: menuData, error: menuError } = useSWR(
        '/api/menuItems',
        fetchData
    );

    if (menuError) {
        return <Error statusCode={menuError} />;
    }

    if (!menuData) {
        return <div></div>;
    }
    const menuContent = JSON.parse(menuData);
    const menuItems = menuContent.menuItems;

    return (
        <div className="mt-6 ml-20 relative">
            <ul className="flex flex-col gap-1 md:flex-row space-x-2">
                {menuItems.map((menu, index) => {
                    return <MenuItems items={menu} key={index} />;
                })}
            </ul>
        </div>
    );
};

export default Menu;
