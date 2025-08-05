// src/components/Layout.jsx
// This component serves as the main layout wrapper for the application,

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Navbar at the top stuck naturally by flex-column */}
      <Navbar />

      {/* Main content grows to fill available space */}
      <main className="flex-grow px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
        <Outlet /> {/* This renders matching child routes */}
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default Layout;
