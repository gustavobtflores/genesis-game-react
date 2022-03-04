import styled from "styled-components";

const GeniusContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Genius = styled.div`
  display: grid;
  grid-template-areas: "green red" "yellow blue";
  grid-gap: 10px;
  border: 1px solid #ffffff;
  background-color: #ffffff;
  border-radius: 100%;
  width: 700px;
  height: 700px;
`;

export { GeniusContainer, Genius };
