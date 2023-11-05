import { useState } from 'react';
import '../assets/scss/components/_pizza-item.scss';
import { Pizza, selectIcon } from '../types';
import { ReactComponent as Spicy } from '../assets/icons/pizza_item/spicy.svg';
import { ReactComponent as Meat } from '../assets/icons/pizza_item/meat.svg';
import { ReactComponent as Cheese } from '../assets/icons/pizza_item/cheese.svg';
import { ReactComponent as Vegan } from '../assets/icons/pizza_item/vegan.svg';
import { useWindowSize } from '../hooks/useWindowSize';
import { MobilePizzaItem } from './MobilePizzaItem';

const pizzaIcon: selectIcon = {
  0: <Spicy />,
  1: <Meat />,
  2: <Cheese />,
  3: <Vegan />,
};

export const PizzaItem = (props: Pizza) => {
  const { imageUrl, category, description, price, sizes, title } = props;
  const dimensions = useWindowSize();
  const [isPressed, setIsPressed] = useState(false);
  const [index, setIndex] = useState(1);

  const handleClick = (i: number) => {
    setIndex(i);
  };

  return (
    <>
      {dimensions.width >= 400 ? (
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
              />
              {sizes &&
                sizes.map((el, i) => (
                  <div
                    className={`pizza-item-size-item ${
                      i === index ? 'pizza-item-size-item--active' : ''
                    }`}
                    onClick={() => handleClick(i)}
                    key={i}
                  >
                    <span className={`${i === index ? 'active' : ''}`}>
                      {el}
                    </span>
                  </div>
                ))}
            </div>
          </div>
          <div className='pizza-item__price'>от {price[index]} руб.</div>
          <button
            onClick={() => setIsPressed(true)}
            className={`btn pizza-item__order-btn ${
              isPressed ? 'btn--pressed' : ''
            }`}
          >
            Заказать
          </button>
        </div>
      ) : (
        <MobilePizzaItem {...props} />
      )}
    </>
  );
};
