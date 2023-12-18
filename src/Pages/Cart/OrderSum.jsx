import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from "@material-ui/core/CardContent";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; 
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./cart.css"

const useStyles = makeStyles({
  
  root: {
    position: "sticky",
    top: "20rem",
    minWidth: "275"
  },

  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const theme = createTheme();
export default function OrderSum() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <Card  className={classes.root} elevation={10}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Shopping Cart
        </Typography>
        <Typography variant="div" component="h2">
          {" "}
          Order Summary
        </Typography>
        <Typography variant="subtitle2">
          <hr />
        </Typography>
        <Grid container>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography  variant="body1" component="div">
              Delivery Cost: 
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography variant="h6" component="div">
              $0
            </Typography>
          </Grid>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Total + HST
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography variant="h6" component="div">
              $0
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>
        <Button size="large" style={{ marginLeft: "auto" }}>
          PAY
        </Button>
      </CardActions>
    </Card>
    </ThemeProvider>
  );
}