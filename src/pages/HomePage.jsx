import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CatCard from "../components/CatCard";

export default function HomePage() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}galeria`, {
          headers: { Authorization: localStorage.getItem("token") },
        });
        const catsData = res.data || [];
        setCats(catsData);
        console.log(catsData);
      } catch (err) {
        console.error("Erro ao obter os gatos:", err);
      }
    };
    fetchCats();
  }, []);

  return (
    <HomeContainer>
      <h1>Lista de Gatos</h1>
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </HomeContainer>
  );
}
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 50px);
  overflow: auto;
  position: relative;

`;