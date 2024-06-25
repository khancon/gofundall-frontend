// src/components/CampaignDetailsPage.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCampaignDetails } from '../redux/actions/campaignActions';
import { useParams } from 'react-router-dom';
// import './CampaignDetailsPage.css'; // Assume we have some basic styling

const CampaignDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const campaign = useSelector((state) => state.campaigns.currentCampaign);
  const loading = useSelector((state) => state.campaigns.loading);
  const error = useSelector((state) => state.campaigns.error);
  // const progress = (campaign.current_amount / campaign.target_amount) * 100;


  useEffect(() => {
    console.log('Dispatching fetchCampaignDetails for id:', id);
    dispatch(fetchCampaignDetails(id));
  }, [dispatch, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!campaign) {
    return <div>No campaign found.</div>;
  }

  const progress = (campaign.current_amount && campaign.target_amount)
    ? (campaign.current_amount / campaign.target_amount) * 100
    : 0;

  return (
    <div className="campaign-details-page">
      <h1>{campaign.name}</h1>
      <p>{campaign.description}</p>
      <p>Target Amount: ${campaign.target_amount}</p>
      <p>Current Amount: ${campaign.current_amount}</p>
      <p>Percentage Completed: {progress.toFixed(2)}%</p>
      <a href={campaign.gofundme_url} target="_blank" rel="noopener noreferrer">
        Donate on GoFundMe
      </a>
    </div>
  );
};

export default CampaignDetailsPage;
