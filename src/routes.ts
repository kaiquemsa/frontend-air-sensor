import React from 'react'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const DashboardPredict = React.lazy(() => import('./views/dashboard/Dashboard_Predicts'))
const Home = React.lazy(() => import('./views/pages/home/Home'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))

const routes = [
  { path: '/', name: 'Home', element: Home },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/dashboard_predicts', name: 'DashboardPredict', element: DashboardPredict },
  { path: '/login', name: 'Login', element: Login },
  { path: '/register', name: 'Register', element: Register },
]

export default routes
