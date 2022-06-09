import React from "react";
import Header from "./components/Header/Header";
import EnjoyablePlace from "./components/EnjoyablePlace/EnjoyablePlace";
import LocallySourced from "./components/LocallySourced/LocallySourced";
import Highlights from "./components/Highlights/Highlights";
import Navigation from "./components/FamillyGathering/Navigation";
import Footer from "./components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <EnjoyablePlace />
      <LocallySourced />
      <Highlights />
      <Navigation />
      <Footer />
    </>
  );
}

export default Home;
