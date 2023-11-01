import React from 'react';
import '../assets/scss/widgets/_dilivery.scss';
import Icon1 from '../assets/icons/delivery/1.svg';
import Icon2 from '../assets/icons/delivery/2.svg';
import Icon3 from '../assets/icons/delivery/3.svg';

const deliveryList = [
  {
    icon: Icon1,
    title: 'Заказ',
    description:
      'После оформления заказа мы свяжемся с вами для уточнения деталей.',
  },
  {
    icon: Icon2,
    title: 'Доставка курьером',
    description:
      'Мы доставим вашу пиццу горячей. Бесплатная доставка по городу.',
  },
  {
    icon: Icon3,
    title: 'Оплата',
    description:
      'Оплатить можно наличными или картой курьеру. И золотом тоже можно.',
  },
];

export const DeliveryAndPayment = () => {
  return (
    <div className='delivery'>
      <div className='container'>
        <div className='delivery-inner'>
          <h2 className='delivery__title'>Доставка и оплата</h2>
          <div className='delivery-order'>
            {deliveryList.map(el => (
              <div className='delivery-order-item' key={el.description}>
                <div className='delivery-order-item__icon'>
                  <img src={el.icon} alt='' />
                </div>
                <div className='delivery-order-item-right'>
                  <h4 className='delivery-order-item-right__title'>
                    {el.title}
                  </h4>
                  <div className='delivery-order-item-right__description'>
                    {el.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
