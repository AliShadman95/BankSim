import React from "react";
import { useMediaQuery } from "react-responsive";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import Logo from "./Logo";
import Login from "./Login";
import PurpleSphere from "../Media/purple-sphere-312.png";
import ListContainer from "./ListContainer";

const Navbar = ({ login, bankOrPerson }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  const history = useHistory();

  const handleLogout = () => {
    history.push("/");
  };

  return (
    <nav
      className="navbar navbar-expand-lg site-navbar navbar-light bg-light"
      id="pb-navbar"
    >
      {isDesktopOrLaptop && (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a className="navbar-brand ml-md-5 pl-md-5">
          <Logo />
        </a>
      )}
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
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="navbar-collapse  justify-content-md-end  collapse mr-md-5 pr-md-5"
          id="navbarsExample09"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <ListContainer />
            </li>

            {!login ? (
              <>
                <li className="nav-item mr-3">
                  <Login type="bank" />
                </li>

                <li className="nav-item">
                  <Login type="person" />
                </li>
              </>
            ) : (
              <>
                <li className="nav-item ml-2 mt-1">
                  <Chip
                    color="primary"
                    onDelete={handleLogout}
                    avatar={<Avatar src={PurpleSphere} />}
                    label={bankOrPerson}
                  />
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  login: PropTypes.bool,
  bankOrPerson: PropTypes.string,
};

Navbar.defaultProps = {
  login: false,
  bankOrPerson: "",
};

export default Navbar;
