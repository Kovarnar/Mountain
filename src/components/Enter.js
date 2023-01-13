import { RxCross2 } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import FormUser from './FormUser';
import '../sass/layouts/Enter.scss';
import { useState } from "react";

function Enter() {
    const [open, setOpen] = useState(true);

    return (
        <div className='header__enter enter'>
            <button className='enter__btn' onClick={() => setOpen(!open)}>
                <FiUser className="icon" />
            </button>
            <div className={!open ? 'modal modal--active' : 'modal' } >
                <button className="modal__close" onClick={() => setOpen(!open)} >
                    <RxCross2 className="icon" />
                </button>
                <FormUser />
                <a className='modal__forgot' href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Забыли пароль?</a>
                <p className='modal__info'>Регистрация на сайте автоматическая при оформлении первого тура</p>

            </div>
        </div>
    );
}

export default Enter;