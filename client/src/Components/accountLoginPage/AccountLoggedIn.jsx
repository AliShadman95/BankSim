import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { Element } from "react-scroll";
import Footer from "../Footer";
import AccountHeroLoggedIn from "./AccountHeroLoggedIn";
import SliderBG from "../../Media/waves-slider-blue-6176.png";
import { getBanks } from "../../actions/bankActions";
import { getPersons } from "../../actions/personActions";
import { connect } from "react-redux";

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
      <Navbar login={true} bankOrPerson={location.state.name} />
      <Element id="home" name="home">
        <AccountHeroLoggedIn accountNumber={location.state.name} />
      </Element>
      <Footer />
    </div>
  );
}

export default connect(null, { getPersons, getBanks })(AccountLoggedIn);
