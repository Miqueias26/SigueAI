import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import Home from "../pages/Home";
import Chat from "../pages/chat";
import SobreNosotros from "../pages/SobreNosotros";
import Contactos from "../pages/Contactos";
import PoliticadePrivacidad from "../pages/PoliticadePrivacidad";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/chat"
        element={
          <>
            <Header />
            <Chat />
            <Footer />
          </>
        }
      />

      <Route
        path="/sobre-nosotros"
        element={
          <>
            <Header renderVideo={false} />
            <SobreNosotros />
            <Footer />
          </>
        }
      />
      <Route
        path="/contactos"
        element={
          <>
            <Header renderVideo={false} />
            <Contactos />
            <Footer />
          </>
        }
      />
      <Route
        path="/politica-de-privacidad"
        element={
          <>
            <Header renderVideo={false} />
            <PoliticadePrivacidad />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
