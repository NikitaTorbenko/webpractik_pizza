import React from 'react';
import '../assets/scss/widgets/_cart.scss';
import { ReactComponent as CloseIcon } from '../assets/icons/cart/close.svg';
import { ReactComponent as MiniCloseIcon } from '../assets/icons/cart/smallClose.svg';
import { ReactComponent as Spicy } from '../assets/icons/pizza_item/spicy.svg';
import { ReactComponent as Meat } from '../assets/icons/pizza_item/meat.svg';
import { ReactComponent as Cheese } from '../assets/icons/pizza_item/cheese.svg';
import { ReactComponent as Vegan } from '../assets/icons/pizza_item/vegan.svg';
import { Pizza, selectIcon } from '../types';
// import img from '../assets/icons/'

const pizzaIcon: selectIcon = {
  0: <Spicy />,
  1: <Meat />,
  2: <Cheese />,
  3: <Vegan />,
};

interface CartProps {
  setIsActive: (param: boolean) => void;
  data?: Pizza[];
}

const data = [
  {
    id: '0',
    imageUrl: 'https://i.imgur.com/c2pxEyy.png',
    title: 'Итальянская',
    description: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
    sizes: 30,
    price: 723,
    category: 0,
  },
  {
    id: '1',
    imageUrl:
      'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg',
    title: 'Сырная',
    description: '',
    sizes: 40,
    price: 898,
    category: 3,
  },
];

export const Cart = ({ setIsActive }: CartProps) => {
  const onClickHandler = () => setIsActive(false);

  return (
    <div
      className='modal modalActive'
      style={{ zIndex: 100 }}
      onClick={onClickHandler}
    >
      <div
        className={`modalContent mountedStyle modalContentActive`}
        onClick={e => e.stopPropagation()}
      >
        <div className='modalHeader'>
          <div className='modalHeaderSmallBottom'>
            <h3 className='modalHeaderTitle'>Ваш заказ</h3>
            <CloseIcon onClick={onClickHandler} />
          </div>
        </div>
        <div className='modal-content'>
          <div className='modal-pizza-list'>
            {data.map((el, index) => (
              <div className='modal-pizza-item'>
                <div className='modal-pizza-item-left-side'>
                  <div className='modal-pizza-item__img'>
                    <div className='modal-pizza-item__category'>
                      {pizzaIcon[el.category]}
                    </div>
                    <div className={`modal-pizza-item__img--${index}`}>
                      <img src={el.imageUrl} alt={el.title} />
                    </div>
                  </div>
                  <div className='modal-pizza-item-left-side-info'>
                    <div className='modal-pizza-item__title'>{el.title}</div>
                    <div className='modal-pizza-item__size'>{el.sizes} см</div>
                  </div>
                </div>
                <div className='modal-pizza-item-count'>
                  <div className='modal-pizza-item-count__img modal-pizza-item-count__img--disable'>
                    -
                  </div>
                  <div className='modal-pizza-item-count__number'>1</div>
                  <div className='modal-pizza-item-count__img'>+</div>
                </div>
                <div className='modal-pizza-item-price'>
                  <span>{el.price}</span> руб
                </div>
                <MiniCloseIcon className='modal-pizza-item-close' />
              </div>
            ))}
          </div>
          <div className='total-price'>
            Сумма заказа:<span>1 887</span> руб
          </div>
          <div className='modal-contact'>
            <div className='modal-contact__title'>Контакты</div>
            <div className='modal-input-top-block'>
              <input
                className='modal-input-top'
                placeholder='Ваше имя'
                type='text'
              />
              <input
                className='modal-input-top'
                placeholder='Телефон'
                type='text'
              />
            </div>
            <input
              className='modal-input-bottom'
              placeholder='Адрес доставки'
              type='text'
            />
            <div className='payment-method'>
              <div className='payment-method__title'>Способ оплаты</div>
              <div className='payment-method-item'>
                Оплата наличными или картой курьеру
              </div>
              <div className='payment-method-item'>
                Оплата картой онлайн на сайте
              </div>
            </div>
            <button className='btn payment__btn'>Оформить заказ</button>
            <p className='modal-footer'>
              Нажимая кнопку «Оформить заказ» вы соглашаетесь с политикой
              конфиденциальности
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
