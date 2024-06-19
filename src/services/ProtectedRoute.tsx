import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return localStorage.getItem('authToken') === 'Autenticado';
};

interface ProtectedRouteProps {
  element: React.ComponentType;
  path: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element: Element, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      element={
        isAuthenticated() ? (
          <Element />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
  );
};

export default ProtectedRoute;
