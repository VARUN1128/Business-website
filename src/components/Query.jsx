// src/components/Query.jsx
import React, { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

// Backdrop behind the modal
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  opacity: ${props => (props.$isOpen ? 1 : 0)};
  pointer-events: ${props => (props.$isOpen ? 'auto' : 'none')} !important;
  transition: opacity 220ms ease-in-out;
  z-index: ${props => (props.$isOpen ? 1000 : -1)};
  visibility: ${props => (props.$isOpen ? 'visible' : 'hidden')};
  display: ${props => (props.$isOpen ? 'block' : 'none')};
`;

// Centered modal container
const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  display: ${props => (props.$isOpen ? 'grid' : 'none')};
  place-items: center;
  z-index: ${props => (props.$isOpen ? 1001 : -1)};
  pointer-events: none !important; /* container itself shouldn't catch clicks */
`;

// The query box
const ModalCard = styled.div`
  pointer-events: auto; /* card is interactive */
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.25);
  transform: ${props => (props.$isOpen ? 'scale(1)' : 'scale(0.94)')};
  opacity: ${props => (props.$isOpen ? 1 : 0)};
  transition: transform 240ms ease, opacity 240ms ease;
  border: 1px solid #e5e7eb;
`;

// Header with title and close button
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem 0.5rem 1.25rem;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
  color: #111827;
`;

const CloseBtn = styled.button`
  border: none;
  background: transparent;
  color: #6b7280;
  display: grid;
  place-items: center;
  border-radius: 8px;
  padding: 6px;
  cursor: pointer;
  transition: background 160ms ease, transform 160ms ease;
  &:hover {
    background: #f3f4f6;
    transform: rotate(90deg);
  }
  svg {
    width: 22px;
    height: 22px;
  }
`;

const Body = styled.div`
  padding: 0.75rem 1.25rem 1.25rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.35rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.7rem 0.9rem;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  font-size: 0.95rem;
  transition: border-color 160ms ease, box-shadow 160ms ease;
  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.7rem 0.9rem;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  font-size: 0.95rem;
  background: #fff;
  color: ${props => (props.value === '' ? '#6b7280' : '#111827')};
  transition: border-color 160ms ease, box-shadow 160ms ease;
  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  margin-top: 0.5rem;
`;

const CancelBtn = styled.button`
  border: 1px solid #e5e7eb;
  background: #fff;
  color: #374151;
  padding: 0.65rem 1rem;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: background 160ms ease;
  &:hover { background: #f9fafb; }
`;

const SubmitBtn = styled.button`
  background: #25D366; /* WhatsApp green */
  color: #fff;
  border: none;
  padding: 0.65rem 1rem;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: background 160ms ease, transform 120ms ease;
  &:hover { background: #128C7E; }
  &:active { transform: translateY(1px); }
`;

// Helper to stop click bubbling on card
const stop = (e) => e.stopPropagation();

export default function Query({
  isOpen = false,
  onClose = () => {},
  defaultService = '',
  waNumber = '919071861881', // Change to your WhatsApp number (no +, spaces, or dashes)
}) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService || '',
  });

  // Keep service in sync if parent changes defaultService before open
  useEffect(() => {
    if (isOpen) {
      setForm(prev => ({ ...prev, service: defaultService || '' }));
    }
  }, [isOpen, defaultService]);

  const onEsc = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', onEsc);
      return () => document.removeEventListener('keydown', onEsc);
    }
  }, [isOpen, onEsc]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic guard
    if (!form.service) {
      alert('Please select a service.');
      return;
    }

    const message = `
*New Query from Website*
*Name:* ${form.name}
*Service:* ${form.service}
*Phone:* ${form.phone}
*Email:* ${form.email}
    `.trim();

    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message).replace(/\*/g, '%2A')}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <>
      <Backdrop $isOpen={isOpen} onClick={onClose} />
      <ModalContainer $isOpen={isOpen}>
        <ModalCard $isOpen={isOpen} onClick={stop} aria-modal="true" role="dialog">
          <Header>
            <Title>Quick Query</Title>
            <CloseBtn onClick={onClose} aria-label="Close">
              <IoClose />
            </CloseBtn>
          </Header>
          <Body>
            <Form onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="service">Service</Label>
                <Select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select a Service</option>
                  <option>Digital Marketing</option>
                  <option>Web Development</option>
                  <option>Backend Solutions</option>
                  <option>Staffing Services</option>
                  <option>Consulting</option>
                </Select>
              </div>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
              </div>

              <Actions>
                <CancelBtn type="button" onClick={onClose}>Cancel</CancelBtn>
                <SubmitBtn type="submit">Send via WhatsApp</SubmitBtn>
              </Actions>
            </Form>
          </Body>
        </ModalCard>
      </ModalContainer>
    </>
  );
}
