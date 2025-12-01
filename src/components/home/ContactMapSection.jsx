// src/components/home/ContactMapSection.jsx

import React from 'react';
import styled from 'styled-components';
import mainLogo from '../../assets/main_logo1.png';

// --- Styled Components Definitions ---

const media = {
  md: `@media (min-width: 768px)`,
};

const Section = styled.section`
  max-width: 80rem;
  margin: 4rem auto;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #f9fafb; // A light gray background like in the image
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;

  ${media.md} {
    flex-direction: row;
  }
`;

const InfoPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const LogoImage = styled.img`
  height: 3.5rem; // 56px
  width: auto;
  align-self: flex-start;
`;

const InfoBlock = styled.div``;

const InfoHeading = styled.h3`
  font-weight: 700;
  font-size: 1.125rem; // text-lg
  margin-bottom: 0.75rem;
`;

const InfoText = styled.p`
  margin: 0;
  color: #4b5563; // text-gray-600
  line-height: 1.6;
`;

const MapPanel = styled.div`
  flex: 1;
  min-height: 300px;
  border-radius: 0.5rem;
  overflow: hidden; // Ensures the iframe corners are rounded

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

// --- The ContactMapSection Component ---

export default function ContactMapSection() {
  // Google Maps embed URL for the address in the image
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.588151930539!2d77.59176687507629!3d12.96093853735344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15235fb7a3e7%3A0x186d7761ab2cab0b!2sstars%20management!5e1!3m2!1sen!2sin!4v1754287526667!5m2!1sen!2sin";

  return (
    <Section>
      <InfoPanel>
        <LogoImage src={mainLogo} alt="Stars Management Logo" />
        <InfoBlock>
          <InfoHeading>Address:</InfoHeading>
          <InfoText>
            8/1, 3rd floore,Andree Capitol, Andree Rd, behind Axis Bank in, Shanti Nagar, Bengaluru, Karnataka 560027
          </InfoText>
        </InfoBlock>
        <InfoBlock>
          <InfoHeading>Contact:</InfoHeading>
          <InfoText>+91 9071888084</InfoText>
          <InfoText>Hr@starsmanagement.in</InfoText>
        </InfoBlock>
      </InfoPanel>
      <MapPanel>
        <iframe
          src={mapSrc}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location"
        ></iframe>
      </MapPanel>
    </Section>
  );
}
