import styled from "styled-components";

import CloseIcon from "../assets/images/icon-menu-close.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 50;
  background-color: white;
  width: 275px;
  height: 100vh;
  padding: 2rem 1.5rem;
  transition: 0.3s linear;

  &::after {
    content: "";
    width: calc(100% - 275px);
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: black;
    opacity: 0.5;
  }

  @media (min-width: 640px) {
    display: none;
  }
`;

const CloseButton = styled.img`
  width: 3rem;
  align-self: end;
  cursor: pointer;
`;

const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 2rem;
`;

const SidebarLink = styled.li`
  text-transform: capitalize;
  cursor: pointer;
  font-size: 20px;
  font-family: "Inter";
  width: fit-content;
`;

export default (props) => {
  return (
    <Container className={props.isSidbarHidden && "hidden"}>
      <CloseButton src={CloseIcon} onClick={props.closeSidebar} />
      <SidebarList>
        <SidebarLink>home</SidebarLink>
        <SidebarLink>new</SidebarLink>
        <SidebarLink>popular</SidebarLink>
        <SidebarLink>trending</SidebarLink>
        <SidebarLink>categories</SidebarLink>
      </SidebarList>
    </Container>
  );
};
