import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; 
import Slider from '@mui/material/Slider';
import OrderSum from "./OrderSum";
import Item from "./Item";
import "./cart.css"
import Box from '@mui/system/Box';
export default function ShoppingCart() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={1}   >
          <Grid  item xs={12} sm={12} md={12} lg={15}>
            <Grid container >
              <Grid item xs sx={{overflowY: "scroll",  
              '&::-webkit-scrollbar': {width: '0.2em',},   
              '&::-webkit-scrollbar-track': {background: "#ffe7bf",},
              '&::-webkit-scrollbar-thumb': {backgroundColor: "#203c32",},maxHeight: "680px" }} >
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={15} >
          <Box  >
            <OrderSum />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}