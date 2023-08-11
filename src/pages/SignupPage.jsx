import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "/catPaw.png";

export default function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleCpfChange = (event) => {
    setCpf(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}signup`, {
        name,
        cpf,
        phone,
        email,
        password,
      });

      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert(error.response.data.message);
      } else {
        console.error("Erro ao cadastrar usuário:", error);
        alert(
          "Erro ao cadastrar usuário. Verifique os campos e tente novamente."
        );
      }
    }
  };

  return (
    <SignupContainer>
      <LogoImage src={Logo} alt="Logo" />
      <h1> Miaudelos</h1>
      <form onSubmit={handleSignUpSubmit}>
        <input
          placeholder="Nome"
          data-test="name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <input
          placeholder="CPF"
          type="text"
          value={cpf}
          onChange={handleCpfChange}
        />
        <input
          placeholder="Número de telefone"
          type="text"
          value={phone}
          onChange={handlePhoneChange}
        />
        <input
          placeholder="E-mail"
          type="email"
          data-test="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          placeholder="Senha"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          placeholder="Confirme a senha"
          type="password"
          autoComplete="new-password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />{" "}
        {}
        <StyledButton type="submit">Cadastrar</StyledButton>
      </form>
      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </SignupContainer>
  );
}

const SignupContainer = styled.section`
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
