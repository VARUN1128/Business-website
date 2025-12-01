import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.jpeg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.png';
import p7 from '../assets/p7.png';
import p8 from '../assets/p8.jpg';

const slideLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

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
  filter: brightness(0.75) saturate(1.1);
  z-index: 0;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.25));
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
  color: #0f172a;
  max-width: 620px;
`;

const HeroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.9);
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.8rem, 5vw, 4rem);
  margin: 0 0 1.25rem;
  line-height: 1.15;
`;

const HeroParagraph = styled.p`
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  color: var(--text-secondary);
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
  color: ${props => (props.$variant === 'secondary' ? '#0f172a' : '#fff')};
  background: ${props =>
    props.$variant === 'secondary'
      ? '#ffffff'
      : 'linear-gradient(120deg, #6366f1, #a855f7, #ec4899)'};
  border-color: ${props => (props.$variant === 'secondary' ? 'rgba(0, 0, 0, 0.12)' : 'transparent')};
  box-shadow: ${props =>
    props.$variant === 'secondary'
      ? '0 2px 8px rgba(0, 0, 0, 0.06)'
      : '0 20px 45px rgba(99, 102, 241, 0.35)'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props =>
      props.$variant === 'secondary'
        ? '0 4px 12px rgba(0, 0, 0, 0.1)'
        : '0 30px 60px rgba(236, 72, 153, 0.4)'};
    background: ${props =>
      props.$variant === 'secondary'
        ? '#f8fafc'
        : 'linear-gradient(120deg, #818cf8, #a855f7, #f472b6)'};
  }
`;

const ActionButtonAsButton = styled.button`
  border-radius: 999px;
  padding: 0.85rem 1.8rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  border: 1px solid transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  color: ${props => (props.$variant === 'secondary' ? '#0f172a' : '#fff')};
  background: ${props =>
    props.$variant === 'secondary'
      ? '#ffffff'
      : 'linear-gradient(120deg, #6366f1, #a855f7, #ec4899)'};
  border-color: ${props => (props.$variant === 'secondary' ? 'rgba(0, 0, 0, 0.12)' : 'transparent')};
  box-shadow: ${props =>
    props.$variant === 'secondary'
      ? '0 2px 8px rgba(0, 0, 0, 0.06)'
      : '0 20px 45px rgba(99, 102, 241, 0.35)'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props =>
      props.$variant === 'secondary'
        ? '0 4px 12px rgba(0, 0, 0, 0.1)'
        : '0 30px 60px rgba(236, 72, 153, 0.4)'};
    background: ${props =>
      props.$variant === 'secondary'
        ? '#f8fafc'
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
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

const MetricLabel = styled.p`
  margin: 0 0 0.4rem;
  color: var(--text-muted);
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
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 22px;
  padding: 1.25rem;
  text-align: left;
  cursor: pointer;
  color: var(--text-primary);
  transition: transform 0.25s ease, border-color 0.25s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }

  img {
    width: 100%;
    height: 160px;
    object-fit: contain;
    border-radius: 16px;
    background: #f8fafc;
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
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #f8fafc;
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
  background: #ffffff;
  border-radius: 22px;
  padding: 0;
  text-align: left;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: var(--shadow-md);
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(59, 130, 246, 0.3);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
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
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1.5rem, 3vw, 2.5rem);
  margin-top: clamp(2rem, 4vw, 3rem);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ChooseCard = styled.div`
  padding: clamp(2rem, 3vw, 2.5rem);
  border-radius: 24px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(99, 102, 241, 0.1);
    border-color: rgba(99, 102, 241, 0.25);
  }

  &:hover::before {
    transform: scaleX(1);
  }

  span {
    font-size: 3rem;
    line-height: 1;
    display: inline-block;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }

  &:hover span {
    transform: scale(1.15) rotate(8deg);
  }

  h3 {
    margin: 0;
    font-size: clamp(1.25rem, 2vw, 1.4rem);
    font-weight: 700;
    color: var(--text-primary);
    line-height: 1.3;
  }

  p {
    margin: 0;
    color: var(--text-secondary);
    font-size: clamp(0.9rem, 1.2vw, 1rem);
    line-height: 1.6;
  }
`;

const PartnerSection = styled.section`
  width: min(1200px, 100%);
  margin: 0 auto;
  padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 2.5rem);
`;

const PartnerHeading = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 3vw, 2.6rem);
  font-weight: 700;
  margin-bottom: clamp(2rem, 4vw, 3rem);
  color: var(--text-primary);
`;

const PartnerScroller = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #f8fafc;
  padding: 2rem 0;
  margin-bottom: clamp(2rem, 4vw, 3rem);

  &::after,
  &::before {
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

const PartnerTrack = styled.div`
  display: flex;
  width: max-content;
  gap: 3rem;
  cursor: ${props => (props.$isDragging ? 'grabbing' : 'grab')};
  user-select: none;
  animation: ${props => (props.$isPaused ? 'none' : slideLeft)} 40s linear infinite;
  transform: ${props => (props.$isPaused ? `translateX(${props.$dragOffset}px)` : 'translateX(0)')};
  transition: ${props => (props.$isPaused ? 'transform 0.1s ease-out' : 'none')};

  img {
    height: 70px;
    width: auto;
    object-fit: contain;
    filter: grayscale(0.2);
    opacity: 0.9;
    transition: transform 0.3s ease, opacity 0.3s ease;
    pointer-events: none;
  }

  img:hover {
    transform: translateY(-4px);
    opacity: 1;
    filter: grayscale(0);
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
  border: 1px solid rgba(0, 0, 0, 0.08);
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
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  p {
    margin: 0;
    color: var(--text-secondary);
    line-height: 1.7;
  }

  strong {
    color: var(--text-primary);
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

const partnerLogos = [p1, p2, p3, p4, p5, p6, p7, p8];
const duplicatedPartnerLogos = [...partnerLogos, ...partnerLogos];

// --- Draggable Scroller Component ---
const DraggablePartnerScroller = ({ children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const trackRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(dragOffset);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    setDragOffset(scrollLeft + walk);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => {
      setIsPaused(false);
      setDragOffset(0);
    }, 100);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
    setScrollLeft(dragOffset);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    setDragOffset(scrollLeft + walk);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => {
      setIsPaused(false);
      setDragOffset(0);
    }, 100);
  };

  return (
    <PartnerScroller 
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <PartnerTrack
        ref={trackRef}
        $isDragging={isDragging}
        $isPaused={isPaused}
        $dragOffset={dragOffset}
      >
        {children}
      </PartnerTrack>
    </PartnerScroller>
  );
};

const videoServicesData = [
  { video: digitalVideo, title: 'Digital Marketing' },
  { video: webVideo, title: 'Web Development' },
  { video: backendVideo, title: 'Backend Solutions' },
  { video: staffingVideo, title: 'Outsourced Staffing' },
];

export default function Home() {
  const [isQueryOpen, setIsQueryOpen] = useState(false);
  const [defaultService, setDefaultService] = useState('');

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
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
              <ActionButtonAsButton onClick={() => setIsQueryOpen(true)} $variant="primary">Get a Free Quote</ActionButtonAsButton>
            </HeroActions>
          </HeroContent>
        </HeroGrid>
      </HeroSection>

      <Section>
        <SectionHeader>
          <div className="eyebrow">Capabilities</div>
          <SectionTitle>Our Core Services</SectionTitle>
          <SectionLead>Tap into a multi-disciplinary team that blends creative, performance, engineering, and operations — all under one roof.</SectionLead>
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
            <ChooseCard 
              key={item.title} 
              data-aos="fade-up" 
              data-aos-delay={index * 150}
              data-aos-duration="800"
            >
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </ChooseCard>
          ))}
        </ChooseGrid>
      </Section>

      <PartnerSection data-aos="fade-up">
        <SectionHeader>
          <div className="eyebrow">Partnerships</div>
          <PartnerHeading>Trusted by Industry Leaders</PartnerHeading>
        </SectionHeader>
        <DraggablePartnerScroller>
          {duplicatedPartnerLogos.map((logo, index) => (
            <img src={logo} alt={`Partner ${index + 1}`} key={index} loading="lazy" />
          ))}
        </DraggablePartnerScroller>
      </PartnerSection>

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
