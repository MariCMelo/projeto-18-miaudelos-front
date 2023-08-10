import styled from "styled-components";
import Logo from "/catPaw.png"



export default function SigninPage() {

    return (
        <SigninContainer>
            <form>
          <LogoImage src={Logo} alt="Logo" />
          <h1> Miaudelos</h1>
          <input
          placeholder="E-mail"
          data-test="email"
          type="email"
        //   value={email}
        //   onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Senha"
          data-test="password"
          type="password"
          autoComplete="new-password"
        //   value={password}
        //   onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton>
            Login
        </StyledButton>
        </form>
        </SigninContainer>
    )

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
