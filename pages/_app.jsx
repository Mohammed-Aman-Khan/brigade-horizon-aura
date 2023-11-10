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
      {/* <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11028930152');
        `}
      </Script> */}
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
      {/* <Script strategy="afterIteractive" id="body">
        {`
          window.addEventListener('load',function(){
          var x = 0;
          var timer = setInterval(function(){
            if(document.querySelectorAll('.SnackbarItem-message').length>0 ){
              if(x==0){
                gtag('event', 'conversion', {'send_to': 'AW-11028930152/puDECMzykIUYEOi8gIsp'});
                x=1;
              }
              clearInterval(timer);
            }
          })
          })
        `}
      </Script> */}
    </>
  );
};

export default App;
