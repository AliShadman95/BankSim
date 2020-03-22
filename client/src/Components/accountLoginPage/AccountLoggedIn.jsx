import React from "react";
import Navbar from "../Navbar";
import { Element } from "react-scroll";

import Footer from "../Footer";
import AccountHeroLoggedIn from "./AccountHeroLoggedIn";
import SliderBG from "../../Media/waves-slider-blue-6176.png";

function AccountLoggedIn({ location }) {
  return (
    <div
      style={{
        backgroundImage: `url(${SliderBG})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover"
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

export default AccountLoggedIn;
