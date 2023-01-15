import Search from './Search';
import Enter from './Enter';
import '../sass/layouts/HeaderInfo.scss';

function HeaderInfo() {
    return ( 
        <div className='info'>
            <Search className='header__search' />
            <Enter className='header__enter' />
        </div>
    );
}

export default HeaderInfo;