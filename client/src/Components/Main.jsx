import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Element } from "react-scroll";
import BackToTop from "../../node_modules/react-back-to-top-button/build/index";
import Hero from "../Components/Hero";
import ListContainer from "../Components/ListContainer";
import Footer from "../Components/Footer";
import HeroBg from "../Media/hero-bg-3840.png";
import { getBanks } from "../actions/bankActions";
import { getPersons } from "../actions/personActions";
import { connect } from "react-redux";

function Main({ getPersons, getBanks }) {
  useEffect(() => {
    getPersons();
    getBanks();
  }, []);
  return (
    <div className="hero-bg " style={{ backgroundImage: `url(${HeroBg})` }}>
      <Navbar login={false} />
      <Element id="home" name="home">
        <Hero />
      </Element>
      <Footer />
    </div>
  );
}

export default connect(null, { getPersons, getBanks })(Main);
