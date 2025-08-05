// src/components/home/TestimonialSection.jsx

import React, { useState } from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

// --- Sample Data for 3 Reviews (with ratings of 5, 5, and 4) ---
const reviews = [
  {
    id: 1,
    quote: "I have been working here from 9 month's started as a Business Associate being an Engineering graduate now working as corporate trainer, updated my Skills of Communication, Professional Skills and Interpersonality developement looking for my career growth.",
    // author: 'Ramya',
    // title: 'CEO, Tech Innovations',
    // avatar: 'https://i.pravatar.cc/150?img=1',
    // companyLogo: 'https://via.placeholder.com/100x30?text=Webflow',
    rating: 5, // 5 stars
  },
  {
    id: 2,
    quote: "Good Place to start a career. Transparent and supportive management. Healthy and friendly work environment.",
    // author: 'Michael Chen',
    // title: 'CTO, Startup Solutions',
    // avatar: 'https://i.pravatar.cc/150?img=2',
    // companyLogo: null,
    rating: 5, // 5 stars
  },
  {
    id: 3,
    quote: "I have good experience in the Company, Learnt about the communication and confidence, and I like the culture of the Company",
    // author: 'Emily Rodriguez',
    // title: 'Founder, E-Commerce Hub',
    // avatar: 'https://i.pravatar.cc/150?img=3',
    // companyLogo: null,
    rating: 4, // 4 stars
  },
];

// --- Styled Components Definitions ---

const Section = styled.section`
  max-width: 56rem;
  margin: 0 auto;
  padding: 4rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ArrowButton = styled.button`
  background-color: #374151;
  color: white;
  border: none;
  border-radius: 9999px;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1f2937;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const ReviewContainer = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const StarRating = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

const Quote = styled.blockquote`
  font-size: 1.25rem;
  line-height: 1.6;
  color: #374151;
  margin: 0 auto 2rem auto;
  max-width: 40rem;
  min-height: 100px;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  object-fit: cover;
`;

const AuthorDetails = styled.div`
  text-align: left;
`;

const AuthorName = styled.div`
  font-weight: 600;
`;

const AuthorTitle = styled.div`
  color: #4b5563;
  font-size: 0.875rem;
`;

const Separator = styled.div`
  height: 2rem;
  width: 1px;
  background-color: #d1d5db;
  margin: 0 0.5rem;
`;

const CompanyLogo = styled.img`
  height: 1.5rem;
  width: auto;
`;

// --- The TestimonialSection Component ---

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const currentReview = reviews[currentIndex];

  return (
    <Section>
      <ArrowButton onClick={handlePrev} aria-label="Previous review">
        <HiChevronLeft />
      </ArrowButton>

      <ReviewContainer key={currentReview.id}>
        {/* UPDATED STAR RATING LOGIC */}
        <StarRating>
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <FaStar
                key={index}
                color={ratingValue <= currentReview.rating ? "#f59e0b" : "#d1d5db"}
              />
            );
          })}
        </StarRating>

        <Quote>"{currentReview.quote}"</Quote>

        <AuthorInfo>
          <Avatar src={currentReview.avatar} alt={currentReview.author} />
          <AuthorDetails>
            <AuthorName>{currentReview.author}</AuthorName>
            <AuthorTitle>{currentReview.title}</AuthorTitle>
          </AuthorDetails>
          {currentReview.companyLogo && (
            <>
              <Separator />
              <CompanyLogo src={currentReview.companyLogo} alt="Company Logo" />
            </>
          )}
        </AuthorInfo>
      </ReviewContainer>

      <ArrowButton onClick={handleNext} aria-label="Next review">
        <HiChevronRight />
      </ArrowButton>
    </Section>
  );
}
