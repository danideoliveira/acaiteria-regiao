import "./Fonts.css";
import Navbar from "./components/navbar/Navbar";
import { GlobalStyle } from "./globalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./helpers/AnimatedRoutes";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
