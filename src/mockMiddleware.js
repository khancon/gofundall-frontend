// src/mockMiddleware.js
import { FETCH_CAMPAIGNS_REQUEST, FETCH_CAMPAIGNS_SUCCESS, FETCH_CAMPAIGNS_FAILURE,
    FETCH_CAMPAIGN_DETAILS_REQUEST, FETCH_CAMPAIGN_DETAILS_SUCCESS, FETCH_CAMPAIGN_DETAILS_FAILURE } from './redux/actions/campaignActions';
import { mockCampaigns, mockCampaignDetails } from './mockData';

const mockMiddleware = ({ dispatch }) => next => action => {
switch (action.type) {
case FETCH_CAMPAIGNS_REQUEST:
 return dispatch({ type: FETCH_CAMPAIGNS_SUCCESS, payload: mockCampaigns });
case FETCH_CAMPAIGN_DETAILS_REQUEST:
 return dispatch({ type: FETCH_CAMPAIGN_DETAILS_SUCCESS, payload: mockCampaignDetails });
default:
 return next(action);
}
};

export default mockMiddleware;
