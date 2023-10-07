import './CSS/App.css'
import './CSS/flex.css'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import Enrollment from './pages/Enrollment/Enrollment';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
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
      </Routes>
      <ScrollToTop/>
      <Footer />
    </>

  );
}

export default App;
