import Logo from './Logo';
import { FaRegCopyright } from "react-icons/fa";
import '../sass/layouts/Footer.scss'

function Footer() {
    return ( 
        <footer className='footer'>
            <div className='container'>
                <span className='footer__text'>
                    Maroon <FaRegCopyright className='footer__icon'/> 2020 Все права защищены
                </span>
                <Logo />
                <span className='footer__text'>Политика конфиденциальности</span>
            </div>
        </footer>
    );
}

export default Footer;