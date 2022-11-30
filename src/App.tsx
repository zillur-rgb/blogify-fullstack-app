import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Single from './pages/Single';
import Write from './pages/Write';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Layout from './lib/utilities/Layout';
import Stats from './pages/Stats';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/post/:1234',
        element: <Single />,
      },
      {
        path: '/write',
        element: <Write />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Register />,
  },
  {
    path: '/post/:id',
    element: <Single />,
  },
  {
    path: '/write',
    element: <Write />,
  },
  {
    path: '/stats',
    element: <Stats />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
