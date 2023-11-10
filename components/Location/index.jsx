import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import { ImgOverlay } from "image-overlay-react";
import "image-overlay-react/dist/index.css";

const connectivity = [
  "Highway - 700 mtrs",
  "Singasandra metro station - 1.5 Kms",
  "Hosa road metro station - 2.4 Kms",
];

const Index = ({ isMobile }) => {
  const router = useRouter();

  return (
    <Paper elevation={0} square sx={{ padding: "30px 10px" }}>
      <center>
        <Typography variant="h4" id="Location">
          Location
        </Typography>
      </center>
      <br />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <center>
            <Typography variant="button">Maps View</Typography>
          </center>
          <Paper
            variant="outlined"
            // onClick={() => router.push("/assets/location-map.jpg")}
          >
            <ImgOverlay
              imgSrc="/assets/location-map.jpg"
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
                Request Plan Details
              </Button>
            </ImgOverlay>
            {/* <picture>
              <source srcSet="/assets/location-map.jpg" type="image/jpg" />
              <img
                src="/assets/location-map.jpg"
                alt="Location Map"
                style={{
                  width: "100%",
                  maxWidth: "1000px",
                  filter: "blur(10px)",
                }}
              />
            </picture> */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <center>
            <Typography variant="button">Location Map</Typography>
          </center>
          <Paper
            variant="outlined"
            sx={{ height: { xs: "300px", md: "100%" } }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.543110568738!2d77.6415061!3d12.872759799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b4cc97ef75b%3A0xee9d9ec519273461!2sManipal%20County!5e0!3m2!1sen!2sin!4v1696826654537!5m2!1sen!2sin"
              style={{
                border: 0,
                width: "100%",
                height: "100%",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            sx={{ padding: { xs: "15px", md: "30px" } }}
            variant="outlined"
          >
            <Typography variant="button">Connectivity</Typography>
            <br />
            <List>
              <Grid container spacing={1}>
                {connectivity.map((line) => (
                  <Grid item xs={12} sm={6} md={4} key={line}>
                    <ListItem>
                      <ListItemIcon>
                        <WhereToVoteIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={line} />
                    </ListItem>
                  </Grid>
                ))}
              </Grid>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Index;
