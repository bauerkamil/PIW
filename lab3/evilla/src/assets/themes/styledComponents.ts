import { defineStyleConfig, StyleFunctionProps } from "@chakra-ui/react";
import colors from "..//styles/colors.module.scss";
import { mode } from "@chakra-ui/theme-tools";

export const PrimaryComponent = defineStyleConfig({
    baseStyle: (props: StyleFunctionProps) => ({
      backgroundColor: mode(
        colors.lightComponentLayerOrange,
        colors.darkComponentLayerOrange
      )(props),
      boxShadow: colors.boxShadow,
      borderRadius: "10px",
    }),
  });
  
  export const Background = defineStyleConfig({
    baseStyle: (props: StyleFunctionProps) => ({
      background: mode(colors.lightBackground, colors.darkBackground)(props),
      backgroundSize: "contain",
    }),
  });