import React from "react";
import Hero from "../components/hero/Hero";
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header renderVideo={true} />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
