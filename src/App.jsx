import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ContainerInfo from "./components/containerInfo/ContainerInfo";
import ContainerMain from "./components/containerMain/ContainerMain";

import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import SobreNosotros from "./routes/pages/SobreNosotros";
import Contactos from "./routes/pages/Contactos";
import PoliticadePrivacidad from "./routes/pages/PoliticadePrivacidad";
import Header from "./components/header/header";
import ChatRoute from "./routes/pages/chat";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Ruta para la página principal */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ContainerMain />
              <ContainerInfo />
            </>
          }
        />

        {/* Ruta para "Sobre Nosotros" */}
        <Route path="/chat" element={<ChatRoute />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/Contactos" element={<Contactos />} />
        <Route
          path="/politica-de-privacidad"
          element={<PoliticadePrivacidad />}
        />

        {/* Ruta para manejar páginas no encontradas */}
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
