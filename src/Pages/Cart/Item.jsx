import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./cart.css"
import { ThemeProvider, createTheme } from '@mui/system';

const theme = createTheme({

});


export default function Item() {

  return (
    <ThemeProvider theme={theme}>
    <Card>
      <CardMedia/>
      <CardContent >

        <Typography
          
          color="textSecondary"
          gutterBottom
        >
          Category
        </Typography>
        <Typography variant="div" component="h2">
          Item Name{" "}
        </Typography>
        <Typography variant="subtitle2">
          <hr />
        </Typography>
        <Box container>
          <Box item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Note to restaurant:
            </Typography>
          </Box>
          <Box item xs={1} sm={1} md={1} lg={1}>
            <Typography variant="h6" component="div">
              
            </Typography>
          </Box>
          <Box item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Quantity
            </Typography>
          </Box>
          <Box item xs={1} sm={1} md={1} lg={1}>
            <Typography variant="h6" component="div">
              1
            </Typography>
          </Box>
          <Box item xs={10} sm={9} md={10} lg={10}>
            <Typography
              variant="body1"
              component="div"
              style={{ fontWeight: "bold" }}
            >
              Price
            </Typography>
          </Box>
          <Box item xs={2} sm={2} md={2} lg={1}>
            <Typography variant="h6" component="div" color="secondary">
              $
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  </ThemeProvider>
  );
}