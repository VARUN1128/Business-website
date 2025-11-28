import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.jpeg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.png';
import p7 from '../assets/p7.png';
import p8 from '../assets/p8.jpg';
import img360 from '../assets/360.jpg';
import foodImg from '../assets/food.jpg';
import productImg from '../assets/product.jpg';
import webdesignImg from '../assets/webdesign.jpg';
import logodesignImg from '../assets/logodesign.jpg';

const slideLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const Page = styled.main`
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 6vw, 4.5rem);
  padding: clamp(2rem, 5vw, 4rem) 0;
`;

const HeroCard = styled.section`
  border-radius: 28px;
  padding: clamp(2rem, 5vw, 4rem);
  background: rgba(8, 12, 33, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow-md);
  width: min(960px, 100%);
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  margin: 0 0 1rem;
`;

const Paragraph = styled.p`
  margin: 0 auto 1.25rem;
  max-width: 720px;
  color: var(--text-muted);
  line-height: 1.8;
`;

const ValuesGrid = styled.div`
  margin-top: clamp(2rem, 5vw, 3rem);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
`;

const ValueCard = styled.div`
  padding: 1rem 1.25rem;
  border-radius: 18px;
  background: rgba(3, 6, 23, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  text-align: left;
  font-weight: 600;
`;

const PartnerSection = styled.section`
  padding: 0 clamp(1rem, 4vw, 2rem);
`;

const SectionHeading = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 3vw, 2.6rem);
  margin-bottom: 2.5rem;
`;

const Scroller = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(8, 12, 33, 0.7);
  padding: 1.5rem 0;
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
    background: linear-gradient(90deg, rgba(8, 12, 33, 0.95), transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(270deg, rgba(8, 12, 33, 0.95), transparent);
  }
`;

const ScrollerTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${slideLeft} ${props => props.duration} linear infinite;
  gap: ${props => props.gap};

  img {
    height: ${props => props.imgHeight};
    width: auto;
    object-fit: contain;
    border-radius: ${props => props.radius || '0'};
    filter: grayscale(0.2);
    opacity: 0.9;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  img:hover {
    transform: translateY(-4px);
    opacity: 1;
  }
`;

const GalleryWrapper = styled.div`
  margin-top: 2rem;
`;

const partnerLogos = [p1, p2, p3, p4, p5, p6, p7, p8];
const galleryImages = [img360, foodImg, productImg, webdesignImg, logodesignImg];

const duplicatedLogos = [...partnerLogos, ...partnerLogos];
const duplicatedGallery = [...galleryImages, ...galleryImages];

const AboutContent = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <Page>
      <HeroCard data-aos="fade-up">
        <div className="eyebrow">Who We Are</div>
        <Title>Full-Stack Growth Partner</Title>
        <Paragraph>
          <strong>G Business Support</strong> is a full-stack digital marketing and operations agency dedicated to helping startups, SMEs and Corporates to scale with precision. We craft data-driven campaigns, build modern websites, and provide smart staffing solutions — empowering businesses to grow faster, smarter, and more efficiently.
        </Paragraph>
        <Paragraph data-aos="fade-up" data-aos-delay="150">
          From launching ad campaigns to managing backend workflows, our mission is to support digital-first businesses with scalable and streamlined solutions. We’re not just a vendor — we’re your extended growth team.
        </Paragraph>

        <ValuesGrid data-aos="fade-up" data-aos-delay="250">
          {['Client-First Approach', 'Transparent Communication', 'Remote & Scalable Delivery', 'Modern Tools & Automation'].map(value => (
            <ValueCard key={value}>{value}</ValueCard>
          ))}
        </ValuesGrid>
      </HeroCard>

      <PartnerSection data-aos="fade-up">
        <SectionHeading>Our Partners</SectionHeading>
        <Scroller>
          <ScrollerTrack duration="40s" imgHeight="70px" gap="3rem">
            {duplicatedLogos.map((logo, index) => (
              <img src={logo} alt={`Partner ${index + 1}`} key={index} loading="lazy" />
            ))}
          </ScrollerTrack>
        </Scroller>

        <SectionHeading>Showcase</SectionHeading>
        <GalleryWrapper>
          <Scroller>
            <ScrollerTrack duration="32s" imgHeight="220px" gap="1.5rem" radius="18px">
              {duplicatedGallery.map((image, index) => (
                <img src={image} alt={`Gallery ${index + 1}`} key={index} loading="lazy" />
              ))}
            </ScrollerTrack>
          </Scroller>
        </GalleryWrapper>
      </PartnerSection>
    </Page>
  );
};

export default AboutContent;
