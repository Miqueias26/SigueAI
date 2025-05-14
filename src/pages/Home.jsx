import React from "react";
import Hero from "../components/hero/Hero";
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import Contactos from "./Contactos";
import Motion from "../animations/Motion";

const Home = () => {
  return (
    <>
      <Motion type="fadeIn">
        <Header renderVideo={true} />
        <Hero />
        <Contactos />
        <Footer />
      </Motion>
    </>
  );
};

export default Home;
