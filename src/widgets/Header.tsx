import '../assets/scss/widgets/_header.scss';
import { Menu } from './Menu';

const menuItems = ['Меню', 'О нас', 'Контакты'];

export const Header = () => {
  return (
    <header className='header'>
      <div className='menu-plug'></div>
      <Menu menuItems={menuItems} />
      <div className='header-inner'></div>
    </header>
  );
};
