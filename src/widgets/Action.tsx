import React from 'react';
import action_1 from '../assets/img/action/action_1.jpg';
import action_2 from '../assets/img/action/action_2.jpg';
import action_3 from '../assets/img/action/action_3.jpg';
import { ActionItem } from '../components/ActionItem';
import { IAction } from '../types';

const actions: IAction[] = [
  {
    img: action_1,
    title: 'Закажи 2 пиццы – 3-я в подарок',
    text: 'При заказе 2-х больших пицц – средняя пицца в подарок',
  },
  {
    img: action_2,
    title: 'Напиток в подарок',
    text: 'Скидка на заказ от 3 000 рублей + напиток в подарок',
  },
  {
    img: action_3,
    title: '25% при первом заказе',
    text: 'Скидка новым клиентам!',
  },
];

export const Action = () => {
  return (
    <div className='container'>
      <div className='action'>
        {actions.map((el, index) => (
          <ActionItem action={el} key={index} />
        ))}
      </div>
    </div>
  );
};
