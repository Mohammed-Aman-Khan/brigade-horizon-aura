import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

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
          onClick={() => router.push("/assets/master-plan.png")}
        >
          <picture>
            <source srcSet="/assets/master-plan.jpg" type="image/jpg" />
            <img
              src="/assets/master-plan.jpg"
              alt="Master Plan"
              style={{
                width: "100%",
                maxWidth: "1000px",
              }}
            />
          </picture>
        </Paper>
      </center>
    </Paper>
  );
};

export default Index;
