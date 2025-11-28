import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the rainbow text animation
const rainbowTextAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Styled Components
const HeroSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
  padding: 2rem 1rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const AnimatedTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #4f46e5, #d627c3, #ff6b00, #4f46e5);
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${rainbowTextAnimation} 5s ease infinite;
`;

const HeroHeading = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #0d6efd;
  margin-bottom: 1rem;
`;

const HeroTagline = styled.p`
  font-size: 1.125rem;
  color: #555;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.a`
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #0d6efd;
  color: white;

  &:hover {
    background-color: #0b5ed7;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: #e9ecef;
  color: #333;
  border: 1px solid #dee2e6;

  &:hover {
    background-color: #d3d9df;
  }
`;

// The Component
const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <HeroContent>
        <AnimatedTitle>G Business Support</AnimatedTitle>
        <HeroHeading>
          Powering Growth for Businesses in Digital First World
        </HeroHeading>
        <HeroTagline>
          Smarter Advertising. Seamless Support. One team to manage your
          marketing, development, and backend needs.
        </HeroTagline>
        <ButtonContainer>
          <PrimaryButton href="/services">Explore Services</PrimaryButton>
          <SecondaryButton href="/careers">Apply to Join Us</SecondaryButton>
        </ButtonContainer>
      </HeroContent>
    </HeroSectionContainer>
  );
};

export default HeroSection;

