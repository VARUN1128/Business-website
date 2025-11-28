import React from 'react';
import styled from 'styled-components';

// --- Styled Components ---

const ServicesWrapper = styled.section`
  padding: 80px 20px;
  background-color: #f8f9fa;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #212529;
  margin-bottom: 50px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
`;

const CardContent = styled.div`
  padding: 24px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #343a40;
  margin: 0;
`;

// --- Component ---

// Service data can be easily updated here
const servicesData = [
  {
    title: 'Google Ads',
    imageUrl: '..\assets\Banking.png', // Replace with your image path
  },
  {
    title: 'Google My Business',
    imageUrl: 'https://i.imgur.com/dYR22mF.png', // Replace with your image path
  },
  {
    title: 'Social Media Marketing',
    imageUrl: 'https://i.imgur.com/0z5pVEb.png', // Replace with your image path
  },
  {
    title: 'Banking and Insurance',
    imageUrl: 'https://i.imgur.com/fplWkFw.png', // Replace with your image path
  },
];

const CoreServices = () => {
  return (
    <ServicesWrapper>
      <SectionTitle>Our Core Services</SectionTitle>
      <ServicesGrid>
        {servicesData.map((service, index) => (
          <ServiceCard key={index}>
            <CardImage src={service.imageUrl} alt={service.title} />
            <CardContent>
              <CardTitle>{service.title}</CardTitle>
            </CardContent>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesWrapper>
  );
};

export default CoreServices;
