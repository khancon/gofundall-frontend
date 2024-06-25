// src/components/home/CampaignCard.jsx
import React from 'react';
import { Card, CardHeader, CardBody, Progress } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import './CampaignCard.css';

const CampaignCard = ({ campaign }) => {
  const progress = (campaign.current_amount / campaign.target_amount) * 100;
  let progressColor;

  if (progress < 10) {
    progressColor = 'danger';
  } else if (progress < 100) {
    progressColor = 'warning';
  } else {
    progressColor = 'success';
  }
  
  return (
    <Link to={`/campaigns/${campaign.id}`} className="campaign-card-link">
      <Card isHoverable isPressable className="campaign-card w-full md:w-3/4 lg:w-2/3 mx-auto">
        <CardHeader>
          <h4 className="text-xl font-semibold">{campaign.name}</h4>
        </CardHeader>
        <CardBody>
          <p className="mb-2">{campaign.description}</p>
          <p className="text-gray-700">Target Amount: ${campaign.target_amount}</p>
          <p className="text-gray-700">Current Amount: ${campaign.current_amount}</p>
          <p className="text-gray-700 mb-2">Percentage Completed: {progress}%</p>
          <Progress value={progress} color={progressColor} />
        </CardBody>
      </Card>
    </Link>
  );
};

export default CampaignCard;
