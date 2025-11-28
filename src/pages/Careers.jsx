import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

// --- IMPORT YOUR IMAGES HERE ---
// Certificate Images
import cert1 from '../assets/c1.png';
import cert2 from '../assets/c2.png';
import cert3 from '../assets/c3.png';
import cert4 from '../assets/c4.png';
import cert5 from '../assets/c5.png';

// Gallery Images
import t1 from '../assets/t1.jpg';
import t2 from '../assets/t2.jpg';
import t3 from '../assets/t3.jpg';
import t4 from '../assets/t4.jpg';
import t5 from '../assets/t5.jpg';
import t6 from '../assets/t6.jpg';
import t7 from '../assets/t7.jpg';
import t8 from '../assets/t8.jpeg';
import t9 from '../assets/t9.jpg';
import t10 from '../assets/t10.jpg';

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
  background: rgba(8, 12, 33, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow-md);
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: #f8fafc;
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
    color: #f8fafc;
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
  background-color: rgba(15, 23, 42, 0.6);
  border-radius: 22px;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border: 1px solid rgba(255, 255, 255, 0.06);

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
    color: #f8fafc;
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
    background-color: rgba(15, 23, 42, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.08);
    margin-bottom: 0.75rem;
    border-radius: 10px;
    font-weight: 600;
    color: #f8fafc;
    text-align: center;
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
  background-color: rgba(15, 23, 42, 0.85);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.45);
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
  animation: ${scrollGallery} 40s linear infinite;

  img {
    height: 180px;
    width: 300px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
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
    { icon: '🌟', title: 'Opportunity', text: 'At Stars Management, we create real opportunities for young graduates and postgraduates to step into leadership roles. With direct exposure to business and client interaction, every individual gets the chance to lead, learn, and grow.' },
    { icon: '💼', title: 'Experience', text: 'Gain real-world experience from day one. From sales and marketing to presentations and client handling — we prepare you for success with hands-on learning in a fast-paced environment.' },
    { icon: '💰', title: 'Money', text: 'Your income has no limits. We follow a performance-based system where your effort directly impacts your earnings. The more you give, the more you grow.' },
    { icon: '📈', title: 'Growth', text: 'With a clear, fast-track promotion structure, we transform fresh talent into future leaders. Your career progression is in your hands.' }
];

const certificates = [ cert1, cert2, cert3, cert4, cert5 ];
const galleryImages = [ t1, t2, t3, t4, t5, t6, t7, t8, t9, t10 ];
const duplicatedGallery = [...galleryImages, ...galleryImages];

// --- Main Component ---
const CareersPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
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
        <Scroller>
          <ScrollerTrack>
            {duplicatedGallery.map((img, index) => (
              <img key={index} src={img} alt={`Gallery image ${index + 1}`} />
            ))}
          </ScrollerTrack>
        </Scroller>
      </GallerySection>
    </PageWrapper>
  );
};

export default CareersPage;
