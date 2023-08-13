import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";

export default function App() {

  return (
    <PagesContainer>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #ff95d3;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`;