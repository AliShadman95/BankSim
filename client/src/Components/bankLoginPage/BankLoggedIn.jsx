import React, { useEffect } from "react";
import { Element } from "react-scroll";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Navbar from "../Navbar";
import BankHeroLoggedIn from "./BankHeroLoggedIn";
import Footer from "../Footer";
import wavesBG from "../../Media/bg-waves-1024.png";
import { getBanks } from "../../actions/bankActions";
import { getPersons } from "../../actions/personActions";

// eslint-disable-next-line no-shadow
function BankLoggedIn({ location, getBanks, getPersons }) {
  useEffect(() => {
    getPersons();
    getBanks();
  }, [getPersons, getBanks]);

  return (
    <div
      style={{
        backgroundImage: `url(${wavesBG})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <Navbar login bankOrPerson={location.state.name} />
      <Element id="home" name="home">
        <BankHeroLoggedIn bankName={location.state.name} />
      </Element>
      <Footer />
    </div>
  );
}

BankLoggedIn.propTypes = {
  location: PropTypes.shape({ state: PropTypes.object, name: PropTypes.string })
    .isRequired,
  getBanks: PropTypes.func.isRequired,
  getPersons: PropTypes.func.isRequired,
};

export default connect(null, { getPersons, getBanks })(BankLoggedIn);
