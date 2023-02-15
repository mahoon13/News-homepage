import styled from "styled-components";

import MainArticle from "./MainArticle";
import SideNews from "./SideNews";

const Container = styled.section`
  margin: 4rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  gap: 3rem;

  @media (max-width: 1170px) {
    margin: 2rem 0;
  }

  @media (max-width: 1040px) {
    gap: 1.5rem;
  }

  @media (max-width: 800px) {
    gap: 0.5rem;
  }

  @media (max-width: 640px) {
    display: block;
    margin: 2rem 0;
  }
`;

export default () => {
  return (
    <Container id="container">
      <MainArticle />
      <SideNews />
    </Container>
  );
};
