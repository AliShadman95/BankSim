import React, { useEffect } from "react";
import AccountListBank from "./AccountListBank";
import { getAccountsFromBank } from "../../actions/accountActions";
import { getBalanceOfBank } from "../../actions/bankActions";
import { connect } from "react-redux";

function BankHeroLoggedIn({
  bankName,
  accountsList,
  getAccountsFromBank,
  getBalanceOfBank,
  totalBalance
}) {
  useEffect(() => {
    getAccountsFromBank(bankName);
    getBalanceOfBank(bankName);
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
            <div className="col-md-12 text-center flex-column align-self-start mt-5 pt-5 justify-content-center d-flex align-items-center">
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
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  accountsList: state.accounts.items,
  totalBalance: state.banks.item
});

export default connect(mapStateToProps, {
  getAccountsFromBank,
  getBalanceOfBank
})(BankHeroLoggedIn);
