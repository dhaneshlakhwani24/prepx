import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import { login, signInWithGoogle } from "../utils/auth";  // Firebase auth helpers
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

const Container = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: center;
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 20px;
  padding: 48px 36px 32px;
  max-width: 430px;
  width: 100%;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  position: relative;
  overflow: hidden;
  transition: background 0.3s;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.primary};
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.03em;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 14px 18px;
  margin-bottom: 17px;
  font-size: 1rem;
  border-radius: 10px;
  border: 1.5px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};
  transition: border-color 0.3s;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 8px ${({ theme }) => theme.primary};
    outline: none;
  }
`;

const Btn = styled(motion.button)`
  background: ${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 15px 0;
  width: 100%;
  font-weight: 600;
  font-size: 1.06rem;
  margin-top: 8px;
  cursor: pointer;
  letter-spacing: 0.03em;
  box-shadow: 0 6px 18px rgba(102, 126, 234, 0.17);
  outline: none;
`;

const SubLink = styled(Link)`
  display: block;
  margin-top: 15px;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.accent};
  cursor: pointer;
  text-decoration: underline;
`;

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, password);
      alert("Welcome back, " + user.displayName);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithGoogle();
      alert("Logged in as " + user.displayName);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <Card initial={{ y: 42, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15, duration: 0.7 }}>
        <Logo />
        <Title>PrepX Log In</Title>
        <form onSubmit={handleSubmit}>
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Btn type="submit" whileTap={{ scale: 0.96 }} whileHover={{ scale: 1.03 }}>
            Log In
          </Btn>
        </form>
        <Btn
          onClick={handleGoogleLogin}
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.03 }}
          style={{ marginTop: "20px", backgroundColor: "#db4437" }}
        >
          Log In with Google
        </Btn>
        <SubLink to="/signup">Don't have an account? Sign up</SubLink>
      </Card>
    </Container>
  );
}
