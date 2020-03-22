import React from "react";
import Operation from "./Operation";

const Operations = ({ accountNumber }) => {
  return (
    <div className="row  justify-content-center loggedin-hero">
      <div className="col-md-3 mb-sm-2 operations-box op-left mt-3">
        <Operation type="deposit" accountNumber={accountNumber} />
      </div>
      <div className="col-md-3 operations-box op-center">
        <Operation type="transfer" accountNumber={accountNumber} />
      </div>
      <div className="col-md-3 operations-box op-right mt-md-3">
        <Operation type="withdraw" accountNumber={accountNumber} />
      </div>
    </div>
  );
};

export default Operations;
