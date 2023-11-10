import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DownloadIcon from "@mui/icons-material/Download";
import Flash from "react-reveal/Flash";
import Pulse from "react-reveal/Pulse";

const images = ["/assets/carousel/1.webp", "/assets/carousel/2.webp"];

const Index = ({ setPdfDownload, showDialog, isMobile }) => {
  return (
    <Paper
      square
      elevation={0}
      sx={{ padding: "10px 10px 30px 10px" }}
      id="Home"
    >
      <Box sx={{ position: "relative" }}>
        <Carousel
          autoPlay
          infiniteLoop
          swipeable
          emulateTouch
          showThumbs={false}
          showStatus={false}
          showArrows={false}
        >
          {images.map((i) => (
            <div key={i}>
              <picture>
                <source srcSet={i} type="image/webp" />
                <img alt="Carousel Image" src={i} />
              </picture>
            </div>
          ))}
        </Carousel>
        <br />
        <Box
          component="div"
          sx={{
            position: { xs: "relative", md: "absolute" },
            backgroundColor: (theme) => theme.palette.common.white,
            width: { xs: "100%", md: "300px" },
            padding: "10px",
            top: { md: "10px" },
            left: { md: "10px" },
            // transform: { md: "translateY(-50%)" },
          }}
        >
          <center>
            <Flash forever duration={3000}>
              <Typography
                color="primary"
                variant="body2"
                sx={{ letterSpacing: "5px" }}
              >
                <strong>NEW LAUNCH</strong>
              </Typography>
            </Flash>
            <Typography variant="h6">
              <strong>Mahindra Malgudi</strong>
            </Typography>
            <Typography variant="subtitle2">
              Manipal County Resort, Bangalore
            </Typography>
            <Typography variant="caption">
              by <strong>Mahindra Lifespaces</strong>
            </Typography>
          </center>
          <Box
            sx={{
              backgroundColor: (theme) => theme.palette.primary.dark,
              padding: "5px",
            }}
          >
            <Box
              sx={{
                border: "2px dashed white",
                padding: "2.5px",
                color: "white",
              }}
            >
              <ul>
                <li>
                  <Typography variant="caption">
                    Land Parcel : <strong>4.2 Acres</strong>
                  </Typography>
                </li>
                <li>
                  <Typography variant="caption">
                    Towers &nbsp;:&nbsp;
                    <strong>2</strong>
                  </Typography>
                </li>
                <li>
                  <Typography variant="caption">
                    No. of units &nbsp;:&nbsp;
                    <strong>250</strong>
                  </Typography>
                </li>
              </ul>
            </Box>
          </Box>
          <center>
            <Typography variant="subtitle2" sx={{ marginTop: "5px" }}>
              Premium 3, 3.5 &amp; 4 BHK homes starting
            </Typography>
            <Typography variant="h6">&#8377; 1.8 Cr* Onwards</Typography>
            <Button
              onClick={() => showDialog("Mail me the details")}
              variant="contained"
              disableElevation
              sx={{
                margin: "2.5px 0px",
              }}
            >
              Enquire Now
            </Button>
          </center>
          <Typography variant="caption">
            RERA Number : <strong>PRM/KA/RERA/1251/309/PR/300522/004936</strong>
          </Typography>
        </Box>
      </Box>
      <br />
      <center>
        <Pulse forever>
          <Button
            size="large"
            onClick={() => {
              // setPdfDownload(true);
              showDialog();
            }}
            sx={{
              width: "90%",
              maxWidth: "400px",
              display: "flex",
              alignItems: "center",
            }}
            variant="contained"
            startIcon={<DownloadIcon />}
          >
            <strong>Download Brochure</strong>
          </Button>
        </Pulse>
      </center>
    </Paper>
  );
};

export default Index;
