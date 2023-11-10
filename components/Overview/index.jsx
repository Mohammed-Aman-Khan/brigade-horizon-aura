import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Index = ({ showDialog, isMobile }) => {
  return (
    <Paper elevation={0} square sx={{ padding: "30px" }}>
      <Typography id="Overview" variant="h4">
        Mahindra Malgudi
      </Typography>
      <Typography variant="h6">
        Near Manipal County Resort, Bangalore
      </Typography>
      <br />
      <Typography
        sx={{
          width: "100%",
          // maxWidth: "750px",
        }}
      >
        Mahindra Lifespaces&apos; Malgudi offers opulent apartments on Hosur
        Road that offer an unmatched lifestyle of grandeur mixed with
        tranquility. Enter a realm of lush surroundings and magnificent
        architecture. Situated on Hosur Road, close to Electronics City in
        Bangalore&apos;s Manipal County.
      </Typography>
      <br />
    </Paper>
  );
};

export default Index;
