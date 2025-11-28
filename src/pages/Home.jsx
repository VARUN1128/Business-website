import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroForm from '../components/HeroForm';
import Query from '../components/Query';
import heroVideo from '../assets/gbs.mp4';
import gaImg from '../assets/GA.png';
import gmbImg from '../assets/GMB.png';
import smmImg from '../assets/SMM.png';
import bankingImg from '../assets/Banking.png';
import digitalVideo from '../assets/digital.mp4';
import webVideo from '../assets/web.mp4';
import backendVideo from '../assets/backend.mp4';
import staffingVideo from '../assets/staffing.mp4';

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 6vw, 4rem);
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  border-radius: 0;
  overflow: hidden;
  background: #000;
  isolation: isolate;
  padding: clamp(2rem, 5vw, 4rem);
`;

const HeroVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.45) saturate(1.1);
  z-index: 0;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(2, 6, 23, 0.85), rgba(3, 7, 30, 0.4));
  z-index: 1;
`;

const HeroGrid = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(2rem, 4vw, 3rem);
  align-items: center;
  width: min(1400px, 100%);
  margin: 0 auto;
  padding: clamp(2rem, 4vw, 3.5rem);
`;

const HeroContent = styled.div`
  color: #f8fafc;
  max-width: 620px;
`;

const HeroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.08);
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.8rem, 5vw, 4rem);
  margin: 0 0 1.25rem;
  line-height: 1.15;
`;

const HeroParagraph = styled.p`
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  color: rgba(248, 250, 252, 0.85);
  margin-bottom: 2rem;
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ActionButton = styled(Link)`
  text-decoration: none;
  border-radius: 999px;
  padding: 0.85rem 1.8rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  border: 1px solid transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  color: ${props => (props.$variant === 'secondary' ? '#f8fafc' : '#fff')};
  background: ${props =>
    props.$variant === 'secondary'
      ? 'rgba(255, 255, 255, 0.08)'
      : 'linear-gradient(120deg, #6366f1, #a855f7, #ec4899)'};
  border-color: ${props => (props.$variant === 'secondary' ? 'rgba(255, 255, 255, 0.3)' : 'transparent')};
  box-shadow: ${props =>
    props.$variant === 'secondary'
      ? 'inset 0 1px 0 rgba(255, 255, 255, 0.15)'
      : '0 20px 45px rgba(99, 102, 241, 0.35)'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props =>
      props.$variant === 'secondary'
        ? 'inset 0 1px 0 rgba(255, 255, 255, 0.3)'
        : '0 30px 60px rgba(236, 72, 153, 0.4)'};
    background: ${props =>
      props.$variant === 'secondary'
        ? 'rgba(255, 255, 255, 0.15)'
        : 'linear-gradient(120deg, #818cf8, #a855f7, #f472b6)'};
  }
`;

const MetricsGrid = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
`;

const MetricCard = styled.div`
  padding: 1rem 1.2rem;
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const MetricLabel = styled.p`
  margin: 0 0 0.4rem;
  color: rgba(248, 250, 252, 0.7);
  font-size: 0.9rem;
`;

const MetricValue = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
`;

const FormColumn = styled.div`
  display: flex;
  justify-content: center;
`;

const Section = styled.section`
  width: min(1200px, 100%);
  margin: 0 auto;
  padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 2.5rem);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: clamp(2rem, 4vw, 3rem);
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  margin: 0 0 1rem;
`;

const SectionLead = styled.p`
  margin: 0 auto;
  max-width: 640px;
  color: var(--text-muted);
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: clamp(1.5rem, 3vw, 2.5rem);

  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const ServiceCard = styled.button`
  background: rgba(8, 12, 33, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  padding: 1.25rem;
  text-align: left;
  cursor: pointer;
  color: var(--text-primary);
  transition: transform 0.25s ease, border-color 0.25s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 25px 50px rgba(2, 6, 23, 0.45);

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(124, 58, 237, 0.5);
  }

  img {
    width: 100%;
    height: 160px;
    object-fit: contain;
    border-radius: 16px;
    background: rgba(15, 23, 42, 0.4);
    padding: 0.75rem;
  }

  span {
    font-weight: 600;
  }
`;

const TrustedPills = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`;

const Pill = styled.span`
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  font-size: 0.85rem;
  color: var(--text-secondary);
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: clamp(1.5rem, 3vw, 2.5rem);

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const VideoCard = styled.button`
  border: none;
  background: rgba(8, 12, 33, 0.85);
  border-radius: 22px;
  padding: 0;
  text-align: left;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow-md);
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(14, 165, 233, 0.5);
  }

  video {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    display: block;
  }

  h3 {
    margin: 0;
    padding: 1.25rem 1.5rem;
    font-size: 1.1rem;
    color: var(--accent-3);
  }
`;

const ChooseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const ChooseCard = styled.div`
  padding: 1.5rem;
  border-radius: 22px;
  background: rgba(8, 12, 33, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  span {
    font-size: 1.8rem;
  }

  h3 {
    margin: 0;
    font-size: 1.1rem;
  }

  p {
    margin: 0;
    color: var(--text-muted);
  }
`;

const ContactSection = styled.section`
  width: min(1200px, 100%);
  margin: 0 auto;
  padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 2.5rem);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(1.5rem, 4vw, 2.5rem);

  @media (min-width: 720px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
`;

const MapCard = styled.div`
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow-md);

  iframe {
    width: 100%;
    height: 100%;
    min-height: 340px;
    border: none;
  }
`;

const ContactCard = styled.div`
  border-radius: 24px;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  background: rgba(8, 12, 33, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  p {
    margin: 0;
    color: var(--text-secondary);
    line-height: 1.7;
  }

  strong {
    color: white;
  }

  a {
    color: var(--accent-2);
    font-weight: 600;
  }
`;

const coreServicesData = [
  { img: gaImg, tag: 'Google Ads' },
  { img: gmbImg, tag: 'Google My Business' },
  { img: smmImg, tag: 'Social Media Marketing' },
  { img: bankingImg, tag: 'Banking and Insurance' },
];

const chooseUsData = [
  { icon: '🎯', title: 'Data-Driven Results', text: 'We use analytics and insights to craft strategies that deliver measurable ROI and continuous growth.' },
  { icon: '🤝', title: 'Your Extended Team', text: 'Consider us a seamless extension of your business. We integrate with your goals to provide dedicated support.' },
  { icon: '💡', title: 'Innovative Solutions', text: 'From custom web development to automated backend systems, we leverage modern tech to solve your biggest challenges.' },
];

const videoServicesData = [
  { video: digitalVideo, title: 'Digital Marketing' },
  { video: webVideo, title: 'Web Development' },
  { video: backendVideo, title: 'Backend Solutions' },
  { video: staffingVideo, title: 'Outsourced Staffing' },
];

export default function Home() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isQueryOpen, setIsQueryOpen] = useState(false);
  const [defaultService, setDefaultService] = useState('');

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
    const timer = setTimeout(() => setIsFormVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const openQuery = (serviceName) => {
    setDefaultService(serviceName || '');
    setIsQueryOpen(true);
  };

  return (
    <PageWrapper>
      <HeroSection>
        <HeroVideo autoPlay loop muted playsInline>
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </HeroVideo>
        <HeroOverlay />

        <HeroGrid>
          <HeroContent data-aos="fade-up">
            <HeroBadge>Trusted Delivery Partner</HeroBadge>
            <HeroTitle>Powering Growth for Businesses in a Digital-First World</HeroTitle>
            <HeroParagraph>
              Smarter Advertising. Seamless Support. One team to manage your marketing, development, and backend needs.
            </HeroParagraph>
            <HeroActions>
              <ActionButton to="/services" $variant="primary">Explore Services</ActionButton>
              <ActionButton to="/careers" $variant="secondary">Apply to Join Us</ActionButton>
            </HeroActions>

            <MetricsGrid>
              <MetricCard>
                <MetricLabel>Marketing & Media</MetricLabel>
                <MetricValue>Google Ads · SMM · GMB</MetricValue>
              </MetricCard>
              <MetricCard>
                <MetricLabel>Technology</MetricLabel>
                <MetricValue>Web · Backend · Automation</MetricValue>
              </MetricCard>
              <MetricCard>
                <MetricLabel>People Ops</MetricLabel>
                <MetricValue>Staffing · Consulting</MetricValue>
              </MetricCard>
            </MetricsGrid>
          </HeroContent>

          <FormColumn data-aos="fade-up" data-aos-delay="150">
            {isFormVisible && <HeroForm />}
          </FormColumn>
        </HeroGrid>
      </HeroSection>

      <Section>
        <SectionHeader>
          <div className="eyebrow">Capabilities</div>
          <SectionTitle>Our Core Services</SectionTitle>
          <SectionLead>Tap into a multi-disciplinary team that blends creative, performance, engineering, and operations — all under one roof.</SectionLead>
          <TrustedPills>
            {coreServicesData.map(service => (
              <Pill key={service.tag}>{service.tag}</Pill>
            ))}
          </TrustedPills>
        </SectionHeader>

        <ServiceGrid>
          {coreServicesData.map((service, index) => (
            <ServiceCard
              key={service.tag}
              data-aos="zoom-in"
              data-aos-delay={index * 80}
              onClick={() => openQuery(service.tag)}
            >
              <img src={service.img} alt={service.tag} loading="lazy" />
              <span>{service.tag}</span>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </Section>

      <Section>
        <SectionHeader>
          <div className="eyebrow">Workflows</div>
          <SectionTitle>Integrated Delivery Pods</SectionTitle>
          <SectionLead>Each pod blends strategy + execution with specialists in paid media, design, development, and operations.</SectionLead>
        </SectionHeader>

        <VideoGrid>
          {videoServicesData.map((service, index) => (
            <VideoCard
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => openQuery(service.title)}
            >
              <video src={service.video} autoPlay muted loop playsInline />
              <h3>{service.title}</h3>
            </VideoCard>
          ))}
        </VideoGrid>
      </Section>

      <Section>
        <SectionHeader>
          <div className="eyebrow">Why Choose Us</div>
          <SectionTitle>One Partner. Full Accountability.</SectionTitle>
        </SectionHeader>
        <ChooseGrid>
          {chooseUsData.map((item, index) => (
            <ChooseCard key={item.title} data-aos="fade-up" data-aos-delay={index * 120}>
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </ChooseCard>
          ))}
        </ChooseGrid>
      </Section>

      <ContactSection>
        <SectionHeader>
          <div className="eyebrow">Visit or Write</div>
          <SectionTitle>Made in Bengaluru. Delivering Everywhere.</SectionTitle>
        </SectionHeader>
        <ContactGrid>
          <MapCard data-aos="fade-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6875.182016351996!2d77.594434!3d12.960739!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae157cac816635%3A0x7395ecc6efc06d65!2sLEGACY%20Incorp._G%20Business%20Support!5e1!3m2!1sen!2sin!4v1755613259859!5m2!1sen!2sin"
              title="G Business Support Location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </MapCard>

          <ContactCard data-aos="fade-left">
            <p>
              <strong>Address</strong><br />
              Richmond Circle, 301, 3rd Floor, Andree Capitol Building Behind Axis Bank, Doule Road, Kengal Hanumanthaiah Rd, Shanti Nagar, Bengaluru, Karnataka 560027
            </p>
            <p>
              <strong>Phone:</strong> +91 9071861881
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:hrdlegacy@gmail.com">hrdlegacy@gmail.com</a>
            </p>
            <p>
              <strong>WhatsApp:</strong> <a href="https://wa.me/918310312791" target="_blank" rel="noopener noreferrer">Chat Now</a>
            </p>
          </ContactCard>
        </ContactGrid>
      </ContactSection>

      <Query
        isOpen={isQueryOpen}
        onClose={() => setIsQueryOpen(false)}
        defaultService={defaultService}
        waNumber="918920229784"
      />
    </PageWrapper>
  );
}
