import { NavLink } from "react-router-dom";

import { StyledHeaderContainer, StyledHeaderNav } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Services</NavLink>
        <NavLink to="/">Contact</NavLink>
      </StyledHeaderNav>
    </StyledHeaderContainer>
  );
};
export default Header;
