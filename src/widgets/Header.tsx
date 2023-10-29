import React from 'react';
import '../assets/scss/widgets/_header.scss';
import { Menu } from './Menu';

export const Header = () => {
  return (
    <header className='header'>
      <div className='menu-plug'></div>
      <Menu />
      <div className='header-inner'></div>
    </header>
  );
};
