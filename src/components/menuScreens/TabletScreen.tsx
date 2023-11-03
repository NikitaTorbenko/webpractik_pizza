import React from 'react';
import '../../assets/scss/widgets/_menu.scss';
import { useScroll } from '../../hooks/useScroll';
import { ReactComponent as Phone } from '../../assets/icons/menu/Phone.svg';
import { ReactComponent as Cart } from '../../assets/icons/menu/Cart.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu/menuIcon.svg';
import { ReactComponent as Logo } from '../../assets/icons/menu/Logo.svg';

export const TabletScreen = () => {
  const scroll = useScroll();

  return (
    <>
      <div className='tabletScreen'>
        <Logo className='menu-logo-tablet' />
        <div className='tabletScreen-item-wrap'>
          <div className='tabletScreen-item'>
            <div className='menu-phone'>
              <Phone className='menu-icon' />
            </div>
            <div className='menu-cart'>
              <div className='menu-cart-icon'>
                <Cart className='menu-icon' />
                <div className='menu-cart-icon__counter'>0</div>
              </div>
            </div>
          </div>
          <div className='tabletScreen-item'>
            <div
              className={`menu-lang ${
                scroll >= 156 ? 'menu-lang-tablet--small' : ''
              }`}
            >
              En
            </div>
            <MenuIcon />
          </div>
        </div>
      </div>
    </>
  );
};
