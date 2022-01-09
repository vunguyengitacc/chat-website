import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    regular1: true;
    regular2: true;
    regular3: true;
    regular4: true;
    regular5: true;
    regular6: true;

    semiBold1: true;
    semiBold2: true;
    semiBold3: true;
    semiBold4: true;
    semiBold5: true;
    semiBold6: true;

    bold1: true;
    bold2: true;
    bold3: true;
    bold4: true;
    bold5: true;
    bold6: true;
  }
}
const themeTypography = {
  typography: {
    regular1: { fontSize: "10px", lineHeight: "12px", fontWeight: 500 },
    regular2: { fontSize: "12px", lineHeight: "16px", fontWeight: 500 },
    regular3: { fontSize: "14px", lineHeight: "22px", fontWeight: 500 },
    regular4: { fontSize: "16px", lineHeight: "24px", fontWeight: 500 },
    regular5: { fontSize: "18px", lineHeight: "26px", fontWeight: 500 },
    regular6: { fontSize: "20px", lineHeight: "28px", fontWeight: 500 },

    semiBold1: { fontSize: "10px", lineHeight: "12px", fontWeight: 600 },
    semiBold2: { fontSize: "12px", lineHeight: "16px", fontWeight: 600 },
    semiBold3: { fontSize: "14px", lineHeight: "22px", fontWeight: 600 },
    semiBold4: { fontSize: "16px", lineHeight: "24px", fontWeight: 600 },
    semiBold5: { fontSize: "18px", lineHeight: "16px", fontWeight: 600 },
    semiBold6: { fontSize: "20px", lineHeight: "28px", fontWeight: 600 },

    bold1: { fontSize: "10px", lineHeight: "12px", fontWeight: 700 },
    bold2: { fontSize: "12px", lineHeight: "16px", fontWeight: 700 },
    bold3: { fontSize: "14px", lineHeight: "22px", fontWeight: 700 },
    bold4: { fontSize: "16px", lineHeight: "24px", fontWeight: 700 },
    bold5: { fontSize: "18px", lineHeight: "26px", fontWeight: 700 },
    bold6: { fontSize: "20px", lineHeight: "28px", fontWeight: 700 },
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
};

const theme = createTheme({
  ...themeTypography,
  palette: {
    success: {
      main: "#91ff35",
    },
    primary: {
      main: "#4dabf5",
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {},
    },
  },
});

export default theme;
