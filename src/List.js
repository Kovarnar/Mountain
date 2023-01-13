import Title from './components/Title';
import Text from './components/Text';
import SortTable from './components/SortTable';
import BtnLink from './components/BtnLink';
import './sass/layouts/List.scss';

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