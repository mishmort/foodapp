import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from "@material-ui/core/CardContent";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {ThemeProvider, createTheme } from '@mui/system';
import "./cart.css"
const theme = createTheme({

});

export default function OrderSum() {

  return (
    <ThemeProvider theme={theme}>

    <Card  elevation={10} sx={{ width: 1 }}>
      <CardContent>
        <Typography

          color="textSecondary"
          gutterBottom
        >
          Cart
        </Typography>
        <Typography variant="div" component="h1">
          {" "}
          Order
        </Typography>
        <Typography variant="subtitle2">
          <hr />
        </Typography>
        <Box container >
          <Box item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Tax 
            </Typography>
          </Box>
          <Box item xs={1} sm={1} md={1} lg={1}>
            <Typography variant="h6" component="div">
              $0
            </Typography>
          </Box>
          <Box item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Total
            </Typography>
          </Box>
          <Box item xs={1} sm={1} md={1} lg={1}>
            <Typography variant="h6" component="div">
              $0
            </Typography>
          </Box>
        </Box>
      </CardContent>

      <CardActions>
        <Button size="large" color="secondary" style={{ marginLeft: "auto" }}>
          PAY
        </Button>
      </CardActions>
    </Card>
  </ThemeProvider>
  );
}