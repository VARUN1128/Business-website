import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import web1 from '../assets/web1.png';
import web2 from '../assets/web2.png';
import web3 from '../assets/web3.png';
import logo1 from '../assets/logo1.jpg';
import logo2 from '../assets/logo2.jpeg';
import logo3 from '../assets/logo3.jpeg';
import food1 from '../assets/food1.jpg';
import food2 from '../assets/food2.jpg';
import food3 from '../assets/food3.jpg';
import pro1 from '../assets/pro1.jpg';
import pro2 from '../assets/pro2.jpg';
import pro3 from '../assets/pro3.jpg';
import pro4 from '../assets/pro4.jpg';
import pro5 from '../assets/pro5.jpg';
import pro6 from '../assets/pro6.jpg';
import pro7 from '../assets/pro7.jpg';
import pro8 from '../assets/pro8.jpg';
import pro9 from '../assets/pro9.jpg';
import pro10 from '../assets/pro10.jpg';
import pro11 from '../assets/pro11.jpg';

const scrollLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const Page = styled.main`
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 6vw, 5rem);
  padding: clamp(2rem, 5vw, 4rem) 0;
`;

const Section = styled.section`
  width: 100%;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: clamp(2rem, 4vw, 3rem);
`;

const Title = styled.h2`
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  margin: 0 0 1rem;
`;

const Lead = styled.p`
  margin: 0 auto;
  max-width: 720px;
  color: var(--text-muted);
`;

const TreeContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(2rem, 4vw, 4rem) 0;
  overflow-x: auto;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 2rem 0;
  }
`;

const RootNode = styled.div`
  position: relative;
  padding: clamp(1.5rem, 3vw, 2rem) clamp(2.5rem, 5vw, 4rem);
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
  border-radius: 24px;
  color: white;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  box-shadow: 0 15px 50px rgba(99, 102, 241, 0.35);
  margin-bottom: clamp(4rem, 7vw, 6rem);
  z-index: 3;
  text-align: center;
  letter-spacing: -0.02em;
`;

const VerticalLine = styled.div`
  position: absolute;
  width: 3px;
  height: clamp(4rem, 7vw, 6rem);
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.4), rgba(99, 102, 241, 0.1));
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

const TreeBranch = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(3rem, 5vw, 4rem);
`;

const ServiceRow = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(1.5rem, 3vw, 2.5rem);
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 2;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const HorizontalConnector = styled.div`
  position: absolute;
  height: 3px;
  width: ${props => props.width || '100%'};
  background: linear-gradient(90deg, 
    rgba(99, 102, 241, 0.1) 0%, 
    rgba(99, 102, 241, 0.3) 50%, 
    rgba(99, 102, 241, 0.1) 100%
  );
  top: ${props => props.top || '-2rem'};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: ${props => props.branchHeight || '2rem'};
    background: linear-gradient(180deg, rgba(99, 102, 241, 0.3), transparent);
    top: 0;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

const ServiceCard = styled.div`
  position: relative;
  padding: clamp(2rem, 3vw, 2.5rem);
  border-radius: 28px;
  border: 2px solid rgba(99, 102, 241, 0.15);
  background: #ffffff;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: left;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: -2.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 2.5rem;
    background: linear-gradient(180deg, rgba(99, 102, 241, 0.4), rgba(99, 102, 241, 0.1));
    z-index: 1;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 60px rgba(99, 102, 241, 0.25);
    border-color: rgba(99, 102, 241, 0.5);
  }

  img {
    width: 64px;
    height: 64px;
    object-fit: contain;
    border-radius: 16px;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
    padding: 0.75rem;
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
  }

  h3 {
    margin: 0;
    font-size: clamp(1.25rem, 2vw, 1.5rem);
    font-weight: 700;
    color: var(--text-primary);
    line-height: 1.3;
  }

  p {
    margin: 0;
    color: var(--text-secondary);
    line-height: 1.7;
    font-size: clamp(0.95rem, 1.3vw, 1.05rem);
  }
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: clamp(1.5rem, 3vw, 2.5rem);

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const MediaCard = styled.a`
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #ffffff;
  box-shadow: var(--shadow-lg);
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-6px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const SquareGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1.5rem, 3vw, 2.5rem);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  justify-items: center;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const SquareCard = styled.div`
  width: 100%;
  max-width: 380px;
  aspect-ratio: 1 / 1;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #ffffff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
    border-color: rgba(99, 102, 241, 0.2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const TourGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: clamp(1.5rem, 3vw, 2.5rem);

  @media (max-width: 600px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const TourFrame = styled.div`
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow-md);

  iframe {
    width: 100%;
    height: 320px;
    border: none;
  }
`;

const SliderWrapper = styled.div`
  position: relative;
  border-radius: 28px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  overflow: hidden;
  background: #f8fafc;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 140px;
    pointer-events: none;
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(90deg, #f8fafc, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(270deg, #f8fafc, transparent);
  }
`;

const SliderTrack = styled.div`
  display: flex;
  width: max-content;
  gap: 1rem;
  animation: ${scrollLeft} 40s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const SliderImage = styled.img`
  width: 280px;
  height: 200px;
  object-fit: cover;
  border-radius: 20px;
`;

const services = [
  { icon: 'https://img.icons8.com/?size=100&id=7Xdye3V7xiD1&format=png&color=ffffff', title: 'Google Ads', desc: 'Maximize your ROI with targeted Google Ads campaigns. We optimize your ad spend, improve click-through rates, and drive qualified leads to your business.' },
  { icon: 'https://img.icons8.com/?size=100&id=A2QHRB6UBpA6&format=png&color=ffffff', title: 'Google My Business', desc: 'Boost your local visibility and attract nearby customers. We optimize your GMB profile, manage reviews, and improve your local search rankings.' },
  { icon: 'https://img.icons8.com/?size=100&id=7Xdye3V7xiD1&format=png&color=ffffff', title: 'Social Media Marketing', desc: 'Engage your audience across Facebook, Instagram, LinkedIn, and more. We create compelling content, manage communities, and drive social conversions.' },
  { icon: 'https://img.icons8.com/?size=100&id=A2QHRB6UBpA6&format=png&color=ffffff', title: 'Banking and Insurance', desc: 'Specialized digital marketing solutions for banking and insurance sectors. Compliance-focused campaigns that build trust and drive customer acquisition.' },
  { icon: 'https://img.icons8.com/?size=100&id=7Xdye3V7xiD1&format=png&color=ffffff', title: 'Digital Marketing', desc: 'Run effective campaigns on Google, Facebook, and Instagram with detailed performance tracking and optimization.' },
  { icon: 'https://img.icons8.com/?size=100&id=A2QHRB6UBpA6&format=png&color=ffffff', title: 'Web Development', desc: 'We build clean, fast, and responsive websites — custom-coded or WordPress-based — tailored to your brand.' },
  { icon: 'https://img.icons8.com/?size=100&id=Zh3EQfzwFUbT&format=png&color=ffffff', title: 'Backend Solutions', desc: 'Automate your workflows and manage client data securely with lightweight CRM tools and backend integrations.' },
  { icon: 'https://img.icons8.com/?size=100&id=LRA7sc7gTMQu&format=png&color=ffffff', title: 'Outsourced Staffing', desc: 'Get trained associates, interns, and project teams to support marketing, operations, or development tasks.' },
];

const websites = [
  { href: 'https://brightinc.co.in/', imgSrc: web1 },
  { href: 'https://sminstitute.co.in/', imgSrc: web2 },
  { href: 'https://starsmanagement.in/', imgSrc: web3 },
];

const tours = [
  'https://www.google.com/maps/embed?pb=!4v1752155651634!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0hqYTJzeEFF!2m2!1d55.95341976325786!2d-3.195545508168915!3f145.97679346403055!4f0.2326694866455341!5f1.9137695287847554',
  'https://www.google.com/maps/embed?pb=!4v1752155555928!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRFI1dlhzVUE.!2m2!1d12.99104018573691!2d77.688115133016!3f287.59187801904255!4f-6.099165607686956!5f0.4000000000000002',
  'https://www.google.com/maps/embed?pb=!4v1752155737336!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDRpNHlTWWc.!2m2!1d12.93494536602734!2d77.62287987665377!3f352.73080475325946!4f-6.726554724519843!5f0.4000000000000002',
  'https://www.google.com/maps/embed?pb=!4v1752156547265!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRHJfZjdDbHdF!2m2!1d13.0645354890681!2d77.63333021300964!3f277.8942663753982!4f-5.250173869931672!5f0.4000000000000002',
];

const logos = [logo1, logo2, logo3];
const foods = [food1, food2, food3];
const products = [pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8, pro9, pro10, pro11];
const duplicatedProducts = [...products, ...products];

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Page>
      <Section>
        <TreeContainer>
          <RootNode data-aos="fade-down">
            Our Services
            <VerticalLine />
          </RootNode>
          
          <TreeBranch>
            <ServiceRow>
              <HorizontalConnector top="-2.5rem" width="90%" branchHeight="2.5rem" />
              {services.slice(0, 4).map((service, index) => (
                <ServiceCard 
                  key={service.title} 
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                >
                  <img src={service.icon} alt={`${service.title} Icon`} loading="lazy" />
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </ServiceCard>
              ))}
            </ServiceRow>
            
            <ServiceRow>
              <HorizontalConnector top="-2.5rem" width="90%" branchHeight="2.5rem" />
              {services.slice(4).map((service, index) => (
                <ServiceCard 
                  key={service.title} 
                  data-aos="fade-up" 
                  data-aos-delay={(index + 4) * 100}
                >
                  <img src={service.icon} alt={`${service.title} Icon`} loading="lazy" />
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </ServiceCard>
              ))}
            </ServiceRow>
          </TreeBranch>
        </TreeContainer>
      </Section>

      <Section>
        <SectionHeader>
          <div className="eyebrow">Live Projects</div>
          <Title>Websites</Title>
        </SectionHeader>
        <MediaGrid>
          {websites.map((web, index) => (
            <MediaCard
              key={web.href}
              href={web.href}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay={index * 120}
            >
              <img src={web.imgSrc} alt={`Website screenshot ${index + 1}`} loading="lazy" />
            </MediaCard>
          ))}
        </MediaGrid>
      </Section>

      <Section>
        <SectionHeader>
          <div className="eyebrow">Virtual Tour View (360°)</div>
          <Title>Immersive Storytelling</Title>
        </SectionHeader>
        <TourGrid>
          {tours.map((tourSrc, index) => (
            <TourFrame key={tourSrc} data-aos="fade-up" data-aos-delay={index * 100}>
              <iframe title={`Virtual Tour ${index + 1}`} src={tourSrc} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
            </TourFrame>
          ))}
        </TourGrid>
      </Section>

      <Section>
        <SectionHeader>
          <div className="eyebrow">Design & Content</div>
          <Title>Logo Design</Title>
        </SectionHeader>
        <SquareGrid>
          {logos.map((src, index) => (
            <SquareCard key={src} data-aos="zoom-in" data-aos-delay={index * 90}>
              <img src={src} alt={`Logo design ${index + 1}`} loading="lazy" />
            </SquareCard>
          ))}
        </SquareGrid>
      </Section>

      <Section>
        <SectionHeader>
          <div className="eyebrow">Food Production</div>
          <Title>Food Photography</Title>
        </SectionHeader>
        <SquareGrid>
          {foods.map((src, index) => (
            <SquareCard key={src} data-aos="zoom-in" data-aos-delay={index * 90}>
              <img src={src} alt={`Food photography ${index + 1}`} loading="lazy" />
            </SquareCard>
          ))}
        </SquareGrid>
      </Section>

      <Section>
        <SectionHeader>
          <div className="eyebrow">Studios</div>
          <Title>Product & Service Photography</Title>
        </SectionHeader>
        <SliderWrapper>
          <SliderTrack>
            {duplicatedProducts.map((src, index) => (
              <SliderImage key={`${src}-${index}`} src={src} alt={`Product photography ${index + 1}`} loading="lazy" />
            ))}
          </SliderTrack>
        </SliderWrapper>
      </Section>
    </Page>
  );
};

export default ServicesPage;
