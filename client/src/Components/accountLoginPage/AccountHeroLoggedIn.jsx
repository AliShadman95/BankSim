import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Operations from "./Operations";
import { getBalanceOfAccount } from "../../actions/accountActions";

// eslint-disable-next-line no-shadow
function AccountHeroLoggedIn({ accountNumber, getBalanceOfAccount, balance }) {
  useEffect(() => {
    getBalanceOfAccount(accountNumber);
  }, [getBalanceOfAccount, accountNumber]);
  return (
    <>
      <section
        className="site-hero loggedin-hero"
        id="section-home"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 text-center flex-column align-self-start mt-5 pt-5 justify-content-center d-flex align-items-center">
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
              <h1>Welcome {accountNumber}</h1>
              <p className="hero-subtitle balance">{balance}</p>
            </div>
            <Operations accountNumber={accountNumber} />
          </div>
        </div>
      </section>
    </>
  );
}

AccountHeroLoggedIn.propTypes = {
  accountNumber: PropTypes.string.isRequired,
  getBalanceOfAccount: PropTypes.func.isRequired,
  balance: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  balance: state.accounts.item,
});

export default connect(mapStateToProps, { getBalanceOfAccount })(
  AccountHeroLoggedIn
);
