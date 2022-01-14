import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent !important",
        },
      },
    },
  },
});

export default theme;
