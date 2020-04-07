import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { Element } from "react-scroll";
import Footer from "../Footer";
import PersonBG from "../../Media/microphone.png";
import PersonHeroLoggedIn from "./PersonHeroLoggedIn";
import { getBanks } from "../../actions/bankActions";
import { getPersons } from "../../actions/personActions";
import { connect } from "react-redux";

function PersonLoggedIn({ location, getPersons, getBanks }) {
  useEffect(() => {
    getPersons();
    getBanks();
  }, [getPersons, getBanks]);
  return (
    <div
      style={{
        backgroundImage: `url(${PersonBG})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        opacity: 0.8,
      }}
    >
      <Navbar login={true} bankOrPerson={location.state.name} />
      <Element id="home" name="home">
        <PersonHeroLoggedIn personName={location.state.name} />
      </Element>
      <Footer />
    </div>
  );
}

export default connect(null, { getPersons, getBanks })(PersonLoggedIn);
