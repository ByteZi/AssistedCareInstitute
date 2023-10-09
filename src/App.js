import './CSS/App.css'
import './CSS/flex.css'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/footer/Footer'
import Nav from './components/Nav/Nav'
import Enrollment from './pages/Enrollment/Enrollment';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import TOC from './pages/TOC/TOC'
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
        <Route element={<Enrollment />} path='/enrollment' />
        <Route element={<TOC/>} path='/ToC' />
      </Routes>
      <Footer />

      <ScrollToTop/>
    </>

  );
}

export default App;
