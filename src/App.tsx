import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Hausaerztlich from "./pages/Leistungen/Hausaerztlich";
import Internistisch from "./pages/Leistungen/Internistisch";
import Diabetologie from "./pages/Leistungen/Diabetologie";
import Schulungen from "./pages/Leistungen/Schulungen";
import Vorsorge from "./pages/Leistungen/Vorsorge";
import Impfungen from "./pages/Leistungen/Impfungen";
import Psychosomatik from "./pages/Leistungen/Psychosomatik";
import DMP from "./pages/Leistungen/DMP";
import Adipositas from "./pages/Leistungen/Adipositas";
import IGeL from "./pages/Leistungen/IGeL";
import Vita from "./pages/Vita/Vita";
import Praxis from "./pages/Praxis/Praxis";
import Kontakt from "./pages/Kontakt/Kontakt";
import ScrollToTop from "./components/ScrollToTop";
import Karriere from "./pages/Karriere/Karriere";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leistungen/hausaerztlich" element={<Hausaerztlich />} />
        <Route path="/leistungen/internistisch" element={<Internistisch />} />
        <Route path="/leistungen/diabetologie" element={<Diabetologie />} />
        <Route path="/leistungen/schulungen" element={<Schulungen />} />
        <Route path="/leistungen/vorsorge" element={<Vorsorge />} />
        <Route path="/leistungen/impfungen" element={<Impfungen />} />
        <Route path="/leistungen/psychosomatik" element={<Psychosomatik />} />
        <Route path="/leistungen/dmp" element={<DMP />} />
        <Route path="/leistungen/adipositas" element={<Adipositas />} />
        <Route path="/leistungen/igel" element={<IGeL />} />
        <Route path="/vita" element={<Vita />} />
        <Route path="/praxis" element={<Praxis />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/karriere" element={<Karriere />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
