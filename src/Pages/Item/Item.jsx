import "./item.css"
import React from "react";
import { CardContent, Card, TextField, Grid, Checkbox } from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import MainButton from "../../Components/MainButton/MainButton";

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
            <Grid container item={true} xs={2} >
                <Card sx={{ minWidth: '100%' }} variant="outlined">
                    <CardContent>
                        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center'}}><AddAPhotoIcon></AddAPhotoIcon></Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid container style={{textAlign: "center"}} item={true} xs={10}> 
              <Grid item={true} xs={2}><h4>Name:</h4></Grid> 
              <Grid item={true} xs={4}><TextField fullWidth id="outlined-basic" label="" variant="outlined" /></Grid>  
              <Grid item={true} xs={2}><h4>Price:</h4></Grid> 
              <Grid item={true} xs={4}><TextField fullWidth id="outlined-basic" label="" variant="outlined" /></Grid>  
              <Grid container item={true} xs={12}>
                <Grid item={true} xs={2}><h4>Description:</h4></Grid> 
                <Grid item={true} xs={10}><TextField fullWidth id="outlined-basic" label="" variant="outlined" /></Grid>
              </Grid>
            </Grid>
            <Grid item={true} xs={2} style={{textAlign: "center", marginBottom: '10px'}}>
              <h4>Ingredients:</h4>
            </Grid>          
            <Grid item={true} xs={10}>
                <TextField fullWidth id="outlined-basic" label="" variant="outlined" />
            </Grid>
            <Grid container item={true} xs={12} style={{textAlign: "center", border: "1px solid #203c32"}}>
                <Grid item={true} xs={12} style={{textAlign: "center"}}>
                    <h4>MEETS DIETARY RESTRICTIONS FOR</h4>
                    </Grid>
                <Grid item={true} xs={2}>
                <h4>Halal:</h4>
                </Grid>
                <Grid container item={true} xs={2}>
                  <Grid item={true} style={{margin: 'auto'}} xs={6}><Checkbox {...label} /></Grid>
                </Grid>
                <Grid item={true} xs={2}>
                <h4>Vegan:</h4>
                </Grid>
                <Grid container item={true} xs={2}>
                  <Grid item={true} style={{margin: 'auto'}} xs={6}><Checkbox {...label} /></Grid>
                </Grid>
                <Grid item={true} xs={2}>
                <h4>Nut-free:</h4>
                </Grid>
                <Grid container item={true} xs={2}>
                    <Grid item={true} xs={6} style={{margin: 'auto'}}><Checkbox {...label} /></Grid>
                </Grid>
                <Grid item={true} xs={2}>
                <h4>Gluten-free:</h4>
                </Grid>
                <Grid container item={true} xs={2}>
                  <Grid item={true} style={{margin: 'auto'}} xs={6}><Checkbox {...label} /></Grid>
                </Grid>
                <Grid item={true} xs={2}>
                <h4>Alcohol-free:</h4>
                </Grid>
                <Grid container item={true} xs={2}>
                  <Grid item={true} style={{margin: 'auto'}} xs={6}><Checkbox {...label} /></Grid>
                </Grid>
                <Grid item={true} xs={2}>
                <h4>Vegetarian:</h4>
                </Grid>
                <Grid container item={true} xs={2}>
                    <Grid item={true} style={{margin: 'auto'}} xs={6}><Checkbox {...label} /></Grid>
                </Grid>
                <Grid container style={{border: "1px soild #203c32"}}>
                    <Grid item={true} xs={12} style={{textAlign: "center"}}>
                    <h4>SUBSTITUTIONS/SIZES AVAILABLE</h4>
                    </Grid>
                    <Grid item={true} xs={2}>
                    <h4>Vegan cheese:</h4>
                    </Grid>
                    <Grid container item={true} xs={2}>
                      <Grid item={true} style={{margin: 'auto'}} xs={6}><Checkbox {...label} /></Grid>
                    </Grid>
                    <Grid item={true} xs={2}>
                    <h4>Medium:</h4>
                    </Grid>
                    <Grid container item={true} xs={2}>
                      <Grid item={true} style={{margin: 'auto'}} xs={6}><Checkbox {...label} /></Grid>
                    </Grid>
                    <Grid item={true} xs={2}>
                    <h4>Large:</h4>
                    </Grid>
                    <Grid container item={true} xs={2}>
                      <Grid item={true} style={{margin: 'auto'}} xs={6}><Checkbox {...label} /></Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item={true} style={{display:'flex',justifyContent:'center',alignItems:'center', marginTop: '10px'}} xs={12}>
                <MainButton>Submit</MainButton>
            </Grid>
        </Grid>
      </CardContent>
    </React.Fragment>
  );

  const card2 = (
    <React.Fragment>
      <CardContent>
        <Grid container 
            alignItems="center">
            <Grid container item={true} xs={2} >
                <Card sx={{ minWidth: '100%' }} variant="outlined">
                    <CardContent>
                        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center'}}><LocalPizzaIcon></LocalPizzaIcon></Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid container style={{textAlign: "center"}} item={true} xs={10}> 
              <Grid item={true} xs={2}><h4>Name:</h4></Grid> 
              <Grid item={true} xs={4}><h4>Cheese Pizza:</h4></Grid>  
              <Grid item={true} xs={2}><h4>Price:</h4></Grid> 
              <Grid item={true} xs={4}><h4>$12.99</h4></Grid>  
              <Grid container item={true} xs={12}>
                <Grid item={true} xs={2}><h4>Description:</h4></Grid> 
                <Grid item={true} style={{textAlign: 'left'}} xs={10}><h4>This is our classic NY style cheese pizza, with just the right amount of kick for a casual night in or out</h4></Grid>
              </Grid>
            </Grid>
            <Grid item={true} xs={2} style={{textAlign: "center"}}>
              <h4>Ingredients:</h4>
            </Grid>            
            <Grid item={true} xs={10}>
              <h4>Flour, sugar, fresh tomatoes, red pepper flakes, mozzarella cheese</h4>
            </Grid>
            <Grid container item={true} xs={12} style={{textAlign: "center", border: "1px solid #203c32"}}>
                <Grid item={true} xs={12} style={{textAlign: "center"}}>
                    <h4>MEETS DIETARY RESTRICTIONS FOR</h4>
                    </Grid>
                <Grid item={true} xs={2}>
                <h4>Halal:</h4>
                </Grid>
                <Grid container item={true} xs={2}>
                  <Grid item={true} style={{margin: 'auto'}} xs={6}><h4>Yes</h4></Grid>
                </Grid>
                <Grid item={true} xs={2}>
                <h4>Vegan:</h4>
                </Grid>
                <Grid container item={true} xs={2}>
                  <Grid item={true} style={{margin: 'auto'}} xs={6}><h4>No</h4></Grid>
                </Grid>
                <Grid item={true} xs={2}>
                <h4>Nut-free:</h4>
                </Grid>
                <Grid container item={true} xs={2}>
                    <Grid item={true} xs={6} style={{margin: 'auto'}}><h4>Yes</h4></Grid>
                </Grid>
                <Grid item={true} xs={2}>
                <h4>Gluten-free:</h4>
                </Grid>
                <Grid container item={true} xs={2}>
                  <Grid item={true} style={{margin: 'auto'}} xs={6}><h4>No</h4></Grid>
                </Grid>
                <Grid item={true} xs={2}>
                <h4>Alcohol-free:</h4>
                </Grid>
                <Grid container item={true} xs={2}>
                  <Grid item={true} style={{margin: 'auto'}} xs={6}><h4>Yes</h4></Grid>
                </Grid>
                <Grid item={true} xs={2}>
                <h4>Vegetarian:</h4>
                </Grid>
                <Grid container item={true} xs={2}>
                    <Grid item={true} style={{margin: 'auto'}} xs={6}><h4>Yes</h4></Grid>
                </Grid>
                <Grid container style={{border: "1px solid #203c32"}}>
                    <Grid item={true} xs={12} style={{textAlign: "center"}}>
                    <h4>SUBSTITUTIONS/SIZES AVAILABLE</h4>
                    </Grid>
                    <Grid item={true} xs={2}>
                    <h4>Vegan cheese:</h4>
                    </Grid>
                    <Grid container item={true} xs={2}>
                      <Grid item={true} style={{margin: 'auto'}} xs={6}><Checkbox {...label} /></Grid>
                    </Grid>
                    <Grid item={true} xs={2}>
                    <h4>Medium:</h4>
                    </Grid>
                    <Grid container item={true} xs={2}>
                      <Grid item={true} style={{margin: 'auto'}} xs={6}><Checkbox {...label} disabled defaultChecked={true} /></Grid>
                    </Grid>
                    <Grid item={true} xs={2}>
                    <h4>Large:</h4>
                    </Grid>
                    <Grid container item={true} xs={2}>
                      <Grid item={true} style={{margin: 'auto'}} xs={6}><Checkbox disabled {...label} /></Grid>
                    </Grid>
                </Grid>
                <Grid container item={true} style={{border: "1px solid #203c32"}} xs={12}>
                    <Grid item={true} xs={2}><h4>Notes:</h4></Grid> 
                    <Grid item={true} style={{margin: '5px 0px 5px 0px'}} xs={10}><TextField fullWidth id="outlined-basic" label="" variant="outlined" /></Grid>
                </Grid>
            </Grid>
          <Grid container item={true} style={{display:'flex',justifyContent:'center',alignItems:'center', marginTop: '10px'}} xs={12}>
              <MainButton>Add/Edit</MainButton>
          </Grid>
        </Grid>
      </CardContent>
    </React.Fragment>
  );

const Item = () => {
    return ( <div className="item">
        <Card variant="outlined">
            {card}
        </Card>
        < br/>
        <Card variant="outlined">
            {card2}
        </Card>
    </div> );
}
 
export default Item;