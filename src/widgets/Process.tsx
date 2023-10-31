import React from 'react';
import '../assets/scss/widgets/_process.scss';
import Img1 from '../assets/img/process/1.png';
import Img2 from '../assets/img/process/2.png';
import Img3 from '../assets/img/process/3.png';
import { ProcessItem } from '../components/ProcessItem';

const processItems = [
  {
    img: Img1,
    title: 'Изготавливаем пиццу \nпо своим рецептам в лучших традициях',
    description:
      'Наша пицца получается сочной, вкусной и главное хрустящей с нежной и аппетитной начинкой, готовим по своим итальянским рецептам',
  },
  {
    img: Img2,
    title: 'Используем только свежие ингридиенты',
    description:
      'Ежедневно заготавливаем продукты и овощи для наших пицц, соблюдаем все сроки хранения',
  },
  {
    img: Img3,
    title: 'Доставка в течение 60 минут или заказ за нас счёт',
    description:
      'Все наши курьеры – фанаты серии Need for Speed и призеры гонок World Rally Championship и World Superbike во всех категориях',
  },
];

export const Process = () => {
  return (
    <div className='container'>
      <div className='process'>
        {processItems.map(el => (
          <ProcessItem {...el} key={el.description} />
        ))}
      </div>
    </div>
  );
};
