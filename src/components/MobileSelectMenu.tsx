import { useState } from 'react';
import '../assets/scss/components/_mobile-select-menu.scss';
import { menuItemsType, selectIcon } from '../types';
import { ReactComponent as All } from '../assets/icons/pizza_item/all.svg';
import { ReactComponent as Spicy } from '../assets/icons/pizza_item/spicy.svg';
import { ReactComponent as Meat } from '../assets/icons/pizza_item/meat.svg';
import { ReactComponent as Cheese } from '../assets/icons/pizza_item/cheese.svg';
import { ReactComponent as Vegan } from '../assets/icons/pizza_item/vegan.svg';

interface SelectMenuMenuProps {
  menuItems: menuItemsType[];
  setValue: (num: number) => void;
}

const pizzaIcon: selectIcon = {
  0: <All />,
  1: <Spicy />,
  2: <Meat />,
  3: <Cheese />,
  4: <Vegan />,
};

export const MobileSelectMenu = ({
  menuItems,
  setValue,
}: SelectMenuMenuProps) => {
  const [activeItem, setActiveItem] = useState(0);

  const onClickHandler = (index: number) => {
    setActiveItem(index);
    setValue(index);
  };

  return (
    <div className='mobile-select-menu'>
      {menuItems.map((el, index) => (
        <div
          className={`mobile-select-menu__item-icon ${
            activeItem === index ? 'mobile-select-menu__item-icon--active' : ''
          }`}
          onClick={() => onClickHandler(index)}
          key={index}
        >
          {/* @ts-ignore */}
          {pizzaIcon[el.icon - 1]}
        </div>
      ))}
    </div>
  );
};
