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
      <BackToTop showAt={400} speed={1500} easing="easeInOutQuint">
        <svg
          style={{ fill: "#007bff" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M6.101 359.293L25.9 379.092c4.686 4.686 12.284 4.686 16.971 0L224 198.393l181.13 180.698c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 132.908c-4.686-4.686-12.284-4.686-16.971 0L6.101 342.322c-4.687 4.687-4.687 12.285 0 16.971z" />
        </svg>
      </BackToTop>
      <Navbar login={false} />
      <Element id="home" name="home">
        <Hero />
      </Element>
      <Element id="users" name="users">
        <ListContainer />
      </Element>
      <Footer />
    </div>
  );
}

export default connect(null, { getPersons, getBanks })(Main);
