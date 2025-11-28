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
  background: rgba(4, 7, 26, 0.85);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 12px 40px rgba(2, 6, 23, 0.45);
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
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.05);
  display: grid;
  place-items: center;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);

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
    color: white;
  }

  &.active {
    color: white;
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
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
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
  inset: auto 0 0 0;
  background: rgba(5, 9, 28, 0.98);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.75rem clamp(1rem, 6vw, 2rem) 2.5rem;
  transform: translateY(${props => (props.open ? '0%' : '100%')});
  transition: transform 0.35s ease;
  box-shadow: 0 -20px 50px rgba(2, 6, 23, 0.75);
  z-index: 120;

  ${breakpointMd} {
    display: none;
  }
`;

const MobileLinks = styled.ul`
  list-style: none;
  margin: 0 0 1.5rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const MobileLink = styled(NavLink)`
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-secondary);
  padding: 0.85rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  &.active {
    color: white;
  }
`;

const MenuBackdrop = styled.button`
  position: fixed;
  inset: 0;
  background: rgba(3, 6, 23, 0.65);
  border: none;
  padding: 0;
  margin: 0;
  opacity: ${props => (props.open ? 1 : 0)};
  pointer-events: ${props => (props.open ? 'auto' : 'none')};
  transition: opacity 0.25s ease;
  z-index: 110;
`;

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
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

      <MenuBackdrop open={isMobileMenuOpen} onClick={closeMenu} aria-label="Close menu backdrop" />
      <MobileMenu open={isMobileMenuOpen} aria-hidden={!isMobileMenuOpen}>
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
