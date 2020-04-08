/* eslint-disable no-shadow */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AccountListBank from "./AccountListBank";
import { getAccountsFromBank } from "../../actions/accountActions";
import { getBalanceOfBank } from "../../actions/bankActions";

function BankHeroLoggedIn({
  bankName,
  accountsList,
  getAccountsFromBank,
  getBalanceOfBank,
  totalBalance,
}) {
  useEffect(() => {
    getAccountsFromBank(bankName);
    getBalanceOfBank(bankName);
  }, [bankName, getAccountsFromBank, getBalanceOfBank]);

  return (
    <>
      <section
        className="site-hero loggedin-hero"
        id="section-home"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center flex-column align-self-start mt-5 pt-5 justify-content-center d-flex align-items-center">
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
              <h1>Welcome {bankName}</h1>
              <p className="hero-subtitle balance">{totalBalance}</p>
              <AccountListBank
                bankName={bankName}
                accountsList={accountsList}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

BankHeroLoggedIn.propTypes = {
  bankName: PropTypes.string.isRequired,
  getAccountsFromBank: PropTypes.func.isRequired,
  getBalanceOfBank: PropTypes.func.isRequired,
  accountsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  accountsList: state.accounts.items,
  totalBalance: state.banks.item,
});

export default connect(mapStateToProps, {
  getAccountsFromBank,
  getBalanceOfBank,
})(BankHeroLoggedIn);
