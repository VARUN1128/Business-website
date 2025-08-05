// src/components/Footer.jsx

import React from 'react';
import styled from 'styled-components';
// Importing the specific icons we need
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';

// --- Styled Components Definitions ---

// Responsive breakpoint
const media = {
  sm: `@media (min-width: 640px)`,
};

// The main <footer> wrapper
const FooterContainer = styled.footer`
  background-color: #fff;
  color: #1f2937; /* A dark gray for text, more modern than pure black */
  padding: 1.5rem 0;
  box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05); /* Equivalent to shadow-inner */
  margin-top: auto; /* Pushes footer to the bottom in a flex layout */
`;

// The inner <div> to handle max-width and flex layout
const FooterContent = styled.div`
  max-width: 80rem; /* max-w-7xl */
  margin: 0 auto;
  padding: 0 1rem; /* px-4 */
  display: flex;
  flex-direction: column; /* Stack items on mobile */
  align-items: center;
  gap: 1rem; /* Space between items on mobile */

  ${media.sm} {
    flex-direction: row; /* Side-by-side on larger screens */
    justify-content: space-between; /* Pushes items to opposite ends */
  }
`;

// The copyright text paragraph
const CopyrightText = styled.p`
  font-size: 0.875rem; /* text-sm */
  margin: 0;
  text-align: center;

  ${media.sm} {
    text-align: left;
  }

  span {
    font-weight: 600; /* font-semibold */
  }
`;

// A container for the social media icons
const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem; /* space-x-5 */
`;

// An individual icon link
const SocialIconLink = styled.a`
  font-size: 1.75rem; /* text-2xl, makes icons larger */
  transition: transform 0.3s ease, opacity 0.3s ease;
  color: #3b5998; /* Default color, though icons will have their own */

  &:hover {
    transform: translateY(-4px); /* The "nice animation" */
    opacity: 0.85;
  }
`;

// --- The Footer Component ---

export default function Footer() {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/company/108102731/admin/dashboard/', // Replace with your LinkedIn URL
      icon: <FaLinkedin color="#0077B5" />,
      label: 'LinkedIn',
    },
    {
      href: 'https://www.facebook.com/starsmgnt', // Replace with your Facebook URL
      icon: <FaFacebookSquare color="#1877F2" />,
      label: 'Facebook',
    },
    {
      href: 'https://www.instagram.com/stars_management2015?igsh=bW5yZmFhd2ZuY3V1', // Replace with your Instagram URL
      icon: <FaInstagramSquare color="#E4405F" />,
      label: 'Instagram',
    },
    {
      href: 'https://wa.me/91907888084', // Replace with your WhatsApp URL
      icon: <FaWhatsappSquare color="#25D366" />,
      label: 'WhatsApp',
    },
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <CopyrightText>
          © {new Date().getFullYear()} <span>Stars Management</span>. All rights reserved.
        </CopyrightText>

        <SocialIconsContainer>
          {socialLinks.map((link) => (
            <SocialIconLink
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </SocialIconLink>
          ))}
        </SocialIconsContainer>
      </FooterContent>
    </FooterContainer>
  );
}
