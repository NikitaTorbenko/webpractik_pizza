import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import '../assets/scss/components/_pizza-item.scss';
import { Pizza } from '../types';
import { ReactComponent as All } from '../assets/icons/pizza_item/all.svg';
import { ReactComponent as Spicy } from '../assets/icons/pizza_item/spicy.svg';
import { ReactComponent as Meat } from '../assets/icons/pizza_item/meat.svg';
import { ReactComponent as Cheese } from '../assets/icons/pizza_item/cheese.svg';
import { ReactComponent as Vegan } from '../assets/icons/pizza_item/vegan.svg';

type obj = {
  [key: number]: ReactNode;
};

const pizzaIcon: obj = {
  0: <Spicy />,
  1: <Meat />,
  2: <Cheese />,
  3: <Vegan />,
};

export const PizzaItem = ({
  imageUrl,
  category,
  description,
  price,
  sizes,
  title,
}: Pizza) => {
  const [index, setIndex] = useState<number>(1);

  const handleClick = (i: number) => {
    setIndex(i);
  };

  return (
    <div className='pizza-item'>
      <div className='pizza-item__category'>{pizzaIcon[category]}</div>
      <div className='pizza-item__img'>
        <div className={`pizza-item__img--${index}`}>
          <img src={imageUrl} alt={title} />
        </div>
      </div>
      <h4 className='pizza-item__title'>{title}</h4>
      <div className='pizza-item__description'>{description}</div>
      <div className='pizza-item-size'>
        <div className='pizza-item-size__title'>Размер, см:</div>
        <div className='pizza-item-sizes'>
          <div
            style={{ transform: `translateX(${index * 60}px)` }}
            className='pizza-item-size-item-line'
          ></div>
          {sizes &&
            sizes.map((el, i) => (
              <>
                <div
                  className={`pizza-item-size-item ${
                    i === index ? 'pizza-item-size-item--active' : ''
                  }`}
                  onClick={() => handleClick(i)}
                  key={i}
                >
                  <span>{el}</span>
                </div>
              </>
            ))}
        </div>
      </div>
      {/* <div className='pizza-item__price'>от {price[0]} руб.</div> */}
      <div className='pizza-item__price'>от {price[index]} руб.</div>
      <button className='btn pizza-item__order-btn'>Заказать</button>
    </div>
  );
};
// "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",