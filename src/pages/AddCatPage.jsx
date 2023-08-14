import styled from "styled-components";

export default function AddCatPage() {
  
  return (
    <PageContainer>
      <form>
        <input
          type="text"
          name="name"
          value={newCat.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="age"
          value={newCat.age}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="color"
          value={newCat.color}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="breed"
          value={newCat.breed}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="photo"
          value={newCat.photo}
          onChange={handleInputChange}
        />
        <select
          name="status"
          value={newCat.status}
          onChange={handleInputChange}
        >
          <option value={true}>Disponível</option>
          <option value={false}>Indisponível</option>
        </select>
      </form>
    </PageContainer>
  );
}


const PageContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5c3e0;
`;