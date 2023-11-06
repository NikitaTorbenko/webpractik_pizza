import React from 'react';
import '../assets/scss/widgets/_cart.scss';
import { ReactComponent as CloseIcon } from '../assets/icons/cart/close.svg';
import { Pizza } from '../types';
import { CartItem } from '../components/CartItem';
// import img from '../assets/icons/'

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
    id: '8',
    imageUrl: 'https://i.imgur.com/t9yGuON.png',
    title: 'Сырная',
    description: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
    sizes: 40,
    price: 820,
    category: 2,
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
              <CartItem {...el} index={index} key={index} />
            ))}
          </div>
          <div className='total-price'>
            Сумма заказа:<span>1 887</span> руб
          </div>
          <div className='modal-contact'>
            <div className='modal-contact__title'>Контакты</div>
            <div className='modal-input-top-block'>
              <div className='modal-input-top-wrap'>
                <input className='modal-input-top' type='text' required />
                <span>Ваше имя</span>
              </div>
              <div className='modal-input-top-wrap'>
                <input className='modal-input-top' type='text' required />
                <span>Телефон</span>
              </div>
            </div>
            <div style={{ width: '100%' }} className='modal-input-top-wrap'>
              <input
                className='modal-input-top modal-input-bottom'
                type='text'
                required
              />
              <span>Адрес доставки</span>
            </div>
            <div className='payment-method'>
              <div className='payment-method__title'>Способ оплаты</div>
              <div className='payment-method-item'>
                <input
                  className='payment-method-item__input'
                  type='radio'
                  name='male'
                  id='radio_1'
                />
                <label className='payment-method-item__label' htmlFor='radio_1'>
                  Оплата наличными или картой курьеру
                </label>
              </div>
              <div className='payment-method-item'>
                <input
                  className='payment-method-item__input'
                  type='radio'
                  name='male'
                  id='radio_2'
                />
                <label className='payment-method-item__label' htmlFor='radio_2'>
                  Оплата картой онлайн на сайте
                </label>
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
