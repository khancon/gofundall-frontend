import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" py={3} mt={5} bgcolor="primary.main" color="white">
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          &copy; {new Date().getFullYear()} GoFundMe Campaigns. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
