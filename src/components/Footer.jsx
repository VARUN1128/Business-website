// src/components/Footer.jsx

import React from 'react';
import styled from 'styled-components';
import mainLogo from '../assets/main_logo1.png';

const FooterShell = styled.footer`
  background: rgba(3, 6, 23, 0.9);
  padding: clamp(3rem, 6vw, 4.5rem) clamp(1.5rem, 4vw, 3rem) 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: clamp(3rem, 8vw, 6rem);
  position: relative;
  overflow: hidden;
`;

const Glow = styled.div`
  position: absolute;
  inset: auto auto -8rem -6rem;
  width: 28rem;
  height: 28rem;
  border-radius: 50%;
  background: rgba(124, 58, 237, 0.25);
  filter: blur(120px);
  pointer-events: none;
`;

const FooterGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: clamp(1.5rem, 4vw, 3rem);
  width: min(1200px, 100%);
  margin: 0 auto;
  z-index: 2;
`;

const BrandCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LogoBadge = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.04);
  display: grid;
  place-items: center;
  overflow: hidden;

  img {
    width: 90%;
    height: auto;
    object-fit: contain;
  }
`;

const BrandTitle = styled.h4`
  margin: 0;
  font-size: 1.3rem;
  font-weight: 700;
`;

const BrandCopy = styled.p`
  margin: 0;
  color: var(--text-muted);
  max-width: 320px;
  line-height: 1.7;
`;

const FooterHeading = styled.h5`
  margin: 0 0 1rem;
  font-size: 0.9rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent-2);
`;

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const FooterLink = styled.a`
  color: var(--text-secondary);
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: white;
  }
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: var(--text-secondary);

  strong {
    color: white;
  }
`;

const Divider = styled.div`
  width: min(1200px, 100%);
  margin: clamp(2rem, 4vw, 3rem) auto 1.5rem;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
`;

const FooterBottom = styled.div`
  width: min(1200px, 100%);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  color: var(--text-muted);
  font-size: 0.9rem;
  position: relative;
  z-index: 2;
`;

const InlineLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const MetaText = styled.span`
  color: var(--text-muted);
  font-weight: 500;
`;

export default function Footer() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <FooterShell>
      <Glow />
      <FooterGrid>
        <BrandCard>
          <LogoBadge>
            <img src={mainLogo} alt="G Business Support logo" loading="lazy" />
          </LogoBadge>
          <BrandTitle>G Business Support</BrandTitle>
          <BrandCopy>
            Powering marketing, technology, and staffing for growth-focused businesses with a single, dependable partner.
          </BrandCopy>
        </BrandCard>

        <div>
          <FooterHeading>Navigate</FooterHeading>
          <LinkList>
            {navLinks.map(link => (
              <li key={link.label}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </li>
            ))}
          </LinkList>
        </div>

        <div>
          <FooterHeading>Reach Us</FooterHeading>
          <ContactList>
            <p>
              <strong>Address:</strong><br />
              Richmond Circle, 301, 3rd Floor, Andree Capitol Building Behind Axis Bank, Doule Road, Kengal Hanumanthaiah Rd, Shanti Nagar, Bengaluru, Karnataka 560027
            </p>
            <p>
              <strong>Phone:</strong> <FooterLink href="tel:+919071861881">+91 9071861881</FooterLink>
            </p>
            <p>
              <strong>Email:</strong> <FooterLink href="mailto:hrdlegacy@gmail.com">hrdlegacy@gmail.com</FooterLink>
            </p>
            <p>
              <strong>WhatsApp:</strong> <FooterLink href="https://wa.me/918310312791" target="_blank" rel="noopener noreferrer">Chat Now</FooterLink>
            </p>
          </ContactList>
        </div>
      </FooterGrid>

      <Divider />

      <FooterBottom>
        <span>© {new Date().getFullYear()} G Business Support. All rights reserved.</span>
        <InlineLinks>
          <MetaText>Privacy-first operations</MetaText>
          <MetaText>Transparent terms</MetaText>
        </InlineLinks>
      </FooterBottom>
    </FooterShell>
  );
}
