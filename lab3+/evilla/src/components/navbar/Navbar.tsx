import * as React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { Box, Tooltip, useStyleConfig } from "@chakra-ui/react";
import styles from "./Navbar.module.scss";
import { LogoIcon } from "../../assets/icons/LogoIcon";
import { HomeIcon } from "../../assets/icons/HomeIcon";
import ToggleThemeButton from "../toggle-theme-button/ToggleThemeButton";
import { LoginLogout } from "./components/LoginLogout";
import { faStar, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  const navbarStyles = useStyleConfig("Background");

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
            <Link to={"/new"}>
              <Tooltip label="Add your offer">
                <FontAwesomeIcon icon={faUserPlus} size="xl" />
              </Tooltip>
            </Link>
            <ToggleThemeButton />

            <LoginLogout />
          </div>
        </div>
      </ Box>
      <Outlet />
    </>
  );
};