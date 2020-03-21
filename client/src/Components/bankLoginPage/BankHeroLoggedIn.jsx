import React from "react";
import Operations from "../accountLoginPage/Operations";

function BankHeroLoggedIn({ bankName }) {
  return (
    <React.Fragment>
      <section
        className="site-hero loggedin-hero"
        id="section-home"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 text-center flex-column align-self-start mt-5 pt-5 justify-content-center d-flex align-items-center">
              <h1>Welcome {bankName}</h1>
              <p className="hero-subtitle balance">$1000.00</p>
            </div>
            <Operations />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default BankHeroLoggedIn;
