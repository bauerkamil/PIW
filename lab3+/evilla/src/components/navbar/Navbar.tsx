import * as React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { Box, Tooltip, useStyleConfig } from "@chakra-ui/react";
import styles from "./Navbar.module.scss";
import { LogoIcon } from "../../assets/icons/LogoIcon";
import { HomeIcon } from "../../assets/icons/HomeIcon";
import ToggleThemeButton from "../toggle-theme-button/ToggleThemeButton";
import { LoginLogout } from "./components/LoginLogout";
import { faStar, faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Register } from "./components/register/Register";
import { UserContext } from "../../common/providers/UserProvider";

export const Navbar = () => {
  const navbarStyles = useStyleConfig("Background");

  const { state: user } = React.useContext(UserContext);

  return (
    <>
      <Box className={styles.navbarContainer} __css={navbarStyles}>
        <div className={styles.navbarWrapper}>
          <Link to={"/home"}>
            <LogoIcon />
          </Link>
          <div className={styles.navbarLinks}>
            <Link to={"/home"}>
              <HomeIcon />
            </Link>
            <Link to={"/favorites"}>
              <FontAwesomeIcon icon={faStar} size="xl" />
            </Link>
            {(user) &&
              <Link to={"/new"}>
                <Tooltip label="Add your offer">
                  <FontAwesomeIcon icon={faFileCirclePlus} size="xl" />
                </Tooltip>
              </Link>
            }
            <ToggleThemeButton />
            <Register />
            <LoginLogout />
          </div>
        </div>
      </ Box>
      <Outlet />
    </>
  );
};