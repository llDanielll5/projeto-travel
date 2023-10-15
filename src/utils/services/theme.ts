import { createTheme } from "@mui/material/styles";
import { COLORS } from "../contants/colors";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions["primary"];
  }

  interface TypographyVariants {
    bold: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    bold?: React.CSSProperties;
  }
}

declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}

const theme = createTheme({
  palette: {
    primary: { main: COLORS.primary },
    secondary: { main: COLORS.secondary },
    tertiary: { main: COLORS.black },
  },
  typography: { fontFamily: "Poppins" },
});

export default theme;
