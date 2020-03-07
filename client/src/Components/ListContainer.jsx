import React from "react";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import Lists from "./Lists";

const ListContainer = ({ personsList, banksList }) => {
  return (
    <div>
      <Box className="ml-md-5 mr-md-5 mt-md-5">
        <div className="container">
          <div className="row justify-content-between pl-5 pr-5">
            <div className="col-md-5">
              <Lists subheader="Users" persons={personsList} />
            </div>
            <div className="col-md-5">
              <Lists subheader="Banks" banks={banksList} />
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

const mapStateToProps = state => ({
  personsList: state.persons.items,
  banksList: state.banks.items
});

export default connect(mapStateToProps, {})(ListContainer);
