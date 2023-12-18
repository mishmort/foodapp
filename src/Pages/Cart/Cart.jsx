import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; 
import Slider from '@mui/material/Slider';
import OrderSum from "./OrderSum";
import Item from "./Item";
import "./cart.css"
import Box from '@mui/system/Box';
{
// Grid  item xs={12} sm={12} md={12} lg={15}
}
export default function ShoppingCart() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box display="flex" alignItems="center" gap={20}  >
          <Box>
            <Box width={800} >
              <Box sx={{overflowY: "scroll",  
              '&::-webkit-scrollbar': {width: '0.2em',},   
              '&::-webkit-scrollbar-track': {background: "#ffe7bf",},
              '&::-webkit-scrollbar-thumb': {backgroundColor: "#203c32",},maxHeight: "680px" }} >
                <Item />
              </Box>
            </Box>
          </Box>
          <Box  >
          <Box height={250} width={450}  >
            <OrderSum />
            </Box>
          </Box>
        </Box>

    </React.Fragment>
  );
}