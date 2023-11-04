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
        {/* {children} */}
      </div>
    </div>
  );
};
