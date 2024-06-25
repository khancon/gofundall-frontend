// src/redux/actions/campaignActions.js
import axios from 'axios';

export const FETCH_CAMPAIGNS_REQUEST = 'FETCH_CAMPAIGNS_REQUEST';
export const FETCH_CAMPAIGNS_SUCCESS = 'FETCH_CAMPAIGNS_SUCCESS';
export const FETCH_CAMPAIGNS_FAILURE = 'FETCH_CAMPAIGNS_FAILURE';

export const FETCH_CAMPAIGN_DETAILS_REQUEST = 'FETCH_CAMPAIGN_DETAILS_REQUEST';
export const FETCH_CAMPAIGN_DETAILS_SUCCESS = 'FETCH_CAMPAIGN_DETAILS_SUCCESS';
export const FETCH_CAMPAIGN_DETAILS_FAILURE = 'FETCH_CAMPAIGN_DETAILS_FAILURE';

export const fetchCampaigns = () => async (dispatch) => {
  dispatch({ type: FETCH_CAMPAIGNS_REQUEST });
  try {
    const response = await axios.get('http://localhost:5001/campaigns');
    dispatch({ type: FETCH_CAMPAIGNS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_CAMPAIGNS_FAILURE, payload: error.message });
  }
};

export const fetchCampaignDetails = (id) => async (dispatch) => {
  dispatch({ type: FETCH_CAMPAIGN_DETAILS_REQUEST });
  console.log(`Fetching details for campaign id: ${id}`);
  try {
    const response = await axios.get(`http://localhost:5001/campaigns/${id}`);
    console.log('Response:', response.data);
    dispatch({ type: FETCH_CAMPAIGN_DETAILS_SUCCESS, payload: response.data });
  } catch (error) {
    console.log('Error:', error.message);
    dispatch({ type: FETCH_CAMPAIGN_DETAILS_FAILURE, payload: error.message });
  }
};
