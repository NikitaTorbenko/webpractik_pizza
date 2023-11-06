import React, { useState } from 'react';
import { ReactComponent as MiniCloseIcon } from '../assets/icons/cart/smallClose.svg';
import { ReactComponent as Spicy } from '../assets/icons/pizza_item/spicy.svg';
import { ReactComponent as Meat } from '../assets/icons/pizza_item/meat.svg';
import { ReactComponent as Cheese } from '../assets/icons/pizza_item/cheese.svg';
import { ReactComponent as Vegan } from '../assets/icons/pizza_item/vegan.svg';
import { selectIcon } from '../types';

const pizzaIcon: selectIcon = {
  0: <Spicy />,
  1: <Meat />,
  2: <Cheese />,
  3: <Vegan />,
};

interface CartItemProps {
  id: string;
  category: number;
  imageUrl: string;
  title: string;
  sizes: number;
  price: number;
  index: number;
}

export const CartItem = ({
  category,
  imageUrl,
  title,
  sizes,
  price,
  index,
}: CartItemProps) => {
  const [count, setCount] = useState(1);

  return (
    <div className='modal-pizza-item'>
      <div className='modal-pizza-item-left-side'>
        <div className='modal-pizza-item__img'>
          <div className='modal-pizza-item__category'>
            {pizzaIcon[category]}
          </div>
          <div className={`modal-pizza-item__img--${index}`}>
            <img src={imageUrl} alt={title} />
          </div>
        </div>
        <div className='modal-pizza-item-left-side-info'>
          <div className='modal-pizza-item__title'>{title}</div>
          <div className='modal-pizza-item__size'>{sizes} см</div>
        </div>
      </div>
      <div className='modal-pizza-item-count'>
        <div
          onClick={() => count !== 1 && setCount(prev => prev - 1)}
          className={`modal-pizza-item-count__img${
            count === 1 ? ' modal-pizza-item-count__img--disable' : ''
          }`}
        >
          -
        </div>
        <div className='modal-pizza-item-count__number'>{count}</div>
        <div
          onClick={() => setCount(prev => prev + 1)}
          className='modal-pizza-item-count__img'
        >
          +
        </div>
      </div>
      <div className='modal-pizza-item-price'>
        <span>{price * count}</span> руб
      </div>
      <MiniCloseIcon className='modal-pizza-item-close' />
    </div>
  );
};
