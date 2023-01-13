import logo from '../img/logo.svg';
import '../sass/layouts/Logo.scss';

function Logo() {
    return ( 
        <img src={logo} className="logo" alt="logo" width={101} height={21} />
    );
}

export default Logo;
