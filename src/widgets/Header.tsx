import '../assets/scss/widgets/_header.scss';
import headerImg from '../assets/img/header.png';
import { Menu } from './Menu';

const menuItems = ['Меню', 'О нас', 'Контакты'];

export const Header = () => {
  return (
    <header className='header'>
      <div className='header-background-image'>
        <img className='header-background-image__img' src={headerImg} alt='' />
      </div>
      <div className='menu-plug'></div>
      <Menu menuItems={menuItems} />
      <div className='container'>
        <div className='header-inner'>
          <h2 className='header__title'>Пицца на заказ</h2>
          <p className='header__text'>
            Бесплатная и быстрая доставка за час
            <br />в любое удобное для вас время
          </p>
          <button className='btn header__btn'>Выбрать пиццу</button>
        </div>
      </div>
    </header>
  );
};
