import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; 
import Slider from '@mui/material/Slider';
import OrderSum from "./OrderSum";
import Item from "./Item";
import "./cart.css"
export default function ShoppingCart() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6} md={7} lg={7}>
            <Grid container>
              <Grid item xs>
                <Item />
                <Item />
                <Item />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={5}>
            <OrderSum />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}