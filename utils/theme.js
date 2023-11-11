import { createTheme } from "@mui/material";
import { cyan } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: cyan,
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
