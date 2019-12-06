import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../Components/Logo";

const useStyles = makeStyles({});

const Header = () => {
  const classes = useStyles();
  return (
    <nav
      className={"navbar navbar-expand-lg site-navbar navbar-light bg-light"}
      id="pb-navbar"
    >
      <a className="navbar-brand ml-md-5 pl-md-5">
        <Logo />
      </a>
      <div className="container">
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="navbar-collapse justify-content-md-end collapse mr-md-5 pr-md-5"
          id="navbarsExample09"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <span>Banks</span>
            </li>

            <li className="nav-item">
              <span>Users</span>
            </li>

            <li className="nav-item">
              <span>Sign in as user</span>
            </li>

            <li className="nav-item">
              <span>Sign in as bank</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
