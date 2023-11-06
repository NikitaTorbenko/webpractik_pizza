import React from 'react';
import '../../assets/scss/widgets/_menu.scss';
import { ReactComponent as CloseSidebar } from '../../assets/icons/menu/close.svg';
import { ReactComponent as Logo } from '../../assets/icons/sidebar/logo.svg';
import { menuItemsType } from '../../types';

interface SidebarProps {
  isActiveBurger: boolean;
  setIsActiveBurger: (param: boolean) => void;
  menuItems: menuItemsType[];
}

export const Sidebar = ({
  isActiveBurger,
  setIsActiveBurger,
  menuItems,
}: SidebarProps) => {
  return (
    <div
      className={`sidebar ${
        isActiveBurger ? 'sidebarActive' : 'sidebarInactive'
      }`}
    >
      <div className='sidebarContainer'>
        <div className='sidebarTop'>
          <div className='sidebarTop-icons'>
            <Logo className='sidebarTop-icons__logo' />
            <CloseSidebar onClick={() => setIsActiveBurger(false)} />
          </div>
          <div className='menu-navbar'>
            {menuItems.map((el, index) => (
              <div className='menu-navbar__item' key={index}>
                {el.title}
              </div>
            ))}
          </div>
        </div>
        <div className='sidebarBottom'>
          <div className='menu-contact'>
            <div className='menu-contact__title'>Заказать по телефону</div>
            <div className='menu-contact__number'>+7 (918) 432-65-87</div>
            <div className='menu-contact__time'>Ежедневно с 9:00 до 23:00</div>
          </div>
          <div className='sidebarBottom-lang'>English</div>
        </div>
      </div>
    </div>
  );
};
