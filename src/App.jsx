import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import CatProfilePage from "./pages/CatProfile";
import AddCatPage from "./pages/AddCatPage";
import OwnerPage from "./pages/OwnerPage";

export default function App() {

  return (
    <PagesContainer>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/gato/:id" element={<CatProfilePage />} />
        <Route path="/novoMiaudelo" element={<AddCatPage />} />
        <Route path="/profile/:id" element={<OwnerPage />} />
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #f5c3e0;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`;