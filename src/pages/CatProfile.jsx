import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function CatProfilePage() {
  const [cat, setCat] = useState(null); // Inicialize com null
  const { id } = useParams();

  const backToHome = () => {
    navigate("/home")
  };
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCat() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}gato/${id}`
        );
        console.log(response.data);
        setCat(response.data);
      } catch (err) {
        console.error("Erro ao buscar o gato:", err);
      }
    }
    fetchCat();
  }, [id]);

  return (
    <PageContainer>
      {cat && (
        <>
          <CatInfo>
            <h1> {cat.cat.name}</h1>

            <StyledLi>Idade: {cat.cat.age}</StyledLi>
            <StyledLi>Raça: {cat.cat.breed}</StyledLi>
            <StyledLi>Cor: {cat.cat.color}</StyledLi>
          </CatInfo>

          <OwnerInfo>
            <h2>Tutor(a):</h2>

            <StyledLi>Nome: {cat.owner.name}</StyledLi>
            <StyledLi>Telefone: {cat.owner.phone}</StyledLi>
            <StyledLi>Email: {cat.owner.email}</StyledLi>
          </OwnerInfo>

          <CatPhoto src={cat.cat.photo} alt={cat.name} />
          <button onClick={backToHome}>
            Voltar
          </button>
        </>
      )}
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 50px);
  overflow: auto;
  position: relative;
  h1 {
    font-size: 40px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    /* Outras propriedades de estilo */
  }
 
`;

const CatInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const OwnerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLi = styled.li`
  margin-bottom: 5px;
  font-size: 20px;
  display: flex;
  align-items: center;
`;
const CatPhoto = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-top: 40px;
  margin-bottom: 16px;
  cursor: pointer;
  border-radius: 10px;
`;
