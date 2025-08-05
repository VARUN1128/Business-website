import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 1. Import Swiper components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// 2. Import Swiper's core and effect styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// 3. Import your three slider images
// (As always, double-check the path and file extensions)
import slideImage1 from "../../assets/H1.jpg"; 
import slideImage2 from "../../assets/H2.jpg";
import slideImage3 from "../../assets/H3.jpg";
import slideImage4 from "../../assets/H4.jpg";
import slideImage5 from "../../assets/H5.jpg";


// --- Styled Components (Mostly unchanged) ---

const media = { md: `@media (min-width: 768px)` };

const Section = styled.section`
  max-width: 80rem;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  overflow: hidden;

  ${media.md} {
    flex-direction: row;
  }
`;

const TextContainer = styled.div` 
  flex: 1; 
  z-index: 2;
`;

// Container now holds the Swiper instance
const ImageContainer = styled.div`
  flex: 1;
  max-width: 28rem;
  width: 100%;
`;

const MainHeading = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  ${media.md} { font-size: 3rem; }
`;

const Paragraph = styled.p`
  color: #374151;
  margin-bottom: 2rem;
  font-size: 16px;
`;

const ButtonRow = styled.div` 
  display: flex; 
  gap: 1rem; 
`;

const SecondaryButton = styled.button`
  background-color: #F97316;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #EA580C;
    box-shadow: 0 4px 20px rgba(252, 211, 77, 0.5);
  }
`;

// This component styles each individual image inside a SwiperSlide
const HeroImage = styled.img`
  border-radius: 0.5rem;
  width: 100%;
  height: 350px;
  object-fit: cover;
  background-color: #e5e7eb;
`;


// --- The HeroSection Component with SwiperJS ---

export default function HeroSection() {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/career');
  };

  // Array of your imported images
  const sliderImages = [slideImage1, slideImage2, slideImage3, slideImage4, slideImage5];

  return (
    <Section>
      <TextContainer>
        <MainHeading>
          Build Your Dream Career<br /> Become a Future Leader
        </MainHeading>
        <Paragraph>
          Forget the traditional career ladder. We offer a fast-track journey from graduate to entrepreneur.
          Here, your performance drives your growth, and your ambition shapes your future.
        </Paragraph>
        <ButtonRow>
          <SecondaryButton onClick={handleJoinClick}>Join</SecondaryButton>
        </ButtonRow>
      </TextContainer>

      <ImageContainer>
        {/* 4. The Swiper component */}
        <Swiper
          modules={[Autoplay, EffectFade]} // Enable required modules
          spaceBetween={30}
          slidesPerView={1}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
        >
          {sliderImages.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <HeroImage src={imgSrc} alt={`Promotional image ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ImageContainer>
    </Section>
  );
}
