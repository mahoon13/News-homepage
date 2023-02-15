import styled from "styled-components";

import Thumbnail1 from "/image-retro-pcs.jpg";
import Thumbnail2 from "/image-top-laptops.jpg";
import Thumbnail3 from "/image-gaming-growth.jpg";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ArticleBox = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  & > img {
    width: 100px;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 1040px) {
    gap: 0.75rem;
  }
`;

const ArticleBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > h1 {
    color: var(--grayish-blue);
  }

  & > h3 {
    font-family: "Inter extra Bold";
    cursor: pointer;
    width: fit-content;
    &:hover {
      color: var(--soft-red);
    }
  }

  & > p {
    color: gray;
  }
`;

export default () => {
  return (
    <Container>
      <ArticleBox>
        <img src={Thumbnail1} />
        <ArticleBody>
          <h1>01</h1>
          <h3>Reviving Retro PCs</h3>
          <p>What happens when old PCs are given modern upgrades?</p>
        </ArticleBody>
      </ArticleBox>

      <ArticleBox>
        <img src={Thumbnail2} />
        <ArticleBody>
          <h1>02</h1>
          <h3>Top 10 Laptops of 2022</h3>
          <p>Our best picks for various needs and budgets.</p>
        </ArticleBody>
      </ArticleBox>

      <ArticleBox>
        <img src={Thumbnail3} />
        <ArticleBody>
          <h1>03</h1>
          <h3>The Growth of Gaming</h3>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </ArticleBody>
      </ArticleBox>
    </Container>
  );
};
