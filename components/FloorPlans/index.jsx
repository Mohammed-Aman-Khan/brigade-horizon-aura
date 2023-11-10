import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ImgOverlay } from "image-overlay-react";
import "image-overlay-react/dist/index.css";

const floorPlans = [
  {
    name: "3 BHK | 1750 Sq. Ft.",
    image: "/assets/floor-plans/1750.png",
  },
  {
    name: "3.5 BHK | 2000 Sq. Ft.",
    image: "/assets/floor-plans/2000.png",
  },
  {
    name: "4 BHK | 2300 Sq. Ft.",
    image: "/assets/floor-plans/2300.png",
  },
];

const Index = ({ showDialog, isMobile }) => {
  return (
    <Paper elevation={0} square sx={{ padding: "30px 10px" }}>
      <center>
        <Typography variant="h4" id="FloorPlans">
          Mahindra Malgudi Floor Plans
        </Typography>
      </center>
      <br />
      <Grid container spacing={3}>
        {floorPlans.map(({ name, image }) => (
          <Grid item xs={12} md={4} key={name}>
            <ImgOverlay
              imgSrc={image}
              width="100%"
              height="auto"
              bgColor="black"
              position="bottom"
              fColor="white"
            >
              <Button
                onClick={() => showDialog("Request Plan Details")}
                variant="contained"
                disableElevation
                size="small"
              >
                Request Plan Details
              </Button>
            </ImgOverlay>
            <br />
            <center>
              <Typography>
                <strong>{name}</strong>
              </Typography>
            </center>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Index;
