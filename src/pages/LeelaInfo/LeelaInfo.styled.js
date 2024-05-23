import styled from "styled-components";

export const StyledInfoContainer = styled.div`
  margin: 25px;

  @media only screen and (min-width: 768px) {
    margin: 45px;
  }

  @media only screen and (min-width: 1440px) {
    margin: 85px;
  }
`;

export const StyledTitle = styled.h2`
  color: white;
  font-size: 28px;
  line-height: 1.3;
`;

export const StyledInfo = styled.p`
  font-size: 16px;

  @media only screen and (min-width: 768px) {
    width: 660px;
  }

  @media only screen and (min-width: 1440px) {
    width: 1200px;
  }
`;
