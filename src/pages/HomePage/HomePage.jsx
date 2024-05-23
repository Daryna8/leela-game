import LeelaInfo from "../LeelaInfo/LeelaInfo";
import {
  StyledCard,
  StyledHomeContainer,
  StyledListContainer,
} from "./HomePage.styled";

const HomePage = () => {
  return (
    <div>
      <StyledHomeContainer>
        <StyledListContainer>
          <StyledCard>Більше про гру</StyledCard>
          <StyledCard>Формат взаємодії</StyledCard>
          <StyledCard>Як проходить гра?</StyledCard>
        </StyledListContainer>
        <button>Записатись на гру</button>
      </StyledHomeContainer>

      <LeelaInfo />
    </div>
  );
};
export default HomePage;
