import BtnLink from './BtnLink';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { EffectFade } from "swiper";
import "swiper/css/effect-fade";
import 'swiper/scss';
import '../sass/layouts/MySwiper.scss';

function MySwiper() {
    const CONT = [
        {
            src1: require('../img/hero/hero2.webp'),
            src2: require('../img/hero/hero2@2x.webp'),
            src3: require('../img/hero/hero2@3x.webp'),
            src4: require('../img/hero/hero2.jpg'),
            foralt: 'гора Эльбрус',
            title: 'Эльбрус'
        },
        {
            src1: require('../img/hero/hero1.webp'),
            src2: require('../img/hero/hero1@2x.webp'),
            src3: require('../img/hero/hero1@3x.webp'),
            src4: require('../img/hero/hero1.jpg'),
            foralt: 'гора Эверест',
            title: 'Эверест'
        }
    ]

    return (
        <>
            <Swiper 
                loop={true}
                effect={"fade"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay]}
                className='swiper'
            >
                {CONT.map((el, i) => {
                    return <SwiperSlide key={i}>
                        <div className='swiper__item'>
                            <picture className='swiper__img'>
                                <source media="(max-resolution: 1dppx)" srcSet={el.src1} />
                                <source media="(max-resolution: 2dppx)" srcSet={el.src2} />
                                <source media="(max-resolution: 3dppx)" srcSet={el.src3} />
                                <img src={el.src4} alt={el.foralt} width="1366" height="650" />
                            </picture>
                            <div className='swiper__content'>
                                <h2 className='swiper__title'>{el.title}</h2>
                                <BtnLink btnLink="Подробнее" />
                            </div>
                        </div>
                    </SwiperSlide>;
                })}
            </Swiper>
        </>
    );
}

export default MySwiper;