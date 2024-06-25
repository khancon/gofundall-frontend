import React, { Component } from 'react';
import { Box, Container, Typography } from '@mui/material';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <Container>
            <Typography variant="h4" align="center" color="error">
              Something went wrong.
            </Typography>
          </Container>
        </Box>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
