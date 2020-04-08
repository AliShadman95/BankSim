/* eslint-disable no-shadow */
import React, { useState } from "react";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import { FixedSizeList } from "react-window";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import AutoSizer from "react-virtualized-auto-sizer";
import { useMediaQuery } from "react-responsive";
import { connect } from "react-redux";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import GreenSphere from "../../Media/green-sphere-312.png";
import {
  depositMoney,
  withdrawMoney,
  transferMoney,
} from "../../actions/transactionActions";

const moment = require("moment");

const CssTextField = withStyles({
  root: {
    "& .MuiFormLabel-root": {
      color: "white",
      fontWeight: "bold",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "1px solid #9FBFF5",
    },
    "& .MuiInputBase-input": {
      color: "#9FBFF5",
      fontWeight: "bold",
    },
    "& .MuiFormHelperText-root": {
      color: "white",
      fontWeight: "bold",
    },
  },
})(TextField);

function Alert(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Operation = ({
  type,
  accountNumber,
  depositMoney,
  errors,
  withdrawMoney,
  transferMoney,
  transactionsList,
}) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  const isTabletOrHigher = useMediaQuery({ query: "(min-width: 768px)" });
  const [accountTo, setAccountTo] = useState("");
  const [amount, setAmount] = useState("");
  const [openSnackBar, setOpenSnackBar] = React.useState(false);

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(false);
  };

  const handleChangeAccountTo = (event) => {
    setAccountTo(event.target.value);
  };

  const handleOperationClick = () => {
    switch (type) {
      case "deposit":
        depositMoney(accountNumber, amount);
        setTimeout(() => {
          setOpenSnackBar(true);
        }, 2000);
        break;
      case "withdraw":
        withdrawMoney(accountNumber, amount);
        setTimeout(() => {
          setOpenSnackBar(true);
        }, 2000);
        break;
      case "transfer":
        transferMoney(accountNumber, accountTo, amount);
        setTimeout(() => {
          setOpenSnackBar(true);
        }, 2000);
        break;
      default:
        break;
    }
    setAmount("");
    setAccountTo("");
  };

  function renderRow(props) {
    // eslint-disable-next-line react/prop-types
    const { index, style } = props;

    return (
      <ListItem style={style}>
        <ListItemAvatar>
          <Avatar src={GreenSphere} key={index} />
        </ListItemAvatar>
        <ListItemText
          primary={
            !isDesktopOrLaptop
              ? moment(transactionsList[index].TransactionTime).calendar()
              : transactionsList[index].TransactionTime.substring(
                  0,
                  transactionsList[index].TransactionTime.length - 3
                )
          }
          secondary={transactionsList[index].Amount}
        />
      </ListItem>
    );
  }

  function renderRowTransfer(props) {
    // eslint-disable-next-line react/prop-types
    const { index, style } = props;

    return (
      <ListItem style={style}>
        <ListItemAvatar>
          <Avatar src={GreenSphere} key={index} />
        </ListItemAvatar>
        <ListItemText
          primary={
            !isDesktopOrLaptop
              ? moment(transactionsList[index].TransactionTime).calendar()
              : transactionsList[index].TransactionTime.substring(
                  0,
                  transactionsList[index].TransactionTime.length - 3
                )
          }
          secondary={transactionsList[index].Amount}
        />
      </ListItem>
    );
  }

  return (
    <>
      <div className="row" style={{ maxHeight: "10vh" }}>
        <div className="col-md-12 d-flex flex-column align-items-start pt-3 pl-4">
          <h1>{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
        </div>
      </div>
      <Divider
        variant="middle"
        className={`${
          type === "transfer" ? "lightest-divider" : "light-divider"
        }`}
      />
      <div
        className="row mt-2 mb-2"
        style={{ maxHeight: `${type === "transfer" ? "29vh" : "35vh"}` }}
      >
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList
              height={height}
              width={width}
              itemSize={65}
              itemCount={transactionsList.length}
            >
              {type === "transfer" ? renderRowTransfer : renderRow}
            </FixedSizeList>
          )}
        </AutoSizer>
      </div>
      <Divider
        variant="middle"
        className={`${
          type === "transfer" ? "lightest-divider" : "light-divider"
        }`}
      />
      {type === "transfer" && (
        <div
          className="row mt-2 mb-sm-2"
          style={{ maxHeight: `${isTabletOrHigher ? "10vh" : "20vh"}` }}
        >
          <div className="col-md-12  pt-1 ">
            <CssTextField
              id="standard-select"
              label="To"
              value={accountTo}
              onChange={handleChangeAccountTo}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </div>
        </div>
      )}

      <div
        className={`${"row mt-2 nowrap-input"} ${
          type === "transfer" ? "mb-1" : ""
        }`}
        style={{ maxHeight: "10vh" }}
      >
        <div className="col-md-6 col-sm-4 pt-1 ">
          <CssTextField
            id="standard-select-currency"
            label="Amount"
            InputLabelProps={{
              shrink: true,
            }}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
          />
        </div>
        <div className="col-md-6 col-sm-4 pt-2">
          <AwesomeButton
            size="small"
            type="primary"
            style={{ backgroundColor: "#85b8e4 !important" }}
            onPress={handleOperationClick}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </AwesomeButton>
        </div>
      </div>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={5000}
        onClose={handleCloseSnackBar}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity={errors.error ? "error" : "success"}
        >
          {/* eslint-disable-next-line no-nested-ternary */}
          {errors.error
            ? errors.message.name
              ? errors.message.name
              : errors.message
            : `${type.charAt(0).toUpperCase() + type.slice(1)} successfull!`}
        </Alert>
      </Snackbar>
    </>
  );
};

Operation.propTypes = {
  type: PropTypes.string.isRequired,
  accountNumber: PropTypes.string.isRequired,
  depositMoney: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  withdrawMoney: PropTypes.func.isRequired,
  transferMoney: PropTypes.func.isRequired,
  transactionsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({ errors: state.errors.item });

export default connect(mapStateToProps, {
  depositMoney,
  withdrawMoney,
  transferMoney,
})(Operation);
