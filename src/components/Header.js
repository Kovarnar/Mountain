// import React, { useState } from 'react';
import Logo from '../components/Logo';
import HeaderNav from '../components/HeaderNav';
import HeaderInfo from '../components/HeaderInfo';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
// import HeaderBtn from '../components/HeaderBtn';
import '../sass/layouts/Header.scss';
import { useState } from 'react';

function Header() {
    const [nav, setNav] = useState(false);

    return ( 
        <div className='box'>
            <header className='header'>
                <div className='container'>
                    <div className='header__logo'>
                        <Logo className='header__logo'/>
                    </div>
                    <div className={nav ? 'header__wrapper header__wrapper-active' : 'header__wrapper' } >
                        <HeaderNav />
                        <HeaderInfo className='header__info' />
                    </div>
                    <button onClick={() => setNav(!nav)} className="header__btn" >
                        {nav ? <RxCross1 className="icon" /> : <RxHamburgerMenu className="icon" />}
                    </button>
                </div>
            </header>
        </div>
    );
}

export default Header;