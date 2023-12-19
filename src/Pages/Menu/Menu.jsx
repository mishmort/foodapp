import "./menu.css";

import React from "react";
import { CardContent, Card, TextField, Grid, Checkbox } from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import MainButton from "../../Components/MainButton/MainButton";
import LiquorIcon from '@mui/icons-material/Liquor';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const gridContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)"
  };
  

const card = (
    <React.Fragment>
      <CardContent>
        <Grid container 
            alignItems="center">
            <Grid container item={true} xs={3} >
                <Card sx={{ minWidth: '100%' }} variant="outlined">
                    <CardContent>
                        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center'}} xs={12}><span>Mona Lisa Pizza</span></Grid>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: '100%' }} variant="outlined">
                    <CardContent>
                        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center'}} xs={12}><span>Download PDF <b>here</b></span></Grid>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: '100%' }} variant="outlined">
                    <CardContent>
                        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center'}} xs={12}><span>Filters</span><ArrowDropDownIcon></ArrowDropDownIcon></Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid xs={1}></Grid>
            <Grid container style={{textAlign: "center"}} item={true} xs={8}> 
              <Grid container item={true} xs={3} >
                <Card sx={{ minWidth: '100%' }} variant="outlined">
                  <CardContent>
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center'}} xs={12}><LocalPizzaIcon></LocalPizzaIcon></Grid>
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center'}} xs={12}><span>Cheese Pizza $12.99</span></Grid>      
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center', border: "1px solid #203c32"}} xs={12}><span>Our original NYC style pizza</span></Grid> 
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center', marginTop: '10px'}} xs={12}><MainButton>See Item</MainButton></Grid>               
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={1}></Grid>
              <Grid container item={true} xs={3} >
                <Card sx={{ minWidth: '100%' }} variant="outlined">
                  <CardContent>
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center'}} xs={12}><LocalPizzaIcon></LocalPizzaIcon></Grid>
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center'}} xs={12}><span>Marg Pizza $13.99</span></Grid>      
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center', border: "1px solid #203c32"}} xs={12}><span>Classic marg</span></Grid> 
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center', marginTop: '10px'}} xs={12}><MainButton>See Item</MainButton></Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={1}></Grid>
              <Grid container item={true} xs={3} >
                <Card sx={{ minWidth: '100%' }} variant="outlined">
                  <CardContent>
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center'}} xs={12}><LocalPizzaIcon></LocalPizzaIcon></Grid>
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center'}} xs={12}><span>Pepperoni $14.99</span></Grid>      
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center', border: "1px solid #203c32"}} xs={12}><span>For the meat lovers</span></Grid> 
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center', marginTop: '10px'}} xs={12}><MainButton>See Item</MainButton></Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid container item={true} style={{marginTop: '10px'}} xs={3} >
                <Card sx={{ minWidth: '100%' }} variant="outlined">
                  <CardContent>
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center'}} xs={12}><LocalPizzaIcon></LocalPizzaIcon></Grid>
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center'}} xs={12}><span>Honey Vodka Pizza $12.99</span></Grid>      
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center', border: "1px solid #203c32"}} xs={12}><span>For the extra sting</span></Grid>   
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center', marginTop: '10px'}} xs={12}><MainButton>See Item</MainButton></Grid>              
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={1}></Grid>
              <Grid container item={true} style={{marginTop: '10px'}} xs={3} >
                <Card sx={{ minWidth: '100%' }} variant="outlined">
                  <CardContent>
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center'}} xs={12}><LiquorIcon></LiquorIcon></Grid>
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center'}} xs={12}><span>Beer $3.99</span></Grid>      
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center', border: "1px solid #203c32"}} xs={12}><span>5% alcohol content</span></Grid> 
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center', marginTop: '10px'}} xs={12}><MainButton>See Item</MainButton></Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={1}></Grid>
              <Grid container item={true} style={{marginTop: '10px'}} xs={3} >
                <Card sx={{ minWidth: '100%' }} variant="outlined">
                  <CardContent>
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center'}} xs={12}><EnergySavingsLeafIcon></EnergySavingsLeafIcon></Grid>
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center'}} xs={12}><span>Salad $5.99</span></Grid>      
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center', border: "1px solid #203c32"}} xs={12}><span>For your veggie needs</span></Grid> 
                    <Grid  style={{display:'flex',justifyContent:'center',alignItems:'center', marginTop: '10px'}} xs={12}><MainButton>See Item</MainButton></Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
        </Grid>
      </CardContent>
    </React.Fragment>
  );


const Menu = () => {
  return <div className="menu">
  <Card sx={{ minWidth: '1200px' }} variant="outlined">
      {card}
  </Card>
</div>;
};

export default Menu;
