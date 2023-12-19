import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MainButton from "../MainButton/MainButton";

export default function CardContainer() {
	
  return (
		<>
    <List sx={{ border: '1px solid #203c32', width: '100%', maxWidth: '400px' , maxHeight: '200px', overflow: 'auto', bgcolor: 'inherit' }}>
      <ListItem style={{border: '1px solid #203c32', borderLeft: '0px'}} alignItems="flex-start">
      	<ListItemText
        	disableTypography
            secondary={
         				   <Grid container spacing={2}>
            			 		<Grid item xs={12} md={6}>
                	 			{<>
												<div>Item 1</div>
												<button>-</button>1
												<button>+</button>
												<div>Unit Price : &#x24;3.19 </div>
												</>
												}
            			 		</Grid>
            			 		<Grid item xs={12} md={6}>
                	      {
												<>
												<div>Details</div>
												 <ul style={{padding:'0px'}}>
											 	  <li>No Lettuce</li>
 												  <li>No Pickles</li>
												 </ul>
												</>
												}
            			 		</Grid>
        					 </Grid>
            }
            />
			</ListItem>
      <ListItem style={{border: '1px solid #203c32', borderLeft: '0px'}} alignItems="flex-start">
      	<ListItemText
        	disableTypography
            secondary={
         				   <Grid container spacing={2}>
            			 		<Grid item xs={12} md={6}>
                	 			{<>
												<div>Item 2</div>
												<button>-</button>1
												<button>+</button>
												<div>Unit Price : &#x24;14.38 </div>
												</>
												}
            			 		</Grid>
            			 		<Grid item xs={12} md={6}>
                	      {
												<>
												<div>Details</div>
												 <ul style={{padding:'0px'}}>
											 	  <li>Extra Cheese</li>
 												  <li>Less Sauce</li>
												 </ul>
												</>
												}
            			 		</Grid>
        					 </Grid>
            }
            />
			</ListItem>
      <ListItem style={{border: '1px solid #203c32', borderLeft: '0px'}} alignItems="flex-start">
      	<ListItemText
        	disableTypography
            secondary={
         				   <Grid container spacing={2}>
            			 		<Grid item xs={12} md={6}>
                	 			{<>
												<div>Item 2</div>
												<button>-</button>1
												<button>+</button>
												<div>Unit Price : &#x24;1.35 </div>
												</>
												}
            			 		</Grid>
            			 		<Grid item xs={12} md={6}>
                	      {
												<>
												<div>Details</div>
												 <ul style={{padding:'0px'}}>
											 	  <li>N/A</li>
												 </ul>
												</>
												}
            			 		</Grid>
        					 </Grid>
            }
            />
			</ListItem>

    </List>
	</>
  );
}

export {CardContainer}
