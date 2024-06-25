// src/pages/HomePage.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCampaigns } from '../redux/actions/campaignActions';
import CampaignList from '../components/home/CampaignList';
import { Navbar, Spacer, NavbarItem } from '@nextui-org/react';
import './HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const campaigns = useSelector((state) => state.campaigns.campaigns);
  const loading = useSelector((state) => state.campaigns.loading);
  const error = useSelector((state) => state.campaigns.error);

  useEffect(() => {
    dispatch(fetchCampaigns());
  }, [dispatch]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center p-4">
      <Navbar isBordered variant="sticky">
        <NavbarItem>
          <h1 className="text-3xl font-bold">GoFundMe Campaigns</h1>
        </NavbarItem>
      </Navbar>
      <Spacer y={2} />
      <div className="w-full max-w-4xl">
        <CampaignList campaigns={campaigns} />
      </div>
    </div>
  );
};

export default HomePage;
