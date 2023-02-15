import styled from "styled-components";

import LogoImage from "../assets/images/logo.svg";
import BarsIcon from "../assets/images/icon-menu.svg";

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 5rem;

  @media (max-width: 800px) {
    width: 3.5rem;
  }

  @media (max-width: 640px) {
    width: 4rem;
  }
`;

const MenuBars = styled.img`
  width: 3rem;
  cursor: pointer;
  display: none;

  @media (max-width: 640px) {
    display: block;
  }
`;

const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 640px) {
    display: none;
  }
`;

const NavbarLink = styled.li`
  text-transform: capitalize;
  color: var(--light-500);
  cursor: pointer;
  &:hover {
    color: var(--soft-red);
  }
`;

export default (props) => {
  return (
    <Navbar>
      <Logo src={LogoImage} />
      <NavbarList id="nav-ul">
        <NavbarLink>home</NavbarLink>
        <NavbarLink>new</NavbarLink>
        <NavbarLink>popular</NavbarLink>
        <NavbarLink>trending</NavbarLink>
        <NavbarLink>categories</NavbarLink>
      </NavbarList>
      <MenuBars src={BarsIcon} onClick={props.sidebarToggle} />
    </Navbar>
  );
};
