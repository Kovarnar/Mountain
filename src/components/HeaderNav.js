import HeaderMenuItem from './HeaderMenuItem';
import '../sass/layouts/HeaderNav.scss';

const items = [
    {
        to: 'about',
        title: 'О нас'
    },
    {
        to: 'popular',
        title: 'Туры'
    },
    {
        to: 'list',
        title: 'Подбор тура'
    },
    {
        to: 'blog',
        title: 'Блог'
    },
    {
        to: 'contacts',
        title: 'Контакты'
    }
]

function Headernav() {
    return (
        <nav className='header__nav'>
            <h2 className='visually-hidden'>For SEO</h2>
            <ul className='header__menu'>
                {items.map((el, i) => (
                    <HeaderMenuItem key={i} title={el.title} to={el.to}/>
                ))}
            </ul>
        </nav>
    );
}

export default Headernav;