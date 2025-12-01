import React, { useEffect, useState } from 'react';
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
  gap: 2rem;
  align-items: center;

  ${breakpointMd} {
    display: flex;
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

const MenuToggle = styled.button`
  display: inline-flex;
  padding: 0.55rem;
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #ffffff;
  color: var(--text-primary);
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    background: #f8fafc;
  }

  svg {
    width: 1.45rem;
    height: 1.45rem;
  }

  ${breakpointMd} {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding: 1.75rem clamp(1rem, 6vw, 2rem) 2.5rem;
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  height: 50vh;
  max-height: 50vh;
  overflow-y: auto;
  transform: translateY(${props => (props.$open ? '0' : '100%')});
  opacity: ${props => (props.$open ? 1 : 0)};
  pointer-events: ${props => (props.$open ? 'auto' : 'none')};
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease;
  border-radius: 24px 24px 0 0;
  will-change: transform;

  ${breakpointMd} {
    display: none;
  }
`;

const MobileMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

const MobileMenuTitle = styled.h3`
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
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #f8fafc;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e2e8f0;
    transform: scale(1.1);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const MobileLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MobileLink = styled(NavLink)`
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-secondary);
  padding: 0.85rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  &.active {
    color: var(--text-primary);
  }
`;

const MenuBackdrop = styled.button`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  border: none;
  padding: 0;
  margin: 0;
  opacity: ${props => (props.$open ? 1 : 0)};
  pointer-events: ${props => (props.$open ? 'auto' : 'none')};
  transition: opacity 0.25s ease;
  z-index: 999;
  visibility: ${props => (props.$open ? 'visible' : 'hidden')};
`;

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      // Immediately restore scroll when menu is closed
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    
    // Cleanup function that always runs
    return () => {
      // Ensure scroll is restored on cleanup
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/careers', label: 'Careers' },
    { to: '/contact', label: 'Contact' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <NavHeader>
      <NavContainer>
        <Brand to="/">
          <LogoBadge>
            <img src={mainLogo} alt="G Business Support logo" />
          </LogoBadge>
          <BrandInfo>
            <CompanyName>G Business Support</CompanyName>
            <CompanyTagline>Marketing · Tech · Staffing</CompanyTagline>
          </BrandInfo>
        </Brand>

        <DesktopLinks>
          {navLinks.map(({ to, label }) => (
            <li key={label}>
              <StyledNavLink to={to}>{label}</StyledNavLink>
            </li>
          ))}
        </DesktopLinks>

        <MenuToggle onClick={() => setIsMobileMenuOpen(prev => !prev)} aria-label="Toggle navigation menu">
          {isMobileMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
        </MenuToggle>
      </NavContainer>

      <MenuBackdrop $open={isMobileMenuOpen} onClick={closeMenu} aria-label="Close menu backdrop" />
      <MobileMenu $open={isMobileMenuOpen} aria-hidden={!isMobileMenuOpen}>
        <MobileMenuHeader>
          <MobileMenuTitle>Menu</MobileMenuTitle>
          <CloseButton onClick={closeMenu} aria-label="Close menu">
            <XMarkIcon />
          </CloseButton>
        </MobileMenuHeader>
        <MobileLinks>
          {navLinks.map(({ to, label }) => (
            <li key={label}>
              <MobileLink to={to} onClick={closeMenu}>
                {label}
              </MobileLink>
            </li>
          ))}
        </MobileLinks>
      </MobileMenu>
    </NavHeader>
  );
}
