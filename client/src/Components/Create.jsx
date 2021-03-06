/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import { useMediaQuery } from "react-responsive";
import { connect } from "react-redux";
import MuiAlert from "@material-ui/lab/Alert";
import { createBank } from "../actions/bankActions";
import { createPerson } from "../actions/personActions";
import { createAccount } from "../actions/accountActions";

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
    whiteSpace: "nowrap",
  },
})(Button);

function Alert(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Transition = React.forwardRef(function Transition(props, ref) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide direction="right" ref={ref} {...props} />;
});

function Create({
  type,
  banksList,
  createBank,
  createPerson,
  createAccount,
  pName,
  errors,
}) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [bankName, setBankName] = useState("");
  const [personName, setPersonName] = useState("");
  const [openSnackBar, setOpenSnackBar] = React.useState(false);

  useEffect(() => {
    if (type === "account" && banksList.length > 0) {
      setBankName(banksList[0].name);
    }
  }, [type, banksList]);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBar(false);
  };

  function create() {
    switch (type) {
      case "bank":
        createBank(bankName);
        setTimeout(() => {
          setOpenSnackBar(true);
        }, 2000);
        setBankName("");
        break;
      case "person":
        createPerson(personName);
        setTimeout(() => {
          setOpenSnackBar(true);
        }, 2000);
        setPersonName("");
        break;
      case "account":
        createAccount(bankName, pName);
        setTimeout(() => {
          setOpenSnackBar(true);
        }, 2000);
        break;
      default:
        break;
    }
    handleCloseDialog();
  }

  const handleChangeName = (event) => {
    switch (type) {
      case "bank":
        setBankName(event.target.value);
        break;
      case "person":
        setPersonName(event.target.value);
        break;
      case "account":
        setBankName(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <StyledButton
        onClick={handleClickOpenDialog}
        style={{ whiteSpace: `${isDesktopOrLaptop ? "" : "normal"}` }}
      >
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
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
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <DialogTitle id="form-dialog-title">Create {type}</DialogTitle>
        <DialogContent>
          {type === "account" ? (
            <Select
              native
              value={bankName}
              onChange={handleChangeName}
              input={<Input id="demo-dialog-native" />}
              label="Bank"
              fullWidth
              disabled={banksList.length < 1}
            >
              {banksList.map((bank, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <option key={index} value={bank.name}>
                  {bank.name}
                </option>
              ))}
            </Select>
          ) : (
            <TextField
              autoFocus
              margin="dense"
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
      <Snackbar
        open={openSnackBar}
        autoHideDuration={5000}
        onClose={handleCloseSnackBar}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity={errors.error ? "error" : "success"}
        >
          {errors.error
            ? errors.message
            : `${
                type.charAt(0).toUpperCase() + type.slice(1)
              } created successfully!`}
        </Alert>
      </Snackbar>
    </>
  );
}

Create.propTypes = {
  type: PropTypes.string.isRequired,
  banksList: PropTypes.arrayOf(PropTypes.object).isRequired,
  createBank: PropTypes.func.isRequired,
  createPerson: PropTypes.func.isRequired,
  createAccount: PropTypes.func.isRequired,
  pName: PropTypes.string,
};

Create.defaultProps = {
  pName: "",
};

const mapStateToProps = (state) => ({
  banksList: state.banks.items,
  accounts: state.accounts.items,
  errors: state.errors.item,
});

export default connect(mapStateToProps, {
  createPerson,
  createBank,
  createAccount,
})(Create);
