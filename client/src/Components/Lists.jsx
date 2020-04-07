import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import OrangeSphere from "../Media/orange_sphere-312.png";
import BlueSphere from "../Media/blue-sphere-312.png";

const useStyles = makeStyles((theme) => ({
  root: {},
  subheader: {
    color: "#8f9cec",
    fontFamily: "Heebo, Arial !important",
    fontSize: "36px",
    fontWeight: "bold",
    lineHeight: "47px",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  lightText: {
    color: "#87BBC1 !important",
  },

  bigAvatar: {
    width: 60,
    height: 60,
  },
  subDivider: {
    backgroundColor: "#9BAAFC !important",
    marginRight: "30px !important",
    marginLeft: "30px !important",
  },
}));

const StyledListItemText = withStyles({
  root: {
    color: "#9BAAFC",
    fontFamily: "Open Sans ,sans-serif !important",
    fontSize: "16px !important",
    fontWeight: 1000,
    letterSpacing: "0.45px",
    lineHeight: "25px",
  },
})(ListItemText);

const Lists = ({ subheader, persons, banks }) => {
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          className={`${classes.subheader} ${"text-center"}`}
        >
          {subheader}
        </ListSubheader>
      }
    >
      <Divider variant="middle" component="li" className={classes.subDivider} />

      <div style={{ height: "68vh", overflow: "scroll" }}>
        {persons
          ? persons.map((person, index) => {
              return (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar
                      alt="oragesphere"
                      src={OrangeSphere}
                      className={classes.bigAvatar}
                    />
                  </ListItemAvatar>
                  <StyledListItemText
                    primary={person.name}
                    className="pl-2"
                    disableTypography
                  />
                </ListItem>
              );
            })
          : banks.map((bank, index) => {
              return (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar
                      alt="oragesphere"
                      src={OrangeSphere}
                      className={classes.bigAvatar}
                    />
                  </ListItemAvatar>
                  <StyledListItemText
                    primary={bank.name}
                    className="pl-2"
                    disableTypography
                  />
                </ListItem>
              );
            })}
      </div>
    </List>
  );
};

export default Lists;
