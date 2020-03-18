import React, { useState, useEffect } from "react";
import Logo from "../../Media/logo_transparent.png";
import Create from "../Create";
import { useMediaQuery } from "react-responsive";
import Login from "../Login";
import { getAccountsFromPerson } from "../../actions/accountActions";
import { connect } from "react-redux";

function PersonHeroLoggedIn({ personName, getAccountsFromPerson }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)"
  });
  const isTabletOrBigger = useMediaQuery({
    query: "(min-device-width: 768px)"
  });

  useEffect(() => {
    console.log(personName);
    getAccountsFromPerson(personName);
  }, []);
  return (
    <React.Fragment>
      <section
        className="site-hero "
        id="section-home"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-5 d-flex flex-column pb-5 mb-5 justify-content-center align-items-start  pl-lg-5">
              <h1>Welcome {personName}</h1>
              <p className="hero-subtitle">Create an account or login!</p>
              <div
                className="mt-4 d-flex"
                style={{
                  flexWrap: `${isDesktopOrLaptop ? "" : "wrap"}`
                }}
              >
                <div
                  className="col-md-6 col-lg-6"
                  style={{
                    paddingLeft: `${isTabletOrBigger ? "0px" : "20vw"}`,
                    marginBottom: `${isTabletOrBigger ? "0px" : "5vh"}`
                  }}
                >
                  <Create type="account" pName={personName} />
                </div>
                <div
                  className="col-md-6 col-lg-6 pl-md-3"
                  style={{
                    paddingLeft: `${isTabletOrBigger ? "0px" : "20vw"}`,
                    marginBottom: `${isTabletOrBigger ? "0px" : "5vh"}`
                  }}
                >
                  <Login type="account" personName={personName} />
                </div>
              </div>
            </div>
            {isTabletOrBigger && (
              <div className="col-md-4 d-flex mb-5 pb-5 justify-content-center align-items-center">
                <img src={Logo} alt="logo" className="logo-img" />
              </div>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default connect(null, { getAccountsFromPerson })(PersonHeroLoggedIn);
