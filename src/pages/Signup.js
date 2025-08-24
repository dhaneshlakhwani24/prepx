import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import { signup, signInWithGoogle } from "../utils/auth";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

const Container = styled(motion.div)`
  /* your styles */
`;

const Card = styled(motion.div)`
  /* your styles */
`;

// (Rest of styled-components here...)

// Validation function
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export default function Signup() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errs = {};

    if (!name.trim()) errs.name = "Name is required";
    if (!email.trim()) errs.email = "Email is required";
    else if (!validateEmail(email)) errs.email = "Invalid email";
    if (!password) errs.password = "Password is required";
    else if (password.length < 6) errs.password = "Min 6 characters";
    if (confirm !== password) errs.confirm = "Passwords do not match";

    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    try {
      const user = await signup(email, password, name);
      alert("Welcome " + user.displayName);
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
        <h2 style={{ color: theme.primary, marginBottom: "2rem" }}>PrepX Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
          {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}

          <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}

          <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}

          <input placeholder="Confirm Password" type="password" value={confirm} onChange={e => setConfirm(e.target.value)} />
          {errors.confirm && <div style={{ color: "red" }}>{errors.confirm}</div>}

          <motion.button
            type="submit"
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.03 }}
            style={{
              backgroundColor: theme.primary,
              color: "#fff",
              borderRadius: "10px",
              padding: "15px 0",
              width: "100%",
              fontWeight: 600,
              fontSize: "1.06rem",
              marginTop: "8px",
              cursor: "pointer",
              border: "none",
              boxShadow: "0 6px 18px rgba(102,126,234,0.17)",
              outline: "none"
            }}
          >
            Sign Up
          </motion.button>
        </form>
        <button onClick={handleGoogleLogin} style={{ marginTop: 20, width: "100%", padding: "12px", borderRadius: "10px", cursor: "pointer" }}>
          Continue with Google
        </button>
        <Link to="/login" style={{ display: "block", marginTop: 15, fontSize: "0.95rem", color: theme.accent, textDecoration: "underline" }}>
          Already have an account?
        </Link>
      </Card>
    </Container>
  );
}
