import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// Import your logo image from the assets folder
import mainLogo from '../assets/main_logo.png';

// --- Styled Components Definitions ---

const media = {
  md: `@media (min-width: 768px)`,
};

const NavHeader = styled.header`
  background-color: #fff;
  width: 100%;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  position: sticky;
  top: 0;
  z-index: 50;
`;

const NavContainer = styled.nav`
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
`;

// Logo component now wraps an image
const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 2.5rem; /* 40px */
  width: auto;
`;

// A new container to group all items on the right
const RightNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const MenuToggleButton = styled.button`
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #374151;

  ${media.md} {
    display: none;
  }

  svg {
    width: 1.75rem;
    height: 1.75rem;
  }
`;

const NavLinksList = styled.ul`
  display: none; /* Hidden on mobile */
  align-items: center;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;

  ${media.md} {
    display: flex;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #374151;
  padding: 0.5rem 0.25rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  position: relative;
  white-space: nowrap; /* Prevents links from wrapping */

  &:hover {
    color: #EA580C;
  }

  &.active {
    color: #f97316;
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #2563eb;
    }
  }
`;

const ButtonContainer = styled.div`
  display: none; /* Hidden on mobile */
  align-items: center;
  gap: 1rem;

  ${media.md} {
    display: flex;
  }
`;

const ExploreButton = styled(NavLink)`
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  padding: 0.5rem 1.25rem;
  color: #374151;
  font-weight: 500;
  background-color: #fff;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    background-color: #f9fafb;
  }
`;

const ApplyButton = styled(NavLink)`
  background-color: #F97316;
  border-radius: 0.25rem;
  padding: 0.5rem 1.25rem;
  color: white;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    background-color: #EA580C;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  border-top: 1px solid #e5e7eb;
  background-color: #f9fafb;

  ${media.md} {
    display: none;
  }
`;

const MobileNavLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
`;

const MobileStyledNavLink = styled(StyledNavLink)`
  padding: 0.75rem 0;
  width: 100%;
  border-bottom: 1px solid #e5e7eb;
  &:last-child {
    border-bottom: none;
  }
  &.active::after {
    bottom: -1px;
    height: 1px;
  }
`;

const MobileButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const MobileExploreButton = styled(ExploreButton)`
  width: 100%;
  text-align: center;
`;

const MobileApplyButton = styled(ApplyButton)`
  width: 100%;
  text-align: center;
`;


// --- The Navbar Component ---

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Updated navigation links order
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/careers", label: "Careers" },
    { to: "/gallery", label: "The Gallery of Greatness" },
    { to: "/contact", label: "Contact" }
  ];

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <NavHeader>
      <NavContainer>
        <LogoLink to="/">
          <LogoImage src={mainLogo} alt="Stars Management Logo" />
        </LogoLink>

        {/* This container groups everything on the right side for desktop */}
        <RightNavContainer>
          <NavLinksList>
            {navLinks.map(({ to, label }) => (
              <li key={label}>
                <StyledNavLink to={to}>{label}</StyledNavLink>
              </li>
            ))}
          </NavLinksList>

          <ButtonContainer>
            {/* <ExploreButton to="/services">Explore</ExploreButton> */}
            <ApplyButton to="/careers">Apply</ApplyButton>
          </ButtonContainer>
        </RightNavContainer>

        {/* Hamburger button remains separate for mobile layout */}
        <MenuToggleButton onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
        </MenuToggleButton>
      </NavContainer>

      {/* Mobile Menu (conditionally rendered) */}
      {isMobileMenuOpen && (
        <MobileMenu>
          <MobileNavLinksList>
            {navLinks.map(({ to, label }) => (
              <li key={label}>
                <MobileStyledNavLink to={to} onClick={handleMobileLinkClick}>
                  {label}
                </MobileStyledNavLink>
              </li>
            ))}
          </MobileNavLinksList>
          <MobileButtonContainer>
            <MobileExploreButton to="/services" onClick={handleMobileLinkClick}>Explore</MobileExploreButton>
            <MobileApplyButton to="/careers" onClick={handleMobileLinkClick}>Apply</MobileApplyButton>
          </MobileButtonContainer>
        </MobileMenu>
      )}
    </NavHeader>
  );
}
