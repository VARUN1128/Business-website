import React from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { FaUsers, FaProjectDiagram, FaAward, FaChartLine, FaPaperPlane } from 'react-icons/fa';

// --- GLOBAL STYLES ---
// Injects global styles, such as body fonts, and CSS variables for our theme.
const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #6a11cb;
    --secondary-color: #2575fc;
    --text-color: #333;
    --light-text-color: #fff;
    --bg-color: #f4f7f6;
    --container-width: 1100px;
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: var(--text-color);
    line-height: 1.6;
    margin: 0;
  }
`;

// --- KEYFRAME ANIMATIONS ---
const zoomIn = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const slideInDown = keyframes`
  from { transform: translateY(-50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const slideInUp = keyframes`
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

// --- STYLED COMPONENTS ---

// Generic/Shared Components
const Container = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 20px;
`;

const Section = styled.section`
  padding: 6rem 0;
  background: ${({ bg }) => bg || '#fff'};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: ${({ light }) => (light ? 'var(--light-text-color)' : 'var(--text-color)')};
`;

const SectionDescription = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
  font-size: 1.1rem;
  color: #666;
`;

// 1. Hero Section
const HeroSectionStyled = styled(Section)`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--light-text-color);
  overflow: hidden;
  padding: 0;
`;

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1554672408-730436b60dde?q=80&w=2072&auto=format&fit=crop') center/cover no-repeat;
  animation: ${zoomIn} 20s ease-out infinite;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

const HeroHeadline = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  animation: ${slideInDown} 1s ease-out;
`;

const HeroSubheadline = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  animation: ${slideInUp} 1s ease-out;
`;

// 3. Services Section
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: #fff;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }
`;

// 4. Why Us Section
const WhyUsSectionStyled = styled(Section)`
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: var(--light-text-color);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const StatCard = styled.div`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px);
`;

const StatIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
`;

const StatLabel = styled.div`
  font-size: 1rem;
`;

// 5. Development Stages
const StagesTimeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background: linear-gradient(var(--primary-color), var(--secondary-color));
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
  }
`;

const StageItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  left: ${({ side }) => (side === 'right' ? '50%' : '0')};
`;

const StageNumber = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  line-height: 50px;
  right: ${({ side }) => (side === 'left' ? '-25px' : 'auto')};
  left: ${({ side }) => (side === 'right' ? '-25px' : 'auto')};
  top: 15px;
  background: #fff;
  border: 4px solid var(--primary-color);
  border-radius: 50%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  z-index: 1;
`;

const StageContent = styled.div`
  padding: 20px 30px;
  background: var(--bg-color);
  border-radius: 6px;
  position: relative;
`;

// 6. Contact Form
const ContactForm = styled.form`
  max-width: 700px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  border: none;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: var(--light-text-color);
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

// --- MAIN COMPONENT ---

const Industry = () => {
  return (
    <>
      <GlobalStyle />
      {/* 1. Hero Section */}
      <HeroSectionStyled>
        <HeroImage />
        <HeroOverlay />
        <HeroContent>
          <HeroHeadline>Innovating for a Digital Tomorrow</HeroHeadline>
          <HeroSubheadline>We build powerful, scalable, and elegant software solutions that drive business growth across all industries.</HeroSubheadline>
        </HeroContent>
      </HeroSectionStyled>

      {/* 2. Intro/About Section */}
      <Section>
        <Container>
          <SectionTitle>Your Vision, Engineered</SectionTitle>
          <SectionDescription>
            We are a team of passionate developers, designers, and strategists dedicated to crafting exceptional digital experiences. From initial concept to final deployment, we partner with you to transform your ideas into reality, ensuring every detail is perfected and every goal is met.
          </SectionDescription>
        </Container>
      </Section>

      {/* 3. Industry Development Services */}
      <Section bg="var(--bg-color)">
        <Container>
          <SectionTitle>Industry Development Services</SectionTitle>
          <ServicesGrid>
            <ServiceCard>
              <h3>Custom Software</h3>
              <p>Tailored solutions designed to meet your unique business challenges and goals.</p>
            </ServiceCard>
            <ServiceCard>
              <h3>Web & Mobile Apps</h3>
              <p>Engaging and responsive applications for seamless user experiences on any device.</p>
            </ServiceCard>
            <ServiceCard>
              <h3>Cloud & DevOps</h3>
              <p>Scalable infrastructure and automated workflows to accelerate your growth.</p>
            </ServiceCard>
          </ServicesGrid>
        </Container>
      </Section>

      {/* 4. Why Us Section */}
      <WhyUsSectionStyled>
        <Container>
          <SectionTitle light>Why Partner With Us?</SectionTitle>
          <StatsGrid>
            <StatCard>
              <StatIcon><FaUsers /></StatIcon>
              <StatNumber>10+</StatNumber>
              <StatLabel>Years of Experience</StatLabel>
            </StatCard>
            <StatCard>
              <StatIcon><FaProjectDiagram /></StatIcon>
              <StatNumber>500+</StatNumber>
              <StatLabel>Projects Delivered</StatLabel>
            </StatCard>
            <StatCard>
              <StatIcon><FaAward /></StatIcon>
              <StatNumber>75+</StatNumber>
              <StatLabel>Industry Awards</StatLabel>
            </StatCard>
            <StatCard>
              <StatIcon><FaChartLine /></StatIcon>
              <StatNumber>$15M+</StatNumber>
              <StatLabel>Revenue Generated</StatLabel>
            </StatCard>
          </StatsGrid>
        </Container>
      </WhyUsSectionStyled>

      {/* 5. Development Stages */}
      <Section>
        <Container>
          <SectionTitle>Our Development Lifecycle</SectionTitle>
          <StagesTimeline>
            <StageItem side="left">
              <StageNumber side="left">1</StageNumber>
              <StageContent><h3>Planning & Analysis</h3><p>We start by understanding your vision and defining the project scope and requirements.</p></StageContent>
            </StageItem>
            <StageItem side="right">
              <StageNumber side="right">2</StageNumber>
              <StageContent><h3>Design & Prototyping</h3><p>Our team creates intuitive UI/UX designs and interactive prototypes for your approval.</p></StageContent>
            </StageItem>
            <StageItem side="left">
              <StageNumber side="left">3</StageNumber>
              <StageContent><h3>Development</h3><p>We write clean, efficient code to build a robust and scalable product.</p></StageContent>
            </StageItem>
            <StageItem side="right">
              <StageNumber side="right">4</StageNumber>
              <StageContent><h3>Testing & QA</h3><p>Rigorous testing ensures your software is bug-free, secure, and performs flawlessly.</p></StageContent>
            </StageItem>
            <StageItem side="left">
              <StageNumber side="left">5</StageNumber>
              <StageContent><h3>Deployment & Maintenance</h3><p>We manage the launch and provide ongoing support to ensure long-term success.</p></StageContent>
            </StageItem>
          </StagesTimeline>
        </Container>
      </Section>

      {/* 6. Contact Form */}
      <Section bg="var(--bg-color)">
        <Container>
          <SectionTitle>Let's Build Together</SectionTitle>
          <ContactForm>
            <FormGroup>
              <Input type="text" name="name" placeholder="Your Name" required />
              <Input type="email" name="email" placeholder="Your Email" required />
            </FormGroup>
            <Textarea name="message" placeholder="Your Message" rows="6" required></Textarea>
            <SubmitButton type="submit">
              Send Message <FaPaperPlane />
            </SubmitButton>
          </ContactForm>
        </Container>
      </Section>
    </>
  );
};

export default Industry;
