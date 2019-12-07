import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const StyledButton = withStyles({
  root: {
    background: "#18122B",
    borderRadius: 40,
    borderWidth: "1px",
    borderStyle: "solid",
    border: 0,
    color: "white",
    height: 48,
    padding: "10px 39px 11px 40px",
    fontSize: "12px",
    fontWeight: 900,
    letterSpacing: "2px",
    lineHeight: "12px",
    borderColor: "rgba(155, 171, 255, 0.3)"
  }
})(Button);

const BankLogin = () => {
  return <StyledButton>Login as bank</StyledButton>;
};

export default BankLogin;
