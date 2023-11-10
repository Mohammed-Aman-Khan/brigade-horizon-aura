import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import { ImgOverlay } from "image-overlay-react";
import "image-overlay-react/dist/index.css";

const Index = ({ isMobile }) => {
  const router = useRouter();

  return (
    <Paper elevation={0} square sx={{ padding: "30px 10px" }}>
      <center>
        <Typography id="MasterPlan" variant="h4">
          Master Plan
        </Typography>
        <br />
        <br />
        <Paper
          variant="outlined"
          // onClick={() => router.push("/assets/master-plan.png")}
        >
          <ImgOverlay
            imgSrc="/assets/master-plan.png"
            width="100%"
            height="auto"
            bgColor="black"
            position="bottom"
            fColor="white"
          >
            <Button
              onClick={() => showDialog("Request Map View")}
              variant="contained"
              disableElevation
              size="small"
            >
              Request Master Plan
            </Button>
          </ImgOverlay>
        </Paper>
      </center>
    </Paper>
  );
};

export default Index;
