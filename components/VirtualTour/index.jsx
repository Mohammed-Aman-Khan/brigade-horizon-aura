import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { ImgOverlay } from "image-overlay-react";
import "image-overlay-react/dist/index.css";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

const Index = ({ showDialog, isMobile }) => {
  return (
    <Paper elevation={0} square sx={{ padding: "30px 10px" }}>
      <center>
        <Typography id="VirtualTour" variant="h4">
          Virtual Tour
        </Typography>
        <br />
        <br />
        <ImgOverlay
          imgSrc="/assets/virtual-tour.webp"
          width="100%"
          height="auto"
          bgColor="black"
          position="bottom"
          fColor="white"
        >
          <IconButton
            onClick={() => showDialog("Request Virtual Tour")}
            size="large"
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main,
              color: "white",
              height: "100px",
              width: "100px",
            }}
          >
            <PlayArrowRoundedIcon sx={{ fontSize: "75px" }} />
          </IconButton>
        </ImgOverlay>
      </center>
    </Paper>
  );
};

export default Index;
