import React from 'react';
import { Box, Container, Typography, Button, Card, CardContent } from '@mui/material';

const CampaignDetails = ({ campaign }) => {
  if (!campaign) {
    return null;
  }
  const progress = (campaign.current_amount / campaign.target_amount) * 100;

  return (
    <Container maxWidth="md">
      <Card variant="outlined" style={{ marginTop: '20px' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {campaign.name}
          </Typography>
          <Typography variant="body1" paragraph>
            {campaign.description}
          </Typography>
          <Typography variant="body1">
            <strong>Target Amount:</strong> ${campaign.target_amount}
          </Typography>
          <Typography variant="body1">
            <strong>Current Amount:</strong> ${campaign.current_amount}
          </Typography>
          <Typography variant="body1">
            <strong>Percentage Completed:</strong> {progress}%
          </Typography>
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              href={campaign.gofundme_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Campaign
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CampaignDetails;
