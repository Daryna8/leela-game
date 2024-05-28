import { NavLink } from "react-router-dom";
import LeelaInfo from "../LeelaInfo/LeelaInfo";
import {
  StyledCard,
  StyledHomeContainer,
  StyledListContainer,
  StyledNavigation,
} from "./HomePage.styled";

const HomePage = () => {
  return (
    <div>
      {/* <StyledHomeContainer>
        <StyledListContainer>
          <StyledCard>Більше про гру</StyledCard>
          <StyledCard>Формат взаємодії</StyledCard>
          <StyledCard>Як проходить гра?</StyledCard>
        </StyledListContainer>
        <button>Записатись на гру</button>
      </StyledHomeContainer> */}

      <StyledHomeContainer>
        <StyledNavigation>
          <NavLink to="about">Більше про гру</NavLink>
          <NavLink to="format">Формат взаємодії</NavLink>
        </StyledNavigation>
        <button>Записатись на гру</button>
      </StyledHomeContainer>
    </div>
  );
};
export default HomePage;
