import { useState } from 'react';
import '../assets/scss/components/_select-menu.scss';
import { menuItemsType, selectIcon } from '../types';
import { ReactComponent as All } from '../assets/icons/pizza_item/all.svg';
import { ReactComponent as Spicy } from '../assets/icons/pizza_item/spicy.svg';
import { ReactComponent as Meat } from '../assets/icons/pizza_item/meat.svg';
import { ReactComponent as Cheese } from '../assets/icons/pizza_item/cheese.svg';
import { ReactComponent as Vegan } from '../assets/icons/pizza_item/vegan.svg';

const pizzaIcon: selectIcon = {
  0: <All />,
  1: <Spicy />,
  2: <Meat />,
  3: <Cheese />,
  4: <Vegan />,
};

interface SelectMenuMenuProps {
  className: string;
  menuItems: menuItemsType[];
  horizontalMargin?: number;
  initialActiveItem: number;
  scroll?: number;
}

export const SelectMenu = ({
  className,
  initialActiveItem,
  scroll,
  menuItems,
  horizontalMargin,
}: SelectMenuMenuProps) => {
  const [activeItem, setActiveItem] = useState(initialActiveItem);
  return (
    <div
      className={`select-menu ${className}`}
      style={{ gap: horizontalMargin }}
    >
      {menuItems.map((el, index) => (
        <div
          className='select-menu__item-wrap'
          onClick={() => setActiveItem(index)}
          key={index}
        >
          <span
            className={`${
              activeItem === index
                ? 'select-menu__item select-menu__item--active'
                : 'select-menu__item'
            } ${scroll && scroll >= 156 ? 'select-menu__item--small' : ''}`}
          >
            {el.title}
          </span>
          {el.icon ? (
            <div className='select-menu__item-icon'>
              {pizzaIcon[el.icon - 1]}
            </div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
};
