import React from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "../../Media/logo_transparent.png";
import Create from "../Create";

const Hero = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isTabletOrBigger = useMediaQuery({
    query: "(min-device-width: 768px)",
  });
  return (
    <>
      <section
        className="site-hero "
        id="section-home"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-5 d-flex flex-column  justify-content-center align-items-start  pl-lg-5">
              <h1>Welcome to BankSim!</h1>
              <p className="hero-subtitle">
                A bank simulator where you can create users, banks, accounts and
                deposit, withdraw, transfer money and more!
              </p>
              <div
                className="mt-4 d-flex"
                style={{
                  flexWrap: `${isDesktopOrLaptop ? "" : "wrap"}`,
                }}
              >
                <div
                  className="col-md-6 col-lg-6 "
                  style={{
                    paddingLeft: `${isTabletOrBigger ? "0px" : "20vw"}`,
                    marginBottom: `${isTabletOrBigger ? "0px" : "5vh"}`,
                  }}
                >
                  <Create type="person" />
                </div>
                <div
                  className="col-md-6 col-lg-6 pl-md-3"
                  style={{
                    paddingLeft: `${isTabletOrBigger ? "0px" : "20vw"}`,
                  }}
                >
                  <Create type="bank" />
                </div>
              </div>
            </div>
            {isTabletOrBigger && (
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <img src={Logo} alt="logo" className="logo-img" />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
