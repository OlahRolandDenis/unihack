import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Profile from './components/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/home' element={<App />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      
    </React.StrictMode>
  </BrowserRouter>
);

