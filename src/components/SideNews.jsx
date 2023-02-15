import styled from "styled-components";

const Container = styled.div`
  background-color: var(--very-dark-blue);
  padding: 2.5rem 2rem;

  & > h1 {
    color: var(--soft-orange);
    font-size: 2.5rem;
  }

  @media (max-width: 1170px) {
    padding: 1.5rem 2rem;
  }

  @media (max-width: 1040px) {
    padding: 1rem 1.5rem;
  }

  @media (max-width: 640px) {
    margin-top: 3rem;
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const NewsBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 1rem;

  & > h3 {
    color: white;
    cursor: pointer;
    width: fit-content;
    &:hover {
        color var(--soft-orange);
    }
  }

  & > p {
    color: gray;
    font-weight: bold;
  }

  @media (max-width: 1170px) {
    padding: 1rem 0;
  }

  ${(props) => {
    return !props.lastItem && "border-bottom: 2px solid gray;";
  }}
`;

export default () => {
  return (
    <Container>
      <h1>New</h1>
      <NewsBox>
        <h3>Hydrogen VS Electric Cars</h3>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </NewsBox>
      <NewsBox>
        <h3>The Downsides of AI Artistry</h3>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </NewsBox>
      <NewsBox lastItem>
        <h3>Is VC Funding Drying Up?</h3>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </NewsBox>
    </Container>
  );
};
