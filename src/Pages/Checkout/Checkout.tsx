import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';


const steps = ['Shipping address', 'Payment details', 'Review your order'];



function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper style={{ background: "#ffe7bf" }} variant="outlined" sx={{  border: 'none', my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper  activeStep={activeStep}         sx={{
          ".MuiStepConnector-root": {
            top: 0
          },
          ".MuiStepConnector-root span": {
            borderColor: "transparent"
          },
          ".MuiStepConnector-root span::before": {
            display: "flex",
            justifyContent: "center",
            content: '">"'
          },
          ".MuiSvgIcon-root": {
            padding: "2px",
            borderRadius: "50%",
            border: "1px solid #203c32",
            fill: "#203c32"
          },         

          ".MuiSvgIcon-root:not(.Mui-completed)": {
            color: "#ffe7bf"
          },

          ".MuiStepIcon-text": {
            fill: "#203c32",
            fontWeight: 500
          },
          ".MuiSvgIcon-root.Mui-active": {
            color: "#203c32",
            padding: "2px",
            borderRadius: "50%",
            border: "1px solid #203c32",
            marginY: "-3px"
          },
          ".Mui-active .MuiStepIcon-text": {
            fill: "#ffe7bf"

          },pt: 3, pb: 5 
  
        }}>
            {steps.map((label) => (
              <Step key={label} >
                <StepLabel >{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (             
            <React.Fragment>
                          
              {getStepContent(activeStep)}
              <Typography color="#203c32"  variant="h5" gutterBottom>
          ----------------------------------------------------------------------------
        </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    <Typography color="#203c32"  component="div">
                    Back
                    </Typography>
                  </Button>
                )}
                <Button
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >        <Typography color="#203c32"  component="div">
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Typography>
                </Button>
              </Box>
            </React.Fragment>
          )}
          
        </Paper>

      </Container>
    </React.Fragment>
  );
}
