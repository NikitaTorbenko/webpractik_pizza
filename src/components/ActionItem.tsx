import React from 'react';
import '../assets/scss/components/_action-item.scss';
import { IAction } from '../types';

interface ActionItemProps {
  action: IAction;
}

export const ActionItem = ({ action }: ActionItemProps) => {
  return (
    <div className='action-item'>
      <img className='action-item__img' src={action.img} alt='' />
      <h4 className='action-item__title'>{action.title}</h4>
      <p className='action-item__text'>{action.text}</p>
    </div>
  );
};
