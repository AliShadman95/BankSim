import React, { useEffect } from "react";
import Operation from "./Operation";
import { connect } from "react-redux";
import { getTransactions } from "../../actions/transactionActions";

const Operations = ({ accountNumber, transactionsList, getTransactions }) => {
  useEffect(() => {
    getTransactions(accountNumber);
  }, [accountNumber, getTransactions]);
  return (
    <div className="row  justify-content-center loggedin-hero">
      <div className="col-md-3 mb-sm-2 operations-box op-left mt-3">
        <Operation
          type="deposit"
          accountNumber={accountNumber}
          transactionsList={transactionsList.filter(t => {
            return t.Code === "deposit";
          })}
        />
      </div>
      <div className="col-md-3 operations-box op-center">
        <Operation
          type="transfer"
          accountNumber={accountNumber}
          transactionsList={transactionsList.filter(t => {
            return t.Code === "transfer";
          })}
        />
      </div>
      <div className="col-md-3 operations-box op-right mt-md-3">
        <Operation
          type="withdraw"
          accountNumber={accountNumber}
          transactionsList={transactionsList.filter(t => {
            return t.Code === "withdraw";
          })}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  transactionsList: state.transactions.items
});

export default connect(mapStateToProps, { getTransactions })(Operations);
