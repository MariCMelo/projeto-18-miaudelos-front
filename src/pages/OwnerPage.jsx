import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CatCard from "../components/CatCard";

export default function OwnerPage() {
  const { id } = useParams();
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}profile/${id}`, {
          headers: { Authorization: localStorage.getItem("token") },
        });
        const catsData = res.data || [];
        setCats(catsData);
      } catch (err) {
        console.error("Erro ao obter os gatos:", err);
      }
    };
    fetchCats();
  }, []);

  return (
    <PageContainer>
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
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
`;
