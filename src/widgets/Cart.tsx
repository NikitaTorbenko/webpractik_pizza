import React from 'react';
import '../assets/scss/widgets/_cart.scss';
import { ReactComponent as CloseIcon } from '../assets/icons/cart/close.svg';

interface CartProps {
  setIsActive: (param: boolean) => void;
}

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
