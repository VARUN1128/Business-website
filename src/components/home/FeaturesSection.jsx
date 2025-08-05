import React from 'react';
import styled, { keyframes } from 'styled-components';

// Import the image you want to use for this section.
// Make sure to adjust the path to your actual image file.
import teamImage from '../../assets/career_map.jpg'; 

const media = { md: `@media (min-width: 768px)` };

// 1. Define the keyframes for the zoom-out animation
const zoomOut = keyframes`
  from {
    transform: scale(1.1);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

// --- Styled Components (Updated) ---

const Section = styled.section`
  max-width: 80rem;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  text-align: center;
`;

const SectionSubheading = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #2563eb; /* Added color for emphasis */
`;

const SectionHeading = styled.h3`
  font-size: 1.875rem; /* Increased size slightly */
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.3;
  ${media.md} {
    font-size: 2.25rem;
  }
`;

const CenteredParagraph = styled.p`
  color: #374151;
  max-width: 48rem;
  margin: 0 auto 3rem auto; /* Added more bottom margin */
  line-height: 1.7;
`;

// 2. Create a container for the new image to control its appearance
const ImageContainer = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  border-radius: 0.75rem; /* Soft rounded corners */
  overflow: hidden; /* Essential for the zoom effect to look clean */
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
`;

// 3. Create the animated image component
const AnimatedImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  animation: ${zoomOut} 1.2s ease-out forwards;
`;


// --- Main Component (Updated) ---

export default function FeaturesSection() {
  return (
    <Section>
      <SectionSubheading>A LAUNCHPAD FOR YOUR CAREER</SectionSubheading>
      <SectionHeading>
        Your Journey to Leadership Starts Here
      </SectionHeading>
      <CenteredParagraph>
        At Stars Management, we do more than offer jobs—we build careers. We provide ambitious graduates with a proven platform for success, combining structured mentorship with real-world, hands-on experience to transform your potential into leadership.
      </CenteredParagraph>
      
      {/* 4. Removed the CardGrid and replaced it with the single animated image */}
      <ImageContainer>
        <AnimatedImage src={teamImage} alt="Stars Management Team" />
      </ImageContainer>

    </Section>
  );
}
