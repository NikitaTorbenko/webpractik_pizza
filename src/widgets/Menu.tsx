import '../assets/scss/widgets/_menu.scss';
import { menuItemsType } from '../types';
import { useWindowSize } from '../hooks/useWindowSize';
import { useScroll } from '../hooks/useScroll';
import { LargeScreen } from '../components/menuScreens/LargeScreen';
import { TabletScreen } from '../components/menuScreens/TabletScreen';
import { MobileScreen } from '../components/menuScreens/MobileScreen';

export interface MenuProps {
  menuItems: menuItemsType[];
}

const tableWidth = 1380;
const mobileWidth = 560;

export const Menu = ({ menuItems }: MenuProps) => {
  const dimensions = useWindowSize();
  const scroll = useScroll();

  return (
    <div
      className={`menu ${
        dimensions.width > tableWidth && scroll > 156 ? 'menu-active' : ''
      }`}
    >
      <div className='container'>
        <div className='menu-inner'>
          {dimensions.width > tableWidth ? (
            <LargeScreen menuItems={menuItems} />
          ) : dimensions.width > mobileWidth ? (
            <TabletScreen menuItems={menuItems} />
          ) : (
            <MobileScreen menuItems={menuItems} />
          )}
        </div>
      </div>
    </div>
  );
};
