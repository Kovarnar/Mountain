import imgmap from '../img/map.svg';
import Title from './Title';
import Text from './Text';
import '../sass/layouts/About.scss';

function About() {
    const title = 'Туры с восхождением на вершины мира';
    const text = [
        'Мы являемся экспертами в организации альпинистских туров для опытных альпинистов и для новичков. Вы можете доверить нам полную организацию вашего приключения от А до Я и быть уверенными в качестве и безопасности восхождения.',
        'Наша компания предоставляет все необходимое: консультацию по выбору тура, перелет, визу, бронирование проживания, питание, оборудование, необходимое для восхождения, опытных гидов, полное сопровождение.'
    ]

    return (
        <section className='about' id='about'>
            <div className='container about__container'>
                <div className='about__content'>
                    <Title titleH2={title} />
                    {text.map((el, i) => (
                        <Text key={i} textP={el}/>
                    ))}
                </div>
                <div className="about__map">
                    <img src={imgmap} alt="world map" width={815} height={375} />
                </div>
            </div>
        </section>

    );
}

export default About;