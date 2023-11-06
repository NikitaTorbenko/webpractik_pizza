import React from 'react';
import '../assets/scss/widgets/_process.scss';

interface ProcessItemProps {
  img: string;
  title: string;
  description: string;
}

export const ProcessItem = ({ img, title, description }: ProcessItemProps) => {
  return (
    <div className='process-item'>
      <div className='process-item__img'>
        <img src={img} alt='' />
      </div>
      <div className='process-item-info'>
        <h3 className='process-item__title'>{title}</h3>
        <div className='process-item__description'>{description}</div>
      </div>
    </div>
  );
};
