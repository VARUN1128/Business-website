// src/App.jsx
// This is the main entry point of the application, setting up routing and layout

import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Keep your slick styles (CSS can load immediately)
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Eager-load Layout and Home so the landing page is instant
import Layout from './components/Layout';
import Home from './pages/Home';

// Lazy-load the rest of the routes
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Careers = lazy(() => import('./pages/Careers'));
const Contact = lazy(() => import('./pages/Contact'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Industry = lazy(() => import('./pages/Industry'));

// Optional: prefetch lazy routes ASAP after the first render,
// so navigation to other pages feels instant.
// This component mounts once at app start and quietly triggers imports.
function PrefetchRoutes() {
  useEffect(() => {
    // Fire and forget; don’t await to avoid blocking UI
    import('./pages/About');
    import('./pages/Services');
    import('./pages/Careers');
    import('./pages/Contact');
    import('./pages/Gallery');
    import('./pages/Industry');
  }, []);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      {/* Start background prefetch after initial render */}
      <PrefetchRoutes />

      <Routes>
        <Route element={<Layout />}>
          {/* Home is eager so it loads first */}
          <Route path="/" element={<Home />} />

          {/* Other pages lazy with a tiny fallback to avoid layout shift */}
          <Route
            path="/about"
            element={
              <Suspense fallback={<div style={{ minHeight: 200 }} />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/services"
            element={
              <Suspense fallback={<div style={{ minHeight: 200 }} />}>
                <Services />
              </Suspense>
            }
          />
          <Route
            path="/careers"
            element={
              <Suspense fallback={<div style={{ minHeight: 200 }} />}>
                <Careers />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<div style={{ minHeight: 200 }} />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/gallery"
            element={
              <Suspense fallback={<div style={{ minHeight: 200 }} />}>
                <Gallery />
              </Suspense>
            }
          />
          <Route
            path="/industry"
            element={
              <Suspense fallback={<div style={{ minHeight: 200 }} />}>
                <Industry />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
