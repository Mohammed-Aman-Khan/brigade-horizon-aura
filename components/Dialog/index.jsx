import { useState } from "react";
import { useSnackbar } from "notistack";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import axios from "axios";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const Index = ({ onClose, pdfDownload, dialogTitle, isMobile }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [comments, setComments] = useState("");
  const [loading, setLoading] = useState(false);

  const showError = (msg) => {
    enqueueSnackbar(msg, { variant: "error", preventDuplicate: true });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (!name) {
        showError("Name is required");
        return;
      }
      if (!email) {
        showError("Email is required");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError("Invalid Email");
        return;
      }
      if (!mobileNumber) {
        showError("Mobile Number is required");
        return;
      }
      if (!/[6-9]{1}[0-9]{9}/.test(mobileNumber)) {
        showError("Invalid Mobile Number");
        return;
      }

      setLoading(true);

      const response = await axios.post("/api/submit-form", {
        name,
        email,
        mobileNumber,
        comments,
      });

      if (response.data.status) {
        enqueueSnackbar("Details Submitted", { variant: "success" });
        setLoading(false);
      } else {
        showError(response.data.error);
        return;
      }

      if (pdfDownload) {
        const pdfResponse = await fetch("Brochure.pdf");
        const blob = await pdfResponse.blob();
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Brochure.pdf";
        alink.click();
      }

      onClose();
    } catch (err) {
      setLoading(false);
      showError(err.message);
    }
  };

  return (
    <>
      <Dialog open fullWidth maxWidth="xs">
        <form onSubmit={submit}>
          <DialogTitle
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0px 10px",
            }}
          >
            {dialogTitle}
            <IconButton onClick={onClose} size="small">
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            {isMobile && (
              <center>
                <picture>
                  <source srcSet="/assets/logo.svg" />
                  <img
                    alt="Logo"
                    src="/assets/logo.svg"
                    style={{
                      width: "auto",
                      height: isMobile ? "50px" : "75px",
                    }}
                  />
                </picture>
              </center>
            )}
            <Grid container spacing={3}>
              <Grid item xs={isMobile ? 12 : 3}>
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: isMobile ? "row" : "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <center>
                      <SupportAgentIcon
                        sx={{ fontSize: isMobile ? "25px" : "30px" }}
                        color="primary"
                      />
                      {isMobile && <br />}
                      <Typography variant={isMobile ? "caption" : "body2"}>
                        Instant Callback
                      </Typography>
                    </center>
                  </div>
                  <div>
                    <center>
                      <DirectionsCarIcon
                        sx={{ fontSize: isMobile ? "25px" : "30px" }}
                        color="primary"
                      />
                      {isMobile && <br />}
                      <Typography variant={isMobile ? "caption" : "body2"}>
                        Free Site Visit
                      </Typography>
                    </center>
                  </div>
                  <div>
                    <center>
                      <CurrencyRupeeIcon
                        sx={{ fontSize: isMobile ? "25px" : "30px" }}
                        color="primary"
                      />
                      {isMobile && <br />}
                      <Typography variant={isMobile ? "caption" : "body2"}>
                        Unmatched Price
                      </Typography>
                    </center>
                  </div>
                </div>
              </Grid>
              <Grid item xs={isMobile ? 12 : 9}>
                {!isMobile && (
                  <center>
                    <picture>
                      <source srcSet="/assets/logo.svg" />
                      <img
                        alt="Logo"
                        src="/assets/logo.svg"
                        style={{
                          width: "auto",
                          height: isMobile ? "25px" : "50px",
                        }}
                      />
                    </picture>
                  </center>
                )}
                <Alert
                  severity="success"
                  icon={isMobile ? <></> : <LocalOfferIcon />}
                  sx={{ marginBottom: "10px", padding: "0px 0px 0px 5px" }}
                >
                  <AlertTitle sx={{ margin: 0, padding: 0 }}>
                    <Typography variant={isMobile ? "subtitle2" : "body2"}>
                      Register and avail the <strong>best offers</strong>
                    </Typography>
                  </AlertTitle>
                </Alert>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Name *"
                  variant="standard"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={{ marginBottom: "10px" }}
                />
                <TextField
                  fullWidth
                  placeholder="Email *"
                  variant="standard"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ marginBottom: "10px" }}
                />
                <div
                  style={{
                    display: "flex",
                    marginBottom: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      paddingBottom: "4px",
                      paddingRight: "10px",
                    }}
                  >
                    +91
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Mobile Number *"
                    variant="standard"
                    sx={{ flexGrow: 1 }}
                    value={mobileNumber}
                    onChange={(e) => {
                      if (e.target.value.length > 10) return;
                      if (
                        e.target.value === "" ||
                        /^[0-9\b]+$/.test(e.target.value)
                      ) {
                        setMobileNumber(e.target.value);
                      }
                    }}
                  />
                </div>
                <TextField
                  fullWidth
                  multiline
                  minRows={1}
                  placeholder="Comments"
                  variant="standard"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions
            sx={{
              padding: 0,
            }}
          >
            <div
              style={{
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px",
                  width: "100%",
                }}
              >
                <Chip
                  sx={{ padding: "5px" }}
                  icon={<LocalTaxiIcon color="primary" />}
                  label={
                    <Typography variant="caption">
                      Free cab facility for site visit
                    </Typography>
                  }
                />
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </div>
              <Box
                sx={{
                  padding: "5px",
                  width: "100%",
                  backgroundColor: (theme) => theme.palette.primary.dark,
                  color: "white",
                }}
              >
                <center>
                  <a
                    href="tel:+919663098906"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Typography>+91 96630-98906</Typography>
                  </a>
                </center>
              </Box>
            </div>
          </DialogActions>
        </form>
      </Dialog>
      <Backdrop sx={{ color: "#fff", zIndex: 3000 }} open={loading}>
        <CircularProgress color="inherit" size={75} />
      </Backdrop>
    </>
  );
};

export default Index;
