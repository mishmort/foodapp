import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; 
import "./cart.css"

import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import pic1 from '../../assets/cart_assets/pic1.jpg';
import pic2 from '../../assets/cart_assets/pic2.jpg';
import pic3 from '../../assets/cart_assets/pic3.jpg';
import pic4 from '../../assets/cart_assets/pic4.jpg';
import pic5 from '../../assets/cart_assets/pic5.jpg';
import pic6 from '../../assets/cart_assets/pic6.jpg';
import pic7 from '../../assets/cart_assets/pic7.jpg';
import pic8 from '../../assets/cart_assets/pic8.jpg';
import pic9 from '../../assets/cart_assets/pic9.jpg';



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
    width: 250
  },
  instr: {
    fontSize: 5
  },
}));
const cards = [
  {
    img:pic1,
    p:12.99
  },
  {
    img:pic2,
    p:15.99
  },
  {
    img:pic3,
    p:8.49
  },
  {
    img:pic4,
    p:17.99
  },
  {
    img:pic5,
    p:10.99
  },
  {
    img:pic6,
    p:8.99
  },
  {
    img:pic7,
    p:9.49
  },
  {
    img:pic8,
    p:22.99
  },
  {
    img:pic9,
    p:13.99
  }
];

const theme = createTheme();

export default function Item() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    {cards.map(card => (
    <Grid item key={card} >
    <Card  className={classes.root} >
      <CardMedia
        className={classes.cover}
        image={card.img}
        title="Live from space album cover"
      />
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
                    ${card.p}
                  </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </Grid>
    ))}
    </ThemeProvider>
  );
}