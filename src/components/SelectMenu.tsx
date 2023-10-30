import { useState } from 'react';
import '../assets/scss/components/_select-menu.scss';

interface SelectMenuMenuProps {
  className: string;
  menuItems: string[];
  horizontalMargin?: number;
  initialActiveItem: number;
}

export const SelectMenu = ({
  className,
  initialActiveItem,
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
          className={`${
            activeItem === index
              ? 'select-menu__item select-menu__item--active'
              : 'select-menu__item'
          }`}
          onClick={() => setActiveItem(index)}
          key={index}
        >
          {el}
        </div>
      ))}
    </div>
  );
};
