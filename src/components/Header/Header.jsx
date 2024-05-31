import { NavLink } from "react-router-dom";

import { StyledHeaderContainer, StyledHeaderNav } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </StyledHeaderNav>
    </StyledHeaderContainer>
  );
};
export default Header;
