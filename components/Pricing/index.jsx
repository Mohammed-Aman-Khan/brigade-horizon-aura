import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ImgOverlay } from "image-overlay-react";
import "image-overlay-react/dist/index.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const pricing = [
  {
    type: "3 BHK",
    area: "1750-1800 Sq. Ft.",
    price: "1.8 Cr* Onwards",
  },
  {
    type: "3.5 BHK",
    area: "2000-2100 Sq. Ft.",
    price: "2.1 Cr* Onwards",
  },
  {
    type: "4 BHK",
    area: "2300-2400 Sq. Ft.",
    price: "2.45 Cr* Onwards",
  },
];

const Index = ({ showDialog, isMobile }) => {
  return (
    <Paper elevation={0} square sx={{ padding: "30px 10px" }}>
      <center>
        <Typography variant="h4" id="Price">
          Mahindra Malgudi Price
        </Typography>
      </center>
      <br />
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Table
            sx={{ maxWidth: 700, width: "100%", height: "100%" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">
                  <strong>Type</strong>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <strong>Super Built-up Area</strong>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <strong>Price</strong>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pricing.map((row) => (
                <TableRow key={row.type}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.type}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.area}</StyledTableCell>
                  <StyledTableCell align="center">
                    &#8377; {row.price}
                    <br />
                    <Button
                      onClick={() => showDialog("Request Price Breakup")}
                      size="small"
                      variant="contained"
                      disableElevation
                    >
                      Request Price Breakup
                    </Button>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>
            <strong>Complete Pricing Details</strong>
          </Typography>
          <br />
          <ImgOverlay
            imgSrc="/assets/pricing.png"
            width="100%"
            height="auto"
            bgColor="black"
            position="bottom"
            fColor="white"
          >
            <Button
              onClick={() => showDialog("View Complete Pricing")}
              variant="contained"
              disableElevation
              size="small"
            >
              View Complete Pricing
            </Button>
          </ImgOverlay>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Index;
