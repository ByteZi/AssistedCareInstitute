import './CSS/App.css'
import './CSS/flex.css'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/footer/footer'
import Nav from './components/Nav/Nav'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import TOC from './pages/Services/TOC/TOC'
import RefundPolicy from './pages/Services/RefundPolicy/RefundPolicy'
import Reservation from './pages/Reservation/Reservation';
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
        <Route element={<Reservation/>} path='/reservation' />
        <Route element={<TOC />} path='/policies/terms-of-conditions' />
        <Route element={<RefundPolicy />} path='/policies/refund-policy' />
      </Routes>
      <Footer />

      <ScrollToTop />
    </>

  );
}

export default App;
