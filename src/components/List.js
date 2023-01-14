import Title from './Title';
import Text from './Text';
import SortTable from './SortTable';
import BtnLink from './BtnLink';
import '../sass/layouts/List.scss';
import '../../src/List.css';
// import '../sass/layouts/List.scss';

function List() {
    return (
        <section className='list'>
            <div className='container'>
                <Title titleH2='Подбор тура' />
                <Text textP='Более 15 туров для альпинистов всех уровней' />
                <SortTable />
                <BtnLink btnLink="Смотреть все" />
            </div>
        </section>
    );
}

export default List;