import './Fonts.css'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Specialties from './components/specialties/Specialties';
import Location from './components/location/Location';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import { GlobalStyle } from './globalStyles';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle/>

        <Router>
          <Navbar/>

          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/especialidades' element={<Specialties />}/>
            <Route path='/localizacao' element={<Location />}/>
            <Route path='/sobre' element={<About />}/>
          </Routes>

          <Footer/>
        </Router>
    </>
  )
}

export default App;
