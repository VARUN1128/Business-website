// src/components/Footer.jsx

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/legacy logo.jpg';

const FooterShell = styled.footer`
  background: linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%);
  padding: clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem) clamp(2rem, 4vw, 3rem);
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  margin-top: clamp(4rem, 10vw, 8rem);
  position: relative;
  overflow: hidden;
`;

const FooterContainer = styled.div`
  width: min(1280px, 100%);
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  margin-bottom: clamp(3rem, 6vw, 5rem);
  padding-bottom: clamp(2.5rem, 5vw, 4rem);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(2rem, 4vw, 3rem);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 380px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoBadge = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  display: grid;
  place-items: center;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 90%;
    height: auto;
    object-fit: contain;
  }
`;

const BrandInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const BrandTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(120deg, #6366f1, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: -0.02em;
`;

const BrandTagline = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 500;
`;

const BrandDescription = styled.p`
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 0.95rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const ColumnTitle = styled.h4`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
`;

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(Link)`
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
  display: inline-block;
  width: fit-content;

  &:hover {
    color: var(--accent);
    transform: translateX(4px);
  }

  &.external {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ContactPair = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 200px;
`;

const ContactLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-bottom: 0.25rem;
`;

const ContactValue = styled.a`
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
  line-height: 1.6;

  &:hover {
    color: var(--accent);
  }

  &.address {
    color: var(--text-secondary);
    line-height: 1.7;
    max-width: 280px;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding-top: 2rem;
`;

const Copyright = styled.p`
  margin: 0;
  color: var(--text-muted);
  font-size: 0.875rem;
  font-weight: 500;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const LegalLink = styled.a`
  color: var(--text-muted);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;

  &:hover {
    color: var(--text-primary);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--accent);
    transition: width 0.2s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.08), transparent);
  margin: 2.5rem 0;
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/careers', label: 'Careers' },
    { to: '/contact', label: 'Contact' },
  ];

  const serviceLinks = [
    { to: '/services', label: 'Digital Marketing' },
    { to: '/services', label: 'Web Development' },
    { to: '/services', label: 'Backend Solutions' },
    { to: '/services', label: 'Staffing Services' },
  ];

  return (
    <FooterShell>
      <FooterContainer>
        <FooterTop>
          <BrandSection>
            <LogoContainer>
              <LogoBadge>
                <img src={mainLogo} alt="G Business Support logo" loading="lazy" />
              </LogoBadge>
              <BrandInfo>
                <BrandTitle>G Business Support</BrandTitle>
              </BrandInfo>
            </LogoContainer>
            <BrandDescription>
              Powering marketing, technology, and staffing for growth-focused businesses with a single, dependable partner.
            </BrandDescription>
          </BrandSection>

          <Column>
            <ColumnTitle>Company</ColumnTitle>
            <LinkList>
              {navLinks.map(link => (
                <li key={link.label}>
                  <FooterLink to={link.to}>{link.label}</FooterLink>
                </li>
              ))}
            </LinkList>
          </Column>

          <Column>
            <ColumnTitle>Services</ColumnTitle>
            <LinkList>
              {serviceLinks.map(link => (
                <li key={link.label}>
                  <FooterLink to={link.to}>{link.label}</FooterLink>
                </li>
              ))}
            </LinkList>
          </Column>
        </FooterTop>

        <FooterBottom>
          <Copyright>© {currentYear} G Business Support. All rights reserved.</Copyright>
          <LegalLinks>
            <LegalLink href="/privacy">Privacy Policy</LegalLink>
            <LegalLink href="/terms">Terms of Service</LegalLink>
          </LegalLinks>
        </FooterBottom>
      </FooterContainer>
    </FooterShell>
  );
}
