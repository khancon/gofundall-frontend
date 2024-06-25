// src/components/home/CampaignList.jsx
import React from 'react';
import { Spacer } from '@nextui-org/react';
import CampaignCard from './CampaignCard';

const CampaignList = ({ campaigns }) => {
  return (
    <div className="flex flex-col space-y-8">
      {campaigns.map((campaign) => (
        <React.Fragment key={campaign.id}>
          <CampaignCard campaign={campaign} />
          <Spacer y={2} /> {/* Add space between each card */}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CampaignList;
