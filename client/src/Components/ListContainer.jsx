import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getUsers } from "../actions/userActions";

import Lists from "./Lists";
import { getBanks } from "../actions/bankActions";

const ListContainer = ({ users, banks, getUsers, getBanks }) => {
  useEffect(() => {
    getUsers();
    getBanks();
  }, []);

  return (
    <div>
      <Box className="ml-md-5 mr-md-5 mt-md-5">
        <div className="container">
          <div className="row justify-content-between pl-5 pr-5">
            <div className="col-md-5">
              <Lists subheader="Users" users={users} />
            </div>
            <div className="col-md-5">
              <Lists subheader="Banks" banks={banks} />
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users.items,
  banks: state.banks.items
});

export default connect(mapStateToProps, {
  getUsers,
  getBanks
})(ListContainer);
