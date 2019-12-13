import React from "react";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";

import Lists from "./Lists";

const Users = () => {
  return (
    <div>
      <Box className="ml-md-5 mr-md-5 mt-md-5">
        <div className="container">
          <div className="row justify-content-between pl-5 pr-5">
            <div className="col-md-5">
              <Lists subheader="Users" />
            </div>
            <div className="col-md-5">
              <Lists subheader="Banks" />
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Users;
