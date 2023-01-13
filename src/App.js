import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Popular from './components/Popular';
import List from './List';
import Footer from './components/Footer';
import './sass/layouts/App.scss';

function App() {
  return (
    <div className="App">
      <h1 className='visually-hidden'>For SEO</h1>
      <Header />
      {/* <Main /> */}
      <main className='main'>
        <Hero />
        <About />
        <Popular />
        <List />
        {/* 
        <section className='blog'>
            <div className='container'>
                <Title titleH2={TITLE[3]}/>
            </div>
        </section>
        <section className='help'>
            <div className='container'>
                <Title titleH2={TITLE[4]}/>
            </div>
        </section>
        <section className='contacts'>
            <div className='container'>
                <Title titleH2={TITLE[5]}/>
            </div>
        </section> 
        */}
      </main>
      <Footer />
    </div>
  );
}

export default App;