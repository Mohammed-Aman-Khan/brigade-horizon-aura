import { useState } from "react";
import { useSnackbar } from "notistack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Chip from "@mui/material/Chip";
import axios from "axios";
import Tada from "react-reveal/Tada";
import Flash from "react-reveal/Flash";

const Index = ({ showDialog, onClose, isMobile }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
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
      if (!mobileNumber) {
        showError("Mobile Number is required");
        return;
      }
      if (!/[6-9]{1}[0-9]{9}/.test(mobileNumber)) {
        showError("Invalid Mobile Number");
        return;
      }

      setLoading(true);

      const formData = new FormData(e.target);
      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "formSubmission",
        formData: formDataObject,
      });

      const response = await axios.post("/api/submit-form", {
        name,
        mobileNumber,
      });

      if (response.data.status) {
        enqueueSnackbar("Details Submitted", { variant: "success" });
        setLoading(false);
      } else {
        showError(response.data.error);
        return;
      }

      onClose();
    } catch (err) {
      setLoading(false);
      showError(err.message);
    }
  };

  const form = (
    <form onSubmit={submit}>
      <TextField
        name="name"
        fullWidth
        label="Name *"
        variant="standard"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <div
        style={{
          display: "flex",
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
          name="mobileNumber"
          fullWidth
          label="Mobile Number *"
          variant="standard"
          sx={{ flexGrow: 1 }}
          value={mobileNumber}
          onChange={(e) => {
            if (e.target.value.length > 10) return;
            if (e.target.value === "" || /^[0-9\b]+$/.test(e.target.value)) {
              setMobileNumber(e.target.value);
            }
          }}
        />
      </div>
      <br />
      <br />
      <br />
      <center>
        {isMobile ? (
          <Flash forever duration={5000}>
            <Button
              variant="contained"
              type="submit"
              size="large"
              sx={{ width: "80%" }}
            >
              Pre-register Now
            </Button>
          </Flash>
        ) : (
          <Tada forever>
            <Button
              variant="contained"
              type="submit"
              size="large"
              sx={{ width: "90%" }}
            >
              Pre-register Now
            </Button>
          </Tada>
        )}
        <br />
        <br />
        <Chip
          sx={{ padding: "5px" }}
          icon={<LocalTaxiIcon color="primary" />}
          label={<Typography>Free cab facility for site visit</Typography>}
        />
      </center>
    </form>
  );

  return (
    <>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          position: "fixed",
          top: 0,
          left: "75%",
          height: "100vh",
          width: "25%",
        }}
      >
        <Button
          sx={{
            width: "50%",
            borderRadius: 0,
          }}
          variant="contained"
          disableElevation
          onClick={() => showDialog("Organize Site Visit")}
        >
          Organize Site Visit
        </Button>
        <Button
          sx={{
            backgroundColor: "#25D366",
            color: "white",
            width: "50%",
            "&:hover": {
              backgroundColor: "#25D366",
            },
            borderRadius: 0,
          }}
          disableElevation
          variant="contained"
          href="https://api.whatsapp.com/send?phone=+919663098906&text=Hi I am Interested in Aura At Brigade Horizon, at Mysore Road, Bangalore. Please share the details."
          target="_blank"
          startIcon={<WhatsAppIcon />}
        >
          9663098906
        </Button>
        <br />
        <Button
          fullWidth
          sx={{
            borderRadius: 0,
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
          variant="contained"
          disableElevation
          onClick={() => showDialog("Request a Callback")}
          startIcon={<CallIcon />}
        >
          Request a Callback
        </Button>
        <Box sx={{ padding: "20px" }}>
          <Alert severity="success">
            <AlertTitle sx={{ margin: 0 }}>
              Register and avail the <strong>best offers</strong>
            </AlertTitle>
          </Alert>
          <br />
          {form}
        </Box>
      </Box>
      <Box
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
          padding: "30px 10px",
        }}
      >
        {form}
      </Box>
      <Box
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "flex-end",
          }}
        >
          <Button
            sx={{
              width: "26%",
              borderRadius: 0,
              borderTopLeftRadius: "10px",
            }}
            variant="contained"
            disableElevation
            href="tel:+919663098906"
            startIcon={<CallIcon />}
          >
            Call
          </Button>
          <Button
            sx={{
              width: "36%",
              borderRadius: 0,
            }}
            variant="contained"
            disableElevation
            onClick={() => showDialog("Mail me the details")}
            startIcon={<EmailIcon />}
          >
            Enquire
          </Button>
          <Button
            sx={{
              width: "38%",
              backgroundColor: "#25D366",
              color: "white",
              "&:hover": {
                backgroundColor: "#25D366",
              },
              borderRadius: 0,
              borderTopRightRadius: "10px",
            }}
            disableElevation
            variant="contained"
            href="https://api.whatsapp.com/send?phone=+919663098906&text=Hi I am Interested in Aura At Brigade Horizon, at Mysore Road, Bangalore. Please share the details."
            target="_blank"
            startIcon={<WhatsAppIcon />}
          >
            9663098906
          </Button>
        </div>
      </Box>
      <Backdrop sx={{ color: "#fff", zIndex: 3000 }} open={loading}>
        <CircularProgress color="inherit" size={75} />
      </Backdrop>
    </>
  );
};

export default Index;
