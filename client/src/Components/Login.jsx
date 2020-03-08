import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

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

const Login = ({ type, personsList, banksList }) => {
  let history = useHistory();

  const [openDialog, setOpenDialog] = useState(false);

  const handleLoginClick = () => {
    history.push({
      pathname: "/login",
      state:
        type === "bank"
          ? { bank: "hello, im a passed message!" }
          : { person: "hello, im a passed message!" }
    });
  };

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [bankOrUser, setBankOrUser] = React.useState("");

  const handleChange = event => {
    setBankOrUser(event.target.value || "");
  };

  return (
    <React.Fragment>
      <StyledButton onClick={handleClickOpenDialog}>
        Login as {type}
      </StyledButton>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Transition}
        keepMounted
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Login as {type}</DialogTitle>
        <DialogContent>
          <InputLabel htmlFor="demo-dialog-native">
            {type.charAt(0).toUpperCase() + type.slice(1) + "s"}
          </InputLabel>
          <Select
            native
            value={bankOrUser}
            onChange={handleChange}
            input={<Input id="demo-dialog-native" />}
            fullWidth
          >
            {type === "person"
              ? personsList.map((person, index) => {
                  return (
                    <option key={index} value={person.name}>
                      {person.name}
                    </option>
                  );
                })
              : banksList.map((bank, index) => {
                  return (
                    <option key={index} value={bank.name}>
                      {bank.name}
                    </option>
                  );
                })}
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button color="primary" onClick={handleLoginClick}>
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  personsList: state.persons.items,
  banksList: state.banks.items
});

export default connect(mapStateToProps, {})(Login);
