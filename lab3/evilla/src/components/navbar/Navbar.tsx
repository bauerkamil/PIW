import * as React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { Box, Button, useStyleConfig } from "@chakra-ui/react";
import styles from "./Navbar.module.scss";
import { LogoIcon } from "../../assets/icons/LogoIcon";
import { HomeIcon } from "../../assets/icons/HomeIcon";
import ToggleThemeButton from "../toggle-theme-button/ToggleThemeButton";

export const Navbar = () => {
    // const navbarStyles = useStyleConfig(StyledComponents.Navbar);
  
    return (
      <>
        <div className={styles.navbarContainer}>
           <Box className={styles.navbarWrapper}> {/*__css={navbarStyles}> */}
              <Link to={"/home"}>
                <LogoIcon />
              </Link>
              <div className={styles.navbarLinks}>
                <Link to={"/home"}>
                  <HomeIcon />
                </Link>
                <ToggleThemeButton />
                <Link to="/new">
                  <Button variant="solid">
                    Add your offer                    
                  </Button>
                </Link>
              </div>
          </Box>
        </div>
      <Outlet />
      </>
    );
  };