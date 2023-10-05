import './CSS/App.css'
import './CSS/flex.css'

import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav'
import About from './pages/About/About';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Nav/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/about'/>
      </Routes>
   
    </div>
  );
}

export default App;
