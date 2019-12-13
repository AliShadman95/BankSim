import React from "react";
import Operation from "./Operation";

const Operations = () => {
  return (
    <div className="row  justify-content-center">
      <div className="col-md-3 operations-box op-left mt-3">
        <Operation type="deposit" />
      </div>
      <div className="col-md-3 operations-box op-center">
        {" "}
        <Operation type="transfer" />
      </div>
      <div className="col-md-3 operations-box op-right mt-3">
        <Operation type="withdraw" />
      </div>
    </div>
  );
};

export default Operations;
