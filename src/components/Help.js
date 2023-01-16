import Title from './Title';
import Text from './Text';
import HelpForm from './HelpForm.js';
import '../sass/layouts/Help.scss';

function Help() {
    const helpimg = [
        {
            src1: require('../img/help/help.webp'),
            src2: require('../img/help/help@2x.webp'),
            src3: require('../img/help/help@3x.webp'),
            src4: require('../img/help/help.jpg'),
            foralt: 'горы'
        }
    ]

    return (
        <section className='help' >
            <div className='help__container' >
                <Title titleH2='Нужна помощьс выбором тура?' />
                <Text textP='Заполните форму, наш менеджер свяжется с вами в ближайшее время и подберет подходящий тур' />
                <HelpForm />
                <p className='help__agree'>Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных</p>
            </div>
            {/* <div className='help__wrapper'> */}
                <picture className='help__image'>
                    <source media="(max-resolution: 1dppx)" srcSet={helpimg[0].src1} />
                    <source media="(max-resolution: 2dppx)" srcSet={helpimg[0].src2} />
                    <source media="(max-resolution: 3dppx)" srcSet={helpimg[0].src3} />
                    <img src={helpimg[0].src4} alt={helpimg[0].foralt} width="683" height="690" loading="lazy" />
                </picture>
            {/* </div> */}
        </section>
    );
}

export default Help;