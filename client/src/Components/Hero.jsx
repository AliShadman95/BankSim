import React, { useState } from "react";

import Logo from "../Media/logo_transparent.png";
import Create from "./Create";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)"
  });
  return (
    <React.Fragment>
      <section
        className="site-hero "
        id="section-home"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-5 d-flex flex-column  justify-content-center align-items-start  pl-md-5">
              <h1>Welcome to BankSim!</h1>
              <p className="hero-subtitle">
                A bank simulator where you can create users, banks, accounts and
                deposit, withdraw, transfer money and more!
              </p>
              <div className="mt-4  d-flex">
                <div
                  className="col-md-1 col-lg-6 "
                  style={{ paddingLeft: `${isDesktopOrLaptop ? "0px" : ""}` }}
                >
                  <Create type="user" />
                </div>
                <div className="col-md-1 col-lg-6">
                  <Create type="bank" />
                </div>
              </div>
            </div>
            {isDesktopOrLaptop && (
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <img src={Logo} alt="logo" className="logo-img" />
              </div>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
