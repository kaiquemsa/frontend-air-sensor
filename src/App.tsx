// @ts-nocheck
import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProtectedRoute from '../src/services/ProtectedRoute';

import { CSpinner, useColorModes } from '@coreui/react'
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
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme');
  const storedTheme = useSelector((state: any) => state.theme);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1]);
    const themeParam = urlParams.get('theme');
    const theme = themeParam && themeParam.match(/^[A-Za-z0-9\s]+/)?.[0];

    if (theme) {
      setColorMode(theme);
    }

    if (isColorModeSet()) {
      return;
    }

    setColorMode(storedTheme);
  }, []);

  return (
    <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            {/* <CSpinner color="primary" variant="grow" /> */}
          </div>
        }
      >
        <Routes>
          {/* Rota padrão com DefaultLayout */}
          <Route element={<DefaultLayout />}>
            {/* Todas as outras rotas */}
            <Route path="/" caseSensitive element={<Home />} />
            <Route path="/login" caseSensitive element={<Login />} />
            <Route path="/register" caseSensitive element={<Register />} />
            <Route path="/404" caseSensitive element={<Page404 />} />
            <Route path="/500" caseSensitive element={<Page500 />} />

            {/* Rotas protegidas */}
            <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} />
            <Route path="/dashboard_predicts" element={<ProtectedRoute element={Dashboard_Predicts} />} />

            {/* Redirecionar para 404 se a rota não for encontrada */}
            <Route path="*" element={<Navigate to="/404" />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App
