import '../assets/scss/widgets/_header.scss';
import headerImg from '../assets/img/header.png';
import tabletHeaderImg from '../assets/img/tabletHeader.png';
import { Menu } from './Menu';
import { useWindowSize } from '../hooks/useWindowSize';

const menuItems = [
  {
    title: 'Меню',
  },
  {
    title: 'О нас',
  },
  {
    title: 'Контакты',
  },
];

export const Header = () => {
  const dimensions = useWindowSize();

  return (
    <header className='header'>
      <div className='menu-plug'></div>
      <Menu menuItems={menuItems} />
      <div className='header-background-image'>
        <img
          className='header-background-image__img'
          src={dimensions.width >= 1250 ? headerImg : tabletHeaderImg}
          alt=''
        />
      </div>
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
