import Title from './Title';
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import MyMap from './MyMap';
import '../sass/layouts/Contacts.scss';

function Contacts() {
    return (
        <section className='contacts'>
            <div className='container'>
                <div className='contacts__office'>
                    <Title titleH2='Контакты'/>
                    <ul className='contacts__list'>
                        <li className='contacts__item'>
                            <span>Адрес</span>
                            <p>г. Харьков, ул. Сумская, 17</p>
                        </li>
                        <li className='contacts__item'>
                            <span>Телефон:</span>
                            <a href="tel:+38007773355">+3 (800) 777-33-55</a>
                        </li>
                        <li className='contacts__item'>
                            <span>E-mail:</span>
                            <a href="mailto:info@mountain.ua">info@mountain.ru</a>
                        </li>
                        <li className='contacts__item'>
                            <span>Социальные сети:</span>
                            <ul className='contacts__social'>
                                <li>
                                    <a href="#" aria-label='facebook'>
                                        <FaFacebookF className='icon' />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" aria-label='instagram'>
                                        <AiFillInstagram className='icon' />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" aria-label='twitter'>
                                        <AiOutlineTwitter className='icon' />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <MyMap />
            </div>
        </section> 
    );
}

export default Contacts;