import './TextData'
import '../sass/layouts/Blog.scss'


function Blog() {
    const news = [
        {
            date: '',
            title: '',
            image: '',
            text: ''
        },
    ]

    return (
        <section className='blog'>
            <div className='container'>
                <div className='blog__news'>
                    <ul className='blog__news-list'>
                        <li className='blog__news-item'></li>
                    </ul>
                    <BtnOrange btnOrng='Читать все новости' />
                </div>
                <div className='blog_article'>
                    <picture>
                        <img src="" alt="" />
                    </picture>
                    <Textdata />
                </div>
            </div>
        </section>
    );
}

export default Blog;