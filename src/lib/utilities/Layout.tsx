import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
