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
  },
});

export default theme;
