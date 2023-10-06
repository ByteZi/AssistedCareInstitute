import './CSS/App.css'
import './CSS/flex.css'

import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav'
import About from './pages/About/About';
import Mission from './pages/Mission/Mission'
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
        <Route element={<Mission />} path="mission" />
      </Routes>
    </>

  );
}

export default App;
