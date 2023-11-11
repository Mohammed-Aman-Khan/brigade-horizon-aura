import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import { useRouter } from "next/router";

const connectivity = [
  "Christ College Kengeri - 5 min",
  "Don Bosco Engineering College - 5 min",
  "Global Village Tech Park - 5 min",
  "Bidadi Industrial Estate Bosch Ltd. - 10 min",
  "Wonderla - 15 min",
  "Gopalan Arcade Mall - 20 min",
  "Rajarajeswari Medical College & Hospital - 5 min",
  "BGS Super Speciality Hospitals - 20 min",
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
            onClick={() => router.push("/assets/location-map.jpg")}
          >
            <picture>
              <source srcSet="/assets/location-map.jpg" type="image/jpg" />
              <img
                src="/assets/location-map.jpg"
                alt="Location Map"
                style={{
                  width: "100%",
                  maxWidth: "1000px",
                }}
              />
            </picture>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.312072895671!2d77.449695311761!3d12.887643687367632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fae544ccce1%3A0x3ccc4b33c5d0e398!2sBrigade%20Horizon%20Bengaluru!5e0!3m2!1sen!2sin!4v1699676705232!5m2!1sen!2sin"
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
