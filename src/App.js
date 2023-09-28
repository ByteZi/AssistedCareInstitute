import './CSS/App.css'
import './CSS/flex.css'

import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav'
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
      </Routes>
   
    </div>
  );
}

export default App;
