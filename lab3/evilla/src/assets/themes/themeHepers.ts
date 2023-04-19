import colors from "../styles/colors.module.scss";

export const isLightMode = (colorMode: string) => {
  return colorMode === "light";
};

export const isDarkMode = (colorMode: string) => {
  return colorMode === "dark";
};

export const getIconColor = (colorMode: string) => {
  return isLightMode(colorMode)
    ? colors.lightCopyText
    : colors.darkCopyText;
};

export const getPrimaryColor = (colorMode: string) => {
    return isLightMode(colorMode)
      ? colors.lightPrimary
      : colors.darkPrimary;
  };