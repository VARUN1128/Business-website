import React, { useState } from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { IoChatbubbleEllipses, IoClose } from 'react-icons/io5';

// --- Styled Components ---

const FABContainer = styled.div`
  position: fixed;
  bottom: clamp(1.5rem, 4vw, 2rem);
  right: clamp(1.5rem, 4vw, 2rem);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
    bottom: 1.25rem;
    right: 1.25rem;
  }
`;

// NEW: A wrapper for the secondary action buttons
const ActionButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem; /* Space between the action buttons */
  margin-bottom: 1rem;
`;

const ActionButton = styled.a`
  background-color: ${props => props.color || '#6c63ff'};
  color: white;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Added a bouncy transition */
  
  /* Animate based on the open state */
  opacity: ${props => (props.$isOpen ? 1 : 0)};
  transform: ${props => (props.$isOpen ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.5)')};
  visibility: ${props => (props.$isOpen ? 'visible' : 'hidden')};
  
  &:hover {
    transform: ${props => (props.$isOpen ? 'scale(1.1)' : 'translateY(20px) scale(0.5)')};
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }

  svg {
    font-size: 1.5rem;
  }
`;

const MainButton = styled.div`
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
  color: white;
  width: clamp(56px, 8vw, 64px);
  height: clamp(56px, 8vw, 64px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4), 0 4px 12px rgba(236, 72, 153, 0.3);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  border: 2px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 480px) {
    width: 56px;
    height: 56px;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 32px rgba(99, 102, 241, 0.5), 0 6px 16px rgba(236, 72, 153, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    font-size: clamp(1.5rem, 3vw, 1.75rem);
    
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
`;

const IconWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .main-icon, .close-icon {
    position: absolute;
    transition: opacity 0.2s ease-in-out, transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  .main-icon {
    opacity: ${props => (props.$isOpen ? 0 : 1)};
    transform: ${props => (props.$isOpen ? 'rotate(-90deg) scale(0)' : 'rotate(0) scale(1)')};
  }
  
  .close-icon {
    opacity: ${props => (props.$isOpen ? 1 : 0)};
    transform: ${props => (props.$isOpen ? 'rotate(0) scale(1)' : 'rotate(90deg) scale(0)')};
  }
`;

// --- The Component ---

export default function FloatingActionMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const whatsAppNumber = '919071861881'; // WhatsApp format: country code + number
  const phoneNumber = '919071861881';

  return (
    <FABContainer>
      <ActionButtonsWrapper>
        <ActionButton
          href={`https://wa.me/${whatsAppNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          color="#25D366" // WhatsApp Green
          $isOpen={isOpen}
          title="Chat on WhatsApp"
        >
          <FaWhatsapp />
        </ActionButton>
        
        <ActionButton
          href={`tel:${phoneNumber}`}
          color="#34B7F1" // Call blue
          $isOpen={isOpen}
          title="Call Us"
        >
          <FaPhoneAlt />
        </ActionButton>
      </ActionButtonsWrapper>

      <MainButton onClick={toggleMenu} title={isOpen ? "Close Menu" : "Contact Us"}>
        <IconWrapper $isOpen={isOpen}>
          <IoChatbubbleEllipses className="main-icon" />
          <IoClose className="close-icon" />
        </IconWrapper>
      </MainButton>
    </FABContainer>
  );
}
