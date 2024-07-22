import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
const HomeFeedPage = lazy(() => import('../pages/HomeFeedPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
import CenteredLayout from '../layouts/CenteredLayout';
import AuthLayout from '../layouts/AuthLayout';
const Loading = () => <div>Loading...</div>

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Navigate to="/feed" />} />
        <Route element={<CenteredLayout />}>
          <Route path="feed" element={<HomeFeedPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
