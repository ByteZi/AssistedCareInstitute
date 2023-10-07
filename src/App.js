import './CSS/App.css'
import './CSS/flex.css'
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav'
import About from './pages/About/About';

import Footer from './components/Nav/components/footer/footer';
import ScrollToTop from './components/Nav/components/ScrollTooTop/ScrollToTop';
import {
  Routes,
  Route,

} from "react-router-dom";


function App() {
  return (
    <>

      <Nav />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<About />} path='/about' />
      </Routes>
      <ScrollToTop/>
      <Footer />
    </>

  );
}

export default App;
