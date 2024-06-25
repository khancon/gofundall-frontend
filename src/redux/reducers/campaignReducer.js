//src/redux/reducers/campaignReducer.js
import {
    FETCH_CAMPAIGNS_REQUEST,
    FETCH_CAMPAIGNS_SUCCESS,
    FETCH_CAMPAIGNS_FAILURE,
    FETCH_CAMPAIGN_DETAILS_REQUEST,
    FETCH_CAMPAIGN_DETAILS_SUCCESS,
    FETCH_CAMPAIGN_DETAILS_FAILURE
  } from '../actions/campaignActions';
  
  const initialState = {
    campaigns: [],
    currentCampaign: null,
    loading: false,
    error: null,
  };
  
  const campaignReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CAMPAIGNS_REQUEST:
      case FETCH_CAMPAIGN_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_CAMPAIGNS_SUCCESS:
        return {
          ...state,
          loading: false,
          campaigns: action.payload,
        };
      case FETCH_CAMPAIGN_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          currentCampaign: action.payload,
        };
      case FETCH_CAMPAIGNS_FAILURE:
      case FETCH_CAMPAIGN_DETAILS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default campaignReducer;
  