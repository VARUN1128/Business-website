// src/components/Layout.jsx
// This component serves as the main layout wrapper for the application.

import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActionMenu from './FloatingActionMenu';

const PageShell = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--page-gradient);
  color: var(--text-primary);
  position: relative;
  overflow: hidden;
`;

const Glow = styled.div`
  position: absolute;
  width: 38rem;
  height: 38rem;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.45;
  pointer-events: none;
  mix-blend-mode: screen;

  &.one {
    background: #4c1d95;
    top: -12rem;
    right: -10rem;
  }

  &.two {
    background: #0ea5e9;
    bottom: -18rem;
    left: -8rem;
  }
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  padding: 0;
  z-index: 2;
`;

function Layout() {
  return (
    <PageShell>
      <Glow className="one" />
      <Glow className="two" />

      <Navbar />

      <Main id="main-content">
        <Outlet />
      </Main>

      <Footer />
      <FloatingActionMenu />
    </PageShell>
  );
}

export default Layout;
