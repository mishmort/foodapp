import React from 'react';
import Grid from '@mui/material/Grid';

const PageSplitter = ({ leftContent, rightContent }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                {leftContent}
            </Grid>
            <Grid item xs={12} md={6}>
                {rightContent}
            </Grid>
        </Grid>
    );
};

export default PageSplitter;
