import '../sass/layouts/Search.scss';
import { FiSearch } from "react-icons/fi";

function Search() {
    return (
        <form className='search'>
            <input className='search__fild' type='search' placeholder="Поиск"/>
            <button className='search__btn' type="submit" aria-label='search'>
                <FiSearch className='icon' />
            </button>
        </form>
    );
}

export default Search;