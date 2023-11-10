import { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const images = [
  "/assets/carousel/1.webp",
  "/assets/carousel/2.webp",
  "/assets/carousel/3.webp",
  "/assets/carousel/4.webp",
  "/assets/carousel/5.webp",
  "/assets/carousel/6.webp",
];

const Index = ({ isMobile }) => {
  const [currentSelected, setCurrentSelected] = useState(null);

  return (
    <>
      <Paper sx={{ padding: "30px 10px" }} elevation={0} square>
        <center>
          <Typography id="Gallery" variant="h4">
            Gallery
          </Typography>
          <br />
          <Grid container spacing={0.5}>
            {images.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={item}>
                <picture>
                  <source srcSet={item} type="image/webp" />
                  <img
                    src={item}
                    alt={`Property View ${index}`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "auto",
                      cursor: "pointer",
                      borderRadius: "5px",
                    }}
                    onClick={() => setCurrentSelected(index)}
                  />
                </picture>
              </Grid>
            ))}
          </Grid>
        </center>
      </Paper>
      <Dialog
        open={currentSelected !== null}
        fullScreen
        sx={{ width: "100vw" }}
      >
        <DialogTitle sx={{ margin: 0, padding: "5px" }}>
          <IconButton onClick={() => setCurrentSelected(null)}>
            <CloseRoundedIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent
          sx={{
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <picture>
            <source srcSet={images[currentSelected]} type="image/jpeg" />
            <img
              src={images[currentSelected]}
              alt="Property View"
              loading="lazy"
              style={{
                width: isMobile ? "100%" : "auto",
                height: isMobile ? "auto" : "100%",
              }}
            />
          </picture>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Index;
