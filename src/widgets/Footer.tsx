import React from 'react';
import '../assets/scss/widgets/_footer.scss';
import { ReactComponent as Logo } from '../assets/img/footer/logo.svg';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <h2 className='footer__title'>Следите за нами в Instagram</h2>
        <h4 className='footer__subtitle'>@pizzamenu</h4>
      </div>
      <div className='footer-bottom'>
        <div className='container footer-bottom-inner'>
          <div className='footer-bottom-left'>
            <Logo className='footer__logo' />
            <div className='footer-bottom-contact'>
              <h4 className='footer-bottom-contact__number'>
                +7 (918) 432-65-87
              </h4>
              <div className='footer-bottom-contact__time'>
                Ежедневно с 9:00 до 23:00
              </div>
            </div>
          </div>
          <div className='footer-bottom-right'>Политика конфиденциальности</div>
        </div>
      </div>
    </footer>
  );
};
