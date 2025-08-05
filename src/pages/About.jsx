import React from 'react';
import { useNavigate } from 'react-router-dom'; // Step 1: Import useNavigate
import styled from 'styled-components';
import founderImage from '../assets/pic.jpg';

// --- Styled Components Definition ---

const AboutContainer = styled.div`
  max-width: 1152px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
`;

const FounderSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const TextColumn = styled.div`
  flex: 3;
`;

const ImageColumn = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FounderImage = styled.img`
  border-radius: 0.5rem;
  width: 100%;
  max-width: 24rem;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4); /* Corrected: Using the last-defined shadow */

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const MainHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ea580c;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const SubHeading = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.75rem;
`;

const Paragraph = styled.p`
  color: #374151;
  line-height: 1.75;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Quote = styled(Paragraph)`
  font-style: italic;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const StyledButton = styled.button`
  color: white;
  font-weight: 700;
  padding: 0.75rem 2.5rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  }
`;

// Step 2: Renamed ApplyButton to ContactButton for clarity
const ContactButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #2dd4bf, #0891b2);
  
  &:hover {
    background-image: linear-gradient(to right, #14b8a6, #0e7490);
  }
`;

const GalleryButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #facc15, #f97316);
  
  &:hover {
    background-image: linear-gradient(to right, #eab308, #ea580c);
  }
`;

// --- The React Component ---

function About() {
  const navigate = useNavigate(); // Step 3: Initialize the navigate function

  return (
    <AboutContainer>
      {/* Top Section: Founder Info + Image */}
      <FounderSection>
        <TextColumn>
          <MainHeading>
            FOUNDER : Mr. Sakthi
          </MainHeading>
          <Paragraph>
            Mr. Sakthi, the founder of Stars Management, completed his engineering degree but chose to take a different path. Rather than pursuing a conventional software job, he followed his ambition to become his own boss and build something meaningful from the ground up.
          </Paragraph>
          <Paragraph>
            An early opportunity in marketing and sales gave him the platform to explore his entrepreneurial potential, which led to the founding of Stars Management in September 2015 in Bangalore.
          </Paragraph>
          <Paragraph>
            The company was built with a strong vision: to create opportunities for young graduates and postgraduates from all fields by offering real-time business exposure, skill development, and a clear path to grow into future entrepreneurs and leaders.
          </Paragraph>
          <Paragraph>
            Inspired by his journey, many other young professionals—from engineering, commerce, arts, and other backgrounds—joined hands with him, becoming key contributors to the organization's growth and success.
          </Paragraph>
        </TextColumn>
        <ImageColumn>
          <FounderImage 
            src={founderImage} 
            alt="Mr. Sakthi, Founder of Stars Management" 
          />
        </ImageColumn>
      </FounderSection>

      {/* Who We Are Section */}
      <Section>
        <SubHeading>Who We Are</SubHeading>
        <Quote>
          “Opportunities don't happen. You create them.” – Chris Grosser
        </Quote>
        <Paragraph>
          This belief is the driving force behind Stars Management, established in September 2015 with a vision to redefine the landscape of sales, marketing, and professional development in India. Over the years, we’ve evolved into one of the most dynamic and forward-thinking companies, known for our innovative strategies and growth-driven environment.
        </Paragraph>
        <Paragraph>
          Stars Management is a pioneer in outsourced sales and marketing solutions, working with some of the most prestigious brands across various sectors. But our true strength lies in people development. We don’t just build businesses—we build leaders and entrepreneurs.
        </Paragraph>
        <Paragraph>
            Our mission is to provide a fertile and inspiring platform for young, passionate individuals to launch their professional journeys. Through structured mentorship, performance-driven training, and real-world experience, we shape raw talent into confident, independent professionals ready to make their mark.
        </Paragraph>
        <Paragraph>
            At Stars Management, we place people before profits, believing that when our people grow, the business grows too. Join us and be a part of a culture that celebrates innovation, leadership, and limitless potential
        </Paragraph>
      </Section>

      {/* What We Do Section */}
      <Section>
        <SubHeading>What We Do</SubHeading>
        <Paragraph>
          At Stars Management, we empower graduates and postgraduates with structured opportunities to kickstart their careers and develop into future leaders. Our unique mentoring system and proven career growth model have been instrumental in shaping countless success stories since our inception.
        </Paragraph>
        <Paragraph>
          Our focus goes beyond just training—we believe in building careers through hands-on experience, leadership exposure, and a growth-oriented environment. Every individual undergoes a personalized development process that equips them with real-world business skills and confidence to excel.
        </Paragraph>
        <Paragraph>
            In addition to developing young talent, Stars Management delivers high-impact sales and marketing solutions for our clients. Our teams take client products and services directly to consumers, blending the effectiveness of personalized interaction with the power of trust-building communication.
        </Paragraph>
        <Paragraph>
            This face-to-face model doesn't just benefit clients—it provides our associates with first-hand exposure to dynamic market environments, customer behavior, and business strategy. The result? A win-win for both clients and the professionals who represent them.
        </Paragraph>
        <Paragraph>
            At Stars Management, we don't just offer jobs—we create journeys of growth, leadership, and entrepreneurial success.
        </Paragraph>
      </Section>

      {/* Step 4: Update buttons with onClick handlers and new text */}
      <ButtonContainer>
        <ContactButton onClick={() => navigate('/contact')}>Contact</ContactButton>
        <GalleryButton onClick={() => navigate('/gallery')}>Gallery</GalleryButton>
      </ButtonContainer>
    </AboutContainer>
  );
}

export default About;
