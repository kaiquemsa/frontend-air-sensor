import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// Função de verificação de autenticação (pode ser substituída pela sua lógica)
const isAuthenticated = () => {
  return localStorage.getItem('authToken') === 'Autenticado';
};

// Definindo os tipos das props do ProtectedRoute
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
