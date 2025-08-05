// src/pages/Services.jsx

import React from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

// Image Imports (assuming they are correct)
import service360 from '../assets/360_view.png';
import appDevelopment from '../assets/app_development.png';
import webDesign from '../assets/web_design.jpg';
import webDevelopment from '../assets/Web-Development.jpeg';
import logoDesign from '../assets/logo_design.png';
import clientICICI from '../assets/ICICI-Bank.jpg';
import clientIDFC from '../assets/IDFC_bank.png';
import clientIndusInd from '../assets/indusInd_bank.jpg';
import clientEquitas from '../assets/equitas.png';
import clientAxis from '../assets/axis_bank.jpg';
import clientBhartiAxa from '../assets/bharti_axa.jpg';
import clientTataAIG from '../assets/tata_AIG.png';

// --- Styled Components Definitions ---

const ServicesContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  overflow-x: hidden;
`;

const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const MainHeading = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  color: #F97316; /* Orange color */
  margin-bottom: 0.5rem;
`;

const Subheading = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
`;

const RowContainer = styled.div`
  margin-bottom: 3rem;
`;

const ServiceTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1.5rem;
  text-align: center;
`;

// --- UPDATED: Styled component for the slide itself ---
const StyledSwiperSlide = styled(SwiperSlide)`
  background-color: #ffffff; // Use your page's background color, e.g., white
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ServiceImage = styled.img`
  width: 100%;
  max-width: 250px; // Set a max-width to control logo size
  height: 12rem;
  object-fit: contain; // Ensures the entire logo is visible without distortion
  border-radius: 0.5rem;
  cursor: pointer;
`;

// Data Structure (unchanged)
const servicesData = [
  {
    title: "Website Design & Development",
    images: [webDevelopment, appDevelopment, webDesign, service360, logoDesign]
  },
  {
    title: "Banking",
    images: [clientICICI, clientIDFC, clientIndusInd, clientAxis, clientEquitas]
  },
  {
    title: "Insurance",
    images: [clientBhartiAxa, clientTataAIG]
  }
];

// Reusable ServiceRow component
function ServiceRow({ title, images }) {
  return (
    <RowContainer>
      <ServiceTitle>{title}</ServiceTitle>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        // --- THIS IS THE FIX ---
        fadeEffect={{
          crossFade: true 
        }}
        // ----------------------
        loop={true}
        slidesPerView={1}
        speed={1000}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      >
        {images.map((img, index) => (
          // Use the new styled slide component
          <StyledSwiperSlide key={index}>
            <ServiceImage 
              src={img} 
              alt={`${title} example ${index + 1}`}
            />
          </StyledSwiperSlide>
        ))}
      </Swiper>
    </RowContainer>
  );
}

// Main Services Page Component
export default function Services() {
  return (
    <ServicesContainer>
      <HeaderWrapper>
        <MainHeading>What We Build</MainHeading>
        <Subheading>
          We don't just fill jobs; we build futures. Our mission is to transform ambitious graduates into confident entrepreneurs through dedicated mentorship and real-world results.
        </Subheading>
      </HeaderWrapper>
      <div>
        {servicesData.map((service) => (
          <ServiceRow 
            key={service.title} 
            title={service.title} 
            images={service.images} 
          />
        ))}
      </div>
    </ServicesContainer>
  );
}
