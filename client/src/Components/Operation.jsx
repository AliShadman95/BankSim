import React, { useState } from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { FixedSizeList } from "react-window";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import TextField from "@material-ui/core/TextField";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import AutoSizer from "react-virtualized-auto-sizer";
import MenuItem from "@material-ui/core/MenuItem";

import GreenSphere from "../Media/green-sphere-312.png";

const CssTextField = withStyles({
  root: {
    "& .MuiFormLabel-root": {
      color: "white",
      fontWeight: "bold"
    },
    "& .MuiInput-underline:before": {
      borderBottom: "1px solid #9FBFF5"
    },
    "& .MuiInputBase-input": {
      color: "#9FBFF5",
      fontWeight: "bold"
    },
    "& .MuiFormHelperText-root": {
      color: "white",
      fontWeight: "bold"
    }
  }
})(TextField);

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style}>
      <ListItemAvatar>
        <Avatar src={GreenSphere} key={index} />
      </ListItemAvatar>
      <ListItemText primary="Single-line item" />
    </ListItem>
  );
}

const Operation = ({ type }) => {
  const [accountFrom, setAccountFrom] = useState("0000000");
  const [accountTo, setAccountTo] = useState("0000000");

  const handleChangeAccountFrom = event => {
    setAccountFrom(event.target.value);
  };
  const handleChangeAccountTo = event => {
    setAccountTo(event.target.value);
  };
  return (
    <React.Fragment>
      <div className="row" style={{ maxHeight: "15vh" }}>
        <div className="col-md-12 d-flex flex-column align-items-start pt-3 pl-4">
          <p
            className={`${
              type === "transfer"
                ? "hero-subtitle lightest-text"
                : "hero-subtitle light-text"
            }`}
            style={{
              marginBottom: "0px",
              fontSize: "12px",
              fontWeight: "900"
            }}
          >
            User1
          </p>
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
        style={{ maxHeight: `${type === "transfer" ? "24vh" : "30vh"}` }}
      >
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList
              height={height}
              width={width}
              itemSize={46}
              itemCount={20}
            >
              {renderRow}
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
        <div className="row mt-2" style={{ maxHeight: "10vh" }}>
          <div className="col-md-6 pt-1 ">
            <CssTextField
              id="filled-number"
              label="From"
              select
              value={accountFrom}
              onChange={handleChangeAccountFrom}
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              helperText="Please select from"
              fullWidth
            >
              <MenuItem value={1}>18878966</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </CssTextField>
          </div>
          <div className="col-md-6  pt-1 ">
            <CssTextField
              id="standard-select-currency"
              label="To"
              select
              value={accountTo}
              onChange={handleChangeAccountTo}
              InputLabelProps={{
                shrink: true
              }}
              helperText="Please select to"
              fullWidth
            >
              <MenuItem value={1}>118878966</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </CssTextField>
          </div>
        </div>
      )}
      <div
        className={`${"row mt-2"} ${type === "transfer" ? "mb-1" : ""}`}
        style={{ maxHeight: "10vh" }}
      >
        <div className="col-md-6  pt-1 ">
          <CssTextField
            id="standard-select-currency"
            label="Amount"
            InputLabelProps={{
              shrink: true
            }}
          />
        </div>
        <div className="col-md-6 pt-2">
          <AwesomeButton
            size="small"
            type="primary"
            style={{ backgroundColor: "#85b8e4 !important" }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </AwesomeButton>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Operation;
