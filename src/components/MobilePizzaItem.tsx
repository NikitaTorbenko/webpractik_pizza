import React, { useState } from 'react';
import '../assets/scss/components/_mobile-pizza-item.scss';
import { ReactComponent as Spicy } from '../assets/icons/pizza_item/spicy.svg';
import { ReactComponent as Meat } from '../assets/icons/pizza_item/meat.svg';
import { ReactComponent as Cheese } from '../assets/icons/pizza_item/cheese.svg';
import { ReactComponent as Vegan } from '../assets/icons/pizza_item/vegan.svg';
import { Pizza, selectIcon } from '../types';

export const MobilePizzaItem = ({
  imageUrl,
  category,
  description,
  price,
  sizes,
  title,
}: Pizza) => {
  const [isPressed, setIsPressed] = useState(false);
  const [index, setIndex] = useState(1);

  const handleClick = (i: number) => {
    setIndex(i);
  };

  const pizzaIcon: selectIcon = {
    0: <Spicy />,
    1: <Meat />,
    2: <Cheese />,
    3: <Vegan />,
  };

  return (
    <div className='mobile-pizza-item'>
      <div className='mobile-pizza-item__category'>{pizzaIcon[category]}</div>
      <div className='mobile-pizza-item__img'>
        <div className={`mobile-pizza-item__img--${index}`}>
          <img src={imageUrl} alt={title} />
        </div>
      </div>
      <div className='mobile-pizza-item-content'>
        <h4 className='mobile-pizza-item__title'>{title}</h4>
        <div className='mobile-pizza-item__description'>{description}</div>
        <div className='mobile-pizza-item-size'>
          <div className='mobile-pizza-item-size__title'>Размер, см:</div>
          <div className='mobile-pizza-item-sizes'>
            <div
              style={{ transform: `translateX(${index * 60}px)` }}
              className='mobile-pizza-item-size-item-line'
            />
            {sizes &&
              sizes.map((el, i) => (
                <div
                  className={`pizza-item-size-item ${
                    i === index ? 'mobile-pizza-item-size-item--active' : ''
                  }`}
                  onClick={() => handleClick(i)}
                  key={i}
                >
                  <span className={`${i === index ? 'active' : ''}`}>{el}</span>
                </div>
              ))}
          </div>
        </div>
        <button
          onClick={() => setIsPressed(true)}
          className={`btn mobile-pizza-item__order-btn ${
            isPressed ? 'btn--pressed' : ''
          }`}
        >
          от {price[index]} руб
        </button>
      </div>
    </div>
  );
};
