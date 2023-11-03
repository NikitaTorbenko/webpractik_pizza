import React from 'react';
import '../../assets/scss/widgets/_menu.scss';
import { useScroll } from '../../hooks/useScroll';
import { ReactComponent as Phone } from '../../assets/icons/menu/Phone.svg';
import { ReactComponent as Logo } from '../../assets/icons/menu/Logo.svg';
import { ReactComponent as Cart } from '../../assets/icons/menu/Cart.svg';
import { SelectMenu } from '../SelectMenu';
import { menuItemsType } from '../../types';

interface LargeScreenProps {
  menuItems: menuItemsType[];
}

export const LargeScreen = ({ menuItems }: LargeScreenProps) => {
  const scroll = useScroll();

  return (
    <>
      <Logo className={`${scroll >= 156 ? 'menu-logo' : ''}`} />
      <SelectMenu
        isMenu
        className='menu-menu'
        horizontalMargin={60}
        menuItems={menuItems}
        initialActiveItem={1}
      />
      <div className='menu-phone'>
        <Phone className={`${scroll >= 156 ? 'menu-icon' : ''}`} />
        <div className='menu-phone-inner'>
          <div
            className={`menu-phone__number ${
              scroll >= 156 ? 'menu-phone__number--small' : ''
            }`}
          >
            +7 (918) 432-65-87
          </div>
          <div className='menu-phone__time'>Ежедневно с 9:00 до 23:00</div>
        </div>
      </div>
      <div className='menu-cart'>
        <div className='menu-cart-icon'>
          <Cart className={`${scroll >= 156 ? 'menu-icon' : ''}`} />
          <div className='menu-cart-icon__counter'>0</div>
        </div>
        <div className='menu-cart-inner'>
          <div
            className={`menu-cart__title ${
              scroll >= 156 ? 'menu-cart__title--small' : ''
            }`}
          >
            Ваш заказ
          </div>
          <div className='menu-cart__subtitle'>Итальянская и ещё 2 пиццы</div>
        </div>
      </div>
      <div className={`menu-lang ${scroll >= 156 ? 'menu-lang--small' : ''}`}>
        En
      </div>
    </>
  );
};
