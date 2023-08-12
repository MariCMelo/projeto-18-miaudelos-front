import React from "react";
import styled from "styled-components";
import Logo from "/catPaw.png";

const CatCard = ({ cat }) => {
  return (
    <Card>
      <ImageContainer src={cat.photo} alt={cat.name} />
      <CatName>{cat.name}</CatName>
      <CatInfoContainer>
        <CatInfo>
          <List>
            <li>Idade: {cat.age}</li>
            <li>Cor: {cat.color}</li>
            <li>Raça: {cat.breed}</li>
          </List>
        </CatInfo>
        <>
          <StatusText status={cat.status}>
            <CatStatus src={Logo} alt={cat.name} status={cat.status} />
            {cat.status ? "Disponível" : "Indisponível"}
          </StatusText>
        </>
      </CatInfoContainer>
    </Card>
  );
};

const CatInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 80%;
  max-width: 300px;
  margin-bottom: 16px;
`;
const ImageContainer = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  margin-bottom: 16px;
  cursor: pointer;
  border-radius: 10px;
`;
const CatInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

const List = styled.ul`
  list-style: none; 
  padding: 0;
  margin: 0;
  text-align: center;
`;
const CatName = styled.h2`
  font-weight: bold;
`;

const CatStatus = styled.img`
display: flex;
align-items: center;
  width: 70px;
  height: 70px;
  object-fit: cover;
  margin-bottom: 16px;
  cursor: pointer;
  filter: ${({ status }) =>
    status
      ? "brightness(1) saturate(1.5) hue-rotate(120deg)"
      : "brightness(1) saturate(1.5) hue-rotate(0deg)"};
`;

const StatusText = styled.p`
  font-weight: bold;
  color: ${({ status }) => (status ? "green" : "red")};
`;
export default CatCard;
