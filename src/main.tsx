import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import OneOnOneConsultingProposal from './pages/OneOnOneConsultingProposal';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/1on1_consulting_proposal" element={<OneOnOneConsultingProposal />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

