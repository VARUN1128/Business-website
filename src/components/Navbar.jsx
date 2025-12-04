import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import mainLogo from '../assets/main_logo1.png';

const breakpointMd = '@media (min-width: 768px)';

const NavHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  backdrop-filter: blur(22px);
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
`;

const NavContainer = styled.nav`
  width: min(1200px, 100%);
  margin: 0 auto;
  padding: 0.65rem clamp(1rem, 4vw, 2.5rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const Brand = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  min-width: 0;
`;

const LogoBadge = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 18px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #ffffff;
  display: grid;
  place-items: center;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  img {
    width: 92%;
    height: auto;
    object-fit: contain;
  }
`;

const BrandInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
`;

const CompanyName = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  background: linear-gradient(120deg, #fcd34d, #f97316, #60a5fa);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const CompanyTagline = styled.span`
  font-size: 0.95rem;
  color: var(--text-muted);
  font-weight: 500;
`;

const DesktopLinks = styled.ul`
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: clamp(1rem, 3vw, 2rem);
  align-items: center;
  flex-wrap: wrap;

  ${breakpointMd} {
    display: flex;
  }
`;

// Hamburger Menu Toggle Button
const MenuToggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #ffffff;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    background: #f8fafc;
    transform: scale(1.05);
  }

  &:focus {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  ${breakpointMd} {
    display: none;
  }
`;

// Backdrop overlay when menu is open
const MenuBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 998;
  opacity: ${props => (props.$isOpen ? 1 : 0)};
  visibility: ${props => (props.$isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: ${props => (props.$isOpen ? 'auto' : 'none')} !important;
  height: ${props => (props.$isOpen ? '100vh' : '0')};
  overflow: ${props => (props.$isOpen ? 'visible' : 'hidden')};
`;

// Mobile Menu Container - Slides in from right
const MobileMenu = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: min(320px, 85vw);
  height: 100vh;
  background: #ffffff;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
  z-index: ${props => (props.$isOpen ? 999 : -1)};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, visibility 0.3s ease, z-index 0s ${props => (props.$isOpen ? '0s' : '0.3s')};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  
  ${props => props.$isOpen ? `
    pointer-events: auto;
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  ` : `
    pointer-events: none !important;
    opacity: 0;
    visibility: hidden;
    transform: translateX(100%);
  `}

  ${breakpointMd} {
    display: none;
  }
`;

// Mobile Menu Header with close button
const MobileMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  background: #f8fafc;
`;

const MobileMenuTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #ffffff;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e2e8f0;
    transform: scale(1.1);
  }

  &:focus {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

// Mobile Navigation Links
const MobileLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
`;

const MobileLink = styled(NavLink)`
  display: block;
  padding: 1rem 1.5rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;

  &:hover {
    background: #f8fafc;
    color: var(--text-primary);
    border-left-color: var(--accent);
    padding-left: 1.75rem;
  }

  &.active {
    color: var(--text-primary);
    background: rgba(99, 102, 241, 0.08);
    border-left-color: var(--accent);
    font-weight: 700;
  }

  &:focus {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
  }
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  color: var(--text-secondary);
  font-weight: 500;
  transition: color 0.2s ease;
  padding: 0.35rem 0;

  &:hover {
    color: var(--text-primary);
  }

  &.active {
    color: var(--text-primary);
  }

  &.active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.3rem;
    width: 100%;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, var(--accent), var(--accent-2));
  }
`;

export default function Navbar() {
  // State to manage mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links array
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/careers', label: 'Careers' },
    { to: '/contact', label: 'Contact' },
  ];

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking backdrop
  const handleBackdropClick = () => {
    setIsMenuOpen(false);
  };

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Remove focus from menu items when menu closes to fix aria-hidden warning
  useEffect(() => {
    if (!isMenuOpen) {
      const menuElement = document.getElementById('mobile-menu');
      if (menuElement) {
        const focusedElement = menuElement.querySelector(':focus');
        if (focusedElement && focusedElement instanceof HTMLElement) {
          focusedElement.blur();
        }
      }
    }
  }, [isMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  return (
    <>
      <NavHeader>
        <NavContainer>
          <Brand to="/">
            <LogoBadge>
              <img 
                src={mainLogo} 
                alt="G Business Support - Digital Marketing and Web Development Company Logo" 
                width="54" 
                height="54"
              />
            </LogoBadge>
                  <BrandInfo>
                    <CompanyName>G Business Support</CompanyName>
                  </BrandInfo>
          </Brand>

          {/* Desktop Navigation - Hidden on mobile */}
          <DesktopLinks>
            {navLinks.map(({ to, label }) => (
              <li key={label}>
                <StyledNavLink to={to}>{label}</StyledNavLink>
              </li>
            ))}
          </DesktopLinks>

          {/* Hamburger Menu Toggle - Visible only on mobile */}
          <MenuToggle
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
          </MenuToggle>
        </NavContainer>
      </NavHeader>

      {/* Backdrop Overlay */}
      <MenuBackdrop
        $isOpen={isMenuOpen}
        onClick={handleBackdropClick}
        aria-hidden={!isMenuOpen}
      />

      {/* Mobile Menu - Slides in from right */}
      <MobileMenu
        id="mobile-menu"
        $isOpen={isMenuOpen}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        {...(!isMenuOpen && { inert: true })}
      >
        <MobileMenuHeader>
          <MobileMenuTitle>Menu</MobileMenuTitle>
          <CloseButton
            onClick={handleLinkClick}
            aria-label="Close menu"
          >
            <XMarkIcon />
          </CloseButton>
        </MobileMenuHeader>

        <MobileLinks>
          {navLinks.map(({ to, label }) => (
            <li key={label}>
              <MobileLink
                to={to}
                onClick={handleLinkClick}
              >
                {label}
              </MobileLink>
            </li>
          ))}
        </MobileLinks>
      </MobileMenu>
    </>
  );
}
