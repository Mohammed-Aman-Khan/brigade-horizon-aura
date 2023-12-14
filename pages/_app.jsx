import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import theme from "../utils/theme";
import withStyles from "@mui/styles/withStyles";
import Paper from "@mui/material/Paper";
import Script from "next/script";

const MyPaper = withStyles({ root: { height: "100vh" } })(Paper);

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={3000}
          anchorOrigin={{
            horizontal: "center",
            vertical: "bottom",
          }}
        >
          <MyPaper square elevation={0}>
            <Component {...pageProps} />
          </MyPaper>
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
