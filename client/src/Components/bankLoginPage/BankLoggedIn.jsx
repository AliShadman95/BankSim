import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { Element } from "react-scroll";
import BankHeroLoggedIn from "./BankHeroLoggedIn";
import Footer from "../Footer";
import wavesBG from "../../Media/bg-waves-1024.png";
import { getBanks } from "../../actions/bankActions";
import { getPersons } from "../../actions/personActions";
import { connect } from "react-redux";

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
      <Navbar login={true} bankOrPerson={location.state.name} />
      <Element id="home" name="home">
        <BankHeroLoggedIn bankName={location.state.name} />
      </Element>
      <Footer />
    </div>
  );
}

export default connect(null, { getPersons, getBanks })(BankLoggedIn);
