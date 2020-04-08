import React, { useEffect } from "react";
import { Element } from "react-scroll";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Hero from "./mainPage/Hero";
import Footer from "./Footer";
import HeroBg from "../Media/hero-bg-3840.png";
import { getBanks } from "../actions/bankActions";
import { getPersons } from "../actions/personActions";

// eslint-disable-next-line no-shadow
function Main({ getPersons, getBanks }) {
  useEffect(() => {
    getPersons();
    getBanks();
  }, [getPersons, getBanks]);
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

Main.propTypes = {
  getPersons: PropTypes.func.isRequired,
  getBanks: PropTypes.func.isRequired,
};

export default connect(null, { getPersons, getBanks })(Main);
