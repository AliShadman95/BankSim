import React from "react";
import { Box, Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <Box className="container">
      <div className="row">
        <div className="col-md-12 text-right">
          <Typography
            component="span"
            variant="caption"
            style={{ color: "white" }}
          >
            Made by Ali Shadman
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
