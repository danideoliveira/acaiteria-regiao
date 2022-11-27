import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import Specialties from './components/Specialties/Specialties';
import Location from './components/Location/Location';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
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
        <Location/>
        <About/>
      </main>

      <Footer/>
    </>
  )
}

export default App;
