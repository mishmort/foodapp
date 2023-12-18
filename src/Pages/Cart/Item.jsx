import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; 
import "./cart.css"

import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';




const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 5

  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto",color: "#203c32"
  },
  cover: {
    width: 151
  },
  instr: {
    fontSize: 5
  },
}));

const theme = createTheme();

export default function Item() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <Card  className={classes.root} >
      <CardContent className={classes.content}>

        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Category
        </Typography>
        <Typography variant="div" component="h2">
          Item {" "}
        </Typography>
        <Typography variant="subtitle2">
          <hr />
        </Typography>
        <Grid container>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Instruction
            </Typography>
          </Grid>
          <Grid item xs={10} sm={10} md={10} lg={10}>
            <Typography variant="caption" component="div" >
              e.g. no animal product
            </Typography>
          </Grid>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Quantity
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography variant="h6" component="div">
              1
            </Typography>
          </Grid>
          <Grid item xs={10} sm={9} md={10} lg={10}>
            <Typography
              variant="body1"
              component="div"
              style={{ fontWeight: "bold" }}
            >
              Price
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={1}>
            <Typography variant="h6" component="div" >
              $ 
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </ThemeProvider>
  );
}