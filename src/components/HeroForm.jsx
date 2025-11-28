// src/components/home/HeroForm.jsx

import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  background: rgba(3, 6, 23, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 26px;
  padding: clamp(1.5rem, 3vw, 2.75rem);
  width: min(360px, 100%);
  color: #f8fafc;
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(18px);
`;

const FormTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
`;

const FormSubtitle = styled.p`
  margin: 0 0 1.75rem;
  color: var(--text-muted);
  font-size: 0.95rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-secondary);
`;

const sharedFieldStyles = `
  width: 100%;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(15, 23, 42, 0.6);
  padding: 0.85rem 1rem;
  color: #f8fafc;
  transition: border-color 0.2s ease, background 0.2s ease;

  &:focus {
    outline: none;
    border-color: #8b5cf6;
    background: rgba(15, 23, 42, 0.9);
  }

  &::placeholder {
    color: rgba(248, 250, 252, 0.45);
  }
`;

const Input = styled.input`
  ${sharedFieldStyles}
`;

const Select = styled.select`
  ${sharedFieldStyles}
  color: ${props => (props.value === '' ? 'rgba(248, 250, 252, 0.45)' : '#f8fafc')};
`;

const SubmitButton = styled.button`
  margin-top: 0.5rem;
  border: none;
  border-radius: 999px;
  padding: 0.95rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(120deg, #6366f1, #8b5cf6, #ec4899);
  cursor: pointer;
  box-shadow: 0 20px 45px rgba(99, 102, 241, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 30px 55px rgba(236, 72, 153, 0.35);
  }
`;

export default function HeroForm() {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = '919071861881';
    const message = `
      *New Hero Form Inquiry*%0A
      *Name:* ${formData.name}%0A
      *Service Needed:* ${formData.service}%0A
      *Phone:* ${formData.phone}%0A
      *Email:* ${formData.email}
    `;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message.trim()).replace(/\*/g, '%2A')}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <FormContainer data-aos="fade-up">
      <FormTitle>Start Growing Today</FormTitle>
      <FormSubtitle>Select your service and we will reach back in minutes.</FormSubtitle>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          Service Needed
          <Select
            name="service"
            value={formData.service}
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
        </InputGroup>

        <InputGroup>
          Full Name
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </InputGroup>

        <InputGroup>
          Phone Number
          <Input
            type="tel"
            name="phone"
            placeholder="+91 00000 00000"
            value={formData.phone}
            onChange={handleChange}
            required
            autoComplete="tel"
          />
        </InputGroup>

        <InputGroup>
          Work Email
          <Input
            type="email"
            name="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
        </InputGroup>

        <SubmitButton type="submit">Get a Free Quote</SubmitButton>
      </Form>
    </FormContainer>
  );
}
