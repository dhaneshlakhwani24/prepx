import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';

const Container = styled(motion.div)`
  max-width: 600px;
  margin: 60px auto;
  background: ${({ theme }) => theme.cardBg};
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 18px 36px rgba(0,0,0,0.12);
  color: ${({ theme }) => theme.text};
  font-family: 'Poppins', sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const LogoWrapper = styled.div`
  width: 90px;
  margin: 0 auto 16px auto;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
`;

const InfoItem = styled.div`
  margin-bottom: 22px;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding-bottom: 10px;
`;

const Label = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.accent};
`;

const Value = styled.span`
  color: ${({ theme }) => theme.text};
`;

export default function Profile() {
  return (
    <Container
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Header>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Title>Your Profile</Title>
      </Header>
      <InfoItem>
        <Label>Name:</Label>
        <Value>John Doe</Value>
      </InfoItem>
      <InfoItem>
        <Label>Email:</Label>
        <Value>johndoe@example.com</Value>
      </InfoItem>
      <InfoItem>
        <Label>Username:</Label>
        <Value>johndoe123</Value>
      </InfoItem>
    </Container>
  );
}
