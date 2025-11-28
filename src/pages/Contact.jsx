import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PageWrapper = styled.main`
  display: flex;
  justify-content: center;
  padding: clamp(2rem, 5vw, 4rem) 0;
`;

const Section = styled.section`
  width: min(1000px, 100%);
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 5vw, 3rem);
`;

const Header = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: clamp(2.3rem, 4vw, 3rem);
  margin: 0 0 0.75rem;
`;

const Subtitle = styled.p`
  margin: 0;
  color: var(--text-muted);
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(1.5rem, 4vw, 2.5rem);

  @media (min-width: 720px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
`;

const FormWrapper = styled.form`
  background: rgba(8, 12, 33, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  box-shadow: var(--shadow-md);
`;

const FormGroup = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: var(--text-secondary);
`;

const sharedField = `
  width: 100%;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(15, 23, 42, 0.7);
  color: var(--text-primary);
  padding: 0.85rem 1rem;
  transition: border-color 0.2s ease, background 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--accent);
    background: rgba(15, 23, 42, 0.95);
  }
`;

const Input = styled.input`
  ${sharedField}
`;

const Textarea = styled.textarea`
  ${sharedField}
  min-height: 120px;
  resize: vertical;
`;

const Select = styled.select`
  ${sharedField}
`;

const SubmitButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 999px;
  padding: 0.95rem 1.2rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  background: linear-gradient(120deg, #6366f1, #a855f7, #ec4899);
  color: white;
  cursor: pointer;
  box-shadow: 0 25px 45px rgba(99, 102, 241, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 35px 60px rgba(236, 72, 153, 0.35);
  }
`;

const FormStatus = styled.p`
  margin-top: 0.75rem;
  font-weight: 600;
  color: ${props => (props.success ? '#10b981' : '#f87171')};
  min-height: 1.25rem;
`;

const ContactCard = styled.div`
  background: rgba(8, 12, 33, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    margin: 0;
    color: var(--text-secondary);
    line-height: 1.7;
  }

  a {
    color: var(--accent-2);
    font-weight: 600;
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
      setStatus({ message: '✅ Submitted successfully!', success: true });
      form.reset();
      setFormData({ name: '', email: '', whatsapp: '', service: '', message: '' });
    })
    .catch((err) => {
      console.error("Submission failed:", err);
      setStatus({ message: '❌ Something went wrong.', success: false });
    });
  };

  return (
    <PageWrapper>
      <Section>
        <Header data-aos="fade-up">
          <div className="eyebrow">Contact Us</div>
          <Title>Reach out for projects, partnerships, or recruitment</Title>
          <Subtitle>Reach out to us with your queries, or request a service below.</Subtitle>
        </Header>

        <ContentGrid>
          <FormWrapper id="contactForm" onSubmit={handleSubmit} data-aos="zoom-in">
            <FormGroup>
              <Label htmlFor="name">Full Name*</Label>
              <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email*</Label>
              <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="whatsapp">WhatsApp (optional)</Label>
              <Input type="text" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="+91..." />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="service">Service Interested In*</Label>
              <Select id="service" name="service" value={formData.service} onChange={handleChange} required>
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
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" />
            </FormGroup>

            <SubmitButton type="submit">Submit</SubmitButton>
            <FormStatus success={status.success}>{status.message}</FormStatus>
          </FormWrapper>

          <ContactCard data-aos="fade-left" data-aos-delay="150">
            <p>
              <strong>Location</strong><br />
              Richmond Circle, 301, 3rd Floor, Andree Capitol Building Behind Axis Bank, Doule Road, Kengal Hanumanthaiah Rd, Shanti Nagar, Bengaluru, Karnataka 560027
            </p>
            <p>
              <strong>Phone:</strong> +91 9071861881
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:hrdlegacy@gmail.com">hrdlegacy@gmail.com</a>
            </p>
            <p>
              <strong>WhatsApp:</strong> <a href="https://wa.me/918310312791" target="_blank" rel="noopener noreferrer">Chat Now</a>
            </p>
          </ContactCard>
        </ContentGrid>
      </Section>
    </PageWrapper>
  );
};

export default ContactPage;

