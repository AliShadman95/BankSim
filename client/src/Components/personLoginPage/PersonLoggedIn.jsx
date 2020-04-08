import React, { useEffect } from "react";
import { Element } from "react-scroll";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Navbar from "../Navbar";
import Footer from "../Footer";
import PersonBG from "../../Media/microphone.png";
import PersonHeroLoggedIn from "./PersonHeroLoggedIn";
import { getBanks } from "../../actions/bankActions";
import { getPersons } from "../../actions/personActions";

// eslint-disable-next-line no-shadow
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
      <Navbar login bankOrPerson={location.state.name} />
      <Element id="home" name="home">
        <PersonHeroLoggedIn personName={location.state.name} />
      </Element>
      <Footer />
    </div>
  );
}

PersonLoggedIn.propTypes = {
  location: PropTypes.shape({ state: PropTypes.object }).isRequired,
  getPersons: PropTypes.func.isRequired,
  getBanks: PropTypes.func.isRequired,
};

export default connect(null, { getPersons, getBanks })(PersonLoggedIn);
