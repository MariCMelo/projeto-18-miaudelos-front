import styled from "styled-components";
import Logo from "/catPaw.png"

export default function SignupPage() {
    return (
        <SignupContainer>
            <LogoImage src={Logo} alt="Logo" />
            <h1> Miaudelos</h1>
            <form>
                <input
                    placeholder="Nome"
                    data-test="name"
                    type="text"
                    // value={name}
                    // onChange={handleNameChange}
                />
                <input
                    placeholder="E-mail"
                    type="email"
                    data-test="email"
                    // value={email}
                    // onChange={handleEmailChange}
                />
                <input
                    placeholder="Senha"
                    data-test="password"
                    type="password"
                    autoComplete="new-password"
                    // value={password}
                    // onChange={handlePasswordChange}
                />
                <input
                    placeholder="Confirme a senha"
                    data-test="conf-password"
                    type="password"
                    autoComplete="new-password"
                    // value={confirmPassword}
                    // onChange={handleConfirmPasswordChange}
                />
               {" "}
                { }
                <StyledButton type="submit">
                    Cadastrar
                </StyledButton>
            </form>
        </SignupContainer>

    )
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
