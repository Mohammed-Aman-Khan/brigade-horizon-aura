import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const Index = ({ showDialog, isMobile }) => {
  return (
    <Paper elevation={0} square sx={{ padding: "30px" }}>
      <Typography id="Overview" variant="h4">
        Aura At Brigade Horizon
      </Typography>
      <Typography variant="h6">Near Mysore Road, Bangalore</Typography>
      <br />
      <Typography
        sx={{
          width: "100%",
          // maxWidth: "750px",
        }}
      >
        A UNIQUE LIFESTYLE Tucked Away in the Coziness of the Community. At
        Brigade Horizon, take advantage of a special opportunity to create a
        community while spending time with loved ones. Discover more fulfilling
        human experiences in our opulent three and four bedroom homes at Aura.
        Savor quiet times and social interactions while honoring the harmony of
        solitude and company.
      </Typography>
      <br />
    </Paper>
  );
};

export default Index;
