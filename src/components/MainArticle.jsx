import styled from "styled-components";

import DesktopImage from "../assets/images/image-web-3-desktop.jpg";
import MobileImage from "../assets/images/image-web-3-mobile.jpg";

const MainArticle = styled.section`
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  & > img {
    grid-column: span 2;
    height: 100%;
  }

  & > .mobile-image {
    display: none;
  }

  & > h1 {
    font-family: "Inter extra Bold";
    font-size: 4rem;
  }

  @media (max-width: 1170px) {
    & > h1 {
      font-size: 3.5rem;
    }
  }

  @media (max-width: 1040px) {
    gap: 1rem;
    & > h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 800px) {
    & > h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 640px) {
    display: block;

    & > .mobile-image {
      display: block;
      margin-bottom: 1rem;
    }

    & > .desktop-image {
      display: none;
    }

    & > h1 {
      font-size: 42px;
    }
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 1rem;

  & > p {
    line-height: 1.5rem;
    color: gray;
    font-weight: 700;
  }

  @media (max-width: 1170px) {
    gap: 3rem;
    padding: 0;
  }

  @media (max-width: 640px) {
    padding: 0;
    margin-top: 1rem;
    gap: 1.5rem;
  }
`;

const ReadMoreBtn = styled.div`
  padding: 1rem 2rem;
  background-color: var(--soft-red);
  color: white;
  width: fit-content;
  font-family: "Inter Bold";
  letter-spacing: 3px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: var(--very-dark-blue);
  }
`;

export default () => {
  return (
    <MainArticle id="main-article">
      <img src={DesktopImage} className="desktop-image" />
      <img src={MobileImage} className="mobile-image" />
      <h1>The Bright Future of Web 3.0?</h1>
      <FlexColumn>
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <ReadMoreBtn>Read more</ReadMoreBtn>
      </FlexColumn>
    </MainArticle>
  );
};
