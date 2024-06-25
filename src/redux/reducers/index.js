// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import campaignReducer from './campaignReducer';
// Import other reducers as needed

const rootReducer = combineReducers({
  campaigns: campaignReducer,
  // Add other reducers here as your application grows
});

export default rootReducer;
