import React, { useRef } from 'react';
import styled from 'styled-components';

// --- Styled Components ---

const SectionWrapper = styled.section`
  padding: 80px 20px;
  background-color: #f8f9fa; /* Light grey background */
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const CardWrapper = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
`;

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DurationTag = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  backdrop-filter: blur(4px);
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #f57c00; /* Orange color for the tag */
  text-align: center;
  padding: 20px;
  margin: 0;
`;

// --- Data for Cards ---

const cardData = [
  {
    videoSrc: 'https://videos.pexels.com/video-files/3209828/3209828-sd_640_360_30fps.mp4',
    duration: '0:45',
    title: 'Digital Marketing',
  },
  {
    videoSrc: 'https://videos.pexels.com/video-files/5495833/5495833-sd_640_360_25fps.mp4',
    duration: '1:10',
    title: 'Web Development',
  },
  {
    videoSrc: 'https://videos.pexels.com/video-files/8468725/8468725-sd_640_360_25fps.mp4',
    duration: '1:00',
    title: 'Backend Solutions',
  },
  {
    videoSrc: 'https://videos.pexels.com/video-files/8532468/8532468-sd_640_360_25fps.mp4',
    duration: '0:55',
    title: 'Outsourced Staffing',
  },
];

// --- Reusable Card Component with Hover Logic ---

const VideoCard = ({ videoSrc, duration, title }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Optional: reset video on mouse leave
    }
  };

  return (
    <CardWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <VideoContainer>
        <StyledVideo ref={videoRef} src={videoSrc} loop muted playsInline />
        <DurationTag>{duration}</DurationTag>
      </VideoContainer>
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  );
};

// --- Main Section Component ---

const VideoFeatureSection = () => {
  return (
    <SectionWrapper>
      <GridContainer>
        {cardData.map((card, index) => (
          <VideoCard
            key={index}
            videoSrc={card.videoSrc}
            duration={card.duration}
            title={card.title}
          />
        ))}
      </GridContainer>
    </SectionWrapper>
  );
};

export default VideoFeatureSection;
