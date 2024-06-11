import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import CityStatePage from './pages/CityStatePage';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:city/:state" element={<CityStatePage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
