import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

// --- IMPORT YOUR IMAGES HERE ---
// Certificate Images
import cert1 from '../assets/c1.png';
import cert2 from '../assets/c2.png';
import cert3 from '../assets/c3.png';
import cert4 from '../assets/c4.png';
import cert5 from '../assets/c5.png';

// Gallery Images
import g1 from '../assets/g1.jpg';
import g2 from '../assets/g2.jpg';
import g3 from '../assets/g3.jpg';
import g4 from '../assets/g4.jpg';
import g5 from '../assets/g5.jpg';
import g6 from '../assets/g6.jpg';
import g7 from '../assets/g7.jpg';
import g8 from '../assets/g8.jpg';

// --- Keyframes for Animations ---
const scrollGallery = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

// --- Styled Components ---

const PageWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 5vw, 3.5rem);
  padding: clamp(2rem, 5vw, 4rem) clamp(1.5rem, 5vw, 3rem);
`;

const Section = styled.section`
  width: min(1100px, 100%);
  margin: 0 auto;
  text-align: center;
  padding: clamp(1.75rem, 4vw, 3.25rem);
  border-radius: 30px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: var(--shadow-md);
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const SectionParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  color: var(--text-muted);
  max-width: 720px;
  margin: 0 auto 2rem auto;
`;

// --- Job Listing Styles ---
const ListContainer = styled.div`
  text-align: left;
  margin: 2rem auto;
  max-width: 640px;

  h3 {
    font-size: 1.2rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem 0;
`;

const ListItem = styled.li`
  font-size: 1rem;
  margin-bottom: 0.65rem;
  padding-left: 1.8rem;
  position: relative;
  color: var(--text-secondary);

  &::before {
    content: "✔";
    color: #22d3ee;
    position: absolute;
    left: 0;
    font-weight: 600;
  }
`;

const ApplyButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, #6366f1, #8b5cf6, #ec4899);
  color: white;
  padding: 0.85rem 2.5rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 30px 60px rgba(236, 72, 153, 0.35);
  }
`;

// --- UPDATED: Promotion/Growth Section Styles ---
const PromotionSection = styled(Section)`
  width: min(1200px, 100%);
`;

const IntroParagraph = styled.p`
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.75;
  max-width: 900px;
  margin: 2rem auto 3rem auto;
  text-align: left;
`;

const PromotionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  background-color: #f8fafc;
  border-radius: 22px;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border: 1px solid rgba(0, 0, 0, 0.08);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }
`;

const OpportunityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const OpportunityItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  color: var(--text-secondary);

  span {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.05rem;
    font-weight: 700;
    margin: 0 0 0.25rem 0;
    color: var(--text-primary);
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--text-muted);
    margin: 0;
  }
`;

const PromotionLevels = styled.div`
  h4 {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    color: var(--accent-3);
    font-weight: 700;
    text-align: center;
  }
`;

const PromotionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 0.9rem 0.5rem;
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    margin-bottom: 0.75rem;
    border-radius: 10px;
    font-weight: 600;
    color: var(--text-primary);
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }
`;

// --- Certificates & Gallery Styles ---
// --- UPDATED: Certificates & Gallery Styles ---

const GallerySection = styled(Section)`
  overflow: hidden;
`;

// NEW: Create a wrapper for each certificate image
// NEW: Create a wrapper for each certificate image
const CertificateImageWrapper = styled.div`
  width: 100%;
  padding: 0.5rem;
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 40px rgba(8, 13, 32, 0.55);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (min-width: 768px) {
    width: 220px;
    height: 160px;
  }
`;

/*
  CertificatesGallery:
  - Mobile (<768px): vertical list using 1-column grid
  - Desktop (>=768px): horizontal scroll track (your original behavior)
*/
const CertificatesGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem 0;

  > ${CertificateImageWrapper} {
    margin: 0;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 1.5rem;
    padding: 1rem 0;

    &::-webkit-scrollbar {
      height: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 4px;
    }
  }
`;
// The rest of your styled-components...

const Scroller = styled.div`
  width: 100%;
  overflow: hidden;
  -webkit-mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
  mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
`;

const ScrollerTrack = styled.div`
  display: flex;
  width: max-content;
  gap: 1.5rem;
  cursor: ${props => (props.$isDragging ? 'grabbing' : 'grab')};
  user-select: none;
  animation: ${props => (props.$isPaused ? 'none' : scrollGallery)} 40s linear infinite;
  transform: ${props => (props.$isPaused ? `translateX(${props.$dragOffset}px)` : 'translateX(0)')};
  transition: ${props => (props.$isPaused ? 'transform 0.1s ease-out' : 'none')};

  img {
    height: 180px;
    width: 300px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    pointer-events: none;
  }
`;

// --- Data ---
const benefits = [
  'Learn on real projects with live clients',
  'Get Certificates, LORs & Paid Opportunities',
  'Flexible hours & remote-friendly work culture'
];
const jobs = [
  'Google Business Consultant',
  'Digital Ad Executives (Meta & Google Ads)',
  'SEO & Content Specialists',
  'Web Developers (HTML/CSS/WordPress)',
  'Telecalling & Client Coordination',
  'Creative Designers (Canva, Photoshop)'
];
const promotions = [
  'BUSINESS ASSOCIATE',
  'HRD TRAINER',
  'EXECUTIVE CREW LEADER',
  'ASSISTANT MANAGER',
  'SBU HEAD'
];
const opportunities = [
    { icon: '🌟', title: 'Opportunity', text: 'At G Business Support, we create real opportunities for young graduates and postgraduates to step into leadership roles. With direct exposure to business and client interaction, every individual gets the chance to lead, learn, and grow.' },
    { icon: '💼', title: 'Experience', text: 'Gain real-world experience from day one. From sales and marketing to presentations and client handling — we prepare you for success with hands-on learning in a fast-paced environment.' },
    { icon: '💰', title: 'Money', text: 'Your income has no limits. We follow a performance-based system where your effort directly impacts your earnings. The more you give, the more you grow.' },
    { icon: '📈', title: 'Growth', text: 'With a clear, fast-track promotion structure, we transform fresh talent into future leaders. Your career progression is in your hands.' }
];

const certificates = [ cert1, cert2, cert3, cert4, cert5 ];
const galleryImages = [ g1, g2, g3, g4, g5, g6, g7, g8 ];
const duplicatedGallery = [...galleryImages, ...galleryImages];

// --- Draggable Scroller Component ---
const DraggableScroller = ({ children }) => {
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
    <Scroller 
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
        $isDragging={isDragging}
        $isPaused={isPaused}
        $dragOffset={dragOffset}
      >
        {children}
      </ScrollerTrack>
    </Scroller>
  );
};

// --- Main Component ---
const CareersPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <SEO 
        title="Careers | Join G Business Support - Digital Marketing & Web Development Jobs"
        description="Join G Business Support team in Bangalore. Explore career opportunities in digital marketing, web development, backend solutions, and business operations. Grow your career with us."
        keywords="careers g business support, digital marketing jobs bangalore, web development jobs, marketing careers, business support jobs bangalore"
      />
      <StructuredData type="careers" />
      <PageWrapper>
      <Section>
        <SectionTitle data-aos="fade-up">Join Our Team</SectionTitle>
        <SectionParagraph data-aos="fade-up" data-aos-delay="100">
          Looking to grow your career with hands-on experience in digital marketing, design, or development? G Business Support offers flexible, remote-friendly roles for interns, associates, and freelancers.
        </SectionParagraph>

        <ListContainer data-aos="fade-up" data-aos-delay="200">
          <StyledList>
            {benefits.map(item => <ListItem key={item}>{item}</ListItem>)}
          </StyledList>
          <h3>Currently Hiring:</h3>
          <StyledList>
            {jobs.map(job => <ListItem key={job}>{job}</ListItem>)}
          </StyledList>
        </ListContainer>

        <div data-aos="zoom-in" data-aos-delay="300">
          <ApplyButton href="https://forms.gle/3rmkgRLDLkxPEhuU9" target="_blank" rel="noopener noreferrer">Apply Now</ApplyButton>
        </div>
      </Section>

      <PromotionSection data-aos="fade-up">
        <SectionTitle>Career</SectionTitle>
        <IntroParagraph>
            At G Business Support, we offer exceptional career growth opportunities backed by strong brand exposure. As market demands and consumer spending evolve, there’s a rising need for skilled professionals who can drive targeted brand visibility. Our unique business model empowers individuals to unlock their true potential. With structured promotions based on performance and achievement, we support your journey through regular training and skill development. Join our ambitious and fast-growing team.
        </IntroParagraph>
        <PromotionContainer>
          <OpportunityList>
            {opportunities.map((item, index) => (
              <OpportunityItem key={index} data-aos="fade-right" data-aos-delay={index * 100}>
                <span>{item.icon}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </OpportunityItem>
            ))}
          </OpportunityList>
          <PromotionLevels data-aos="fade-left">
            <h4>*Five Levels of Promotions*</h4>
            <PromotionList>
              {promotions.map(level => <li key={level}>{level}</li>)}
            </PromotionList>
          </PromotionLevels>
        </PromotionContainer>
      </PromotionSection>

      <GallerySection data-aos="fade-up">
        <SectionTitle>Certificates</SectionTitle>
        <CertificatesGallery>
          {certificates.map((cert, index) => (
            // UPDATED: Wrap the img in the new component
            <CertificateImageWrapper key={index} data-aos="zoom-in" data-aos-delay={index * 50}>
              <img src={cert} alt={`Certificate ${index + 1}`} />
            </CertificateImageWrapper>
          ))}
        </CertificatesGallery>
      </GallerySection>

      <GallerySection data-aos="fade-up">
        <SectionTitle>Gallery</SectionTitle>
        <DraggableScroller>
          {duplicatedGallery.map((img, index) => (
            <img key={index} src={img} alt={`Gallery image ${index + 1}`} />
          ))}
        </DraggableScroller>
      </GallerySection>
      </PageWrapper>
    </>
  );
};

export default CareersPage;
