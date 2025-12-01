import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const PageWrapper = styled.main`
  width: 100%;
  padding: clamp(2rem, 5vw, 5rem) clamp(1rem, 3vw, 3rem);
  background: linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%);

  @media (max-width: 480px) {
    padding: 1.5rem 0.75rem;
  }
`;

const Section = styled.section`
  width: min(1200px, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 6vw, 5rem);
`;

const Header = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Eyebrow = styled.div`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--accent-2);
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 6vw, 3.5rem);
  margin: 0 0 clamp(0.75rem, 1.5vw, 1rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-primary);

  @media (max-width: 480px) {
    font-size: clamp(1.75rem, 7vw, 2.25rem);
  }
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  color: var(--text-secondary);
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: clamp(0.85rem, 3vw, 1rem);
    line-height: 1.5;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 4vw, 3rem);

  @media (min-width: 900px) {
    grid-template-columns: 1.2fr 1fr;
  }
`;

const FormWrapper = styled.form`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: clamp(24px, 4vw, 32px);
  padding: clamp(1.5rem, 3vw, 3rem);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 20px;
  }

  &:hover {
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
  }
`;

const FormTitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 700;
  margin: 0 0 clamp(1rem, 2vw, 1.5rem);
  color: var(--text-primary);

  @media (max-width: 480px) {
    font-size: clamp(1.1rem, 4vw, 1.3rem);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &::after {
    content: ${props => (props.required ? '"*"' : '""')};
    color: #ef4444;
    font-weight: 700;
  }
`;

const sharedField = `
  width: 100%;
  border-radius: clamp(12px, 2vw, 14px);
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  background: #ffffff;
  color: var(--text-primary);
  padding: clamp(0.85rem, 2vw, 0.95rem) clamp(1rem, 2vw, 1.25rem);
  font-size: clamp(0.9rem, 2vw, 1rem);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;

  @media (max-width: 480px) {
    padding: 0.8rem 0.9rem;
    font-size: 0.9rem;
  }

  &:focus {
    outline: none;
    border-color: var(--accent);
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: var(--text-muted);
    opacity: 0.6;
  }

  &:hover:not(:focus) {
    border-color: rgba(0, 0, 0, 0.15);
  }
`;

const Input = styled.input`
  ${sharedField}
`;

const Textarea = styled.textarea`
  ${sharedField}
  min-height: 140px;
  resize: vertical;
  line-height: 1.6;
`;

const Select = styled.select`
  ${sharedField}
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;

  &:invalid {
    color: var(--text-muted);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 999px;
  padding: clamp(0.9rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem);
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  background: linear-gradient(120deg, #6366f1, #a855f7, #ec4899);
  color: white;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 0.5rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 480px) {
    padding: 0.85rem 1.25rem;
    font-size: 0.9rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(236, 72, 153, 0.4);
    background: linear-gradient(120deg, #818cf8, #a855f7, #f472b6);
  }

  &:hover::before {
    left: 100%;
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const FormStatus = styled.div`
  margin-top: 1rem;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  font-weight: 500;
  font-size: 0.95rem;
  text-align: center;
  background: ${props => (props.success ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)')};
  color: ${props => (props.success ? '#10b981' : '#ef4444')};
  border: 1px solid ${props => (props.success ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)')};
  min-height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
`;

const ContactCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: clamp(24px, 4vw, 32px);
  padding: clamp(1.5rem, 3vw, 3rem);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 2.5vw, 2rem);
  height: fit-content;
  position: sticky;
  top: 2rem;

  @media (max-width: 900px) {
    position: static;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 20px;
    gap: 1.25rem;
  }
`;

const ContactCardTitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 700;
  margin: 0 0 clamp(0.4rem, 1vw, 0.5rem);
  color: var(--text-primary);

  @media (max-width: 480px) {
    font-size: clamp(1.1rem, 4vw, 1.3rem);
  }
`;

const ContactCardSubtitle = styled.p`
  margin: 0 0 clamp(1rem, 2vw, 1.5rem);
  color: var(--text-secondary);
  font-size: clamp(0.85rem, 2vw, 0.95rem);
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: clamp(0.8rem, 3vw, 0.9rem);
    line-height: 1.5;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: clamp(0.75rem, 1.5vw, 1rem);
  padding: clamp(1rem, 2vw, 1.25rem);
  border-radius: clamp(16px, 2.5vw, 18px);
  background: #f8fafc;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  @media (max-width: 480px) {
    padding: 0.875rem;
    gap: 0.75rem;
    border-radius: 14px;
  }

  &:hover {
    background: #f1f5f9;
    border-color: rgba(99, 102, 241, 0.2);
    transform: translateX(4px);
  }
`;

const IconWrapper = styled.div`
  width: clamp(40px, 6vw, 48px);
  height: clamp(40px, 6vw, 48px);
  border-radius: clamp(12px, 2vw, 14px);
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.25);

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    border-radius: 12px;
  }

  svg {
    font-size: clamp(1rem, 2vw, 1.25rem);
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ContactLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
`;

const ContactValue = styled.a`
  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
  line-height: 1.6;
  word-break: break-word;

  &:hover {
    color: var(--accent);
  }

  &.address {
    color: var(--text-secondary);
    cursor: default;
    line-height: 1.7;
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState({ message: '', success: false });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setStatus({ message: 'Submitting...', success: true });

    fetch("https://script.google.com/macros/s/AKfycbyefiDPmfYriuyAjOsgq-G-84McByOugK5oQNn6NiOBuavETiA3RTiAPhvVu9JmNgOZAQ/exec", {
      method: "POST",
      body: data,
    })
    .then(() => {
      setStatus({ message: '✅ Submitted successfully! We\'ll get back to you soon.', success: true });
      form.reset();
      setFormData({ name: '', email: '', whatsapp: '', service: '', message: '' });
      setTimeout(() => {
        setStatus({ message: '', success: false });
      }, 5000);
    })
    .catch((err) => {
      console.error("Submission failed:", err);
      setStatus({ message: '❌ Something went wrong. Please try again.', success: false });
    });
  };

  return (
    <PageWrapper>
      <Section>
        <Header data-aos="fade-up">
          <Eyebrow>Contact Us</Eyebrow>
          <Title>Reach out for projects, partnerships, or recruitment</Title>
          <Subtitle>Reach out to us with your queries, or request a service below.</Subtitle>
        </Header>

        <ContentGrid>
          <FormWrapper id="contactForm" onSubmit={handleSubmit} data-aos="fade-right">
            <FormTitle>Send us a message</FormTitle>
            
            <FormGroup>
              <Label htmlFor="name" required>Full Name</Label>
              <Input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="John Doe"
                required 
                autoComplete="name"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email" required>Email</Label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="john@example.com"
                required 
                autoComplete="email"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="whatsapp">WhatsApp (optional)</Label>
              <Input 
                type="tel" 
                id="whatsapp" 
                name="whatsapp" 
                value={formData.whatsapp} 
                onChange={handleChange} 
                placeholder="+91 98765 43210"
                autoComplete="tel"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="service" required>Service Interested In</Label>
              <Select 
                id="service" 
                name="service" 
                value={formData.service} 
                onChange={handleChange} 
                required
              >
                <option value="">-- Select a Service --</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Web Development">Web Development</option>
                <option value="Backend Solutions">Backend Solutions</option>
                <option value="Staffing Services">Staffing Services</option>
                <option value="General Consultation">General Consultation</option>
                <option value="Other">Other</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Your Message</Label>
              <Textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows="5"
                placeholder="Tell us about your project or inquiry..."
              />
            </FormGroup>

            <SubmitButton type="submit">Submit</SubmitButton>
            {status.message && (
              <FormStatus success={status.success}>{status.message}</FormStatus>
            )}
          </FormWrapper>

          <ContactCard data-aos="fade-left" data-aos-delay="150">
            <div>
              <ContactCardTitle>Get in touch</ContactCardTitle>
              <ContactCardSubtitle>We're here to help. Reach out through any of these channels.</ContactCardSubtitle>
            </div>

            <ContactItem>
              <IconWrapper>
                <FaMapMarkerAlt />
              </IconWrapper>
              <ContactInfo>
                <ContactLabel>Location</ContactLabel>
                <ContactValue 
                  href="https://maps.google.com/?q=Richmond+Circle,+301,+3rd+Floor,+Andree+Capitol+Building+Behind+Axis+Bank,+Doule+Road,+Kengal+Hanumanthaiah+Rd,+Shanti+Nagar,+Bengaluru,+Karnataka+560027" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="address"
                >
                  Richmond Circle, 301, 3rd Floor, Andree Capitol Building Behind Axis Bank, Doule Road, Kengal Hanumanthaiah Rd, Shanti Nagar, Bengaluru, Karnataka 560027
                </ContactValue>
              </ContactInfo>
            </ContactItem>

            <ContactItem>
              <IconWrapper>
                <FaPhoneAlt />
              </IconWrapper>
              <ContactInfo>
                <ContactLabel>Phone</ContactLabel>
                <ContactValue href="tel:+919071861881">+91 9071861881</ContactValue>
              </ContactInfo>
            </ContactItem>

            <ContactItem>
              <IconWrapper>
                <FaEnvelope />
              </IconWrapper>
              <ContactInfo>
                <ContactLabel>Email</ContactLabel>
                <ContactValue href="mailto:hrdlegacy@gmail.com">hrdlegacy@gmail.com</ContactValue>
              </ContactInfo>
            </ContactItem>

            <ContactItem>
              <IconWrapper>
                <FaWhatsapp />
              </IconWrapper>
              <ContactInfo>
                <ContactLabel>WhatsApp</ContactLabel>
                <ContactValue href="https://wa.me/919071861881" target="_blank" rel="noopener noreferrer">
                  Chat Now →
                </ContactValue>
              </ContactInfo>
            </ContactItem>
          </ContactCard>
        </ContentGrid>
      </Section>
    </PageWrapper>
  );
};

export default ContactPage;
