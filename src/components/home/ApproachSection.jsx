import React from 'react';
import styled from 'styled-components';
// Importing suitable icons from react-icons
import { HiOutlineShieldCheck, HiOutlineViewGrid, HiOutlineUsers } from 'react-icons/hi';

// --- Styled Components Definitions ---

const media = { md: `@media (min-width: 768px)` };

const Section = styled.section`
  max-width: 80rem;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

// Container for the top part (heading + paragraph)
const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  ${media.md} {
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
  }
`;

// Left side of the top container
const HeadingContainer = styled.div`
  flex: 1;
`;

// Right side of the top container
const ParagraphContainer = styled.div`
  flex: 1;
  padding-top: 2rem; /* Aligns paragraph with bottom of heading */
`;

const SectionSubheading = styled.h2`
  font-size: 0.875rem; /* text-sm */
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #374151;
`;

const SectionHeading = styled.h3`
  font-size: 2.25rem; /* text-4xl */
  font-weight: 700;
  line-height: 1.2;
`;

const Paragraph = styled.p`
  color: #4b5563; /* text-gray-600 */
  line-height: 1.6;
`;

// Grid container for the feature cards
const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  ${media.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// A single feature card
const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Changed to left-align items */
  text-align: left;
`;

const IconWrapper = styled.div`
  font-size: 2rem; /* Larger icon size */
  margin-bottom: 1rem;
  color: #1f2937;
`;

const CardTitle = styled.h4`
  font-weight: 700;
  font-size: 1.25rem; /* text-xl */
  margin-bottom: 0.75rem;
  line-height: 1.4;
`;

const CardText = styled.p`
  color: #4b5563;
  font-size: 1rem;
`;

// Container for the buttons at the bottom
const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 4rem;
`;

const DiscoverButton = styled.a`
  border: 1px solid #e5e7eb;
  padding: 0.5rem 1.25rem;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  color: #374151;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f9fafb;
  }
`;

const ConnectLink = styled.a`
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  color: #374151;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

// --- The ApproachSection Component ---

export default function ApproachSection() {
  const features = [
    {
      icon: <HiOutlineShieldCheck />,
      title: 'Our Five-Level Career Development Program',
      text: 'Your journey with us is a personal one. We provide tailored coaching to help you master each stage of your development and advance based on your performance.',
    },
    {
      icon: <HiOutlineViewGrid />,
      title: 'A Career Path Molded to Your Strengths',
      text: 'We dont believe in rigid job descriptions. Your responsibilities will expand as you develop, offering you fresh opportunities in training, team leadership, and management.',
    },
    {
      icon: <HiOutlineUsers />,
      title: 'Guidance from Proven Leaders',
      text: 'We believe that we only succeed when you succeed. Our entire team is here to share knowledge, celebrate wins, and support you through challenges.',
    },
  ];

  return (
    <Section>
      <TopContainer>
        <HeadingContainer>
          <SectionSubheading>Streamlined</SectionSubheading>
          <SectionHeading>
            How We Shape<br /> Future Leaders
          </SectionHeading>
        </HeadingContainer>
        <ParagraphContainer>
          <Paragraph>
            We believe the best way to learn is by doing. From day one, you'll be on the front lines, gaining direct experience with clients, leading campaigns, and mastering the art of face-to-face communication. Our environment is fast-paced and performance-driven, meaning your progress is tied directly to your effort and results, not just time served.
          </Paragraph>
        </ParagraphContainer>
      </TopContainer>

      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <IconWrapper>{feature.icon}</IconWrapper>
            <CardTitle>{feature.title}</CardTitle>
            <CardText>{feature.text}</CardText>
          </FeatureCard>
        ))}
      </FeaturesGrid>

      {/* <ButtonContainer>
        <DiscoverButton href="#">Discover</DiscoverButton>
        <ConnectLink href="#">Connect &gt;</ConnectLink>
      </ButtonContainer> */}
    </Section>
  );
}
