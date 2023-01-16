import Header from './Header';
import Hero from './Hero';
import About from './About';
import Popular from './Popular';
import List from './List';
import Blog from './Blog';
import Help from './Help';
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
        <Blog />
        <Help />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;