import Header from './Header';
import Hero from './Hero';
import About from './About';
import Popular from './Popular';
import List from './List';

import Help from './Help';
import WeatherMap from './WeatherMap';
import Contacts from './Contacts';
import Footer from './Footer';
import '../sass/layouts/App.scss';

function App() {
  return (
    <div className="App">
      <h1 className='visually-hidden'>For SEO</h1>
      <Header />
      <main className='main'>
        <Hero />
        <About />
        <Popular />
        <List />
        <WeatherMap />
        
        {/* <section className='blog'>
            <div className='container'>
                <Title titleH2={TITLE[3]}/>
            </div>
        </section> */}
        
        <Help />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;