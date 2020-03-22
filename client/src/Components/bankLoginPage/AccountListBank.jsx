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
import { useMediaQuery } from "react-responsive";

import GreenSphere from "../../Media/green-sphere-312.png";

function AccountListBank({ bankName, accountsList }) {
  function renderRow(props) {
    const { index, style } = props;

    return (
      <ListItem style={style}>
        <ListItemAvatar>
          <Avatar src={GreenSphere} key={index} />
        </ListItemAvatar>
        <ListItemText
          primary={`${accountsList[index].personName} / ${accountsList[index].accountNumber} `}
          secondary={accountsList[index].balance}
        />
      </ListItem>
    );
  }
  return (
    <div className="col-md-12 operations-box op-center">
      <div className="row" style={{ maxHeight: "15vh" }}>
        <div className="col-md-12 d-flex flex-column align-items-start pt-3 pl-4">
          <p
            className="hero-subtitle light-text"
            style={{
              marginBottom: "0px",
              fontSize: "12px",
              fontWeight: "900"
            }}
          >
            {bankName}
          </p>
          <h1>Accounts list</h1>
        </div>
      </div>
      <Divider variant="middle" className="light-divider" />
      <div className="row mt-2 mb-2" style={{ maxHeight: "40vh" }}>
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList
              height={height}
              width={width}
              itemSize={56}
              itemCount={accountsList.length}
            >
              {renderRow}
            </FixedSizeList>
          )}
        </AutoSizer>
      </div>
    </div>
  );
}

export default AccountListBank;
