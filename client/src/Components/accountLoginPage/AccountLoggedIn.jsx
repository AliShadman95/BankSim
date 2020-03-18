import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { Element } from "react-scroll";
import BackToTop from "react-back-to-top-button";
import Footer from "../Footer";
import AccountHeroLoggedIn from "./AccountHeroLoggedIn";
import SliderBG from "../../Media/waves-slider-blue-6176.png";

function AccountLoggedIn({ location }) {
  useEffect(() => {
    console.log(location.state);
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${SliderBG})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover"
      }}
    >
      <BackToTop showAt={400} speed={1500} easing="easeInOutQuint">
        <svg
          style={{ fill: "#007bff" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M6.101 359.293L25.9 379.092c4.686 4.686 12.284 4.686 16.971 0L224 198.393l181.13 180.698c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 132.908c-4.686-4.686-12.284-4.686-16.971 0L6.101 342.322c-4.687 4.687-4.687 12.285 0 16.971z" />
        </svg>
      </BackToTop>
      <Navbar login={true} bankOrPerson={location.state.name} />
      <Element id="home" name="home">
        <AccountHeroLoggedIn
          type={location.state.type}
          name={location.state.name}
        />
      </Element>
      <Footer />
    </div>
  );
}

export default AccountLoggedIn;
