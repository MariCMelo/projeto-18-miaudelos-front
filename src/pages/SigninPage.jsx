import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Logo from "/catPaw.png";
import axios from "axios";

export default function SigninPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}signin`,
        {
          email,
          password,
        }
      );
      console.log("olá");
      console.log(response);
      const { token, userId } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("userEmail", email);

      navigate("/home");
      console.log("Login feito com sucesso!");
      console.log(token);
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message;

        if (errorMessage === "E-mail não cadastrado!") {
          setError("E-mail não cadastrado!");
          alert("E-mail não cadastrado!");
        } else if (errorMessage === "Senha incorreta!") {
          setError("Senha incorreta!");
          alert("Senha incorreta!");
        } else {
          setError("Erro ao fazer login.");
          alert("Erro ao fazer login.");
        }
      } else {
        setError("Erro ao fazer login.");
        alert("Erro ao fazer login.");
      }
    }
  };

  return (
    <SigninContainer>
      <form onSubmit={handleLogin}>
        <LogoImage src={Logo} alt="Logo" />
        <h1> Miaudelos</h1>
        <input
          placeholder="E-mail"
          data-test="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Senha"
          data-test="password"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton type="submit">Login</StyledButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </form>
      <Link to="/register">Não tem uma conta? Cadastre-se aqui!</Link>
    </SigninContainer>
  );
}

const SigninContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ff95d3;
`;

const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledButton = styled.button`
  background-color: #906db9;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;
const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;
