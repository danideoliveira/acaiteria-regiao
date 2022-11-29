import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Specialties from './components/specialties/Specialties';
import Location from './components/location/Location';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle/>
      <header>
        <Navbar/>
      </header>

      <main>
        <Home/>
        <Specialties/>
        {/* <Location/> */}
        {/* <About/> */}
      </main>

      {/* <Footer/> */}
    </>
  )
}

export default App;
