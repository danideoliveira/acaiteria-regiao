import Home from "../components/home/Home";
import Specialties from "../components/specialties/Specialties";
import Location from "../components/location/Location";
import About from "../components/about/About";
import Error404 from "../components/errors/Error404";
import MakeOrder from "../components/make-order/MakeOrder";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/especialidades" element={<Specialties />} />
        <Route path="/localizacao" element={<Location />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/pedido" element={<MakeOrder />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </AnimatePresence>
  );
}
