import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#66bb6a",
      light: "#81c784",
      dark: "#388e3c",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
