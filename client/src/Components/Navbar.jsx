import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "react-responsive";
import Logo from "./Logo";
import Scroll from "react-scroll";
import Login from "./Login";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import PurpleSphere from "../Media/purple-sphere-312.png";
import Create from "./Create";
const ScrollLink = Scroll.Link;

const useStyles = makeStyles({});

const Navbar = ({ login }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)"
  });
  const handleLogout = () => {};
  return (
    <nav
      className={"navbar navbar-expand-lg site-navbar navbar-light bg-light"}
      id="pb-navbar"
    >
      {isDesktopOrLaptop && (
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
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="navbar-collapse  justify-content-md-end  collapse mr-md-5 pr-md-5"
          id="navbarsExample09"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <ScrollLink
                to="users"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link active"
              >
                <span>Banks & Users</span>
              </ScrollLink>
            </li>

            {!login ? (
              <React.Fragment>
                <li className="nav-item mr-3">
                  <Login type="bank" />
                </li>

                <li className="nav-item">
                  <Login type="user" />
                </li>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <li className="nav-item mr-1">
                  <Create type="account" />
                </li>
                <li className="nav-item ml-2 mt-1">
                  <Chip
                    color="primary"
                    onDelete={handleLogout}
                    avatar={<Avatar src={PurpleSphere} />}
                    label="Username"
                  />
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
