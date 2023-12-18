import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/system';
import OrderSum from "./OrderSum";
import Item from "./Item";
import "./cart.css"
export default function Cart() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ margin: 5 }}>
          <Box item>
            <Box  >
              <Box xs>
                <Item />
                <Item />
                <Item />
                <Item />
              </Box>
            </Box>
          </Box>
          <Box item >
            <OrderSum />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}