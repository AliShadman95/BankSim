import React, { useState, useEffect } from "react";
import Operations from "./Operations";
import Logo from "../../Media/logo_transparent.png";
import { getBalanceOfAccount } from "../../actions/accountActions";
import { connect } from "react-redux";

function AccountHeroLoggedIn({ accountNumber, getBalanceOfAccount, balance }) {
  useEffect(() => {
    getBalanceOfAccount(accountNumber);
  }, []);
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
              <h1>Welcome {accountNumber}</h1>
              <p className="hero-subtitle balance">{balance}</p>
            </div>
            <Operations accountNumber={accountNumber} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  balance: state.accounts.item
});

export default connect(mapStateToProps, { getBalanceOfAccount })(
  AccountHeroLoggedIn
);
