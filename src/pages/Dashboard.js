import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';

const Container = styled(motion.div)`
  max-width: 1000px;
  margin: 50px auto;
  padding: 40px 50px;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 20px;
  box-shadow: 0 20px 48px rgba(0,0,0,0.12);
  color: ${({ theme }) => theme.text};
  font-family: 'Poppins', sans-serif;
  @media (max-width: 768px) {
    padding: 20px 30px;
    margin: 30px 10px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 2.8rem;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 480px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const LogoWrapper = styled.div`
  width: 80px;
  @media (max-width: 480px) {
    width: 60px;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 26px;
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.input};
  border-radius: 16px;
  padding: 22px 26px;
  box-shadow: 0 10px 24px rgba(102,126,234,0.15);
  color: ${({ theme }) => theme.text};

  h2 {
    font-weight: 600;
    margin-bottom: 14px;
  }

  p {
    font-size: 1rem;
    line-height: 1.4;
  }
`;

export default function Dashboard() {
  return (
    <Container
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Header>
        <Title>Welcome to your PrepX Dashboard</Title>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </Header>
      <CardGrid>
        <Card
          whileHover={{ scale: 1.05, boxShadow: '0 20px 48px rgba(102,126,234,0.3)' }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <h2>Learning Progress</h2>
          <p>Your progress for this month is 75% completed. Keep it up!</p>
        </Card>
        <Card
          whileHover={{ scale: 1.05, boxShadow: '0 20px 48px rgba(102,126,234,0.3)' }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <h2>Upcoming Quizzes</h2>
          <p>You have 3 quizzes scheduled this week. Start preparing!</p>
        </Card>
        <Card
          whileHover={{ scale: 1.05, boxShadow: '0 20px 48px rgba(102,126,234,0.3)' }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <h2>Notifications</h2>
          <p>2 new messages from your instructors.</p>
        </Card>
      </CardGrid>
    </Container>
  );
}
