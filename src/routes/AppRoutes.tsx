import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeFeedPage from '../pages/HomeFeedPage';
import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/LoginPage';
import CenteredLayout from '../layouts/CenteredLayout';
import AuthLayout from '../layouts/AuthLayout';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/feed" />} />
      <Route element={<CenteredLayout />} >
        <Route path="feed" element={<HomeFeedPage />} />
      </Route>
      <Route element={<AuthLayout />} >
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
