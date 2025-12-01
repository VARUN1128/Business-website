import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Query from '../components/Query';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import heroVideo from '../assets/gbs.mp4';
import gaImg from '../assets/GA.png';
import gmbImg from '../assets/GMB.png';
import smmImg from '../assets/SMM.png';
import bankingImg from '../assets/Banking.png';
import telecomImg from '../assets/call.jpeg';
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
  padding: clamp(1.5rem, 4vw, 4rem) clamp(1rem, 3vw, 2rem);

  @media (max-width: 768px) {
    min-height: 75vh;
    padding: 1.25rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
    min-height: 70vh;
  }
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
  background: linear-gradient(120deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.2));
  z-index: 1;
`;

const HeroGrid = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.5rem, 3vw, 3rem);
  align-items: center;
  justify-items: start;
  width: min(1400px, 100%);
  margin: 0 auto;
  padding: clamp(1.5rem, 3vw, 3.5rem) clamp(1rem, 2vw, 2rem);

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  @media (max-width: 768px) {
    padding: 1rem 0.75rem;
    gap: 1.25rem;
    align-items: center;
    justify-items: center;
    min-height: calc(70vh - 2rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 0.5rem;
    gap: 1rem;
    min-height: calc(70vh - 1.5rem);
  }
`;

const HeroContent = styled.div`
  color: rgba(255, 255, 255, 0.95);
  max-width: 620px;
  text-align: left;
  
  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
`;

const HeroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: clamp(0.3rem, 1vw, 0.35rem) clamp(0.7rem, 1.5vw, 0.9rem);
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.9);
  font-size: clamp(0.7rem, 1.5vw, 0.8rem);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: clamp(0.75rem, 2vw, 1.5rem);
  color: var(--text-primary);

  @media (max-width: 480px) {
    margin-bottom: 0.75rem;
    font-size: 0.7rem;
    padding: 0.3rem 0.7rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 6vw, 4rem);
  margin: 0 0 clamp(1rem, 2vw, 1.25rem);
  line-height: 1.15;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 700;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  @media (max-width: 480px) {
    font-size: clamp(1.75rem, 8vw, 2.2rem);
    line-height: 1.2;
  }
`;

const HeroParagraph = styled.p`
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: clamp(1rem, 2.5vw, 2rem);
  line-height: 1.6;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: clamp(0.85rem, 3vw, 1rem);
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: clamp(0.4rem, 1.5vw, 0.8rem);
  width: 100%;
  justify-content: center;

  @media (max-width: 640px) {
    gap: 0.4rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 0.35rem;
  }
`;

const ActionButton = styled(Link)`
  text-decoration: none;
  border-radius: 999px;
  padding: clamp(0.65rem, 1.8vw, 0.85rem) clamp(0.6rem, 2vw, 1.2rem);
  font-weight: 600;
  font-size: clamp(0.7rem, 1.6vw, 0.9rem);
  letter-spacing: 0;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1 1 auto;
  min-width: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.2;

  @media (max-width: 640px) {
    flex: 1 1 calc(33.333% - 0.27rem);
    max-width: calc(33.333% - 0.27rem);
    padding: 0.65rem 0.5rem;
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 0.4rem;
    font-size: 0.65rem;
  }

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
  padding: clamp(0.65rem, 1.8vw, 0.85rem) clamp(0.6rem, 2vw, 1.2rem);
  font-weight: 600;
  font-size: clamp(0.7rem, 1.6vw, 0.9rem);
  letter-spacing: 0;
  border: 1px solid transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  cursor: pointer;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1 1 auto;
  min-width: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.2;

  @media (max-width: 640px) {
    flex: 1 1 calc(33.333% - 0.27rem);
    max-width: calc(33.333% - 0.27rem);
    padding: 0.65rem 0.5rem;
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 0.4rem;
    font-size: 0.65rem;
  }

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
  padding: clamp(2rem, 5vw, 5rem) clamp(1rem, 3vw, 2.5rem);

  @media (max-width: 480px) {
    padding: 1.5rem 0.75rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: clamp(2rem, 4vw, 3rem);
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 5vw, 3rem);
  margin: 0 0 clamp(0.75rem, 1.5vw, 1rem);
  line-height: 1.2;

  @media (max-width: 480px) {
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
`;

const SectionLead = styled.p`
  margin: 0 auto;
  max-width: 640px;
  color: var(--text-muted);
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  line-height: 1.6;
  padding: 0 clamp(0.5rem, 2vw, 0);

  @media (max-width: 480px) {
    font-size: clamp(0.85rem, 3vw, 0.95rem);
    line-height: 1.5;
  }

  strong {
    color: var(--text-primary);
    font-weight: 700;
  }
`;

const AboutCard = styled.div`
  margin-top: clamp(1.5rem, 3vw, 3rem);
  padding: clamp(1.5rem, 4vw, 4rem) clamp(1.25rem, 3vw, 3rem);
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: clamp(24px, 4vw, 32px);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    border-radius: 20px;
    margin-top: 1.5rem;
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

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    text-align: left;
    gap: 3rem;
  }
`;

const AboutText = styled.p`
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  flex: 1;

  @media (max-width: 480px) {
    font-size: clamp(0.85rem, 3vw, 0.95rem);
    line-height: 1.6;
  }
`;

const AboutLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: clamp(0.65rem, 1.5vw, 0.75rem) clamp(1.25rem, 2.5vw, 1.75rem);
  border-radius: 999px;
  background: linear-gradient(120deg, #6366f1, #a855f7, #ec4899);
  color: white;
  font-weight: 600;
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  text-decoration: none;
  text-align: center;
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.25);
  transition: all 0.3s ease;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
    gap: 0.4rem;
  }

  @media (max-width: 480px) {
    padding: 0.55rem 0.9rem;
    font-size: 0.85rem;
    gap: 0.35rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(99, 102, 241, 0.35);
    background: linear-gradient(120deg, #818cf8, #a855f7, #f472b6);
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto auto;
  gap: clamp(1rem, 2.5vw, 2.5rem);
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    max-width: 100%;
  }
`;

const ServiceCard = styled.button`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: clamp(18px, 3vw, 22px);
  padding: clamp(1rem, 2vw, 1.25rem);
  text-align: center;
  cursor: pointer;
  color: var(--text-primary);
  transition: transform 0.25s ease, border-color 0.25s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${props => props.$isCenter && `
    grid-column: 1 / -1;
    justify-self: center;
    max-width: 280px;
  `}
  gap: clamp(0.75rem, 1.5vw, 1rem);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  @media (max-width: 480px) {
    padding: 0.875rem;
    gap: 0.625rem;
    border-radius: 16px;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }

  img {
    width: 100%;
    height: clamp(120px, 25vw, 160px);
    object-fit: contain;
    border-radius: clamp(12px, 2vw, 16px);
    background: #f8fafc;
    padding: 0.75rem;
  }

  span {
    font-weight: 600;
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    line-height: 1.3;
    text-align: center;
    width: 100%;

    @media (max-width: 480px) {
      font-size: clamp(0.8rem, 3vw, 0.95rem);
    }
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
  grid-template-columns: 1fr;
  gap: clamp(1rem, 2.5vw, 2.5rem);

  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const VideoCard = styled.button`
  border: none;
  background: #ffffff;
  border-radius: clamp(18px, 3vw, 22px);
  padding: 0;
  text-align: left;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: var(--shadow-md);
  transition: transform 0.25s ease, border-color 0.25s ease;

  @media (max-width: 480px) {
    border-radius: 16px;
  }

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

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  h3 {
    margin: 0;
    padding: clamp(1rem, 2vw, 1.25rem) clamp(1rem, 2.5vw, 1.5rem);
    font-size: clamp(0.95rem, 2vw, 1.1rem);
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
  padding: clamp(1.5rem, 3vw, 2.5rem);
  border-radius: clamp(20px, 3vw, 24px);
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 2vw, 1.25rem);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 18px;
    gap: 0.875rem;
  }

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
    font-size: clamp(1.75rem, 4vw, 3rem);
    line-height: 1;
    display: inline-block;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));

    @media (max-width: 480px) {
      font-size: clamp(1.5rem, 5vw, 2rem);
    }
  }

  &:hover span {
    transform: scale(1.15) rotate(8deg);
  }

  h3 {
    margin: 0;
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    font-weight: 700;
    color: var(--text-primary);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: clamp(1rem, 4vw, 1.2rem);
    }
  }

  p {
    margin: 0;
    color: var(--text-secondary);
    font-size: clamp(0.85rem, 1.8vw, 1rem);
    line-height: 1.6;

    @media (max-width: 480px) {
      font-size: clamp(0.8rem, 3vw, 0.9rem);
      line-height: 1.5;
    }
  }
`;

const PartnerSection = styled.section`
  width: min(1200px, 100%);
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 5rem) clamp(1rem, 3vw, 2.5rem);

  @media (max-width: 480px) {
    padding: 1.5rem 0.75rem;
  }
`;

const PartnerHeading = styled.h2`
  text-align: center;
  font-size: clamp(1.75rem, 4vw, 2.6rem);
  font-weight: 700;
  margin-bottom: clamp(1.5rem, 3vw, 3rem);
  color: var(--text-primary);

  @media (max-width: 480px) {
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 1.5rem;
  }
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
  { img: gmbImg, tag: 'Google My Business', gridPosition: 'top-left' },
  { img: smmImg, tag: 'Social Media Marketing', gridPosition: 'top-right' },
  { img: gaImg, tag: 'Google Ads', gridPosition: 'center' },
  { img: bankingImg, tag: 'Banking and Insurance', gridPosition: 'bottom-left' },
  { img: telecomImg, tag: 'Telecom', gridPosition: 'bottom-right' },
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

// Lazy Video Component with Intersection Observer
const LazyVideo = ({ src, ...props }) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '50px' } // Start loading 50px before entering viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
      {!isLoaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'inherit',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              border: '3px solid #e2e8f0',
              borderTopColor: '#6366f1',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }}
          />
        </div>
      )}
      {shouldLoad && (
        <video
          ref={videoRef}
          src={src}
          {...props}
          onLoadedData={() => setIsLoaded(true)}
          preload="metadata"
        />
      )}
    </div>
  );
};

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
    <>
      <SEO 
        title="G Business Support | Digital Marketing & Web Development Services in Bangalore"
        description="G Business Support is a full-stack digital marketing and operations agency in Bangalore. Expert services in Google Ads, Social Media Marketing, Web Development, Backend Solutions, Staffing, Banking & Insurance, and Telecom services."
        keywords="digital marketing bangalore, web development services, google ads management, social media marketing bangalore, web design company, backend solutions, staffing services, business growth consultant, SEO services bangalore, digital marketing agency, web development company bangalore"
      />
      <StructuredData type="home" />
      <PageWrapper>
        <HeroSection>
        <HeroVideo 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          onLoadedData={(e) => {
            // Ensure video plays after loading
            e.target.play().catch(() => {});
          }}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </HeroVideo>
        <HeroOverlay />

        <HeroGrid>
          <HeroContent data-aos="fade-up">
            <HeroBadge>Trusted Growth Partner</HeroBadge>
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
          <div className="eyebrow">Who We Are</div>
          <SectionTitle>Full-Stack Growth Partner</SectionTitle>
          <SectionLead>
            <strong>G Business Support</strong> is a full-stack digital marketing and operations agency dedicated to helping startups, SMEs and Corporates to scale with precision. We craft data-driven campaigns, build modern websites, and provide smart staffing solutions — empowering businesses to grow faster, smarter, and more efficiently.
          </SectionLead>
        </SectionHeader>
        <AboutCard data-aos="fade-up">
          <AboutContent>
            <AboutText>
              From launching ad campaigns to managing backend workflows, our mission is to support digital-first businesses with scalable and streamlined solutions. We're not just a vendor — we're your extended growth team.
            </AboutText>
            <AboutLink to="/about">Learn More About Us →</AboutLink>
          </AboutContent>
        </AboutCard>
      </Section>

      <Section aria-label="Our Core Services">
        <SectionHeader>
          <div className="eyebrow">Capabilities</div>
          <SectionTitle>Our Core Services</SectionTitle>
          <SectionLead>Tap into a multi-disciplinary team that blends creative, performance, engineering, and operations — all under one roof.</SectionLead>
        </SectionHeader>

        <ServiceGrid>
          {coreServicesData.map((service, index) => (
            <ServiceCard
              key={service.tag}
              $isCenter={service.gridPosition === 'center'}
              data-aos="zoom-in"
              data-aos-delay={index * 80}
              onClick={() => openQuery(service.tag)}
            >
              <img 
                src={service.img} 
                alt={`${service.tag} service by G Business Support - Professional ${service.tag.toLowerCase()} solutions in Bangalore`} 
                loading="lazy" 
                width="200" 
                height="200"
              />
              <span>{service.tag}</span>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </Section>

      <Section aria-label="Integrated Delivery Pods">
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
              <LazyVideo 
                src={service.video} 
                autoPlay 
                muted 
                loop 
                playsInline
                style={{
                  width: '100%',
                  aspectRatio: '16 / 9',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <h3>{service.title}</h3>
            </VideoCard>
          ))}
        </VideoGrid>
      </Section>

      <Section aria-label="Why Choose Us">
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
            <img 
              src={logo} 
              alt={`Trusted partner and client of G Business Support - Digital marketing and web development services`} 
              key={index} 
              loading="lazy" 
              width="150" 
              height="80"
            />
          ))}
        </DraggablePartnerScroller>
      </PartnerSection>

      <ContactSection aria-label="Contact Information">
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
              <strong>WhatsApp:</strong> <a href="https://wa.me/919071861881" target="_blank" rel="noopener noreferrer">Chat Now</a>
            </p>
          </ContactCard>
        </ContactGrid>
      </ContactSection>

      <Query
        isOpen={isQueryOpen}
        onClose={() => setIsQueryOpen(false)}
        defaultService={defaultService}
        waNumber="919071861881"
      />
      </PageWrapper>
    </>
  );
}
