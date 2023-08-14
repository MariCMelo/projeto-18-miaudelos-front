import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleOwnerClick = async () => {
    const sessionToken = localStorage.getItem("token");

    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}profile/${sessionToken}`,
        {
          headers: { Authorization: sessionToken },
        }
      );

      console.log(res);
      navigate(`profile/${userId}`);
    } catch (err) {
      console.error("Erro ao obter perfil:", err);
    }
  };

  return (
    <HomeContainer>
      <Header>
        <StyledNav>
          <div onClick={handleOwnerClick}>
            <ion-icon name="paw"></ion-icon> <a href="#">Miau Perfil</a>
          </div>
          <div onClick={handleLogout}>
            <ion-icon name="paw"></ion-icon> <a href="#">Logout</a>
          </div>
        </StyledNav>
      </Header>

      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </HomeContainer>
  );
}
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2px 5px 2px;
  margin-bottom: 15px;
  font-size: 26px;
  color: white;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 50px);
  overflow: auto;
  position: relative;
`;

const StyledNav = styled.nav`
  flex-direction: row;
  margin-right: 10px;
  display: flex;
  align-items: ro;

  ion-icon {
    margin-left: 8px;
  }

  a {
    font-size: 18px;
    text-decoration: none;
    color: #333; /* Cor do link */
    font-weight: bold;
  }
`;
