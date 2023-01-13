import '../sass/layouts/HeaderMenuItem.scss';
import { Link } from 'react-scroll';

function HeaderMenuItem(props) {
    return (
        <li className='header__menu-item'>
            <Link to={props.to} spy={true} smooth={true} offset={50} duration={100}  className='header__menu-link'>{props.title}</Link>
        </li>
    );
}

export default HeaderMenuItem;