import { menuItems } from 'constants/menuItems';
import MenuItems from './MenuItems';
const Menu = () => {
    return (
        <div>
            <ul className="flex md:flex-row flex-col items-center justify-center list-none">
                {menuItems.map((menu, index) => {
                    return <MenuItems items={menu} key={index} />;
                })}
            </ul>
        </div>
    );
};

export default Menu;
