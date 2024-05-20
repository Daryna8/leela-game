import { NavLink } from "react-router-dom";

import { StyledHeaderContainer, StyledHomeNav } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHomeNav>
        <NavLink to="/">Logo here</NavLink>
      </StyledHomeNav>
    </StyledHeaderContainer>
  );
};
export default Header;
