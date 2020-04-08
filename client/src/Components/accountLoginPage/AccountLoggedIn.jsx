import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Element } from "react-scroll";
import PropTypes from "prop-types";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AccountHeroLoggedIn from "./AccountHeroLoggedIn";
import SliderBG from "../../Media/waves-slider-blue-6176.png";
import { getBanks } from "../../actions/bankActions";
import { getPersons } from "../../actions/personActions";

// eslint-disable-next-line no-shadow
function AccountLoggedIn({ location, getBanks, getPersons }) {
  useEffect(() => {
    getPersons();
    getBanks();
  }, [getPersons, getBanks]);
  return (
    <div
      style={{
        backgroundImage: `url(${SliderBG})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <Navbar login bankOrPerson={location.state.name} />
      <Element id="home" name="home">
        <AccountHeroLoggedIn accountNumber={location.state.name} />
      </Element>
      <Footer />
    </div>
  );
}

AccountLoggedIn.propTypes = {
  location: PropTypes.shape({ state: PropTypes.object }).isRequired,
  getBanks: PropTypes.func.isRequired,
  getPersons: PropTypes.func.isRequired,
};

export default connect(null, { getPersons, getBanks })(AccountLoggedIn);
