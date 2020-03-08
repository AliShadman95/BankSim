import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import { useMediaQuery } from "react-responsive";
import { connect } from "react-redux";
import { createBank } from "../actions/bankActions";
import { createPerson } from "../actions/personActions";

const StyledButton = withStyles({
  root: {
    background: "#18122B",
    borderRadius: 40,
    borderWidth: "1px",
    borderStyle: "solid",
    border: 0,
    color: "white",
    height: 38,
    padding: "10px 39px 11px 40px",
    fontSize: "12px",
    fontWeight: 900,
    letterSpacing: "2px",
    lineHeight: "12px",
    borderColor: "rgba(155, 171, 255, 0.3)",
    whiteSpace: "nowrap"
  }
})(Button);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

function Create({ type, personsList, banksList, createBank, createPerson }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)"
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [bankName, setBankName] = useState("");
  const [personName, setPersonName] = useState("");
  const [accountName, setAccountName] = useState("");

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  function create() {
    switch (type) {
      case "bank":
        createBank(bankName);
        break;
      case "person":
        createPerson(personName);
        break;
      case "account":
        break;
      case "default":
        break;
    }
    handleCloseDialog();
  }

  const handleChangeName = event => {
    switch (type) {
      case "bank":
        setBankName(event.target.value);
        break;
      case "person":
        setPersonName(event.target.value);
        break;
      case "account":
        setAccountName(event.target.value);
        break;
      case "default":
        break;
    }
  };

  return (
    <React.Fragment>
      <StyledButton
        onClick={handleClickOpenDialog}
        style={{ whiteSpace: `${isDesktopOrLaptop ? "" : "normal"}` }}
      >
        Create {type}
      </StyledButton>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle id="form-dialog-title">Create {type}</DialogTitle>
        <DialogContent>
          {type === "account" ? (
            <TextField
              id="standard-select-currency"
              label="Bank"
              select
              value={accountName}
              onChange={handleChangeName}
              InputLabelProps={{
                shrink: true
              }}
              helperText="Please select a bank"
            >
              <MenuItem value={1}>Bank1</MenuItem>
              <MenuItem value={2}>Bank2</MenuItem>
              <MenuItem value={3}>Bank3</MenuItem>
            </TextField>
          ) : (
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label={`${type === "bank" ? "Bank name" : "Person name"}`}
              type="text"
              fullWidth
              onChange={handleChangeName}
              value={type === "bank" ? bankName : personName}
              helperText={`${"Please choose a  "} ${
                type === "bank" ? "bank name" : "person name"
              }`}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button color="primary" onClick={create}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  personsList: state.persons.items,
  banksList: state.banks.items
});

export default connect(mapStateToProps, { createPerson, createBank })(Create);