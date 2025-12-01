import React, { useEffect, useRef, useState } from 'react';
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
  gap: clamp(2rem, 5vw, 4.5rem);
  padding: clamp(1.5rem, 4vw, 4rem) clamp(1rem, 3vw, 2rem) 0;

  @media (max-width: 480px) {
    padding: 1.5rem 0.75rem 0;
    gap: 1.5rem;
  }
`;

const HeroCard = styled.section`
  border-radius: clamp(24px, 4vw, 32px);
  padding: clamp(2rem, 5vw, 5rem) clamp(1.5rem, 4vw, 4rem);
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08), 0 4px 20px rgba(0, 0, 0, 0.04);
  width: min(1000px, 100%);
  margin: 0 auto;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    border-radius: 20px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
    border-radius: 32px 32px 0 0;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 6vw, 3.8rem);
  margin: 0 0 clamp(1rem, 2vw, 1.5rem);
  font-weight: 700;
  line-height: 1.2;
  background: linear-gradient(120deg, #0f172a, #475569);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: -0.02em;

  @media (max-width: 480px) {
    font-size: clamp(1.75rem, 7vw, 2.5rem);
  }
`;

const Paragraph = styled.p`
  margin: 0 auto clamp(1rem, 2vw, 1.5rem);
  max-width: 800px;
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: clamp(0.9rem, 2vw, 1.15rem);
  padding: 0 clamp(0.5rem, 2vw, 0);

  @media (max-width: 480px) {
    font-size: clamp(0.85rem, 3vw, 0.95rem);
    line-height: 1.6;
  }

  strong {
    color: var(--text-primary);
    font-weight: 700;
  }
`;

const ValuesGrid = styled.div`
  margin-top: clamp(3rem, 6vw, 4rem);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(1.25rem, 2.5vw, 1.75rem);
  width: 100%;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  padding: clamp(1.25rem, 2.5vw, 2rem) clamp(1.25rem, 2.5vw, 2.25rem);
  border-radius: clamp(18px, 2.5vw, 20px);
  background: #ffffff;
  border: 2px solid rgba(99, 102, 241, 0.1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  text-align: left;
  font-weight: 600;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  color: var(--text-primary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 16px;
    font-size: clamp(0.85rem, 3vw, 0.95rem);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #6366f1, #8b5cf6);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 40px rgba(99, 102, 241, 0.15);
    border-color: rgba(99, 102, 241, 0.3);
  }

  &:hover::before {
    transform: scaleY(1);
  }
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
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #f8fafc;
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
    background: linear-gradient(90deg, #f8fafc, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(270deg, #f8fafc, transparent);
  }
`;

const ScrollerTrack = styled.div`
  display: flex;
  width: max-content;
  gap: ${props => props.gap};
  cursor: ${props => (props.$isDragging ? 'grabbing' : 'grab')};
  user-select: none;
  animation: ${props => (props.$isPaused ? 'none' : slideLeft)} ${props => props.duration} linear infinite;
  transform: ${props => (props.$isPaused ? `translateX(${props.$dragOffset}px)` : 'translateX(0)')};
  transition: ${props => (props.$isPaused ? 'transform 0.1s ease-out' : 'none')};

  img {
    height: ${props => props.imgHeight};
    width: auto;
    object-fit: contain;
    border-radius: ${props => props.radius || '0'};
    filter: grayscale(0.2);
    opacity: 0.9;
    transition: transform 0.3s ease, opacity 0.3s ease;
    pointer-events: none;
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

const DraggableScroller = ({ duration, imgHeight, gap, radius, children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const trackRef = useRef(null);
  const containerRef = useRef(null);

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
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    setDragOffset(scrollLeft + walk);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Resume animation after a short delay
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

  // Touch events for mobile
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
    <Scroller 
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <ScrollerTrack
        ref={trackRef}
        duration={duration}
        imgHeight={imgHeight}
        gap={gap}
        radius={radius}
        $isDragging={isDragging}
        $isPaused={isPaused}
        $dragOffset={dragOffset}
      >
        {children}
      </ScrollerTrack>
    </Scroller>
  );
};

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
          From launching ad campaigns to managing backend workflows, our mission is to support digital-first businesses with scalable and streamlined solutions. We're not just a vendor — we're your extended growth team.
        </Paragraph>

        <ValuesGrid data-aos="fade-up" data-aos-delay="250">
          {['Client-First Approach', 'Transparent Communication', 'Remote & Scalable Delivery', 'Modern Tools & Automation'].map(value => (
            <ValueCard key={value}>{value}</ValueCard>
          ))}
        </ValuesGrid>
      </HeroCard>

      <PartnerSection data-aos="fade-up">
        <SectionHeading>Our Partners</SectionHeading>
        <DraggableScroller duration="40s" imgHeight="70px" gap="3rem">
          {duplicatedLogos.map((logo, index) => (
            <img src={logo} alt={`Partner ${index + 1}`} key={index} loading="lazy" />
          ))}
        </DraggableScroller>

        <SectionHeading>Showcase</SectionHeading>
        <GalleryWrapper>
          <DraggableScroller duration="32s" imgHeight="220px" gap="1.5rem" radius="18px">
            {duplicatedGallery.map((image, index) => (
              <img src={image} alt={`Gallery ${index + 1}`} key={index} loading="lazy" />
            ))}
          </DraggableScroller>
        </GalleryWrapper>
      </PartnerSection>
    </Page>
  );
};

export default AboutContent;
