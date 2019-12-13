import React from "react";
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
const useStyles = makeStyles(theme => ({
  root: {},
  subheader: {
    color: "#ffffff",
    fontFamily: "Heebo, Arial !important",
    fontSize: "36px",
    fontWeight: "bold",
    lineHeight: "47px"
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  lightText: {
    color: "#87BBC1 !important"
  },

  bigAvatar: {
    width: 60,
    height: 60
  },
  subDivider: {
    backgroundColor: "#9BAAFC !important",
    marginRight: "60px !important",
    marginLeft: "60px !important"
  }
}));

const StyledListItemText = withStyles({
  root: {
    color: "#9BAAFC",
    fontFamily: "Open Sans ,sans-serif !important",
    fontSize: "16px !important",
    fontWeight: 1000,
    letterSpacing: "0.45px",
    lineHeight: "25px"
  }
})(ListItemText);

const Lists = ({ subheader }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
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
      <ListItem button onClick={handleClick}>
        <ListItemAvatar>
          <Avatar
            alt="oragesphere"
            src={OrangeSphere}
            className={classes.bigAvatar}
          />
        </ListItemAvatar>
        <StyledListItemText
          primary="bank2"
          className="pl-2"
          disableTypography
        />

        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemAvatar>
              <Avatar alt="blue shpere" src={BlueSphere} />
            </ListItemAvatar>
            <StyledListItemText
              primary="bank2"
              className={`${classes.lightText} ${"pl-2"}`}
              disableTypography
            />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemAvatar>
              <Avatar alt="blue shpere" src={BlueSphere} />
            </ListItemAvatar>
            <StyledListItemText
              primary="bank2"
              className={`${classes.lightText} ${"pl-2"}`}
              disableTypography
            />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemAvatar>
              <Avatar alt="blue shpere" src={BlueSphere} />
            </ListItemAvatar>
            <StyledListItemText
              primary="bank2"
              className={`${classes.lightText} ${"pl-2"}`}
              disableTypography
            />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

export default Lists;
