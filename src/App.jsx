import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Specialties from './components/Specialties/Specialties.jsx';
import Location from './components/Location/Location.jsx';
import About from './components/About/About.jsx';
import Footer from './components/Footer/Footer.jsx';
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
