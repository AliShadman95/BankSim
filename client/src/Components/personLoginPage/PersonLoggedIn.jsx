import React from "react";
import Navbar from "../Navbar";
import { Element } from "react-scroll";
import BackToTop from "react-back-to-top-button";
import Footer from "../Footer";
import PersonBG from "../../Media/microphone.png";
import PersonHeroLoggedIn from "./PersonHeroLoggedIn";
import { useEffect } from "react";

function PersonLoggedIn({ location }) {
  return (
    <div
      style={{
        backgroundImage: `url(${PersonBG})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        opacity: 0.8
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
        <PersonHeroLoggedIn personName={location.state.name} />
      </Element>
      <Footer />
    </div>
  );
}

export default PersonLoggedIn;
