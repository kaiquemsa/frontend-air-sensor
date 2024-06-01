// @ts-nocheck
import React, { Suspense, useEffect, useState, startTransition } from 'react'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import ProtectedRoute from '../src/services/ProtectedRoute';

import './scss/style.scss'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Home = React.lazy(() => import('./views/pages/home/Home'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Dashboard_Predicts = React.lazy(() => import('./views/dashboard/Dashboard_Predicts'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => {
    startTransition(() => {
      setIsAuthenticated(true);
    });
  };

  const logout = () => {
    startTransition(() => {
      setIsAuthenticated(false);
    });
  };

  return (
    <HashRouter>
      <Routes>
        {/* Rotas que não usam o DefaultLayout */}
        <Route path="/login" caseSensitive element={<Login login={login} />} />
        <Route path="/register" caseSensitive element={<Register />} />
        <Route path="/404" caseSensitive element={<Page404 />} />
        <Route path="/500" caseSensitive element={<Page500 />} />

        {/* Rotas que usam o DefaultLayout */}
        <Route element={<DefaultLayout />}>
          <Route path="/" caseSensitive element={<Home />} />
          <Route path="/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated} element={Dashboard} />} />
          <Route path="/dashboard_predicts" element={<ProtectedRoute isAuthenticated={isAuthenticated} element={Dashboard_Predicts} />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App
