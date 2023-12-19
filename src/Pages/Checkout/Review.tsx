import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    name: 'Product 1',
    desc: ' ',
    price: '$29.99',
  },
  {
    name: 'Product 2',
    desc: '',
    price: '$39.99',
  },
  {
    name: 'Product 3',
    desc: '',
    price: '$19.99',
  },
  {
    name: 'Product 4',
    desc: '',
    price: '$19.99',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom sx={{color:"#203c32"}}>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography sx={{color:"#203c32"}} variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ color:"#203c32", fontWeight: 700 }}>
            $109.96
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ color:"#203c32", mt: 2 }} >
            Shipping
          </Typography>
          <Typography gutterBottom sx={{color:"#203c32"}}>George Washington</Typography>
          <Typography gutterBottom sx={{color:"#203c32"}}>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ color:"#203c32",mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom sx={{color:"#203c32"}}>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom sx={{color:"#203c32"}}>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
