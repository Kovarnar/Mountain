import Title from "./Title";
import PopSwiper from "./PopSwiper";
import '../sass/layouts/Popular.scss';

function Popular() {
    return (
        <section className='popular' id='popular'>
            <div className='container'>
                <Title titleH2='Популярные туры' />
                <PopSwiper />
            </div>
        </section>
    );
}

export default Popular;