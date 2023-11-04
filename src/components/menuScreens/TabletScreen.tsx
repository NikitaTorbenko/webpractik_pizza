import React, { useState } from 'react';
import '../../assets/scss/widgets/_menu.scss';
import { useScroll } from '../../hooks/useScroll';
import { ReactComponent as Phone } from '../../assets/icons/menu/Phone.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/menu/Cart.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu/menuIcon.svg';
import { ReactComponent as Logo } from '../../assets/icons/menu/Logo.svg';
import { Sidebar } from './Sidebar';
import { MenuProps } from '../../widgets/Menu';
import { Cart } from '../../widgets/Cart';

export const TabletScreen = ({ menuItems }: MenuProps) => {
  const scroll = useScroll();
  const [isActiveBurger, setIsActiveBurger] = useState(false);
  const [isActiveCart, setIsActiveCart] = useState(false);

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
              {isActiveCart && <Cart setIsActive={setIsActiveCart} />}

              <div
                onClick={() => setIsActiveCart(true)}
                className='menu-cart-icon'
              >
                <CartIcon className='menu-icon' />
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
            <Sidebar
              menuItems={menuItems}
              isActiveBurger={isActiveBurger}
              setIsActiveBurger={setIsActiveBurger}
            />
            <MenuIcon onClick={() => setIsActiveBurger(true)} />
          </div>
        </div>
      </div>
    </>
  );
};
