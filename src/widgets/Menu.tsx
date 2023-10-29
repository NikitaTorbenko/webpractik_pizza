import React from 'react';
import '../assets/scss/widgets/_menu.scss';
import { ReactComponent as Logo } from '../assets/icons/menu/Logo.svg';
import { ReactComponent as Phone } from '../assets/icons/menu/Phone.svg';
import { ReactComponent as Cart } from '../assets/icons/menu/Cart.svg';
import { SelectMenu } from '../components/SelectMenu';

const menuItems = ['Меню', 'О нас', 'Контакты'];

export const Menu = () => {
  return (
    <div className='menu'>
      <div className='container'>
        <div className='menu-inner'>
          <Logo />
          <SelectMenu
            className='menu-menu'
            horizontalMargin={60}
            menuItems={menuItems}
          />
          <div className='menu-phone'>
            <Phone />
            <div className='menu-phone-inner'>
              <div className='menu-phone__number'>+7 (918) 432-65-87</div>
              <div className='menu-phone__time'>Ежедневно с 9:00 до 23:00</div>
            </div>
          </div>
          <div className='menu-cart'>
            <div className='menu-cart-icon'>
              <Cart />
              <div className='menu-cart-icon__counter'>0</div>
            </div>
            <div className='menu-cart-inner'>
              <div className='menu-cart__title'>Ваш заказ</div>
              <div className='menu-cart__subtitle'>
                Итальянская и ещё 2 пиццы
              </div>
            </div>
          </div>
          <div className='menu-lang'>En</div>
        </div>
      </div>
    </div>
  );
};
