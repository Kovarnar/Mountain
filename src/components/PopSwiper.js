import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import { Pagination } from "swiper";
import { HiLocationMarker } from "react-icons/hi";
import { RxBookmarkFilled, RxBookmark } from "react-icons/rx";
import { useState } from "react";
import "swiper/css/pagination";
import "../sass/layouts/PopSwiper.scss";

function PopSwiper() {
    const forItems = [
        {
            id: 1,
            src1: require('../img/popular/img3.webp'),
            src2: require('../img/popular/img3@2x.webp'),
            src3: require('../img/popular/img3@3x.webp'),
            src4: require('../img/popular/img3.jpg'),
            foralt: 'Вершина Белуха',
            country: 'Россия',
            mountain: 'Белуха',
            height: '4506 м',
            days: '12 дней',
            price: 'от 2500 $',
            level: 'Средний уровень'
        },
        {
            id: 2,
            src1: require('../img/popular/img2.webp'),
            src2: require('../img/popular/img2@2x.webp'),
            src3: require('../img/popular/img2@3x.webp'),
            src4: require('../img/popular/img2.jpg'),
            foralt: 'Вершина Эльбрус',
            country: 'Россия',
            mountain: 'Эльбрус',
            height: '5642 м',
            days: '10 дней',
            price: 'от 2000 $',
            level: 'Средний уровень'
        },
        {
            id: 3,
            src1: require('../img/list/list1.webp'),
            src2: require('../img/list/list1.webp'),
            src3: require('../img/list/list1@3x.webp'),
            src4: require('../img/list/list1.jpg'),
            foralt: 'Вершина Килиманджаро',
            country: 'Танзания',
            mountain: 'Килиманджаро',
            height: '5895 м',
            days: '4 дня',
            price: 'от 3500 $',
            level: 'Простой уровень'
        },
        {
            id: 4,
            src1: require('../img/list/list2.webp'),
            src2: require('../img/list/list2@2x.webp'),
            src3: require('../img/list/list2@3x.webp'),
            src4: require('../img/list/list2.jpg'),
            foralt: 'Вершина Казбек',
            country: 'Poссия',
            mountain: 'Казбек',
            height: '5033 м',
            days: '14 дней',
            price: 'от 3000 $',
            level: 'Сложный уровень'
        },
        {
            id: 5,
            src1: require('../img/popular/img1.webp'),
            src2: require('../img/popular/img1@2x.webp'),
            src3: require('../img/popular/img1@3x.webp'),
            src4: require('../img/popular/img1.jpg'),
            foralt: 'Вершина Дыхтау',
            country: 'Poссия',
            mountain: 'Дыхтау',
            height: '5204 м',
            days: '14 дней',
            price: 'от 4000 $',
            level: 'Сложный уровень'
        },
        {
            id: 6,
            src1: require('../img/hero/hero1.webp'),
            src2: require('../img/hero/hero1.webp'),
            src3: require('../img/hero/hero1.webp'),
            src4: require('../img/hero/hero1.jpg'),
            foralt: 'Вершина Эверест',
            country: 'Непал, Китай',
            mountain: 'Эверест',
            height: '8 849 м',
            days: '21 день',
            price: 'от 8000 $',
            level: 'Сложный уровень'
        },
        {
            id: 7,
            src1: require('../img/popular/img5.webp'),
            src2: require('../img/popular/img5.webp'),
            src3: require('../img/popular/img5.webp'),
            src4: require('../img/popular/img5.jpg'),
            foralt: 'Вершина Говерла',
            country: 'Украина',
            mountain: 'Говерла',
            height: '2 061 м',
            days: '4 дня',
            price: 'от 1000 $',
            level: 'Простой уровень'
        },
    ];

    const [iconChange, setIconChange] = useState(false);

    return (
        <>
            <Swiper
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    }
                }}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loopFillGroupWithBlank={true}
                pagination={{clickable: true}}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {forItems.map((el) => {
                    return <SwiperSlide key={el.id}>
                        <div className="item">
                            <picture className='item__img'>
                                <source media="(max-resolution: 1dppx)" srcSet={el.src1} />
                                <source media="(max-resolution: 2dppx)" srcSet={el.src2} />
                                <source media="(max-resolution: 3dppx)" srcSet={el.src3} />
                                <img src={el.src4} alt={el.about} width="370" height="326" />
                            </picture>
                            <div className="item__content">
                                <div className="item__top">
                                    <span><HiLocationMarker className="icon"/> {el.country}</span>
                                    <span onClick={() => setIconChange(!iconChange)}>
                                        {iconChange ? <RxBookmarkFilled className="icon" /> : <RxBookmark className="icon" /> }
                                    </span>
                                </div>
                                <div className="item__bottom">
                                    <h3>{el.mountain}</h3>
                                    <ul>
                                        <li>{el.height}</li>
                                        <li>{el.days}</li>
                                        <li>{el.price}</li>
                                    </ul>
                                    <span>{el.level}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </>
    );
}

export default PopSwiper;