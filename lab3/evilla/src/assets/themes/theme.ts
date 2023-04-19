import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import colors from "../styles/colors.module.scss";

const getInitialColorMode = () => {
    let currentHour = new Date().getHours()

    if (currentHour > 18 || currentHour < 6) {
        return 'dark'
    } else {
        return 'light'
    }
}

const theme = extendTheme({
    initialColorMode: {getInitialColorMode},
    styles: {
      global: (props: StyleFunctionProps) => ({
        body: {
            bg: mode(
                colors.lightBackground,
                colors.darkBackground
            )(props),
            color: mode(
                colors.lightCopyText, 
                colors.darkCopyText
            )(props),
        },
      }),
    },
    components: {
    //   PrimaryComponent,
    //   SecondaryComponent,
    //   PrimaryOrangeComponent,
    //   Navbar,
      Input: {
        variants: {
          search: (props: StyleFunctionProps) => ({
            field: {
              bg: mode(
                colors.lightComponentLayerBeige,
                colors.darkComponentLayerBeige
              )(props),
              borderRadius: "10px",
              boxShadow: colors.boxShadow,
              focusBorderColor: colors.lightFilterBarLayer,
              fontWeight: "700",
              width: "95%",
              height: "3em",
              _hover: {
                bg: mode(
                  colors.lightFilterBarLayer,
                  colors.darkFilterBarLayer
                )(props),
              },
            },
          }),
        },
      },
      Button: {
        variants: {
          solid: (props: StyleFunctionProps) => ({
            bg: mode(
              colors.lightPrimary,
              colors.darkPrimary
            )(props),
            borderRadius: "10px",
            boxShadow: colors.boxShadow,
            height: "3em",
            _hover: {
              bg: mode(
                colors.lightTertiary,
                colors.darkTertiary
              )(props),
            },
            // _active: {
            //   bg: colors.lightComponentLayerDarkerBeige,
            //   borderColor: colors.darkComponentLayerDarkerBeige,
            // },
          }),
        },
      },
    },
  });
  
  export default theme;  