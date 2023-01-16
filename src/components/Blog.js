import Title from './Title'
import Textdata from './Textdata'
import Text from './Text'
import BtnOrange from './BtnOrange'
import TitleSmall from './TitleSmall'
import TitleLittle from './TitleLittle'
import '../sass/layouts/Blog.scss'

function Blog() {
    const news = [
        {
            date: '15 января, 2020',
            title: 'Как подготовиться к первому восхождению на вершину',
        },
        {
            date: '10 января, 2020',
            title: 'Фестиваль Alpika Freeski Аlpindustria Fest Красная Поляна 13-16 февраля',
        },
        {
            date: '20 декабря, 2019',
            title: 'Особенности альпинизма на Камчатке. Все о Ключевой Сопке',
        },
        {
            date: '15 декабря, 2019',
            title: 'Что происходит с человеком на высоте более 3000 метров?',
        },
        {
            date: '15 декабря, 2019',
            title: 'Что происходит с человеком на высоте более 3000 метров?',
        },
    ]
    const IMG = {
        src1: require('../img/blog/blog.webp'),
        src2: require('../img/blog/blog@2x.webp'),
        src3: require('../img/blog/blog@3x.webp'),
        src4: require('../img/blog/blog.jpg'),
        foralt: 'Подьем на снежную гору'
    }

    return (
        <section className='blog'>
            <div className='container'>
                <Title titleH2='Блог' />
                <div className='blog__content'>
                    <div className='blog__news'>
                        <ul className='blog__news-list'>
                            {
                                news.map((el, i) => {
                                    return <li key={i} className='blog__news-item'>
                                        <Textdata textSpan={el.date}/>
                                        <TitleLittle titleLittle={el.title}/>
                                    </li>
                                })
                            }
                            
                        </ul>
                        <BtnOrange btnOrng='Читать все новости' />
                    </div>
                    <div className='blog__article'>
                        <picture className='blog__img'>
                            <source media="(max-resolution: 1dppx)" srcSet={IMG.src1} />
                            <source media="(max-resolution: 2dppx)" srcSet={IMG.src2} />
                            <source media="(max-resolution: 3dppx)" srcSet={IMG.src3} />
                            <img src={IMG.src4} alt={IMG.foralt} width="700" height="287" />
                        </picture>
                        <Textdata textSpan='15 января, 2020' />
                        <TitleSmall titleH3='Как подготовиться к первому восхождению на вершину' />
                        <div>
                        <Text textP='Перед тем, как отправиться на покорение вершины горы, нужно не только привести в порядок свою физическую форму, но и тренировать выносливость, дыхательную и сердечно-сосудистую системы. Именно на них приходится максимальная нагрузка на высоте. Поэтому из-за недостаточной подготовки вы можете сойти на полпути. Чтобы этого не случилось, занимайтесь плаванием, бегом, велосипедом и кардиотренировками.'/>
                        <Text textP='Как должны проходить тренировки? В первую очередь, тренировки должны проходить постоянно, эффективно и интенсивно. Кроме того, нагрузка постепенно должна увеличиваться. В случае с бегом обязательно делать это с учетом пульса. Грамотно спланированный бег позволит не только сбросить вес, но и укрепит сердечную мышцу. При беге с высоким пульсом вы позволите организму привыкнуть к недостатку кислорода — то, с чем обязательно встретитесь в горах. Для укрепления физической подготовки и повышения выносливости также бегайте в горку или в быстром темпе поднимайтесь по лестницам. И не забудьте отдохнуть за неделю до путешествия!' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;