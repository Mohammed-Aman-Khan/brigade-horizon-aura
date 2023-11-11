import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Overview from "../components/Overview";
import Pricing from "../components/Pricing";
import Amenities from "../components/Amenities";
import Gallery from "../components/Gallery";
import VirtualTour from "../components/VirtualTour";
import MasterPlan from "../components/MasterPlan";
import FloorPlans from "../components/FloorPlans";
import Location from "../components/Location";
import SidePanel from "../components/SidePanel";
import Dialog from "../components/Dialog";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";
import theme from "../utils/theme";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export const getStaticProps = () => {
  return {
    props: {},
  };
};

const Index = () => {
  const [dialog, setDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [pdfDownload, setPdfDownload] = useState(false);
  const [myTimeout, setMyTimeout] = useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const showDialog = (title) => {
    setDialogTitle(title);
    setDialog(true);
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      setDialogTitle("Get in touch");
      setDialog(true);
      clearTimeout(timeout);
    }, 5 * 1000);
  }, []);

  useEffect(() => {
    if (!dialog) {
      setDialogTitle("");
      clearInterval(myTimeout);
      let timeout = setTimeout(() => {
        setDialogTitle("Get in touch");
        setDialog(true);
        clearTimeout(timeout);
      }, 30 * 1000);
      setMyTimeout(timeout);
    } else {
      clearTimeout(myTimeout);
    }
  }, [dialog]);

  return (
    <>
      <Head>
        <title>Aura At Brigade Horizon</title>
      </Head>
      <Navbar>
        <Home
          showDialog={showDialog}
          setPdfDownload={setPdfDownload}
          isMobile={isMobile}
        />
        <Divider />
        <SidePanel
          showDialog={showDialog}
          onClose={() => setDialog(false)}
          isMobile={isMobile}
        />
        <Divider />
        <Overview showDialog={showDialog} isMobile={isMobile} />
        <Divider />
        <Pricing showDialog={showDialog} isMobile={isMobile} />
        <Divider />
        <MasterPlan isMobile={isMobile} />
        <Divider />
        <FloorPlans showDialog={showDialog} isMobile={isMobile} />
        <Divider />
        <Amenities isMobile={isMobile} />
        <Divider />
        <Gallery isMobile={isMobile} />
        <Divider />
        <Location isMobile={isMobile} />
        <Divider />
        <VirtualTour showDialog={showDialog} isMobile={isMobile} />
        <Divider />
        <Paper
          square
          elevation={0}
          sx={{
            padding: "15px",
            width: "100%",
            // maxWidth: "1200px",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontSize: { xs: "9px", md: "11px" },
              letterSpacing: 0,
              lineHeight: 0,
            }}
          >
            RERA No: PRM/KA/RERA/1251/310/AG/220726/003048
            <br />
            Disclaimer: This is not the official website of Builder Group. This
            Website Is In The Process Of Being Updated. The Views shown are
            artist&apos;s impressions only. The architectural features, colour
            scheme of the building and landscape features are subject to change.
            Price, Plans, Views, Amenities and Specifications are preliminary
            and subject to change.
            <br />
            Privacy Policy: Your personal information (Name, Email, Phone, City,
            Query) submitted will not be sold, shared or rented to others. We
            use this information to send updates about our company and projects
            and contact you if requested or find it necessary. You may opt out
            of receiving our communication by calling us on any of our above
            mentioned contact numbers or by clicking on the unsubscribed link
            mention in mail.
          </Typography>
        </Paper>
      </Navbar>
      {dialog && (
        <Dialog
          dialogTitle={dialogTitle}
          onClose={() => {
            setDialog(false);
            setPdfDownload(false);
          }}
          pdfDownload={pdfDownload}
          isMobile={isMobile}
        />
      )}
      <FloatingWhatsApp
        phoneNumber="919663098906"
        accountName="Customer Support"
        avatar="/assets/customer-support-avatar.jpg"
        style={{
          height: 0,
          width: 0,
        }}
      />
    </>
  );
};

export default Index;
