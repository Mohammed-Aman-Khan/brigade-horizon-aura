import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { titleToKebabCase } from "../../utils/helper";

const amenities = [
  {
    name: "Swimming Pool",
  },
  {
    name: "Sun Deck",
  },
  {
    name: "Indoor Games",
  },
  {
    name: "Gym",
  },
  {
    name: "Activity Lawn",
  },
  {
    name: "Convenience Store",
  },
  {
    name: "Yoga Deck",
  },
  {
    name: "Multipurpose Hall",
  },
];

const Amenities = ({ isMobile }) => {
  return (
    <Paper sx={{ padding: "30px 0px" }} elevation={0} square>
      <center>
        <Typography id="Amenities" variant="h4">
          Amenities
        </Typography>
        <br />
        <Grid container sx={{ width: "100%", maxWidth: "1200px" }} spacing={3}>
          {amenities.map(({ name }) => {
            const image = `/assets/amenities/${titleToKebabCase(name)}.webp`;
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={name}>
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: "5px",
                    position: "relative",
                    overflow: "hidden", // Add this to contain the image within the border radius
                  }}
                >
                  <div
                    style={{
                      paddingTop: "75%", // This creates a 1:1 aspect ratio
                      position: "relative",
                    }}
                  >
                    <picture
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <source srcSet={image} type="image/webp" />
                      <img
                        src={image}
                        alt={name}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          height: "100%",
                          width: "100%",
                          objectFit: "cover", // This will ensure the image covers the entire space
                        }}
                      />
                    </picture>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "50%",
                      padding: "10px",
                      position: "absolute",
                      bottom: "0px",
                      left: "0px",
                      backgroundColor: "transparent",
                      backgroundImage:
                        "linear-gradient(0deg,#1a1a1a 0%,rgba(26,26,26,1) 10%, rgba(26,26,26,.79) 30%, transparent 100%)",
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                      }}
                      variant="button"
                    >
                      {name}
                    </Typography>
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </center>
    </Paper>
  );
};

export default Amenities;
