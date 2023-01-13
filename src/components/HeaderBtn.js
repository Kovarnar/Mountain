import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import '../sass/layouts/HeaderBtn.scss';

function HeaderBtn() {
    return (
        <button className="header__btn">
            <RxHamburgerMenu className="icon icon--burger" />
            <RxCross1 className="icon icon-cross" />
        </button>
    );
}

export default HeaderBtn;