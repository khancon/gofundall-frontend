// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import HomePage from './pages/HomePage';
import CampaignDetailsPage from './pages/CampaignDetailsPage';
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/campaigns/:id" element={<CampaignDetailsPage />} />
        </Routes>
      </Router>
    </NextUIProvider>
  </Provider>,
  document.getElementById('root')
);
