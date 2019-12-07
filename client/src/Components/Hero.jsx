import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const StyledButton = withStyles({
  root: {
    background: "#18122B",
    borderRadius: 40,
    borderWidth: "1px",
    borderStyle: "solid",
    border: 0,
    color: "white",
    height: 38,
    padding: "10px 39px 11px 40px",
    fontSize: "12px",
    fontWeight: 900,
    letterSpacing: "2px",
    lineHeight: "12px",
    borderColor: "rgba(155, 171, 255, 0.3)",
    whiteSpace: "nowrap"
  }
})(Button);

const Hero = () => {
  return (
    <React.Fragment>
      <section
        className="site-hero"
        id="section-home"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5 d-flex flex-column  justify-content-center align-items-start  pl-md-5">
              <h1>Welcome to BankSim!</h1>
              <p className="hero-subtitle">
                A bank simulator where you can create users, banks, accounts and
                deposit, withdraw, transfer money and more!
              </p>
              <div className="d-flex mt-4">
                <div className="col-md-6" style={{ paddingLeft: "0px" }}>
                  <StyledButton>Create user</StyledButton>
                </div>
                <div className="col-md-6">
                  <StyledButton>Create bank</StyledButton>
                </div>
              </div>
            </div>

            <div className="col-md-5"></div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
