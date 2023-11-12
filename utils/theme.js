import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: blue,
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;