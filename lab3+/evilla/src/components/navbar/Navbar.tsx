import * as React from "react";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Box, Button, useStyleConfig } from "@chakra-ui/react";
import styles from "./Navbar.module.scss";
import { LogoIcon } from "../../assets/icons/LogoIcon";
import { HomeIcon } from "../../assets/icons/HomeIcon";
import ToggleThemeButton from "../toggle-theme-button/ToggleThemeButton";
import { LoginLogout } from "./components/LoginLogout";

export const Navbar = () => {
  const navbarStyles = useStyleConfig("Background");

  const navigate = useNavigate();

  const navigateToNew = () => {
    navigate("/new");
  };
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
            <ToggleThemeButton />
            <Button variant="solid" onClick={navigateToNew}>
              Add your offer
            </Button>
            <LoginLogout />
          </div>
        </div>
      </ Box>
      <Outlet />
    </>
  );
};